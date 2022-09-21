// GraphQL API
export const SERVER_GRAPHQL_PORT = process.env.SERVER_GRAPHQL_PORT || 4000;
export const GRAPHQL_SERVER_URL = process.env.SERVER_GRAPHQL_HOST
    ? `${process.env.SERVER_GRAPHQL_HOST}:${SERVER_GRAPHQL_PORT}`
    : `http://localhost:4000`;
