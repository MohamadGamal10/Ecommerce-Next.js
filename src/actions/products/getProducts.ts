"use server";


const getProducts = async (query: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/products?${query}`);

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