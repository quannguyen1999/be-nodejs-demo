import express, { Express } from "express";
import { graphqlHTTP } from "express-graphql";
import dotenv from "dotenv";
import path from "path";
import testRouter from "./routers/test.router";
import { graphQLSchema } from "./graphql/schema";
import {resolvers} from "./graphql/resolvers";
import { MessageError, ErrorType, HttpMethodType, HttpMethod } from "./constants/message.constant";
import bodyParser from "body-parser";
import { SHOPIFY_API_KEY, SHOPIFY_NAME, SHOPIFY_PUBLIC_KEY } from "./configs/security.config";

const request = require("request-promise");
const nonce = require("nonce");
const app: Express = express();
const scopes = "write_products, read_products, write_customers, read_customers, read_customer_events, read_apps, read_privacy_settings, write_privacy_settings, write_customer_merge, read_customer_merge, read_customer_data_erasure, write_customer_data_erasure, write_validations, read_validations";
const forwardingAddress = "http://127.0.0.1:8080"; // our ngrok url

//Config env
dotenv.config({path: path.resolve(__dirname, `../properties/.env.${process.env.NODE_ENV?.trim()}`)});

// app.use(logRequest);
app.use(bodyParser.json()); 
app.use('/test', testRouter);
app.get("/shopify", (req: any, res: any) => {
    const shopState = nonce();
    const redirectURL = forwardingAddress + "/shopify/callback";

    // install url for app install
    const installUrl =
      "https://" + SHOPIFY_NAME + "/admin/oauth/authorize?client_id=" + SHOPIFY_API_KEY +"&scope=" +
      scopes +
      "&state=" +
      shopState +
      "&redirect_uri=" +
      redirectURL;
    res.cookie("state", shopState);
    res.redirect(installUrl);
});

app.get("/shopify/callback", (req: any, res: any) => {
  const {  code } = req.query;
    const accessTokenRequestUrl =
      "https://" + SHOPIFY_NAME + "/admin/oauth/access_token";
    const accessTokenPayload = {
      client_id: SHOPIFY_API_KEY,
      client_secret: SHOPIFY_PUBLIC_KEY,
      code,
    };
    request
      .post(accessTokenRequestUrl, { json: accessTokenPayload })

      .then((accessTokenResponse: any) => {
        console.log(accessTokenResponse)
        const accessToken = accessTokenResponse.access_token;
        console.log(accessToken);
      })

      .catch((error: any) => {
        res.status(error.statusCode).send(error.error.error_description);
      });
});

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

