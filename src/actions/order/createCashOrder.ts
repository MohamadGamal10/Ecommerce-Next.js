"use server";

import { cookies } from "next/headers";

export async function createCashOrder(id: string, formData: FormData) {
  const Cookie = await cookies();
  const token = Cookie.get("token")?.value;
  if (!token) return null;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/orders/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          shippingAddress: {
            details: formData.get("details"),
            phone: formData.get("phone"),
            city: formData.get("city") || "",
            postalCode: formData.get("postalCode") || "",
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error("فشل في انشاء الطلب");
    }

    // console.log(response);

    return response.json();
  } catch (error) {
    console.log("Error creating cash order:", error);
  }
}
