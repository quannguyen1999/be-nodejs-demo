export const INPUT = `
    input Map {
        field: String
        value: String
    }

    #Account
    input AccountRequestDto {
        id: String
        username: String
        birthday: Date
        gender: Boolean
        email: String
        avatar: String
        page: Int!
        size: Int!

        #Search
        listFields: [String]
        listSorted: [Map]
        listStringSorted: String
        fromBirthday: String
        toBirthday: String
        createFromDate: String
        createToDate: String
        isActive: Boolean
        mfaEnabled: Boolean
        mfaRegistered: Boolean
    }

    #Category
    input CategoryRequestDto {
        id: String
        name: String
        image: String
        page: Int!
        size: Int!

        #Search
        listFields: [String]
        listSorted: [Map]
        createFromDate: String
        createToDate: String
    }

    #Order
    input OrderRequestDto {
        id: String
        orderDate: String
        shipCity: String
        shippedDate: String
        shipRegion: String
        username: String

        orderFromDate: String
        orderToDate: String
        shippedFromDate: String
        shippedToDate: String

        #Search
        page: Int!
        size: Int!
        listFields: [String]
        listSorted: [Map]
        createFromDate: String
        createToDate: String
    }

    #Product
    input ProductRequestDto {
        id: String
        name: String
        image: Date
        quantity: Double
        price: Double
        discount: Double
        page: Int!
        size: Int!
        isGetTopProduct: Boolean
        isSuggestProduct: Boolean

        #Search
        listFields: [String]
        listSorted: [Map]
        fromBirthday: String
        toBirthday: String
        createFromDate: String
        createToDate: String
        isActive: Boolean
    }

    #Supplier
    input SupplierRequestDto {
        id: String
        address: String
        phone: String
        companyName: String

        #Search
        listFields: [String]
        listSorted: [Map]
        createFromDate: String
        createToDate: String
    }
`