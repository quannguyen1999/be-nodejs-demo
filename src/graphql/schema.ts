import { buildSchema } from 'graphql';

export const graphQLSchema = buildSchema(`
scalar Date
scalar ByteArray
scalar Double

input Map {
    field: String
    value: String
}

type Query {
    #    Account
    listAccount(accountRequestDto: AccountRequestDto!): CommonPageInfoAccount
    exportAccount(accountRequestDto: AccountRequestDto!): ByteArray

    #    Category
    listCategory: CommonPageInfoCategory

    #    Product
    listProduct(productRequestDto: ProductRequestDto!): CommonPageInfoProduct

    #    Supplier
    listSupplier(supplierRequestDto: SupplierRequestDto!): CommonPageInfoSupplier

    #    Order
    listOrder(orderRequestDto: OrderRequestDto!): CommonPageInfoOrder
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
`);

exports.module = {
    graphQLSchema
}