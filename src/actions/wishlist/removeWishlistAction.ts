"use server";

import { cookies } from "next/headers";

export async function removeWishlistAction(productId: string) {
  const Cookie = await cookies();
  const token = Cookie.get("token")?.value;
  if (!token) return null;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/wishlist/${productId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("فشل في حذف المنتج من المفضلة");
    }

    // console.log(response);

    return response.json();
  } catch (error) {
    console.log("Error removing from wishlist:", error);
  }
}
