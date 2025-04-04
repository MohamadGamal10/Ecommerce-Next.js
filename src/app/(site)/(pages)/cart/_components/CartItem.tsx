import { ICartItem } from '@/types/cart'
import { Trash2Icon } from 'lucide-react'
import Image from 'next/image'

const CartItem = ({ item }: {item: ICartItem}) => {
    console.log(item)
    return (
        // <div className="w-full my-2 px-2 flex items-start">
        //     <Image
        //         width="160"
        //         height="197"
        //         className='ms-3'
        //         src={item.product && `${process.env.NEXT_PUBLIC_API_URL}/products/${item.product.imageCover}`}
        //         alt="Product"
        //     />
        //     <div className="w-full">
        //         <div className="flex justify-between">
        //             <span className="pt-2 text-gray-600">{item.product.category.name}</span>
        //             <div 
        //             // onClick={handleShow}
        //              className="flex items-center pt-2 cursor-pointer">
        //                 <Trash className="text-gray-600" size={20} />
        //                 <span className="text-gray-600 ml-2">ازاله</span>
        //             </div>
        //         </div>
        //         <div className="mt-2 flex items-center">
        //             <span className="pt-2 text-lg font-semibold">{item.product.title}</span>
        //             <span className="pt-2 text-yellow-500 ml-2">{item.product.ratingsAverage || 0}</span>
        //         </div>
        //         <div className="mt-1">
        //             <span className="text-gray-600">الماركة :</span>
        //             <span className="ml-1 font-semibold">{item.product.brand.name || ""}</span>
        //         </div>
        //         <div className="mt-1 flex">
        //             <div
        //                 className="w-6 h-6 border"
        //                 style={{ backgroundColor: item.color ? item.color : "black" }}
        //             ></div>
        //         </div>
        //         <div className="flex justify-between mt-2 items-center">
        //             <div className="flex items-center">
        //                 <span className="text-gray-600">الكميه</span>
        //                 <input
        //                     className="mx-2 text-center border rounded w-16 h-10"
        //                     type="number"
        //                     // value={itemCount}
        //                     // onChange={onChangeCount}
        //                 />
        //                 <button
        //                 //  onClick={handeleUpdateCart}
        //                   className='bg-black text-white px-4 py-2 rounded'>تطبيق</button>
        //             </div>
        //             <span className="font-semibold">{item.price || ""} جنية</span>
        //         </div>
        //     </div>
        // </div>
//         <div className="w-full my-2 px-4 py-4 flex items-start bg-white rounded-lg shadow-md">
//   <Image
//     width="160"
//     height="197"
//     className="rounded-lg"
//     src={item.product && `${process.env.NEXT_PUBLIC_API_URL}/products/${item.product.imageCover}`}
//     alt="Product"
//   />
//   <div className="w-full ml-4">
//     <div className="flex justify-between items-center">
//       <span className="text-gray-500 text-sm">{item.product.category.name}</span>
//       <div className="flex items-center text-gray-600 cursor-pointer">
//         <Trash size={20} />
//         <span className="ml-2">ازاله</span>
//       </div>
//     </div>
//     <div className="mt-2 flex items-center gap-2">
//       <span className="text-lg font-semibold">{item.product.title}</span>
//       <span className="text-yellow-500">{item.product.ratingsAverage || 0}</span>
//     </div>
//     <div className="mt-1">
//       <span className="text-gray-500">الماركة :</span>
//       <span className="ml-1 font-semibold">{item.product.brand.name || ""}</span>
//     </div>
//     <div className="mt-2 flex">
//       <div className="w-6 h-6 border rounded" style={{ backgroundColor: item.color || "black" }}></div>
//     </div>
//     <div className="flex justify-between mt-3 items-center">
//       <div className="flex items-center gap-3">
//         <span className="text-gray-500">الكميه</span>
//         <input
//           className="text-center border rounded-lg w-16 h-10 focus:ring-2 focus:ring-gray-300 outline-none"
//           type="number"
//         />
//         <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
//           تطبيق
//         </button>
//       </div>
//       <span className="font-semibold text-lg">{item.price || ""} جنية</span>
//     </div>
//   </div>
// </div>
<div className="w-full my-4 px-4 py-4 flex flex-col items-center bg-white rounded-lg shadow-md sm:flex-row sm:items-start">
  <Image
    width="160"
    height="197"
    className="rounded-lg"
    src={item.product && `${process.env.NEXT_PUBLIC_API_URL}/products/${item.product.imageCover}`}
    alt="Product"
  />
  <div className="w-full mt-4 sm:mt-0 sm:ml-4  ">
    <div className="flex justify-between items-center">
      <span className="text-gray-500 text-sm">{item.product.category.name}</span>
      <div className="flex items-center text-white p-1 rounded-md bg-red-600 cursor-pointer">
        <Trash2Icon size={20} />
      </div>
    </div>
    <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-2">
      <span className="text-lg font-semibold">{item.product.title}</span>
      <span className="text-yellow-500">{item.product.ratingsAverage || 0}</span>
    </div>
    <div className="mt-1">
      <span className="text-gray-500">Brand :</span>
      <span className="ml-1 font-semibold">{item.product.brand.name || ""}</span>
    </div>
    <div className="mt-2 flex">
      <div className="w-6 h-6 border rounded-full" style={{ backgroundColor: item.color || "black" }}></div>
    </div>
    <div className="flex  sm:flex-row flex-col-reverse gap-4 justify-between mt-3 items-center">
      <div className="flex items-center gap-3">
        <span className="text-gray-500">Quantity</span>
        <input
          className="text-center border rounded-lg w-16 h-10 focus:ring-2 focus:ring-gray-300 outline-none"
          type="number"
        />
        <button className="bg-black cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
          تطبيق
        </button>
      </div>
      <span className="font-semibold text-lg mt-2 sm:mt-0">{item.price || ""} EGP</span>
    </div>
  </div>
</div>


    )
}

export default CartItem
