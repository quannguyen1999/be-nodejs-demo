// import { v4 as uuidv4 } from "uuid";
// import { RefreshTokenResponseDto } from "../models/response/refresh-token.response.models";
// import dotenv from "dotenv";
// import path from "path";
// import jwt from "jsonwebtoken";
// import { LoginRequestDto } from "../models/request/login.request.models";
// import { LoginResponseDto } from "../models/response/login.response.modals";
// import { RefreshTokenDto } from "../models/request/refresh-token.request.models";
// import { getCurrentUserName } from "../utils/function.util";
// import { TokenRequestDto } from "../models/request/token.request.models";

// dotenv.config({path: path.resolve(__dirname, `../properties/.env.${process.env.NODE_ENV?.trim()}`)});

// export const requestToken = async (req: any, res: any) => {
//     let request: TokenRequestDto = req?.tokenRequestDto;
//     return handlerCommonToken(request);
// }

// export const refreshToken = async (req: any, res: any) => {
//     let request: TokenRequestDto = req?.tokenRequestDto;
//     return handlerCommonToken(getCurrentUserName(request.refreshToken));
// }

// export const handlerCommonToken = async (username: string) => {
//     const token = jwt.sign({username: username}, process.env.TOKEN_SECRET!, {
//         expiresIn: process.env.TOKEN_TIME?.toString()
//     });
//     const refreshToken = jwt.sign({username: username}, process.env.TOKEN_SECRET!, { 
//         expiresIn: process.env.REFRESH_TOKEN_TIME?.toString()
//     });

//     const LoginResponseDto: LoginResponseDto = {
//         tokenType: "Bearer",
//         accessToken: token,
//         refreshToken: refreshToken,
//         expiresIn: process.env.TOKEN_TIME!
//     }
//     return LoginResponseDto;
// }



// export const verifyExpiration = (RefreshTokenResponseDto: RefreshTokenResponseDto) => {
//     return RefreshTokenResponseDto.expiryDate < new Date().getTime();
// }