import { getRepository } from 'typeorm';
import { Stock } from './entities/stock';

// @TODO: add types for args
export default {
    Query: {
        stock: async (parent: null, args: { id: number }) =>
            await getRepository<Stock>(Stock).findOne(args.id),
        stocks: async (parent: null) =>
            await getRepository<Stock>(Stock).find(),
    },
};
