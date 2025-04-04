"use server";

import { cookies } from "next/headers";

export async function updateReview(
  review: string,
  rating: number,
  reviewId: string,
) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    throw new Error("Authorization token not found");
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/reviews/${reviewId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          review,
          rating,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update review");
    }

    return await response.json();

    
  } catch (error) {
    console.error("Server error:", error);
  }
}