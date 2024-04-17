export interface CategoryResponseDto {
    id?: string,
    name?: string,
    image?: string,
    created?: Date,
    updated?: Date
}

export const TYPE_CATEGORY_RESPONE_DTO = `
    type CategoryResponseDto {
        id: String
        name: String
        image: String
        created: Date
        updated: Date
    }

    type CommonPageInfoCategory {
        total: Int!
        page: Int!
        size: Int!
        data: [CategoryResponseDto]
    }
`
