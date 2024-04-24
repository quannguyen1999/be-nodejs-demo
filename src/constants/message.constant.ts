export enum HttpMethod {
    OK,
    CREATED,
    ACCEPTED,
    BAD_REQUEST,
    UNAUTHORIZED,
    SERVER_ERROR
}

export enum MessageError {
    OBJECT_IS_NULL,
    SERVER_ERROR,
    CATEGORY_NAME_IS_NULL,
    UNAUTHORIZED,

    EMAIL_INVALID,
    PASSWORD_INVALID,
    TOKEN_INVALID,
    FIRST_INVALID,
    ID_INVALID,
    CUSTOMER_ACCESS_TOKEN_INVALID,
    FIRST_NAME_INVALID,
    LAST_NAME_INVALID,
    PHONE_INVALID
}

export const ErrorType = {
    [MessageError.OBJECT_IS_NULL]: {
      message: 'Object Is Null',
      statusCode: HttpMethod.BAD_REQUEST
    },
    [MessageError.SERVER_ERROR]: {
      message: 'Server error.',
      statusCode: HttpMethod.SERVER_ERROR
    },
    [MessageError.CATEGORY_NAME_IS_NULL]: {
      message: 'Category name not null.',
      statusCode: HttpMethod.BAD_REQUEST
    },
    [MessageError.UNAUTHORIZED]: {
      message: 'Unauthorization',
      statusCode: HttpMethod.UNAUTHORIZED
    },
    [MessageError.EMAIL_INVALID]: {
      message: 'Email Invalid',
      statusCode: HttpMethod.BAD_REQUEST
    },
    [MessageError.PASSWORD_INVALID]: {
      message: 'Password Invalid',
      statusCode: HttpMethod.BAD_REQUEST
    },
    [MessageError.TOKEN_INVALID]: {
      message: 'Token Invalid',
      statusCode: HttpMethod.BAD_REQUEST
    },
    [MessageError.FIRST_INVALID]: {
      message: 'First Invalid',
      statusCode: HttpMethod.BAD_REQUEST
    },
    [MessageError.ID_INVALID]: {
      message: 'Id Invalid',
      statusCode: HttpMethod.BAD_REQUEST
    },
    [MessageError.CUSTOMER_ACCESS_TOKEN_INVALID]: {
      message: 'Customer access token invalid',
      statusCode: HttpMethod.BAD_REQUEST
    },
    [MessageError.FIRST_NAME_INVALID]: {
      message: 'FirstName invalid',
      statusCode: HttpMethod.BAD_REQUEST
    },
    [MessageError.LAST_NAME_INVALID]: {
      message: 'LastName invalid',
      statusCode: HttpMethod.BAD_REQUEST
    },
    [MessageError.PHONE_INVALID]: {
      message: 'Phone invalid',
      statusCode: HttpMethod.BAD_REQUEST
    },

    
}

export const HttpMethodType = {
    [HttpMethod.OK]: {
      value: 400,
      reasonPhrase: "Bad Gateway",
    },
    [HttpMethod.SERVER_ERROR]: {
      value: 500,
      reasonPhrase: "Intenal Server Error",
    },
    [HttpMethod.BAD_REQUEST]: {
      value: 400,
      reasonPhrase: "Bad Request",
    },
    [HttpMethod.UNAUTHORIZED]: {
      value: 401,
      reasonPhrase: "Unauthorized",
    }
}