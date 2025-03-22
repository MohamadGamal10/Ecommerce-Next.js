"use server";


const getCategories = async() => {
   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/categories`);
   const products = await res.json();
   return products;
}

export default getCategories
