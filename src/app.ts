import express, { Express } from "express";
import { graphqlHTTP } from "express-graphql";
import dotenv from "dotenv";
import path from "path";
import accounRouter from "./routers/test.router";
import { graphQLSchema } from "./graphql/schema";
import {resolvers} from "./graphql/resolvers";
import { MessageError, ErrorType, HttpMethodType, HttpMethod } from "./constants/message.constant";
import bodyParser from "body-parser";

const app: Express = express();

//Config env
dotenv.config({path: path.resolve(__dirname, `../properties/.env.${process.env.NODE_ENV?.trim()}`)});

// app.use(logRequest);
app.use(bodyParser.json()); 
app.use('/test', accounRouter);

//Add Security
// app.use(authen);

// Middleware to parse JSON bodies
app.use(express.json());

// Graphql
app.use(
    '/graphql',
    graphqlHTTP({
        schema: graphQLSchema,
        rootValue: resolvers,
        graphiql: true,
        customFormatErrorFn(err) {
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

//Disable Cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

//Start app
app.listen(process.env.PORT || 8080, () => {
  console.log(`[server]: Server is running at http://localhost:${process.env.PORT ?? 8080}`);
});

