import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const OneCarousel = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row p-4 py-10">
            <Image
                src="/images/hero/hero-bg.png"
                alt="hero bg shapes"
                className="absolute right-0 bottom-0 -z-1"
                width={534}
                height={520}
            />
            <div className="flex flex-col pl-4 py-10 md:w-1/2 space-y-3">
                <div className="flex gap-4">
                    <span className='block text-[#3c50e0] text-7xl font-bold'>30%</span>
                    <span className="block text-dark  text-2xl ">
                        Sale
                        <br />
                        Off
                    </span>
                </div>
                <h1 className='text-3xl font-bold'>True Wireless Noise Cancelling Headphone</h1>
                <p className='text-gray-700 mt-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at ipsum at risus euismod lobortis in
                </p>
                <Link href="/product">
                    <div className={cn(buttonVariants({ variant: "default" }), "px-10 py-6 mt-10 ease-in-out duration-300 hover:bg-[#3c50e0]")}>Shop Now</div>
                </Link>
            </div>

            <div className="flex md:w-1/2 mx-auto py-6">
                <Image src="/images/hero/hero-01.png" alt="hero" width={350} height={350} />
            </div>
        </div>
    )
}

export default OneCarousel
