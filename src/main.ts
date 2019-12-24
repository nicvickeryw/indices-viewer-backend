import { ApolloServer } from 'apollo-server';
import { environment } from './environment';
import resolvers from './resolvers';
import typeDefs from './type-defs';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import config from './config/orm-config';

const server = new ApolloServer({
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

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.stop());
}
