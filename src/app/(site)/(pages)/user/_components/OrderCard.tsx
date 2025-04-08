"use client"

import { ICartItem } from '@/types/order'
import Image from 'next/image'

const OrderCard = ({ cart }: { cart: ICartItem }) => {
    return (
        // <div className="grid grid-cols-1 sm:grid-cols-3 p-6 gap-6 bg-white shadow-xl rounded-2xl border border-gray-200">
        //     {/* Product Image */}
        //     <div className="flex justify-center items-center bg-gray-100 rounded-lg p-6">
        //         <Image
        //             className="rounded-lg"
        //             src={`${process.env.NEXT_PUBLIC_API_URL}/products/${cart.product.imageCover}`}
        //             width={350}
        //             height={350}
        //             alt="product"
        //         />
        //     </div>

        //     {/* Product Details */}
        //     <div className="col-span-2 space-y-4">
        //         {/* Title */}
        //         <h3 className="text-2xl font-bold text-gray-800">{cart.product.title}</h3>

        //         {/* Quantity */}
        //         <div className="flex items-center space-x-2 text-lg font-medium">
        //             <span className="text-gray-600">Quantity:</span>
        //             <span className="text-gray-900">{cart.count}</span>
        //         </div>

        //         <div className="flex items-center text-lg font-medium text-gray-700">
        //             <span>Price:</span>
        //             <span className="ml-2 text-gray-900">${cart.price}</span>
        //         </div>



        //         {/* Color Indicator */}
        //         <div className="flex items-center text-lg text-gray-700">
        //             <span>Color:</span>
        //             <span
        //                 className="w-6 h-6 rounded-full ml-2 border border-gray-300 shadow-sm"
        //                 style={{ backgroundColor: cart.color }}
        //             ></span>
        //         </div>


        //     </div>
        // </div>

        <div className="mb-4">
            <div className="flex flex-col sm:flex-row gap-4">
                {/* Image Column */}
                <div className="w-24 sm:w-[93px] flex justify-start">
                    <a href={`/products/${cart.product._id}`} className="no-underline">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_API_URL}/products/${cart.product.imageCover}`}
                            alt="img"
                            width={350}
                    height={350}
                            className="w-[93px] h-[120px] object-cover rounded"
                        />
                    </a>
                </div>

                {/* Content Column */}
                <div className="flex-1">
                    <div className="text-base font-semibold text-gray-800">{cart.product.title}</div>

                    <div className="mt-1 flex items-center space-x-2 text-sm text-gray-600">
                        <span>{cart.product.ratingsQuantity || 0}</span>
                        <span className="text-gray-500">({cart.product.ratingsQuantity || 0} تقييم)</span>
                    </div>

                    <div className="mt-4 flex items-center space-x-2 text-sm text-gray-700">
                        <span>الكميه</span>
                        <input
                            type="number"
                            readOnly
                            value={cart.count}
                            className="mx-2 w-12 h-6 border rounded px-1 text-center"
                        />
                        <div
                            className="w-5 h-5 rounded-full border border-gray-300"
                            style={{ backgroundColor: cart.color }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OrderCard
