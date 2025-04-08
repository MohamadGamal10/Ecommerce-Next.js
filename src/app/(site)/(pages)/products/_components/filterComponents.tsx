"use client";

import { Ibrand } from "@/types/brand";
import { Icategory } from "@/types/category";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function FilterComponent({ categories, brands }: { categories: { data: Icategory[] }, brands: { data: Ibrand[] } }) {
    const router = useRouter();

    const [categorySelected, setCategorySelected] = useState<string[]>([]);
    const [brandSelected, setBrandSelected] = useState<string[]>([]);
    const [priceFrom, setPriceFrom] = useState<string>("0")
    const [priceTo, setPriceTo] = useState<string>("0")
    // console.log(categorySelected)
    // console.log(categorySelected)
    // console.log(priceFrom)
    // console.log(priceTo)

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

    // const updateURL = () => {
    //     const params = new URLSearchParams();

    //     if (categorySelected.length) {
    //         categorySelected.forEach((id) => params.append("category[in][]", id));
    //     }
    //     if (brandSelected.length) {
    //         brandSelected.forEach((id) => params.append("brand[in][]", id));
    //     }
    //     if (priceFrom > "0") {
    //         params.append("price[gte]", priceFrom);
    //     }
    //     if (priceTo > "0") {
    //         params.append("price[lte]", priceTo);
    //     }

    //     // Update the URL without a full reload
    //     router.push(`/products?${params.toString()}`, { scroll: false });
    // };

    // useEffect(() => {
    //     updateURL();
    // }, [categorySelected, brandSelected, priceFrom, priceTo, updateURL]);

    const updateURL = useCallback(() => {
        const params = new URLSearchParams();
    
        if (categorySelected.length) {
          categorySelected.forEach((id) => params.append("category[in][]", id));
        }
        if (brandSelected.length) {
          brandSelected.forEach((id) => params.append("brand[in][]", id));
        }
        if (priceFrom > "0") {
          params.append("price[gte]", priceFrom);
        }
        if (priceTo > "0") {
          params.append("price[lte]", priceTo);
        }
    
        router.push(`/products?${params.toString()}`, { scroll: false });
      }, [categorySelected, brandSelected, priceFrom, priceTo, router]);
    
      useEffect(() => {
        updateURL();
      }, [updateURL]);

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
                    categories && categories.data.map((item: Icategory) => (
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
                    brands && brands.data.map((item: Icategory) => (
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

