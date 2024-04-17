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
    UNAUTHORIZED
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
    }
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