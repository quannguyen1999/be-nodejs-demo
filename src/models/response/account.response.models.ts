
export interface AccountResponseDto {
    id?: string
    username?: string
    birthday?: string
    gender?: boolean
    email?: string
    avatar?: string
    isActive?: string
    mfaEnabled?: boolean
    mfaRegistered?: boolean
    created?: Date
    updated?: Date
}   

export const TYPE_ACCOUNT_RESPONSE_DTO = `
    type AccountResponseDto {
        id: String
        username: String
        birthday: String
        gender: Boolean
        email: String
        avatar: String
        isActive: String
        created: Date
        updated: Date
        mfaEnabled: Boolean
        mfaRegistered: Boolean
    }

    type CommonPageInfoAccount {
        total: Int!
        page: Int!
        size: Int!
        data: [AccountResponseDto]
    }
`;