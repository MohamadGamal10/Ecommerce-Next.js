import Image from "next/image"
import SingleItem from "./SingleItem"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Iproduct } from "@/types/product"

const BestSeller = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/products?limit=6`)
    const products = await res.json()
    return (
        <section className="pt-17.5">
            <div className="container">
                <div className="flex flex-col">
                    <span className="flex items-center gap-2.5 font-medium text-dark mb-1.5">
                        <Image
                            src="/images/icons/icon-07.svg"
                            alt="icon"
                            width={17}
                            height={17}
                        />
                        This Month
                    </span>
                    <h2 className="font-bold text-xl xl:text-3xl text-dark">Best Sellers</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    {
                        products.data.map((product: Iproduct) => (
                            <SingleItem key={product.id} product={product} />
                        ))
                    }
                </div>

                <div className="flex text-center">
                <Link href={"/products"} className={cn(buttonVariants({ variant: "default" }), "px-12 py-6 mt-15 mx-auto ease-out duration-200 bg-gray-100 border-1 border-gray-300 text-black hover:bg-[black] hover:text-white")} >
                    View All
                </Link>
                </div>
            </div>
        </section >
    )
}

export default BestSeller
