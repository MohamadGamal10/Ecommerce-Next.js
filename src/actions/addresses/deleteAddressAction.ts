"use server";

import { cookies } from "next/headers";

export const deleteAddressAction = async ( prevState: null, id: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    throw new Error("Authorization token not found");
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/addresses/${id}`, 
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to delete address");
    }

    const data = await response.json();

    return {
      success: true,
      message: "Address removed successfully",
      data: data,
    };
  } catch (error) {
    console.error("Server error:", error);
    return {
      success: false,
      message: error || "Failed to delete address",
    };
  }
};