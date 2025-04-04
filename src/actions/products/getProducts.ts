"use server";


// const getProducts = async() => {
//    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/products`);
//    const products = await res.json();
//    return products.data;
// }



const getProducts = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/products`, { cache: 'no-store' });

        if (!res.ok) {
            throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
        }

        const products = await res.json();
        return products;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export default getProducts