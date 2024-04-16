export const TYPE = `
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

    type OrderResponseDto {
        id: String
        orderDate: String
        shipCity: String
        shippedDate: String
        shipRegion: String
        username: String
        created: Date
        updated: Date
    }

    type CommonPageInfoOrder {
        total: Int!
        page: Int!
        size: Int!
        data: [OrderResponseDto]
    }



    type ProductResponseDto {
        id: String
        name: String
        image: String
        quantity: Double!
        price: Double!
        discount: Double!
        description: String
        created: Date
        updated: Date
    }

    type CommonPageInfoProduct {
        total: Int!
        page: Int!
        size: Int!
        data: [ProductResponseDto]
    }

    type SupplierResponseDto {
        id: String
        address: String
        phone: String
        companyName: String
        created: Date
        updated: Date
    }

    type CommonPageInfoSupplier {
        total: Int!
        page: Int!
        size: Int!
        data: [SupplierResponseDto]
    }
`;