import {
    GraphQLResolveInfo,
    GraphQLScalarType,
    GraphQLScalarTypeConfig,
} from "graphql";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
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
    Date: any;
};

export type Blog = {
    __typename?: "Blog";
    id: Scalars["Int"];
    coverUri?: Maybe<Scalars["String"]>;
    title: Scalars["String"];
    subTitle: Scalars["String"];
    categories?: Maybe<Array<Scalars["String"]>>;
    tags?: Maybe<Array<Scalars["String"]>>;
    createdAt?: Maybe<Scalars["Date"]>;
};

export type Query = {
    __typename?: "Query";
    getBlogs?: Maybe<Array<Blog>>;
};

export type Mutation = {
    __typename?: "Mutation";
    createBlog: Blog;
};

export type MutationCreateBlogArgs = {
    input: CreateBlogInput;
};

export type CreateBlogInput = {
    coverUri?: Maybe<Scalars["String"]>;
    title: Scalars["String"];
    subTitle: Scalars["String"];
    categories?: Maybe<Array<Scalars["String"]>>;
    tags?: Maybe<Array<Scalars["String"]>>;
    contents?: Maybe<Array<ContentInput>>;
};

export type ContentInput = {
    title: Scalars["String"];
    description: Scalars["String"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
    fragment: string;
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
    selectionSet: string;
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
    | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
    | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
    | ResolverFn<TResult, TParent, TContext, TArgs>
    | ResolverWithResolve<TResult, TParent, TContext, TArgs>
    | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

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

export interface SubscriptionSubscriberObject<
    TResult,
    TKey extends string,
    TParent,
    TContext,
    TArgs
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

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
    TResult,
    TKey extends string,
    TParent,
    TContext,
    TArgs
> =
    | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
    | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
    TResult,
    TKey extends string,
    TParent = {},
    TContext = {},
    TArgs = {}
> =
    | ((
          ...args: any[]
      ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
    | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
    parent: TParent,
    context: TContext,
    info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
    obj: T,
    context: TContext,
    info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
    TResult = {},
    TParent = {},
    TContext = {},
    TArgs = {}
> = (
    next: NextResolverFn<TResult>,
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
    Blog: ResolverTypeWrapper<Blog>;
    Int: ResolverTypeWrapper<Scalars["Int"]>;
    String: ResolverTypeWrapper<Scalars["String"]>;
    Query: ResolverTypeWrapper<{}>;
    Mutation: ResolverTypeWrapper<{}>;
    CreateBlogInput: CreateBlogInput;
    ContentInput: ContentInput;
    Date: ResolverTypeWrapper<Scalars["Date"]>;
    Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
    Blog: Blog;
    Int: Scalars["Int"];
    String: Scalars["String"];
    Query: {};
    Mutation: {};
    CreateBlogInput: CreateBlogInput;
    ContentInput: ContentInput;
    Date: Scalars["Date"];
    Boolean: Scalars["Boolean"];
};

export type BlogResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes["Blog"] = ResolversParentTypes["Blog"]
> = {
    id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
    coverUri?: Resolver<
        Maybe<ResolversTypes["String"]>,
        ParentType,
        ContextType
    >;
    title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
    subTitle?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
    categories?: Resolver<
        Maybe<Array<ResolversTypes["String"]>>,
        ParentType,
        ContextType
    >;
    tags?: Resolver<
        Maybe<Array<ResolversTypes["String"]>>,
        ParentType,
        ContextType
    >;
    createdAt?: Resolver<
        Maybe<ResolversTypes["Date"]>,
        ParentType,
        ContextType
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
    getBlogs?: Resolver<
        Maybe<Array<ResolversTypes["Blog"]>>,
        ParentType,
        ContextType
    >;
};

export type MutationResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
    createBlog?: Resolver<
        ResolversTypes["Blog"],
        ParentType,
        ContextType,
        RequireFields<MutationCreateBlogArgs, "input">
    >;
};

export interface DateScalarConfig
    extends GraphQLScalarTypeConfig<ResolversTypes["Date"], any> {
    name: "Date";
}

export type Resolvers<ContextType = any> = {
    Blog?: BlogResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
    Mutation?: MutationResolvers<ContextType>;
    Date?: GraphQLScalarType;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;