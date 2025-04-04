export interface IUserOrder {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

export interface IProductOrder {
  _id: string;
  title: string;
  imageCover: string;
  ratingsQuantity: number;
  id: string;
}

export interface ICartItem {
  product: IProductOrder;
  count: number;
  color: string;
  price: number;
  _id: string;
}

export interface IOrder {
  _id: string;
  user: IUserOrder;
  cartItems: ICartItem[];
  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
  paymentMethodType: string;
  isPaid: boolean;
  paidAt: string;
  isDelivered: boolean;
  createdAt: string;
  updatedAt: string;
  id: number;
}
