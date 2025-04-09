// import ProductModal from '@/components/Common/ProductModal'
// import Rating from '@/components/Common/Rating'
// import AddtoFavorite from '@/components/Home/BestSeller/AddtoFavorite'
// import { Iproduct } from '@/types/product'
import { IOrder } from '@/types/order'
import OrderCard from './OrderCard'
// import Image from 'next/image'
// import Image from 'next/image'
// import Link from 'next/link'


const OrderItem = ({ cart }: { cart: IOrder }) => {
    // const formatDate = (dateString: string) => {
    //     const options = { year: "numeric", month: "numeric", day: "numeric" }
    //     return new Date(dateString).toLocaleDateString(undefined, options)
    // }
    // const formattedDate = formatDate(createdAt)
    const isDelivered = cart?.isDelivered
    const isPaid = cart?.isPaid
    const paymentMethodType = cart?.paymentMethodType
    const totalOrderPrice = cart?.totalOrderPrice
    // console.log(cart)
    return (
        // <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        //     <Image className='my-auto bg-gray-100 w-full p-12' src={`${process.env.NEXT_PUBLIC_API_URL}/products/${cart.product.imageCover}`} width={250} height={250} alt="product" />
        //     <div className='col-span-2'>
        //         {/* <h3>date of order {formattedDate}</h3> */}
        //         <h3>order Title: {cart.product.title}</h3>
        //         <div className="flex space-x-3 font-medium mx-auto">
        //             <span className='text-lg '>quantity: {cart.count}</span>
        //         </div>
        //         <h4>color: <span className={`w-4 h-4 rounded-full bg-[${cart.color}]`}></span></h4>
        //         <h4>Delivery: {isDelivered ? "delivered" : "not delivered"}</h4>
        //         <h4>Paid: {isPaid ? "paid" : "not paid"}</h4>
        //         <h4>Payment Method: {paymentMethodType === "cash" ? "cash" : "visa"}</h4>
        //     </div>
        // </div>
        // <div className="grid grid-cols-1 sm:grid-cols-3 p-4 gap-0 sm:gap-6  bg-white shadow-lg rounded-2xl">
        //     <Image
        //         className="my-auto bg-gray-100 justify-center col-span-1 w-full p-5 rounded-lg"
        //         src={`${process.env.NEXT_PUBLIC_API_URL}/products/${cart.product.imageCover}`}
        //         width={350}
        //         height={350}
        //         alt="product"
        //     />
        //     <div className="col-span-2 space-y-3 mt-3 sm:mt-0">
        //         <h3 className="text-xl font-semibold text-gray-800">Order Title: {cart.product.title}</h3>

        //         <div className="flex items-center space-x-3 text-lg font-medium">
        //             <span className="text-gray-700">Quantity:</span>
        //             <span className="text-gray-900">{cart.count}</span>
        //         </div>

        //         <h4 className="flex items-center text-gray-700 text-lg">
        //             Color:
        //             <span
        //                 className="w-5 h-5 rounded-full ml-2 border border-gray-300"
        //                 style={{ backgroundColor: cart.color }}
        //             ></span>
        //         </h4>

        //         <h4 className={`text-lg font-medium ${isDelivered ? "text-green-600" : "text-red-500"}`}>
        //             Delivery: {isDelivered ? "Delivered" : "Not Delivered"}
        //         </h4>

        //         <h4 className={`text-lg font-medium ${isPaid ? "text-green-600" : "text-red-500"}`}>
        //             Paid: {isPaid ? "Paid" : "Not Paid"}
        //         </h4>

        //         <h4 className="text-lg font-medium text-gray-700">
        //             Payment Method:
        //             <span className="ml-2 font-semibold text-gray-900">
        //                 {paymentMethodType === "cash" ? "Cash" : "Visa"}
        //             </span>
        //         </h4>
        //     </div>
        // </div>
        <div className='bg-white shadow-lg rounded-2xl p-4'>
            {
                cart.cartItems.map((item) => (
                    <OrderCard key={item._id} cart={item} />
                ))
            }

            {/* <div className="flex justify-between flex-wrap">
                <div className="w-full sm:w-1/2">
                    <div>
                        <span className="inline">التوصيل:</span>
                        <span className="inline mx-2 stat">
                            {isDelivered === true ? "تم التوصيل" : "لم يتم"}
                        </span>
                    </div>
                    <div>
                        <span className="inline">الدفع:</span>
                        <span className="inline mx-2 stat">
                            {isPaid === true ? "تم الدفع" : "لم يتم"}
                        </span>
                    </div>
                    <div>
                        <span className="inline">طريقة الدفع:</span>
                        <span className="inline mx-2 stat">
                            {paymentMethodType === "cash" ? "كاش" : "بطاقة ائتمانية"}
                        </span>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 flex justify-end items-start">
                    <div>
                        <div className="barnd-text">{totalOrderPrice} جنيه</div>
                    </div>
                </div>
            </div> */}

            <div className="flex flex-wrap justify-between gap-4">
  <div className="w-full sm:w-1/2 space-y-2">
    <div className="flex items-center">
      <span className="font-medium">Delivery Status:</span>
      <span className="ml-2 text-sm text-gray-700">
        {isDelivered ? "Delivered" : "Not Delivered"}
      </span>
    </div>
    <div className="flex items-center">
      <span className="font-medium">Payment Status:</span>
      <span className="ml-2 text-sm text-gray-700">
        {isPaid ? "Paid" : "Not Paid"}
      </span>
    </div>
    <div className="flex items-center">
      <span className="font-medium">Payment Method:</span>
      <span className="ml-2 text-sm text-gray-700">
        {paymentMethodType === "cash" ? "Cash" : "Credit Card"}
      </span>
    </div>
  </div>

  <div className="w-full sm:w-1/2 flex justify-end items-start">
    <div>
      <div className="text-xl font-semibold text-primary">{totalOrderPrice} EGP</div>
    </div>
  </div>
</div>


        </div>




    )
}

export default OrderItem
