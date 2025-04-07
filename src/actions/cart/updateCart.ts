"use server";

import { cookies } from "next/headers";

export const updateCart = async (id: string, count: string | number) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    throw new Error("Authorization token not found");
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/cart/${id}`, 
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          count,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update cart");
    }

    return await response.json();

  } catch (error) {
    console.error("Server error:", error);
  }
};