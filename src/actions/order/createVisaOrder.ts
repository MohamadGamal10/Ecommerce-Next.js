"use server";

import { cookies } from "next/headers";

export async function createVisaOrder(id: string) {
  const Cookie = await cookies();
  const token = Cookie.get("token")?.value;
  if (!token) return null;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/orders/checkout-session/${id}`,
      {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        // body: JSON.stringify({
        //   shippingAddress: {
        //     details: formData.get("details"),
        //     phone: formData.get("phone"),
        //     city: formData.get("city") || "",
        //     postalCode: formData.get("postalCode") || "",
        //   },
        // }),
      }
    );

    if (!response.ok) {
      throw new Error("فشل في انشاء الطلب");
    }

    // console.log(response);

    return await response.json();
  } catch (error) {
    console.log("Error creating visa order:", error);
  }
}
