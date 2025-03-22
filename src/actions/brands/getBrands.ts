"use server";


const getBrands = async() => {
   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/brands`);
   const products = await res.json();
   return products;
}

export default getBrands
