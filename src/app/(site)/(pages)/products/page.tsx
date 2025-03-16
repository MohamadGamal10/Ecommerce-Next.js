import ProductItem from "@/components/Common/ProductItem";
import { Icategory } from "@/types/category";
import { Iproduct } from "@/types/product";
import Link from "next/link";
import { ArrowDownZA, ArrowUpZA, ChevronDown, ShoppingBasket, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const ProductsPage = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/products`)
  const products = await data.json();

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/categories`)
  const categories = await res.json();

  const resB = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/brands`)
  const brands = await resB.json();

  return (
    <section className='mb-10'>
      <div className="flex bg-gray-100 py-4 mb-10">
        <div className="container">
          {
            categories.data && categories.data.map((category: Icategory) => (
              <Link key={category._id} href={category._id} className="sm:mr-6 mr-2 font-small text-gray-700 hover:text-blue-600 duration-300 ease-out cap">{category.name}</Link>
            ))
          }
          <Link href={"/categories"} className="md:mr-3 mr-1 font-small text-gray-700 hover:text-blue-600 duration-300 ease-out cap">more</Link>
        </div>
      </div>
      <div className="container">

        <div>
          <div className="flex justify-between mt-3">
            <div className="flex ">
              <span className='flex items-center gap-2.5 font-medium text-dark mb-1.5'>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_834_7356)">
                    <path
                      d="M3.94024 13.4474C2.6523 12.1595 2.00832 11.5155 1.7687 10.68C1.52908 9.84449 1.73387 8.9571 2.14343 7.18231L2.37962 6.15883C2.72419 4.66569 2.89648 3.91912 3.40771 3.40789C3.91894 2.89666 4.66551 2.72437 6.15865 2.3798L7.18213 2.14361C8.95692 1.73405 9.84431 1.52927 10.6798 1.76889C11.5153 2.00851 12.1593 2.65248 13.4472 3.94042L14.9719 5.46512C17.2128 7.70594 18.3332 8.82635 18.3332 10.2186C18.3332 11.6109 17.2128 12.7313 14.9719 14.9721C12.7311 17.2129 11.6107 18.3334 10.2184 18.3334C8.82617 18.3334 7.70576 17.2129 5.46494 14.9721L3.94024 13.4474Z"
                      stroke="#3C50E0"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="7.17245"
                      cy="7.39917"
                      r="1.66667"
                      transform="rotate(-45 7.17245 7.39917)"
                      stroke="#3C50E0"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M9.61837 15.4164L15.4342 9.6004"
                      stroke="#3C50E0"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_834_7356">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Products
              </span>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Sort<ChevronDown className="ml-2 h-4 w-4" /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <ShoppingBasket />
                      <span>Best sellers</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Star />
                      <span>Highest rated</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <ArrowUpZA />
                      <span>Price from low to high</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <ArrowDownZA />
                      <span>Price from high to low</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>

                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex ">
            <h2 className="font-bold text-xl xl:text-3xl text-dark">
              All Products
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-4  gap-8 mt-10">
          <div className="w-1/4">
            <div className="flex flex-col">
              <h3 className="font-semibold text-medium mb-3">Categories</h3>
              <div className="flex">
                <input type="checkbox" id="all" value="0" name="all" />
                <p className="ml-2 text-medium">All</p>
              </div>
              {
                categories.data && categories.data.map((item: Icategory) => (
                  <div key={item._id} className="flex">
                    <input type="checkbox" id="all" value={item._id} name="all" />
                    <p className="ml-2 text-medium">{item.name}</p>
                  </div>
                ))
              }
            </div>
            <div className="flex flex-col mt-8">
              <h3 className="font-semibold text-medium mb-3">Brands</h3>
              <div className="flex">
                <input type="checkbox" id="all" value="0" name="all" />
                <p className="ml-2 text-medium">All</p>
              </div>
              {
                brands.data && brands.data.map((item: Icategory) => (
                  <div key={item._id} className="flex w-full">
                    <input type="checkbox" id="all" value={item._id} name="all" />
                    <p className="ml-2  text-medium">{item.name}</p>
                  </div>
                ))
              }
            </div>
            <div className="flex flex-col  mt-8">
              <h3 className="font-semibold text-medium mb-3">Price</h3>
              <div className="flex flex-col md:flex-row">
              <p className="ml-2 text-medium">From:</p>
                <input className="w-[60px] border border-gray-500 outline-none focus:border-black ml-2" type="number" id="all"  name="all" />
              </div>
              <div className="flex flex-col md:flex-row mt-3">
              <p className="ml-2 text-medium">To:</p>
                <input className="w-[60px] ml-2 md:ml-7 border border-gray-500 outline-none focus:border-black " type="number" id="all"  name="all" />
              </div>
              
            </div>
          </div>
          <div className="flex flex-wrap col-span-3 gap-8 mx-auto" >
            {
              products.data && products.data.map((item: Iproduct) => (
                <div key={item.id} className="max-w-[270px] ">
                  <ProductItem key={item.id} product={item} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;





