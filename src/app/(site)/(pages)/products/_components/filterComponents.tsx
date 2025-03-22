"use client";

import { Ibrand } from "@/types/brand";
import { Icategory } from "@/types/category";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import { set } from "zod";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

export default function FilterComponent({ categories, brands }: { categories: { data: Icategory[] }, brands: { data: Ibrand[] } }) {
    const router = useRouter();
    // const searchParams = useSearchParams();
    // const selectedCategories = searchParams.get("category")?.split(",") || [];

    // const handleCategoryChange = (category: string) => {
    //     const newCategories = selectedCategories.includes(category)
    //         ? selectedCategories.filter((c) => c !== category)
    //         : [...selectedCategories, category];

    //     const params = new URLSearchParams(searchParams);
    //     newCategories.length ? params.set("category", newCategories.join(",")) : params.delete("category");
    //     router.push(`?${params.toString()}`, { scroll: false }); // Updates URL & triggers re-fetch
    // };

    // // const router = useRouter();
    // const pathname = usePathname();
    // const params = new URLSearchParams(searchParams);

    // const handleFilter = (type: 'category' | 'brand', value: string) => {
    //     if (params.getAll(type).includes(value)) {
    //         params.delete(type, value);
    //     } else {
    //         params.append(type, value);
    //     }
    //     router.replace(`${pathname}?${params.toString()}`);
    // };

    // const [checked, setChecked] = useState(false);
    const [categorySelected, setCategorySelected] = useState<string[]>([]);
    const [brandSelected, setBrandSelected] = useState<string[]>([]);
    // console.log(categorySelected)
    // console.log(categorySelected)
    // const [brand, setBrand] = useState("")
    const [priceFrom, setPriceFrom] = useState<string>("0")
    const [priceTo, setPriceTo] = useState<string>("0")

    // console.log(category)
    // console.log(brand)
    // console.log(priceFrom)
    // console.log(priceTo)

    // // const router = useRouter();
    // // const searchParams = useSearchParams();
    // const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {


    //     const categoryId = e.target.value;
    //     setCategory(categoryId);
    //     // catId(categoryId)
    //     const params = new URLSearchParams(searchParams.toString());
    //     params.set("category", categoryId);
    //     router.push(`?${params.toString()}`, { scroll: false });
    // }

    const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = e.target.value;
        const checked = e.target.checked;
        // console.log(id)
        // console.log(checked)

            if (checked) {
                setCategorySelected([...categorySelected, id])
            } else {
                setCategorySelected(categorySelected.filter((item) => item !== id))
            }
        
    }

    const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = e.target.value;
        const checked = e.target.checked;
        // console.log(id)
        // console.log(checked)

            if (checked) {
                setBrandSelected([...brandSelected, id])
            } else {
                setBrandSelected(brandSelected.filter((item) => item !== id))
            }
        
    }

    const handlePriceFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPriceFrom(e.target.value)
    }
    const handlePriceToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPriceTo(e.target.value)
    }   

    const updateURL = () => {
        const params = new URLSearchParams();

        if (categorySelected.length) {
            categorySelected.forEach((id) => params.append("category[in][]", id));
        }
        if (brandSelected.length) {
            brandSelected.forEach((id) => params.append("brand[in][]", id));
        }
        if (priceFrom) {
            params.append("price[gte]", priceFrom);
        }
        if (priceTo) {
            params.append("price[lte]", priceTo);
        }

        // Update the URL without a full reload
        router.push(`/products?${params.toString()}`, { scroll: false });
    };

    useEffect(() => {
        updateURL();
    }, [categorySelected, brandSelected, priceFrom, priceTo]);


    // useEffect(() => {
    //     if (categorySelected.length > 0) {
    //         router.push(`/products?category[in][]=${categorySelected.join("&category[in][]=")}`)
    //     }else if (brandSelected.length > 0) {
    //         router.push(`/products?brand[in][]=${brandSelected.join("&brand[in][]=")}`)
    //     }else {
    //         router.push(`/products`)
    //     }
    
    // }, [categorySelected, brandSelected, router])

    // const handleBrandChange = (e: any) => {
    //     setBrand(e.target.value)
    //     router.push(`/products?brand=${e.target.value}`)
    // }

    // const handlePriceFromChange = (e: any) => {
    //     setPriceFrom(e.target.value)
    //     router.push(`/products?price[gt]=${e.target.value}`)
    // }
    // const handlePriceToChange = (e: any) => {
    //     setPriceTo(e.target.value)
    //     router.push(`/products?price[lte]=${e.target.value}`)
    // }

    return (
        <div className="w-1/4">
            <div className="flex flex-col">
                <h3 className="font-semibold text-medium mb-3">Categories</h3>
                <div className="flex">
                    <input type="checkbox" id="all"
                         checked={categorySelected.length === 0 }
                         onChange={() => {
                            setCategorySelected([])
                            router.push(`/products`)
                        }}
                        value="0" name="all" />
                    <p className="ml-2 text-medium">All</p>
                </div>
                {
                    categories.data && categories.data.map((item: Icategory) => (
                        <div key={item._id} className="flex">
                            <input type="checkbox"
                                checked={categorySelected.includes(item._id)}
                                onChange={handleCategoryChange}
                                id="all" value={item._id} name="all" />
                            <p className="ml-2 text-medium">{item.name}</p>
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-col mt-8">
                <h3 className="font-semibold text-medium mb-3">Brands</h3>
                <div className="flex">
                    <input type="checkbox"
                     checked={brandSelected.length === 0 }
                     onChange={() => {
                        setBrandSelected([])
                        router.push(`/products`)
                    }}
                      id="all" value="0" name="all" />
                    <p className="ml-2 text-medium">All</p>
                </div>
                {
                    brands.data && brands.data.map((item: Icategory) => (
                        <div key={item._id} className="flex w-full ">
                            <input type="checkbox"
                                checked={brandSelected.includes(item._id)}
                                onChange={handleBrandChange}
                                id="all" value={item._id} name="all" />
                            <p className="ml-2  text-medium">{item.name}</p>
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-col  mt-8">
                <h3 className="font-semibold text-medium mb-3">Price</h3>
                <div className="flex flex-col md:flex-row">
                    <p className="ml-2 text-medium">From:</p>
                    <input
                     onChange={handlePriceFromChange}
                      className="w-[60px] border border-gray-500 outline-none focus:border-black ml-2" type="number" id="all" name="all" />
                </div>
                <div className="flex flex-col md:flex-row mt-3">
                    <p className="ml-2 text-medium">To:</p>
                    <input
                     onChange={handlePriceToChange}
                      className="w-[60px] ml-2 md:ml-7 border border-gray-500 outline-none focus:border-black " type="number" id="all" name="all" />
                </div>

            </div>
        </div>
    );
} 


// import { Ibrand } from "@/types/brand";
// import { Icategory } from "@/types/category";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";

// export default function FilterComponent({
//   categories,
//   brands,
// }: {
//   categories: { data: Icategory[] };
//   brands: { data: Ibrand[] };
// }) {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
  
//   // Create URLSearchParams instance from current search parameters
//   const params = new URLSearchParams(searchParams.toString());

//   // Clean parameters on initial load
//   const validParams = ['category', 'brand', 'priceFrom', 'priceTo', 'sort', 'page'];
//   validParams.forEach(param => {
//     if (!validParams.includes(param)) params.delete(param);
//   });

//   const handleFilter = (type: 'category' | 'brand', value: string) => {
//     const newParams = new URLSearchParams(searchParams.toString());
    
//     if (newParams.getAll(type).includes(value)) {
//       newParams.delete(type, value);
//     } else {
//       newParams.append(type, value);
//     }

//     // Remove unexpected parameters
//     ['status', 'value', 'reason', '_response', '_debugInfo'].forEach(p => newParams.delete(p));
    
//     router.replace(`${pathname}?${newParams.toString()}`);
//   };

//   const handlePriceFilter = (type: 'priceFrom' | 'priceTo', value: string) => {
//     const newParams = new URLSearchParams(searchParams.toString());
    
//     if (value) {
//       newParams.set(type, value);
//     } else {
//       newParams.delete(type);
//     }
    
//     router.replace(`${pathname}?${newParams.toString()}`);
//   };

//   // Check if any category is selected
//   const hasCategoryFilter = searchParams.getAll('category').length > 0;
//   const hasBrandFilter = searchParams.getAll('brand').length > 0;

//   return (
//     <div className="w-1/4">
//       {/* Categories Filter */}
//       <div className="flex flex-col">
//         <h3 className="font-semibold text-medium mb-3">Categories</h3>
//         <div className="flex">
//           <input
//             type="checkbox"
//             checked={!hasCategoryFilter}
//             onChange={() => {
//               const newParams = new URLSearchParams(searchParams.toString());
//               newParams.delete('category');
//               router.replace(`${pathname}?${newParams.toString()}`);
//             }}
//           />
//           <p className="ml-2 text-medium">All</p>
//         </div>
//         {categories.data.map((item: Icategory) => (
//           <div key={item._id} className="flex">
//             <input
//               type="checkbox"
//               checked={searchParams.getAll('category').includes(item._id)}
//               onChange={() => handleFilter('category', item._id)}
//             />
//             <p className="ml-2 text-medium">{item.name}</p>
//           </div>
//         ))}
//       </div>

//       {/* Brands Filter */}
//       <div className="flex flex-col mt-8">
//         <h3 className="font-semibold text-medium mb-3">Brands</h3>
//         <div className="flex">
//           <input
//             type="checkbox"
//             checked={!hasBrandFilter}
//             onChange={() => {
//               const newParams = new URLSearchParams(searchParams.toString());
//               newParams.delete('brand');
//               router.replace(`${pathname}?${newParams.toString()}`);
//             }}
//           />
//           <p className="ml-2 text-medium">All</p>
//         </div>
//         {brands.data.map((item: Ibrand) => (
//           <div key={item._id} className="flex w-full">
//             <input
//               type="checkbox"
//               checked={searchParams.getAll('brand').includes(item._id)}
//               onChange={() => handleFilter('brand', item._id)}
//             />
//             <p className="ml-2 text-medium">{item.name}</p>
//           </div>
//         ))}
//       </div>

//       {/* Price Filter */}
//       <div className="flex flex-col mt-8">
//         <h3 className="font-semibold text-medium mb-3">Price</h3>
//         <div className="flex flex-col md:flex-row">
//           <p className="ml-2 text-medium">From:</p>
//           <input
//             className="w-[60px] border border-gray-500 outline-none focus:border-black ml-2"
//             type="number"
//             value={searchParams.get('priceFrom') || ''}
//             onChange={(e) => handlePriceFilter('priceFrom', e.target.value)}
//           />
//         </div>
//         <div className="flex flex-col md:flex-row mt-3">
//           <p className="ml-2 text-medium">To:</p>
//           <input
//             className="w-[60px] ml-2 md:ml-7 border border-gray-500 outline-none focus:border-black"
//             type="number"
//             value={searchParams.get('priceTo') || ''}
//             onChange={(e) => handlePriceFilter('priceTo', e.target.value)}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }