import ProductItem from "@/components/Common/ProductItem";
import { Iproduct } from "@/types/product";

const page = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
    const productsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/products?brand=${id}&limit=8`);
    const products = await productsRes.json();

    const brandsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/brands/${id}`);
    const brands = await brandsRes.json();
    console.log(brands)
    return (
        <section className='my-10'>
            <div className="container">
                <div className="flex flex-col"> 
                    <span className='flex items-center gap-2.5 font-medium text-dark mb-1.5'>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_834_7356)">
                                <path
                                    d="M3.94024 13.4474C2.6523 12.1595 2.00832 11.5155 1.7687 10.68C1.52908 9.84449 1.73387 8.9571 2.14343 7.18231L2.37962 6.15883C2.72419 4.66569 2.89648 3.91912 3.40771 3.40789C3.91894 2.89666 4.66551 2.72437 6.15865 2.3798L7.18213 2.14361C8.95692 1.73405 9.84431 1.52927 10.6798 1.76889C11.5153 2.00851 12.1593 2.65248 13.4472 3.94042L14.9719 5.46512C17.2128 7.70594 18.3332 8.82635 18.3332 10.2186C18.3332 11.6109 17.2128 12.7313 14.9719 14.9721C12.7311 17.2129 11.6107 18.3334 10.2184 18.3334C8.82617 18.3334 7.70576 17.2129 5.46494 14.9721L3.94024 13.4474Z"
                                    stroke="#3C50E0"
                                    strokeWidth="1.5"
                                />
                                <circle
                                    cx="7.17245"
                                    cy="7.39917"
                                    r="1.66667"
                                    transform="rotate(-45 7.17245 7.39917)"
                                    stroke="#3C50E0"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M9.61837 15.4164L15.4342 9.6004"
                                    stroke="#3C50E0"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_834_7356">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        {brands.data.name || ""}
                    </span>
                    <div className="flex">
                        <h2 className="font-bold text-xl xl:text-3xl text-dark">
                            All Products of brand (<span className="text-blue-600 capitalize">{brands.data.name || ""}</span>)
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
                    {
                        products.data && products.data.map((item: Iproduct) => (
                            <ProductItem key={item.id} product={item} />
                        ))
                    }
                </div>
            </div>
        </section >
    )
}

export default page
