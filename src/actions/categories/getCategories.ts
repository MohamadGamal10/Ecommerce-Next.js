"use server";

const getCategories = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/categories`,{
        next: { revalidate: 3600 }
      }
    );
    const products = await res.json();

    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }

    return products;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getCategories;
