import { PASSWORD_SECRET_KEY, REFRESH_SECRET_JEY, TOKEN_SECRET_JEY } from "../configs/security.config";

const jwt = require('jsonwebtoken')
const crypto = require('crypto');
const iv = crypto.randomBytes(16); 
const secretKey = crypto.createHash('sha256').update(PASSWORD_SECRET_KEY).digest('hex').slice(0, 32);

export const generateToken = (tokenCustomerShopify: string, tokenLife: string, tokenSecret: string) => {
    return new Promise((resolve, reject) => {
      const userData = {
        tokenEncrypt: tokenCustomerShopify
      }
      jwt.sign(
        { data: userData },
        tokenSecret,
        {
          algorithm: 'HS256',
          expiresIn: tokenLife
        },
        (error: any, token: any) => {
          if (error) {
            return reject(error)
          }
          resolve(token)
        })
    })
}

export const verifyToken = (token: string, secretKey: string) => {
    return new Promise((resolve, reject) => {
      jwt.verify(token, secretKey, (error: any, decoded: any) => {
        if (error) {
          return reject(error);
        }
        resolve(decoded)
      })
    })
}

export const getTokenShopifyFromToken = async (token: string) =>{
    const dataToken: any = await verifyToken(token, TOKEN_SECRET_JEY);
    return decryptPassword( dataToken.data.tokenEncrypt);
}


export const getTokenShopifyFromRefreshToken = async (token: string) =>{
    const dataToken: any = await verifyToken(token, REFRESH_SECRET_JEY);
    return decryptPassword( dataToken.data.tokenEncrypt);
}

//TODO need fix => bd348c196c60e612534f81f78c87427b =>  �e��Pj♦�▲Lf☻♥e�534f81f78c87427b
export const encryptPassword = (password: string) => {
    const cipher = crypto.createCipheriv('aes-256-cbc', secretKey, iv);
    let encryptedPassword: string = cipher.update(password, 'utf8', 'hex');
    encryptedPassword += cipher.final('hex');
    return encryptedPassword;
}


export const decryptPassword = (encryptedPassword: string) => {
    const decipher = crypto.createDecipheriv('aes-256-cbc', secretKey, iv);
    decipher.setAutoPadding(true); // Enable auto-padding
    let decryptedPassword = decipher.update(encryptedPassword, 'hex', 'utf8');
    decryptedPassword += decipher.final('utf8');
    return decryptedPassword;
}
