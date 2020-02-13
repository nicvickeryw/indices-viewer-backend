import { ApolloServer } from 'apollo-server';
import { environment } from './environment';
import resolvers from './resolvers';
import typeDefs from './type-defs';
import 'reflect-metadata';
import { createConnection, getConnection, getRepository } from 'typeorm';
import config from './config/orm-config';

const server = new ApolloServer({
    context: async ({ req }) => {
        // @TODO: context-centric auth doesn't seem all that helpful for a mostly public site.. implement in resolvers.
        // // simple auth check on every request
        // const auth = req.headers && req.headers.authorization || '';
        // const email = Buffer.from(auth, 'base64').toString('ascii');
        // // if (!isEmail.validate(email)) return { user: null };
        // // find a user by their email
        // const user = await getRepository<User>(User)
        //     .createQueryBuilder("user")
        //     .where("user.email = :email", { email });
        //
        // // optionally block the user
        // // we could also check user roles/permissions here
        // if (!user) throw new Error('you must be logged in');
        //
        // return { user };
    },
    resolvers,
    typeDefs,
    introspection: environment.apollo.introspection,
    playground: environment.apollo.playground,
});

server.listen(environment.port).then(({ url }) => {
    console.log(`Server ready at ${url}. `);

    createConnection(config)
        .then(async connection => {
            console.log('db server running !');
        })
        .catch(error => console.log(error));
});

// @TODO: hot reload is really difficult to set up with the DB server and the apollo server. fix this.
// if (module.hot) {
//     module.hot.accept();
//     module.hot.dispose(() => {
//         getConnection().close();
//         server.stop();
//     });
// }
