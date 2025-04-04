"use server";

import { cookies } from "next/headers";

interface IprevState {
  success: boolean;
  data: {
    email: string;
    password: string;
  };
}

export const signinAction = async (
  prevState: IprevState,
  formData: FormData,
) => {
  const cookieStore = await cookies();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to login");
  }

  const data = await response.json();
  // console.log(data.token);

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
