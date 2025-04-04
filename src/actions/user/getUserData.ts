"use server";

import { cookies } from "next/headers";

export async function getUserData() {
  const Cookie = await cookies();
  const token =  Cookie.get("token")?.value;
  if (!token) return null;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/getMe`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
 
    if (!response.ok) {
      throw new Error("Network response was not ok" + response.statusText);
    }
    
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
