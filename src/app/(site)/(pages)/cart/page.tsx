import { getCartData } from "@/actions/cart/getCartData";
import CartItem from "./_components/CartItem";
import { ICartItem } from "@/types/cart";

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
              CartData.products.length ? CartData.products.map((item: ICartItem) => (
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

            <div className="flex justify-center my-2">
              <div className="w-full  bg-white p-6 rounded-lg shadow-lg">
                {/* Coupon Section */}
                <div className="flex mb-4  ">
                  <input
                    className="flex-1 w-full  text-center border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="كود الخصم"
                  // value={couponName}
                  // onChange={(e) => onChangeCoupon(e.target.value)}
                  />
                  <button
                    // onClick={handelSubmitCoupon}
                    className="bg-blue-600 cursor-pointer text-white px-4 py-3 rounded-r-lg font-semibold hover:bg-blue-700 transition duration-200"
                  >
                    تطبيق
                  </button>
                </div>

                {/* Price Section */}
                <div className="text-center text-lg font-semibold border-t border-b py-4 mb-4">
                  <span className="text-gray-700">
                    {CartData.totalCartPrice} جنيه
                    {/* {totalCartPriceAfterDiscount >= 1
          ? `${totalCartPriceAfterDiscount} جنيه ... بدلا من ${totalCartPrice} جنيه`
          : `${totalCartPrice} جنيه`} */}
                  </span>
                </div>

                {/* Checkout Button */}
                <button
                  // onClick={handleCheckout}
                  className="w-full cursor-pointer bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-200 mb-3"
                >
                  اتمام الشراء
                </button>

                {/* Clear Cart Button */}
                <button
                  // onClick={handelDeleteCart}
                  className="w-full cursor-pointer bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-200"
                >
                  مسح العربة
                </button>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default Page
