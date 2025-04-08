"use client";

import { clearCart } from "@/actions/cart/clearCart";
import { couponCartAction } from "@/actions/cart/couponCartAction";
import { notify } from "@/hooks/useNotifaction";
import { ICartData } from "@/types/cart";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SubmitCart = ({ cartData }: { cartData: ICartData }) => {
    const router = useRouter();
    const [couponName, setCouponName] = useState<string>("");
    const onChangeCoupon = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCouponName(e.target.value);
    }
    const handleCheckout = async () => {
        const res = await couponCartAction(couponName);
        if (res && res.status === "success") {
            notify("تم تطبيق الكوبون بنجاح", "success");
            setCouponName("");
            router.refresh();
        } else {
            notify("الكوبون منتهي او غير صحيح", "error");
        }
    };

    const handleClearCart = async () => {
        const res = await clearCart();
        if (!res) {
            notify("تم حذف السلة بنجاح", "success");
            router.refresh();
        }
    }
    return (
        <div className="flex justify-center my-4">
            <div className="w-full  bg-white p-6 rounded-lg shadow-lg">
                {/* Coupon Section */}
                <div className="flex mb-4  ">
                    <input
                        className="flex-1 w-full  text-center border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="كود الخصم"
                        type="text"
                        value={couponName}
                        onChange={onChangeCoupon}
                    />
                    <button
                        onClick={handleCheckout}
                        className="bg-blue-600 cursor-pointer text-white px-4 py-3 rounded-r-lg font-semibold hover:bg-blue-700 transition duration-200"
                    >
                        تطبيق
                    </button>
                </div>

                {/* Price Section */}
                <div className="text-center text-lg font-semibold border-t border-b py-4 mb-4">

                    <span className="text-gray-700">

                        {/* {cartData.totalCartPrice} جنيه */}
                        {cartData?.totalAfterDiscount >= 1 ? (
                            <span className="font-bold">{cartData?.totalAfterDiscount}  <span className="line-through text-sm">{cartData?.totalCartPrice}</span></span>
                        ) : cartData?.totalCartPrice || 0} جنية
                        {/* {cartData.totalAfterDiscount >= 1
? `${cartData.totalAfterDiscount} جنيه ... بدلا من ${cartData.totalCartPrice} جنيه`
: `${cartData.totalCartPrice} جنيه`} */}
                    </span>
                </div>

                {/* Checkout Button */}
                <Link
                    href="/order"
                >
                    <button className="w-full cursor-pointer bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-200 mb-3"
                    >
                        اتمام الشراء
                    </button>
                </Link>

                {/* Clear Cart Button */}
                <button
                    onClick={handleClearCart}
                    className="w-full cursor-pointer bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-200"
                >
                    مسح العربة
                </button>
            </div>
        </div>
    )
}

export default SubmitCart
