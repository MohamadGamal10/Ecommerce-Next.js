export interface IProductCategory {
    name: string;
  }
  
  export interface IProductBrand {
    name: string;
  }
  
  export interface IProduct {
    _id: string;
    title: string;
    imageCover: string;
    category: IProductCategory;
    brand: IProductBrand;
    ratingsAverage: number;
    id: string;
  }
  
  export interface ICartItem {
    product: IProduct;
    count: number;
    color: string;
    price: number;
    _id: string;
  }
  export interface ICartData {
    totalCartPrice: number;
    totalAfterDiscount: number;
    products: ICartItem[];
  }
  
//   {
//     "status": "success",
//     "numOfCartItems": 8,
//     "data": {
//         "_id": "67ed9c5fe624486ae1d20bc6",
//         "products": [
//             {
//                 "product": {
//                     "_id": "663dead2b841c4711d67dd36",
//                     "title": "new collection",
//                     "imageCover": "products-20cadfe2-3e6b-4446-8814-3a7d77851aa3-1715333842139-cover.jpeg",
//                     "category": {
//                         "name": "Clothes"
//                     },
//                     "brand": {
//                         "name": "Town Team"
//                     },
//                     "ratingsAverage": 5,
//                     "id": "663dead2b841c4711d67dd36"
//                 },
//                 "count": 2,
//                 "color": "#aea1ff",
//                 "price": 1000,
//                 "_id": "67ed9c5fe624486ae1d20bc7"
//             },
//             {
//                 "product": {
//                     "_id": "663bc15450dad709a4cdb1f5",
//                     "title": "best two",
//                     "imageCover": "products-9a162243-a494-4b02-8919-9d611ad188cc-1715289766442-cover.jpeg",
//                     "category": {
//                         "name": "Clothes"
//                     },
//                     "brand": {
//                         "name": "men's club"
//                     },
//                     "id": "663bc15450dad709a4cdb1f5"
//                 },
//                 "count": 2,
//                 "color": "#fe9200",
//                 "price": 500,
//                 "_id": "67ed9ca8e624486ae1d20bde"
//             },
//             {
//                 "product": {
//                     "_id": "663deb0fb841c4711d67dd4a",
//                     "title": "young one",
//                     "imageCover": "products-1e8e3594-52d6-4cd2-b137-85074ae560ef-1715333902672-cover.jpeg",
//                     "category": {
//                         "name": "trendy"
//                     },
//                     "brand": {
//                         "name": "men's club"
//                     },
//                     "id": "663deb0fb841c4711d67dd4a"
//                 },
//                 "count": 1,
//                 "color": "",
//                 "price": 800,
//                 "_id": "67eda621d96e0e6df2298689"
//             },
//             {
//                 "product": {
//                     "_id": "663ded39b841c4711d67dd6e",
//                     "title": "summer kids",
//                     "imageCover": "products-e6a722d6-addf-431a-b9e9-d08678ed3a6d-1715334456827-cover.jpeg",
//                     "category": {
//                         "name": "Clothes"
//                     },
//                     "brand": {
//                         "name": "kidss"
//                     },
//                     "ratingsAverage": 4,
//                     "id": "663ded39b841c4711d67dd6e"
//                 },
//                 "count": 3,
//                 "color": "",
//                 "price": 300,
//                 "_id": "67edab9ad96e0e6df22987b8"
//             },
//             {
//                 "product": {
//                     "_id": "663deddeb841c4711d67ddc7",
//                     "title": "black men",
//                     "imageCover": "products-d05dbd21-0b81-445a-9859-ebad65bec25c-1715334621797-cover.jpeg",
//                     "category": {
//                         "name": "accessories"
//                     },
//                     "brand": {
//                         "name": "Adidas Egypt"
//                     },
//                     "ratingsAverage": 4.7,
//                     "id": "663deddeb841c4711d67ddc7"
//                 },
//                 "count": 5,
//                 "color": "",
//                 "price": 600,
//                 "_id": "67f04677c7cf9f304622ba2a"
//             },
//             {
//                 "product": {
//                     "_id": "663deddeb841c4711d67ddc7",
//                     "title": "black men",
//                     "imageCover": "products-d05dbd21-0b81-445a-9859-ebad65bec25c-1715334621797-cover.jpeg",
//                     "category": {
//                         "name": "accessories"
//                     },
//                     "brand": {
//                         "name": "Adidas Egypt"
//                     },
//                     "ratingsAverage": 4.7,
//                     "id": "663deddeb841c4711d67ddc7"
//                 },
//                 "count": 2,
//                 "color": "#fe9200",
//                 "price": 600,
//                 "_id": "67f094be7f216401d125af9a"
//             },
//             {
//                 "product": {
//                     "_id": "663ded39b841c4711d67dd6e",
//                     "title": "summer kids",
//                     "imageCover": "products-e6a722d6-addf-431a-b9e9-d08678ed3a6d-1715334456827-cover.jpeg",
//                     "category": {
//                         "name": "Clothes"
//                     },
//                     "brand": {
//                         "name": "kidss"
//                     },
//                     "ratingsAverage": 4,
//                     "id": "663ded39b841c4711d67dd6e"
//                 },
//                 "count": 1,
//                 "color": "#aea1ff",
//                 "price": 300,
//                 "_id": "67f11b940b7d032aa06e5fd8"
//             },
//             {
//                 "product": {
//                     "_id": "663ded39b841c4711d67dd6e",
//                     "title": "summer kids",
//                     "imageCover": "products-e6a722d6-addf-431a-b9e9-d08678ed3a6d-1715334456827-cover.jpeg",
//                     "category": {
//                         "name": "Clothes"
//                     },
//                     "brand": {
//                         "name": "kidss"
//                     },
//                     "ratingsAverage": 4,
//                     "id": "663ded39b841c4711d67dd6e"
//                 },
//                 "count": 1,
//                 "color": "#ffffff",
//                 "price": 300,
//                 "_id": "67f11c310b7d032aa06e6108"
//             }
//         ],
//         "cartOwner": "6797e8c5d5bdbdf09dccb53b",
//         "createdAt": "2025-04-02T20:21:51.880Z",
//         "updatedAt": "2025-04-07T05:23:25.901Z",
//         "__v": 7,
//         "totalCartPrice": 9500
//     }
// }