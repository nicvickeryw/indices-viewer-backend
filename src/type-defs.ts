import { gql } from 'apollo-server';

export default gql`    
    type Stock {
        id: Int!
        title: String!
        value: Float!
    }
    
    type Query {
        stock(id: Int): Stock
        stocks: [Stock!]!
    }
`;
