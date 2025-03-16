
import Image from 'next/image'
import { Iproduct } from '@/types/product';
import ProductModal from './ProductModal';
import Rating from './Rating';
import AddToCartButton from './AddToCartButton';


const ProductItem = ({ product }: { product: Iproduct }) => {
//     const [isPending, startTransition] = useTransition();
//   const [cart, setCart] = useState<any[]>([]);
//   console.log(cart)

//   const handleAddToCart = () => {
//     startTransition(async () => {
//       try {
//         const updatedCart = await addToCart(product.id, "#9f0500");
//         setCart(updatedCart); // تحديث حالة السلة بعد الإضافة
//       } catch (error) {
//         console.error("خطأ أثناء إضافة المنتج:", error);
//       }
//     });
//   };


    return (
        <div className="group flex mx-auto w-full">
            <div className="flex flex-col w-full ">
                <div className='relative bg-gray-100 w-full h-full py-auto p-1 rounded-md '>
                    <Image className='my-auto mx-auto p-12' src={product.imageCover} width={250} height={70} alt="product" />
                    <div className='absolute left-0 bottom-0 w-full flex items-center justify-center gap-2.5 pb-5 
opacity-0 translate-y-4 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0'>
                        <ProductModal product={product} hover="hover:text-blue-500" />

                        <AddToCartButton product={product} />

                        <button
                            // onClick={() => handleItemToWishList()}
                            aria-label="button for favorite select"
                            id="favOne"
                            className="flex cursor-pointer items-center justify-center w-9 h-9 rounded-[5px] shadow-1 ease-out duration-200 text-dark bg-white hover:text-blue-500"
                        >
                            <svg
                                className="fill-current"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3.74949 2.94946C2.6435 3.45502 1.83325 4.65749 1.83325 6.0914C1.83325 7.55633 2.43273 8.68549 3.29211 9.65318C4.0004 10.4507 4.85781 11.1118 5.694 11.7564C5.89261 11.9095 6.09002 12.0617 6.28395 12.2146C6.63464 12.491 6.94747 12.7337 7.24899 12.9099C7.55068 13.0862 7.79352 13.1667 7.99992 13.1667C8.20632 13.1667 8.44916 13.0862 8.75085 12.9099C9.05237 12.7337 9.3652 12.491 9.71589 12.2146C9.90982 12.0617 10.1072 11.9095 10.3058 11.7564C11.142 11.1118 11.9994 10.4507 12.7077 9.65318C13.5671 8.68549 14.1666 7.55633 14.1666 6.0914C14.1666 4.65749 13.3563 3.45502 12.2503 2.94946C11.1759 2.45832 9.73214 2.58839 8.36016 4.01382C8.2659 4.11175 8.13584 4.16709 7.99992 4.16709C7.864 4.16709 7.73393 4.11175 7.63967 4.01382C6.26769 2.58839 4.82396 2.45832 3.74949 2.94946ZM7.99992 2.97255C6.45855 1.5935 4.73256 1.40058 3.33376 2.03998C1.85639 2.71528 0.833252 4.28336 0.833252 6.0914C0.833252 7.86842 1.57358 9.22404 2.5444 10.3172C3.32183 11.1926 4.2734 11.9253 5.1138 12.5724C5.30431 12.7191 5.48911 12.8614 5.66486 12.9999C6.00636 13.2691 6.37295 13.5562 6.74447 13.7733C7.11582 13.9903 7.53965 14.1667 7.99992 14.1667C8.46018 14.1667 8.88401 13.9903 9.25537 13.7733C9.62689 13.5562 9.99348 13.2691 10.335 12.9999C10.5107 12.8614 10.6955 12.7191 10.886 12.5724C11.7264 11.9253 12.678 11.1926 13.4554 10.3172C14.4263 9.22404 15.1666 7.86842 15.1666 6.0914C15.1666 4.28336 14.1434 2.71528 12.6661 2.03998C11.2673 1.40058 9.54129 1.5935 7.99992 2.97255Z"
                                    fill=""
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 mt-3">
                    <div className="flex space-x-1">
                        <Rating product={product} />
                        <div className='ml-2'>
                            ({product.ratingsQuantity || 0})
                        </div>
                    </div>
                    <h3 className='text-medium font-medium'>{product.title}</h3>
                    <div className="flex space-x-3 font-medium ">
                        <span className='text-lg   '>${product.price}</span>
                        <span className='text-lg text-gray-400 line-through'>${product.priceAfterDiscount}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
