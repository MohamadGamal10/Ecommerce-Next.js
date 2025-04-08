// import ProductItem from "@/components/Common/ProductItem"


// import { getWishlistsAction } from "@/actions/wishlist/getWishlistsAction"
// import { Iproduct } from "@/types/product";
import { getOrdertData } from "@/actions/order/getOrderData";
import OrderItem from "../_components/OrderItem";
import { IOrder } from "@/types/order";

const page = async () => {
  const Order = await getOrdertData();
  // const CartData = Cart?.data || [];
  const numOfCartItems = Order?.results || 0;
  // const createdAt = Cart?.data.createdAt || 0;
  console.log(Order)

  return (
    <>
      <div>
        <h1 className="text-2xl ms-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 uppercase drop-shadow-md">
          Orders
        </h1>
        <p className="text-lg ms-1 mt-2 font-medium  text-gray-500  capitalize drop-shadow-sm">
          Number of orders: {numOfCartItems || 0}
        </p>
        <div className="mt-6">
          {
            Order?.data.length ? Order?.data.map((cart: IOrder) => (
              <div key={cart._id} className="my-4" >
                <OrderItem cart={cart} />
              </div>
            )) : (
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
