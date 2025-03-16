"use server";

export async function addToCart(productId: string, color: string) {
  const token = localStorage.getItem("token");
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      productId,
      color,
    }),
  });

  if (!response.ok) {
    throw new Error("فشل في إضافة المنتج إلى السلة");
  }

  console.log(response);

  return response.json();
}
