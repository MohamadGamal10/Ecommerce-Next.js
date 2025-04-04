"use server";

import { cookies } from "next/headers";


interface IprevState {
  success: boolean;
  data: {
    name: string,
    email: string,
    password: string,
  };
}

export const signupAction = async (
  prevState: IprevState,
  formData: FormData
) => {
  const cookieStore = await cookies();
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      passwordConfirm: formData.get("confirmPassword"),
      phone: formData.get("phone"),
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to signup");
  }

  const data = await response.json();

  
  if (data?.token) {
    cookieStore.set({
      name: "token",
      value: data.token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
  }

  return {
    success: true,
    data,
  };
};
