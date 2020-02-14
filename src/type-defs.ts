import { gql } from 'apollo-server';

export default gql`
    type Stock {
        id: Int!
        title: String!
        value: Float!
    }

    type User {
        id: Int!
        email: String!
        password: String!
        firstName: String!
        lastName: String!
    }

    type Query {
        stock(id: Int): Stock
        stocks: [Stock!]!
        user(id: Int): User
        users: [User!]!
    }

    type Mutation {
        login(email: String!, password: String!): String!
    }
`;
