"use server";

import { cookies } from "next/headers";

export async function createReview(
  review: string,
  rating: number,
  productId: string,
  userId: string
) {
  const Cookie = await cookies();
  const token = Cookie.get("token")?.value;
  if (!token) return null;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/reviews`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          review,
          rating,
          product: productId,
          user: userId,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("فشل في إضافة التقييم");
    }

    // console.log(response);

    return response.json();
  } catch (error) {
    console.log("Error adding review:", error);
  }
}
