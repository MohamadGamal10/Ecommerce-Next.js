
import ProductItem from "@/components/Common/ProductItem"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Iproduct } from "@/types/product"
import Link from "next/link"

const NewArrival = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/products?limit=8`);
    const products = await res.json();
    // console.log(products)

    return (
        <section>
            <div className="container">
                <div className="flex justify-between pt-17.5 ">
                    <div className="flex flex-col">
                        <span className="flex items-center gap-2.5 font-medium text-dark mb-1.5">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3.11826 15.4622C4.11794 16.6668 5.97853 16.6668 9.69971 16.6668H10.3007C14.0219 16.6668 15.8825 16.6668 16.8821 15.4622M3.11826 15.4622C2.11857 14.2577 2.46146 12.429 3.14723 8.77153C3.63491 6.17055 3.87875 4.87006 4.8045 4.10175M3.11826 15.4622C3.11826 15.4622 3.11826 15.4622 3.11826 15.4622ZM16.8821 15.4622C17.8818 14.2577 17.5389 12.429 16.8532 8.77153C16.3655 6.17055 16.1216 4.87006 15.1959 4.10175M16.8821 15.4622C16.8821 15.4622 16.8821 15.4622 16.8821 15.4622ZM15.1959 4.10175C14.2701 3.33345 12.947 3.33345 10.3007 3.33345H9.69971C7.0534 3.33345 5.73025 3.33345 4.8045 4.10175M15.1959 4.10175C15.1959 4.10175 15.1959 4.10175 15.1959 4.10175ZM4.8045 4.10175C4.8045 4.10175 4.8045 4.10175 4.8045 4.10175Z"
                                    stroke="#3C50E0"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M7.64258 6.66678C7.98578 7.63778 8.91181 8.33345 10.0003 8.33345C11.0888 8.33345 12.0149 7.63778 12.3581 6.66678"
                                    stroke="#3C50E0"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                            This Week’s
                        </span>
                        <h2 className="font-bold text-xl xl:text-3xl text-dark">New Arrivals</h2>
                    </div>
                    <Link href={"/products"} className={cn(buttonVariants({ variant: "default" }), "px-8 py-6  ease-out duration-200 bg-gray-100 border-1 border-gray-300 text-black hover:bg-[black] hover:text-white")} >
                        View All
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
                    {
                        products.data && products.data.map((item: Iproduct) => (
                            <ProductItem key={item.id} product={item} />
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default NewArrival
