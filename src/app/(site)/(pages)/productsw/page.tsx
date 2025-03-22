// "use client";
// "use server";



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
// import getProducts from "@/actions/products/getProducts";
// import getCategories from "@/actions/categories/getCategories";
// import getBrands from "@/actions/brands/getBrands";
// import { useEffect, useState } from "react";
import FilterComponent from "./_components/filterComponents";
// import { useEffect, useState } from "react";
// import { set } from "zod";


// export async function getServerSideProps({ query }: any) {
//   const categoryId = query.category || "";
//   console.log(categoryId)
// }

// export const getServerSideProps = async () => {
//   const products = await getProducts(); // Ensure you await it
//   return {
//       props: { products },
//   };
// };

const buildQueryString = (searchParams: any) => {
  const params = new URLSearchParams();
  const limit = 8;

  // Pagination
  params.set('page', searchParams.page || '1');
  params.set('limit', limit.toString());

  // Sorting
  if (searchParams.sort) {
    switch(searchParams.sort) {
      case 'price-low-high': params.set('sort', '+price');
      case 'price-high-low': params.set('sort', '-price');
      case 'popularity': params.set('sort', '-sold');
      case 'rating': params.set('sort', '-ratingsAverage');
    }
  }

  // Filters
  if (searchParams.keyword) params.set('keyword', searchParams.keyword);
  if (searchParams.category) params.set('category', searchParams.category);
  if (searchParams.brand) params.set('brand', searchParams.brand);
  if (searchParams.priceFrom) params.set('price[gte]', searchParams.priceFrom);
  if (searchParams.priceTo) params.set('price[lte]', searchParams.priceTo);

  return params.toString();
};

export default async function ProductsPage({ searchParams }: any) {

  const queryString = buildQueryString(searchParams);
  const productsUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/products?${queryString}`;
  
  // Fetch data in parallel
  const [productsRes, categoriesRes, brandsRes] = await Promise.all([
    fetch(productsUrl),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/categories`),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/brands`)
  ]);

  const products = await productsRes.json();
  const categories = await categoriesRes.json();
  const brands = await brandsRes.json();


  // const categoryId =  await searchParams.category || '';
  // const brandId =  await searchParams.brand || '';
  // const categoryId =  await searchParams.category || '';
  // console.log(searchParams)
  
  // const [products, setProducts] = useState([]);


  // const products = await getProducts();
  // const categories = await getCategories();
  // const brands = await getBrands();

  // console.log(products)
  // console.log(categories)
  // console.log(brands)

  // const [products, setProducts] = useState([]);
  // const [categories, setCategories] = useState([]);
  // const [brands, setBrands] = useState([]);

  //   useEffect(() => {
  //       getProducts().then(setProducts);
  //       getCategories().then(setCategories);
  //       getBrands().then(setBrands);
  //   }, []);



  // useEffect(() => {
  // setProducts(getProducts());
  // setCategories(getCategories());
  // setBrands(getBrands());
  // }, [])

  

  

  // const resP = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/products`)
  // const products = await resP.json();

  // const resPS = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/products?sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${queryCat}&${brandCat}${pricefromString}${priceToString}`)
  // const resPS = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/products?sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${queryCat}&${brandCat}${pricefromString}${priceToString}`)
  // const productsS = await resPS.json();

  // const resP2 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/products?category=${categoryId}`)
  // const productsFiltered = await resP2.json();

  // const resb2 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/products?brand=${brandId}`)
  // const productsFiltereb = await resb2.json();
  

  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/categories`)
  // const categories = await res.json();

  // const categories = getCategories();

  // const resB = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/brands`)
  // const brands = await resB.json();
  // const brands =getBrands();

  // const handleCategoryChange = (categoryId: string) => {
  //   // Handle category change logic here
  //   console.log(`Selected category: ${categoryId}`);
  // };



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
       
        <FilterComponent
            categories={categories}
            brands={brands}
            searchParams={searchParams}
          />
       {/* <FilterComponent categories={categories} brands={brands} /> */}
          <div className="flex flex-wrap col-span-3 gap-8 mx-auto" >
            {/* {
              categoryId ? (
                productsFiltered.data && productsFiltered.data.map((item: Iproduct) => (
                  <div key={item.id} className="max-w-[270px] ">
                    <ProductItem key={item.id} product={item} />
                  </div>
                ))
              ) : brandId ? (
                productsFiltereb.data && productsFiltereb.data.map((item: Iproduct) => (
                  <div key={item.id} className="max-w-[270px] ">
                    <ProductItem key={item.id} product={item} />
                  </div>
                ))
              ) : (
                products.data && products.data.map((item: Iproduct) => (
                  <div key={item.id} className="max-w-[270px] ">
                    <ProductItem key={item.id} product={item} />
                  </div>
              ))
              )
              
            } */}
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

// export default ProductsPage;



//  // Convert to client component
// import { useState, useEffect } from 'react';
// import ProductItem from "@/components/Common/ProductItem";
// import { Icategory } from "@/types/category";
// import { Iproduct } from "@/types/product";
// // import Link from "next/link";
// import { ArrowDownZA, ArrowUpZA, ChevronDown, ShoppingBasket, Star } from "lucide-react"
// import { Button } from "@/components/ui/button"
// // ... other imports

// const ProductsPage = () => {
//   const [products, setProducts] = useState<Iproduct[]>([]);
//   const [categories, setCategories] = useState<Icategory[]>([]);
//   const [brands, setBrands] = useState<Icategory[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
  
