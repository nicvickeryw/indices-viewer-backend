import { getRepository } from 'typeorm';
import { Stock } from './entities/stock';
import { User } from './entities/user';

interface LoginParams {
    email: string;
    password: string;
}

// @TODO: add types for args
export default {
    Query: {
        stock: async (parent: null, args: { id: number }) =>
            await getRepository<Stock>(Stock).findOne(args.id),
        stocks: async (parent: null) =>
            await getRepository<Stock>(Stock).find(),
        user: async (parent: null, args: { id: number }) =>
            await getRepository<User>(User).findOne(args.id),
        users: async (parent: null) => await getRepository<User>(User).find(),
    },
    Mutation: {
        login: async (_: any, { email, password }: any) => {
            console.log(email);
            console.log(password);

            // @TODO: need a password too, hash it before save (md5?)
            const user = await getRepository<User>(User)
                .createQueryBuilder('user')
                .where('user.email = :email', { email })
                .getOne();

            console.log('found user: ', user);

            if (user) return Buffer.from(email).toString('base64');

            return 'Not logged in.';
        },
    },
};
