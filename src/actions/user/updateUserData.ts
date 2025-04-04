"use server";

import { cookies } from "next/headers";

export async function updateUserData(prevState: null, formData: FormData) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    throw new Error("Authorization token not found");
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/updateMe`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update user data");
    }

    const updatedData = await response.json();

    return {
      success: true,
      message: updatedData.status,
      data: updatedData,
    };
  } catch (error) {
    console.error("Server error:", error);
    return {
      success: false,
      message: error || "Failed to update user data",
    };
  }
}