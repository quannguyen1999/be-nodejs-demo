import { Router } from "express";
import { getListProduct } from "../repositories/product.repository";

const router = Router();

// const client = createStorefrontApiClient({
//   storeDomain: '',
//   apiVersion: '2024-04',
// //   publicAccessToken: '',
//   privateAccessToken: ''
// });
const createAccessToken = `
   mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
      },
      userErrors {
        field
        message
      }
    }
  }
`;


const createCustomer = `
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        id,
        email
      },
      userErrors {
        field
        message
      }
    }
  }
`;


router.get('/',async  (req, res) => {
    // const data = await client.request(createCustomer, {
    //     variables: {
    //         input: {
    //             email: 'nguyendanganhquan69@gmail.com',
    //             password: 'chichkhongem'
    //         }
    //     },
    //   })
    //   console.log(data)
    //   console.log(data.errors?.graphQLErrors)
    // console.log(data.data?.customerAccessTokenCreate.userErrors) 
    
});

export default router;