"use client";

import { addToCart } from '@/actions/cartActions';
import React, { useTransition } from 'react'
import { Button } from '../ui/button';
import { Iproduct } from '@/types/product';

const AddToCartButton = ({product}:{product:Iproduct}) => {
    const [isPending, startTransition] = useTransition();

    const handleAddToCart = () => {
        startTransition(async () => {
            await addToCart(product.id, "#9f0500");
        });
    };
    return (
        <Button
            onClick={handleAddToCart} disabled={isPending}
            className="inline-flex cursor-pointer font-medium text-sm px-5 rounded-[5px] bg-blue-700 text-white ease-out duration-200 hover:bg-blue-600"
        >
            Add to cart
        </Button>
    )
}

export default AddToCartButton
