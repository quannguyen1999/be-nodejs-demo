import express, { Express } from "express";
import { graphqlHTTP } from "express-graphql";
import dotenv from "dotenv";
import path from "path";
import categoryRouter from "./routers/category.router";
import { graphQLSchema } from "./graphql/schema";
import {resolvers} from "./graphql/resolvers";
import { MessageError, ErrorType, HttpMethodType, HttpMethod } from "./constants/message.constant";

const app: Express = express();

//Config env
dotenv.config({path: path.resolve(__dirname, `../properties/.env.${process.env.NODE_ENV?.trim()}`)});

//Demo rest
app.use('/category', categoryRouter);

//Demo graphql
app.use(
    '/graphql',
    graphqlHTTP({
        schema: graphQLSchema,
        rootValue: resolvers,
        graphiql: true,
        customFormatErrorFn(err) {
          console.log(err.message)
          const messageError: MessageError = MessageError[err.message as keyof typeof MessageError];
          if(messageError == undefined){
            return { message: err.message, status: HttpMethod.SERVER_ERROR, data: "" };
          }
          const errorType = ErrorType[messageError];
          const httpMethod = HttpMethodType[errorType.statusCode as keyof typeof HttpMethodType];
          return { message: errorType.message, status: httpMethod.value, data: "" };
        }
    })
)

//Start app
app.listen(process.env.PORT || 8080, () => {
  console.log(`[server]: Server is running at http://localhost:${process.env.PORT ?? 8080}`);
});

