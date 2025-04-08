"use server";

const getBrands = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/brands`,
      {
        next: { revalidate: 3600 },
      }
    );
    const products = await res.json();

    if (!res.ok) {
      throw new Error("Failed to fetch brands");
    }

    return products;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getBrands;
