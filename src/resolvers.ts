const STOCK_DATA = [
    {
        id: 1,
        title: 'Stock 1',
        value: 3100,
    },
    {
        id: 2,
        title: 'Stock 2',
        value: 200,
    }
];

// @TODO: add types for args

export default {
    Query: {
        stock: (parent, args, context, info) => {
            return STOCK_DATA[args.id];
        },
        stocks: () => STOCK_DATA,
    },
};
