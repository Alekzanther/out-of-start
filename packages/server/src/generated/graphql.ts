import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AdditionalEntityFields = {
  path?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type BaseOrder = {
  __typename?: 'BaseOrder';
  _id: Scalars['String'];
  active: Scalars['Boolean'];
  items?: Maybe<Array<Maybe<Item>>>;
};

export type ErrorResponse = {
  __typename?: 'ErrorResponse';
  code?: Maybe<Scalars['String']>;
  httpStatusCode?: Maybe<Scalars['Int']>;
  message: Scalars['String'];
};

export type Item = {
  __typename?: 'Item';
  _id: Scalars['String'];
  name: Scalars['String'];
  productImageUrl?: Maybe<Scalars['String']>;
  productUrl: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateItem?: Maybe<Response>;
  CreateOrder?: Maybe<Response>;
  SetBaseOrder?: Maybe<Response>;
};

export type MutationCreateItemArgs = {
  newItem: NewItem;
};

export type MutationCreateOrderArgs = {
  newOrder: NewOrder;
};

export type MutationSetBaseOrderArgs = {
  newBaseOrder: NewBaseOrder;
};

export type NewBaseOrder = {
  active: Scalars['Boolean'];
  items: Array<Maybe<Scalars['String']>>;
};

export type NewItem = {
  name: Scalars['String'];
  productUrl: Scalars['String'];
};

export type NewOrder = {
  items: Array<Maybe<Scalars['String']>>;
};

export type Order = {
  __typename?: 'Order';
  _id: Scalars['String'];
  creationDate?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<Item>>>;
  processed?: Maybe<Scalars['Boolean']>;
  status: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  GetBaseOrder?: Maybe<Response>;
  GetCurrentOrder?: Maybe<Response>;
  GetItem?: Maybe<Response>;
  GetItems?: Maybe<Array<Maybe<Item>>>;
  GetOrder?: Maybe<Response>;
  GetOrders?: Maybe<Array<Maybe<Response>>>;
};

export type QueryGetCurrentOrderArgs = {
  id: Scalars['ID'];
};

export type QueryGetItemArgs = {
  id: Scalars['ID'];
};

export type QueryGetOrderArgs = {
  id: Scalars['ID'];
};

export type Response = BaseOrder | ErrorResponse | Item | Order;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<
  TResult,
  TParent,
  TContext,
  TArgs,
> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> =
  (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
  ) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<
  TResult,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<
      TResult,
      TKey,
      TParent,
      TContext,
      TArgs
    >
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AdditionalEntityFields: AdditionalEntityFields;
  String: ResolverTypeWrapper<Scalars['String']>;
  BaseOrder: ResolverTypeWrapper<BaseOrder>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ErrorResponse: ResolverTypeWrapper<ErrorResponse>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Item: ResolverTypeWrapper<Item>;
  Mutation: ResolverTypeWrapper<{}>;
  NewBaseOrder: NewBaseOrder;
  NewItem: NewItem;
  NewOrder: NewOrder;
  Order: ResolverTypeWrapper<Order>;
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Response:
    | ResolversTypes['BaseOrder']
    | ResolversTypes['ErrorResponse']
    | ResolversTypes['Item']
    | ResolversTypes['Order'];
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AdditionalEntityFields: AdditionalEntityFields;
  String: Scalars['String'];
  BaseOrder: BaseOrder;
  Boolean: Scalars['Boolean'];
  ErrorResponse: ErrorResponse;
  Int: Scalars['Int'];
  Item: Item;
  Mutation: {};
  NewBaseOrder: NewBaseOrder;
  NewItem: NewItem;
  NewOrder: NewOrder;
  Order: Order;
  Query: {};
  ID: Scalars['ID'];
  Response:
    | ResolversParentTypes['BaseOrder']
    | ResolversParentTypes['ErrorResponse']
    | ResolversParentTypes['Item']
    | ResolversParentTypes['Order'];
};

export type UnionDirectiveArgs = {
  discriminatorField?: Maybe<Scalars['String']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type UnionDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = UnionDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveArgs = {
  discriminatorField: Scalars['String'];
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type AbstractEntityDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = AbstractEntityDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = {
  embedded?: Maybe<Scalars['Boolean']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type EntityDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = EntityDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']>;
};

export type ColumnDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = ColumnDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = {};

export type IdDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = IdDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']>;
};

export type LinkDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = LinkDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveArgs = {};

export type EmbeddedDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = EmbeddedDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveArgs = {
  path: Scalars['String'];
};

export type MapDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = MapDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type BaseOrderResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BaseOrder'] = ResolversParentTypes['BaseOrder'],
> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  active?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >;
  items?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Item']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ErrorResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ErrorResponse'] = ResolversParentTypes['ErrorResponse'],
> = {
  code?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  httpStatusCode?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  message?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item'],
> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productImageUrl?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  productUrl?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  CreateItem?: Resolver<
    Maybe<ResolversTypes['Response']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateItemArgs, 'newItem'>
  >;
  CreateOrder?: Resolver<
    Maybe<ResolversTypes['Response']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateOrderArgs, 'newOrder'>
  >;
  SetBaseOrder?: Resolver<
    Maybe<ResolversTypes['Response']>,
    ParentType,
    ContextType,
    RequireFields<MutationSetBaseOrderArgs, 'newBaseOrder'>
  >;
};

export type OrderResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order'],
> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creationDate?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  endDate?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  items?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Item']>>>,
    ParentType,
    ContextType
  >;
  processed?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  status?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  GetBaseOrder?: Resolver<
    Maybe<ResolversTypes['Response']>,
    ParentType,
    ContextType
  >;
  GetCurrentOrder?: Resolver<
    Maybe<ResolversTypes['Response']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetCurrentOrderArgs, 'id'>
  >;
  GetItem?: Resolver<
    Maybe<ResolversTypes['Response']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetItemArgs, 'id'>
  >;
  GetItems?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Item']>>>,
    ParentType,
    ContextType
  >;
  GetOrder?: Resolver<
    Maybe<ResolversTypes['Response']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetOrderArgs, 'id'>
  >;
  GetOrders?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Response']>>>,
    ParentType,
    ContextType
  >;
};

export type ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Response'] = ResolversParentTypes['Response'],
> = {
  __resolveType: TypeResolveFn<
    'BaseOrder' | 'ErrorResponse' | 'Item' | 'Order',
    ParentType,
    ContextType
  >;
};

export type Resolvers<ContextType = any> = {
  BaseOrder?: BaseOrderResolvers<ContextType>;
  ErrorResponse?: ErrorResponseResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Response?: ResponseResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  union?: UnionDirectiveResolver<any, any, ContextType>;
  abstractEntity?: AbstractEntityDirectiveResolver<
    any,
    any,
    ContextType
  >;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  column?: ColumnDirectiveResolver<any, any, ContextType>;
  id?: IdDirectiveResolver<any, any, ContextType>;
  link?: LinkDirectiveResolver<any, any, ContextType>;
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>;
  map?: MapDirectiveResolver<any, any, ContextType>;
};

import { ObjectId } from 'mongodb';
export type BaseOrderDbObject = {
  _id: ObjectId;
  active: boolean;
  items?: Maybe<Array<Maybe<ItemDbObject['_id']>>>;
};

export type ItemDbObject = {
  _id: ObjectId;
  name: string;
  productImageUrl?: Maybe<string>;
  productUrl: string;
};

export type OrderDbObject = {
  _id: ObjectId;
  creationDate?: Maybe<number>;
  endDate?: Maybe<number>;
  items?: Maybe<Array<Maybe<ItemDbObject['_id']>>>;
  status: string;
};
