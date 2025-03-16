"use client"
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogHeader,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Iproduct } from "@/types/product";
import { AlertDialogDescription } from '@radix-ui/react-alert-dialog';
import Image from "next/image";
import Rating from "./Rating";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import AddToCartButton from "./AddToCartButton";
const ProductModal = ({ product , hover }: { product: Iproduct, hover: string }) => {
    const [productQuantity, setproductQuantity] = useState(1);

    useEffect(() => {
        if(productQuantity < 1){
            setproductQuantity(1)
        }
    }, [productQuantity])
    
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <button
                    // onClick={() => {
                    //     openModal();
                    //     handleQuickViewUpdate();
                    // }}
                    id="newOne"
                    aria-label="button for quick view"
                    className={`${cn(hover)} flex items-center cursor-pointer justify-center w-9 h-9  rounded-[5px] shadow-1 ease-out duration-200 text-dark`}
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
                            d="M8.00016 5.5C6.61945 5.5 5.50016 6.61929 5.50016 8C5.50016 9.38071 6.61945 10.5 8.00016 10.5C9.38087 10.5 10.5002 9.38071 10.5002 8C10.5002 6.61929 9.38087 5.5 8.00016 5.5ZM6.50016 8C6.50016 7.17157 7.17174 6.5 8.00016 6.5C8.82859 6.5 9.50016 7.17157 9.50016 8C9.50016 8.82842 8.82859 9.5 8.00016 9.5C7.17174 9.5 6.50016 8.82842 6.50016 8Z"
                            fill=""
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.00016 2.16666C4.99074 2.16666 2.96369 3.96946 1.78721 5.49791L1.76599 5.52546C1.49992 5.87102 1.25487 6.18928 1.08862 6.5656C0.910592 6.96858 0.833496 7.40779 0.833496 8C0.833496 8.5922 0.910592 9.03142 1.08862 9.4344C1.25487 9.81072 1.49992 10.129 1.76599 10.4745L1.78721 10.5021C2.96369 12.0305 4.99074 13.8333 8.00016 13.8333C11.0096 13.8333 13.0366 12.0305 14.2131 10.5021L14.2343 10.4745C14.5004 10.129 14.7455 9.81072 14.9117 9.4344C15.0897 9.03142 15.1668 8.5922 15.1668 8C15.1668 7.40779 15.0897 6.96858 14.9117 6.5656C14.7455 6.18927 14.5004 5.87101 14.2343 5.52545L14.2131 5.49791C13.0366 3.96946 11.0096 2.16666 8.00016 2.16666ZM2.57964 6.10786C3.66592 4.69661 5.43374 3.16666 8.00016 3.16666C10.5666 3.16666 12.3344 4.69661 13.4207 6.10786C13.7131 6.48772 13.8843 6.7147 13.997 6.9697C14.1023 7.20801 14.1668 7.49929 14.1668 8C14.1668 8.50071 14.1023 8.79199 13.997 9.0303C13.8843 9.28529 13.7131 9.51227 13.4207 9.89213C12.3344 11.3034 10.5666 12.8333 8.00016 12.8333C5.43374 12.8333 3.66592 11.3034 2.57964 9.89213C2.28725 9.51227 2.11599 9.28529 2.00334 9.0303C1.89805 8.79199 1.8335 8.50071 1.8335 8C1.8335 7.49929 1.89805 7.20801 2.00334 6.9697C2.11599 6.7147 2.28725 6.48772 2.57964 6.10786Z"
                            fill=""
                        />
                    </svg>
                </button>
            </AlertDialogTrigger>
            <AlertDialogContent className='w-[1000px]'>

                <AlertDialogHeader>


                    <AlertDialogTitle></AlertDialogTitle>
                    <AlertDialogDescription></AlertDialogDescription>
                    <div className="flex justify-between px-4">
                        <div className='my-auto mr-auto bg-gray-100 rounded-md border-2 p-15'>
                            <Image src={product.imageCover} alt='' width={300} height={300} />
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className='flex justify-end mb-3'>
                                <AlertDialogCancel className='bg-gray-100 cursor-pointer'>
                                    <svg
                                        className="fill-current"
                                        width="26"
                                        height="26"
                                        viewBox="0 0 26 26"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M14.3108 13L19.2291 8.08167C19.5866 7.72417 19.5866 7.12833 19.2291 6.77083C19.0543 6.59895 18.8189 6.50262 18.5737 6.50262C18.3285 6.50262 18.0932 6.59895 17.9183 6.77083L13 11.6892L8.08164 6.77083C7.90679 6.59895 7.67142 6.50262 7.42623 6.50262C7.18104 6.50262 6.94566 6.59895 6.77081 6.77083C6.41331 7.12833 6.41331 7.72417 6.77081 8.08167L11.6891 13L6.77081 17.9183C6.41331 18.2758 6.41331 18.8717 6.77081 19.2292C7.12831 19.5867 7.72414 19.5867 8.08164 19.2292L13 14.3108L17.9183 19.2292C18.2758 19.5867 18.8716 19.5867 19.2291 19.2292C19.5866 18.8717 19.5866 18.2758 19.2291 17.9183L14.3108 13Z"
                                            fill=""
                                        />
                                    </svg>
                                </AlertDialogCancel>
                            </div>
                            <span className='bg-green-600 p-1 px-3 text-sm font-semibold text-white w-fit'>SALE 20% OFF</span>
                            <h1 className='text-3xl font-bold'>{product.title}</h1>
                            <div className="flex">
                                <Rating product={product} />
                                <span>
                                    <span className="font-medium text-dark"> {product.ratingsAverage || 0} Rating </span>
                                    <span className="text-dark-2"> ({product.ratingsQuantity || 0} reviews) </span>
                                </span>
                                <div className="flex items-center gap-2 ml-5">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_375_9221)">
                                            <path
                                                d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                                                fill="#22AD5C"
                                            />
                                            <path
                                                d="M12.6875 7.09374L8.9688 10.7187L7.2813 9.06249C7.00005 8.78124 6.56255 8.81249 6.2813 9.06249C6.00005 9.34374 6.0313 9.78124 6.2813 10.0625L8.2813 12C8.4688 12.1875 8.7188 12.2812 8.9688 12.2812C9.2188 12.2812 9.4688 12.1875 9.6563 12L13.6875 8.12499C13.9688 7.84374 13.9688 7.40624 13.6875 7.12499C13.4063 6.84374 12.9688 6.84374 12.6875 7.09374Z"
                                                fill="#22AD5C"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_375_9221">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <span className="font-medium text-dark"> In Stock </span>
                                </div>

                            </div>
                            <p className='max-w-[400px] text-gray-600'>
                                {product.description}
                            </p>
                            <div className="flex justify-between">
                                <div className="flex flex-col gap-3">
                                    <span className='text-xl font-bold'>Price</span>
                                    <div className="flex">
                                        <span className='text-3xl font-bold'>${product.priceAfterDiscount}</span>
                                        <span className='text-2xl ms-2 font-semibold text-gray-400 line-through mt-auto'>${product.price}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className='text-xl font-bold'>Quantity</span>
                                    <div className="flex gap-3">
                                        <button onClick={() => setproductQuantity((prev) => prev - 1 )} className='p-3 cursor-pointer rounded-md bg-gray-100'>
                                            <svg
                                                className="fill-current"
                                                width="16"
                                                height="2"
                                                viewBox="0 0 16 2"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M-8.548e-08 0.977778C-3.82707e-08 0.437766 0.437766 3.82707e-08 0.977778 8.548e-08L15.0222 1.31328e-06C15.5622 1.36049e-06 16 0.437767 16 0.977779C16 1.51779 15.5622 1.95556 15.0222 1.95556L0.977778 1.95556C0.437766 1.95556 -1.32689e-07 1.51779 -8.548e-08 0.977778Z"
                                                    fill=""
                                                />
                                            </svg>
                                        </button>
                                        <span className='border-1 p-2 font-medium w-[70px] text-center rounded-md'>{productQuantity}</span>
                                        <button onClick={() => setproductQuantity((prev) => prev + 1 )} className='p-3 cursor-pointer rounded-md bg-gray-100'>
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
                                                    d="M8.08889 0C8.6289 2.36047e-08 9.06667 0.437766 9.06667 0.977778L9.06667 15.0222C9.06667 15.5622 8.6289 16 8.08889 16C7.54888 16 7.11111 15.5622 7.11111 15.0222L7.11111 0.977778C7.11111 0.437766 7.54888 -2.36047e-08 8.08889 0Z"
                                                    fill=""
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M0 7.91111C4.72093e-08 7.3711 0.437766 6.93333 0.977778 6.93333L15.0222 6.93333C15.5622 6.93333 16 7.3711 16 7.91111C16 8.45112 15.5622 8.88889 15.0222 8.88889L0.977778 8.88889C0.437766 8.88889 -4.72093e-08 8.45112 0 7.91111Z"
                                                    fill=""
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                {/* <button className='cursor-pointer font-medium text-custom-sm py-[11px] px-9.5 w-fit text-white bg-blue-700 ease-out duration-200 hover:bg-blue-600  rounded-md  mt-5' >Add to Cart</button> */}
                                <AddToCartButton product={product} />
                                <button className='cursor-pointer font-medium text-custom-sm py-[11px] px-9.5 w-fit text-white bg-blue-950 ease-out duration-200 hover:bg-blue-900  rounded-md  mt-5' >Add to Whishlist</button>
                            </div>
                        </div>
                    </div>

                </AlertDialogHeader>
                <AlertDialogFooter></AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ProductModal