//   // Filter/Sort states
//   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
//   const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
//   const [priceRange, setPriceRange] = useState<[number, number]>([0, Infinity]);
//   const [sortBy, setSortBy] = useState<string>('default');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [productsRes, categoriesRes, brandsRes] = await Promise.all([
//           fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/products`),
//           fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/categories`),
//           fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/brands`)
//         ]);

//         const productsData = await productsRes.json();
//         const categoriesData = await categoriesRes.json();
//         const brandsData = await brandsRes.json();

//         setProducts(productsData.data);
//         setCategories(categoriesData.data);
//         setBrands(brandsData.data);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'Failed to fetch data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleCategoryChange = (categoryId: string) => {
//     setSelectedCategories(prev =>
//       prev.includes(categoryId)
//         ? prev.filter(id => id !== categoryId)
//         : [...prev, categoryId]
//     );
//   };

//   const handleBrandChange = (brandId: string) => {
//     setSelectedBrands(prev =>
//       prev.includes(brandId)
//         ? prev.filter(id => id !== brandId)
//         : [...prev, brandId]
//     );
//   };

//   const handlePriceRange = (type: 'min' | 'max', value: number) => {
//     setPriceRange(prev => [
//       type === 'min' ? value : prev[0],
//       type === 'max' ? value : prev[1]
//     ]);
//   };

//   const filteredProducts = products.filter(product => {
//     const matchesCategory = selectedCategories.length === 0 || 
//       selectedCategories.includes(product.category);
//     const matchesBrand = selectedBrands.length === 0 || 
//       selectedBrands.includes(product.brand);
//     const matchesPrice = product.price >= priceRange[0] && 
//       product.price <= priceRange[1];
//     return matchesCategory && matchesBrand && matchesPrice;
//   });

//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     switch(sortBy) {
//       case 'price-low-high': return a.price - b.price;
//       case 'price-high-low': return b.price - a.price;
//       case 'rating': return b.rating - a.rating;
//       case 'popularity': return b.sold - a.sold;
//       default: return 0;
//     }
//   });

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <section className='mb-10'>
//       {/* ... existing layout structure */}
      
//       <div className="flex ">
//         <div className="w-1/4">
//           {/* Categories Filter */}
//           <div className="flex flex-col">
//             <h3 className="font-semibold text-medium mb-3">Categories</h3>
//             <div className="flex">
//               <input 
//                 type="checkbox" 
//                 checked={selectedCategories.length === 0}
//                 onChange={() => setSelectedCategories([])}
//               />
//               <p className="ml-2 text-medium">All</p>
//             </div>
//             {categories.map((item: Icategory) => (
//               <div key={item._id} className="flex">
//                 <input
//                   type="checkbox"
//                   checked={selectedCategories.includes(item._id)}
//                   onChange={() => handleCategoryChange(item._id)}
//                 />
//                 <p className="ml-2 text-medium">{item.name}</p>
//               </div>
//             ))}
//           </div>

//           {/* Brands Filter */}
//           <div className="flex flex-col mt-8">
//             <h3 className="font-semibold text-medium mb-3">Brands</h3>
//             <div className="flex">
//               <input 
//                 type="checkbox" 
//                 checked={selectedBrands.length === 0}
//                 onChange={() => setSelectedBrands([])}
//               />
//               <p className="ml-2 text-medium">All</p>
//             </div>
//             {brands.map((item: Icategory) => (
//               <div key={item._id} className="flex">
//                 <input
//                   type="checkbox"
//                   checked={selectedBrands.includes(item._id)}
//                   onChange={() => handleBrandChange(item._id)}
//                 />
//                 <p className="ml-2 text-medium">{item.name}</p>
//               </div>
//             ))}
//           </div>

//           {/* Price Filter */}
//           <div className="flex flex-col mt-8">
//             <h3 className="font-semibold text-medium mb-3">Price</h3>
//             <div className="flex flex-col md:flex-row">
//               <p className="ml-2 text-medium">From:</p>
//               <input
//                 className="w-[60px] border border-gray-500 outline-none focus:border-black ml-2"
//                 type="number"
//                 onChange={(e) => handlePriceRange('min', Number(e.target.value))}
//               />
//             </div>
//             <div className="flex flex-col md:flex-row mt-3">
//               <p className="ml-2 text-medium">To:</p>
//               <input
//                 className="w-[60px] ml-2 md:ml-7 border border-gray-500 outline-none focus:border-black"
//                 type="number"
//                 onChange={(e) => handlePriceRange('max', Number(e.target.value))}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Products Grid */}
//         <div className="flex flex-wrap col-span-3 gap-8 mx-auto">
//           {sortedProducts.map((item: Iproduct) => (
//             <div key={item.id} className="max-w-[270px]">
//               <ProductItem product={item} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Sorting Dropdown */}
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button variant="outline">Sort<ChevronDown className="ml-2 h-4 w-4" /></Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent className="w-56" align="end">
//           <DropdownMenuGroup>
//             <DropdownMenuItem onClick={() => setSortBy('popularity')}>
//               <ShoppingBasket />
//               <span>Best sellers</span>
//             </DropdownMenuItem>
//             <DropdownMenuItem onClick={() => setSortBy('rating')}>
//               <Star />
//               <span>Highest rated</span>
//             </DropdownMenuItem>
//             <DropdownMenuItem onClick={() => setSortBy('price-low-high')}>
//               <ArrowUpZA />
//               <span>Price low to high</span>
//             </DropdownMenuItem>
//             <DropdownMenuItem onClick={() => setSortBy('price-high-low')}>
//               <ArrowDownZA />
//               <span>Price high to low</span>
//             </DropdownMenuItem>
//           </DropdownMenuGroup>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </section>
//   );
// };

// export default ProductsPage;
