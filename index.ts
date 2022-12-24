import express, { Express, Request, Response } from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
import resolvers from './features';

const app: Express = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(4000);
