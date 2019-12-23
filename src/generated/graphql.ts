type Maybe<T> = T | null;
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Upload: any,
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Query = {
  stock?: Maybe<Stock>,
  stocks: Array<Stock>,
};


export type QueryStockArgs = {
  id?: Maybe<Scalars['Int']>
};

export type Stock = {
  id: Scalars['Int'],
  title: Scalars['String'],
  value: Scalars['Float'],
};

import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type ArrayOrIterable<T> = Array<T> | Iterable<T>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface ISubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => ISubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | ISubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export type CacheControlDirectiveResolver<Result, Parent, Context = any, Args = {   maxAge?: Maybe<Maybe<Scalars['Int']>>,
  scope?: Maybe<Maybe<CacheControlScope>> }> = DirectiveResolverFn<Result, Parent, Context, Args>;

export type QueryResolvers<Context = any, ParentType = Query> = {
  stock?: Resolver<Maybe<Stock>, ParentType, Context, QueryStockArgs>,
  stocks?: Resolver<ArrayOrIterable<Stock>, ParentType, Context>,
};

export type StockResolvers<Context = any, ParentType = Stock> = {
  id?: Resolver<Scalars['Int'], ParentType, Context>,
  title?: Resolver<Scalars['String'], ParentType, Context>,
  value?: Resolver<Scalars['Float'], ParentType, Context>,
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<Scalars['Upload'], any> {
  name: 'Upload'
}

export type IResolvers<Context = any> = {
  Query?: QueryResolvers<Context>,
  Stock?: StockResolvers<Context>,
  Upload?: GraphQLScalarType,
};

export type IDirectiveResolvers<Context = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, Context>,
};
