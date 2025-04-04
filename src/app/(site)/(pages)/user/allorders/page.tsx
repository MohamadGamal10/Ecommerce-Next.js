// import ProductItem from "@/components/Common/ProductItem"


// import { getWishlistsAction } from "@/actions/wishlist/getWishlistsAction"
// import { Iproduct } from "@/types/product";
import { getOrdertData } from "@/actions/order/getOrderData";
import OrderItem from "../_components/OrderItem";
import { ICartItem } from "@/types/order";

const page = async () => {
  const Order = await getOrdertData();
  // const CartData = Cart?.data || [];
  const numOfCartItems = Order?.data[0].cartItems.length || 0;
  // const createdAt = Cart?.data.createdAt || 0;
  const isDelivered = Order?.data.isDelivered;
  const isPaid = Order?.data.isPaid;
  const paymentMethodType = Order?.data.paymentMethodType;
console.log(Order)

  return (
    <>
      <div>
        <h1 className="text-2xl ms-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 uppercase drop-shadow-md">
          Orders
        </h1>
        <p className="text-lg ms-1 mt-2 font-medium  text-gray-500  capitalize drop-shadow-sm">
          Number of orders: {numOfCartItems} 
        </p>
        <div className="mt-6">
          {
            Order?.data.length ? Order?.data[0].cartItems.map((cart: ICartItem ) => (
              <div key={cart._id} >
                <OrderItem cart={cart} isDelivered={isDelivered} isPaid={isPaid} paymentMethodType={paymentMethodType}  />
              </div>
            )): (
              <div className="mt-6 text-start text-gray-500 text-lg font-semibold">
                No orders found.
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}



export default page
