"use client";
import { ArrowDownZA, ArrowUpZA, ChevronDown, EqualNot, ShoppingBasket, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SortProducts = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [sort, setSort] = useState('');
    // console.log(sort)

    useEffect(() => {
        if (sort !== '') {
            const params = new URLSearchParams(searchParams);
            params.set("sort", sort);
            router.push(`/products?${params.toString()}`, { scroll: false });
        }
    }, [sort, router, searchParams])

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Sort<ChevronDown className="ml-2 h-4 w-4" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => {
                        setSort('');
                        router.push(`/products`, { scroll: false });
                    }}>
                        <EqualNot />
                        <span>Without Sort</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setSort('-sold')}>
                        <ShoppingBasket />
                        <span>Best sellers</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setSort('-quantity')}>
                        <Star />
                        <span>Highest rated</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setSort('+price')}>
                        <ArrowUpZA />
                        <span>Price from low to high</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setSort('-price')}>
                        <ArrowDownZA />
                        <span>Price from high to low</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default SortProducts