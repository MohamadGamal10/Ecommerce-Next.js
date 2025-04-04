"use server";

import { cookies } from "next/headers";

export async function updatePasswordAction(
  prevState: null,
  formData: FormData
) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    throw new Error("Authorization token not found");
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/changeMyPassword`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          currentPassword: formData.get("currentPassword"),
          password: formData.get("password"),
          passwordConfirm: formData.get("passwordConfirm"),
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update password");
    }

    const updatedPass = await response.json();

    //delete the token cookie after password change
    cookieStore.delete("token");

    return {
      success: true,
      data: updatedPass,
    };
  } catch (error) {
    console.error("Server error:", error);
    return {
      success: false,
      message: error || "Failed to update password",
    };
  }
}
