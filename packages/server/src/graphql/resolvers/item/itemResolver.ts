import { isValidObjectId } from 'mongoose';
import { Item, Resolvers } from '../../../generated/graphql';
import { scrapeProductUrl } from '../../../scraper';
import { Item as ItemModel } from '../../../models/Item/item';

export const itemResolver: Resolvers = {
  Query: {
    GetItems: async (): Promise<Item[]> => {
      const items: Item[] = await ItemModel.find();
      if (items.length === 0) {
        throw new Error('No items found');
      }
      return items;
    },
    GetFavoriteItems: async (): Promise<Item[]> => {
      const items: Item[] = await ItemModel.find({
        isFavorite: true,
      });
      if (items.length === 0) {
        throw new Error('No favorite items found');
      }
      return items;
    },
    GetItem: async (_, { id }): Promise<Item> => {
      const isIdValid = isValidObjectId(id);

      if (!isIdValid) {
        throw new Error(
          'Supplied ID is not a valid MongoDb ObjectId',
        );
      }

      const item = await ItemModel.findById(id);
      if (!item) {
        throw new Error('No item found with supplied ID.');
      }
      return item;
    },
  },
  Mutation: {
    CreateItem: async (_, { newItem }): Promise<Item> => {
      try {
        const productImageUrl = await scrapeProductUrl(
          newItem.productUrl,
        );

        if (!productImageUrl) {
          throw new Error(
            'Unable to fetch productImage from supplied product URL',
          );
        }
        const item = await ItemModel.create({
          name: newItem?.name,
          productUrl: newItem?.productUrl,
          productImageUrl,
        });

        return item;
      } catch (error) {
        throw new Error(`Unable to create a new Item: ${error}`);
      }
    },
    SetFavorite: async (_, { id, value }): Promise<Item> => {
      try {
        const result = await ItemModel.findOneAndUpdate(
          {
            _id: id,
          },
          {
            $set: { isFavorite: !value },
          },
          { new: true },
        );
        if (!result) {
          throw new Error('SetFavorite failed: no item found');
        }
        return result;
      } catch (error) {
        throw new Error(`Unable to create a new Item: ${error}`);
      }
    },
  },
};
