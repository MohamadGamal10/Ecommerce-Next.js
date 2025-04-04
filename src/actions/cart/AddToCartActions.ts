"use server";

import { cookies } from "next/headers";

export async function addToCart(productId: string, color: string) {
  const Cookie = await cookies();
  const token = Cookie.get("token")?.value;
  if (!token) return null;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/cart`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId,
          color,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("فشل في إضافة المنتج إلى السلة");
    }

    // console.log(response);

    return response.json();
  } catch (error) {
    console.log("Error adding to cart:", error);
  }
}
