import { getCartData } from "@/actions/cart/getCartData";
import CartItem from "./_components/CartItem";
import { ICartItem } from "@/types/cart";
import SubmitCart from "./_components/SubmitCart";

const Page = async () => {
  const Cart = await getCartData();
  const CartData = Cart?.data;
  // const totalCartPrice = CartData?.products.reduce((acc: number, item: ICartItem) => {
  //   return acc + (item.price * item.count);
  //   // return acc + (item.price * item.quantity);
  // }, 0);
  return (
    <section className='py-10 bg-gray-100'>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className='md:col-span-3 order-last md:order-first'>
            {
              CartData && CartData.products.length ? CartData.products.map((item: ICartItem) => (
                <div key={item._id}>
                  <CartItem item={item} />
                </div>
              )) : (
                <div className="mt-6 text-start text-gray-500 text-lg font-semibold">
                  No items found in the cart.
                </div>
              )}
          </div>
          <div className='md:col-span-1'>

          
<SubmitCart cartData={CartData} />

          </div>
        </div>
      </div>
    </section>
  )
}

export default Page
