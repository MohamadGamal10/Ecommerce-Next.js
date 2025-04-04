"use client";

import { addToCart } from "@/actions/cart/AddToCartActions";
import { notify } from "@/hooks/useNotifaction";
import { useParams } from "next/navigation";


const AddToCart = () => {
    const { id }: { id: string } = useParams();
    const handleClick = async() => {
        try {
            const color = localStorage.getItem("selectedColor");
            const response = await addToCart(id, color || "");

            if(!color) {
                notify("من فضلك اختر اللون أولا", "warning"); 
                return;
            }

            if(response.status === "success" && color !== null) {
                notify("تم إضافة المنتج إلى السلة بنجاح" , "success");
            }
        } catch (error) {
            console.log("Error adding to cart:", error);
        }
    };

    return (
        <button onClick={handleClick} className="cursor-pointer mt-4 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition">
            Add to Cart
        </button>
    )
}

export default AddToCart
