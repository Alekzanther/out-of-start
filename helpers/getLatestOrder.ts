import { Order } from '../apollo-generated/client-graphql';

export const getLatestOrder = (orders: Order[]) => {
  return orders.slice().sort((a, b) => {
    return b.endDate - a.endDate;
  });
};
