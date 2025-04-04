"use server";

import { cookies } from "next/headers";

export const editAddressAction = async ( prevState: null,formData: FormData, id: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    throw new Error("Authorization token not found");
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/addresses/${id}`, 
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          alias: formData.get("alias"),
          details: formData.get("details"),
          phone: formData.get("phone"),
          city: formData.get("city") || "",
          postalCode: formData.get("postalCode") || "",
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update address");
    }

    const data = await response.json();

    return {
      success: true,
      message: "Address updated successfully",
      data: data,
    };
  } catch (error) {
    console.error("Server error:", error);
    return {
      success: false,
      message: error || "Failed to update address",
    };
  }
};