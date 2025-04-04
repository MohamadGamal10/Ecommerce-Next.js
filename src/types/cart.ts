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
  