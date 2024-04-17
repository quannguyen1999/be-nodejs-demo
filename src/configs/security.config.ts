import { MessageError } from "../constants/message.constant";
import { getCurrentUserName, throwError } from "../utils/function.util";

export const authen = (req: any, res: any, next: any) => {
    console.log(req.body)
  if(req.url.startsWith(`/graphql`)){
    next();
    return;
  }
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    throwError(MessageError.UNAUTHORIZED);
  }
  const token = authHeader.split(' ')[1];
  req.username = getCurrentUserName(token);
  next();
};
