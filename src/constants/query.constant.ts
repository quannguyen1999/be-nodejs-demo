export const QUERY = `
    type Query {
        #    Account
        listAccount(accountRequestDto: AccountRequestDto!): CommonPageInfoAccount
        exportAccount(accountRequestDto: AccountRequestDto!): ByteArray

        #    Category
        listCategory(categoryRequestDto: CategoryRequestDto!): CommonPageInfoCategory

        #    Product
        listProduct(productRequestDto: ProductRequestDto!): CommonPageInfoProduct

        #    Supplier
        listSupplier(supplierRequestDto: SupplierRequestDto!): CommonPageInfoSupplier

        #    Order
        listOrder(orderRequestDto: OrderRequestDto!): CommonPageInfoOrder
    }
`;