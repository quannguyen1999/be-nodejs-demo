import { v4 as uuidv4 } from "uuid";
import { RefreshTokenResponseDto } from "../models/response/refresh-token.response.models";
import dotenv from "dotenv";
import path from "path";
import jwt from "jsonwebtoken";
import { LoginRequestDto } from "../models/request/login.request.models";
import { LoginResponseDto } from "../models/response/login.response.modals";

dotenv.config({path: path.resolve(__dirname, `../properties/.env.${process.env.NODE_ENV?.trim()}`)});

export const login = async (req: any, res: any) => {
    //Generate Refresh Token for user 
    let refreshToken = await createRefreshToken(req, res);
    const token = jwt.sign({id: refreshToken.username}, process.env.TOKEN_SECRET!, {
        expiresIn: process.env.TOKEN_TIME
    });
    const LoginResponseDto: LoginResponseDto = {
        tokenType: "Bearer",
        accessToken: token,
        refreshToken: refreshToken.token,
        expiresIn: Number(process.env.TOKEN_SECRET!)
    }
    return LoginResponseDto;
}


export const createRefreshToken = async (req: any, res: any) => {
    let request: LoginRequestDto = req?.loginRequestDto;
    let expiredAt = new Date();
    expiredAt.setSeconds(
        expiredAt.getSeconds() + Number(process.env.REFRESH_TOKEN_TIME)
    )

    let token = uuidv4();

    const refreshToken: RefreshTokenResponseDto = {
        token: token,
        username: request?.username!,
        expiryDate: expiredAt.getTime()
    };

    return refreshToken;
}

export const verifyExpiration = (RefreshTokenResponseDto: RefreshTokenResponseDto) => {
    return RefreshTokenResponseDto.expiryDate < new Date().getTime();
}