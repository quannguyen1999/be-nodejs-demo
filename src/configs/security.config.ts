// import { MessageError } from "../constants/message.constant";
// import { getCurrentUserName, throwError } from "../utils/function.util";

// export const authen = (req: any, res: any, next: any) => {
//     console.log(req.body)
//   if(req.url.startsWith(`/graphql`)){
//     next();
//     return;
//   }
//   const authHeader = req.get('Authorization');
//   if (!authHeader) {
//     throwError(MessageError.UNAUTHORIZED);
//   }
//   const token = authHeader.split(' ')[1];
//   req.username = getCurrentUserName(token);
//   next();
// };
import dotenv from "dotenv";
import path from "path";


//import this to make env work
dotenv.config({path: path.resolve(__dirname, `../../properties/.env.${process.env.NODE_ENV?.trim()}`)});


export const PASSWORD_SECRET_KEY =  process.env.PASSWORD_SECRET_KEY?.trim()!;
export const TOKEN_SECRET_JEY =  process.env.TOKEN_SECRET_JEY?.trim()!;
export const TOKEN_LIFE =  process.env.TOKEN_LIFE?.trim()!;
export const REFRESH_SECRET_JEY =  process.env.REFRESH_SECRET_JEY?.trim()!;
export const REFRESH_TOKEN_LIFE =  process.env.REFRESH_TOKEN_LIFE?.trim()!;




