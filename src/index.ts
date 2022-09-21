import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server";
import { GraphQLError, GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import typeDefs from "./graphql/schemas";
import resolvers from "./graphql/resolvers";
import { SERVER_GRAPHQL_PORT } from "./config";
import { Context } from "./types";

const prisma = new PrismaClient();

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

const server = new ApolloServer({
    schema,
    playground: true,

    context: ({ req, connection }): Context => {
        return {
            prisma,
        };
    },

    formatError: (error: GraphQLError) => {
        console.error(`❗ GraphQLError : ${error.message}`);
        return error;
    },
});

server.listen({ port: SERVER_GRAPHQL_PORT }).then(({ url }) => {
    console.log(`🚀  Graphql server ready at ${url}`);
});
