import ProductItem from "@/components/Common/ProductItem";
// import { Icategory } from "@/types/category";
// import Link from "next/link";
import FilterComponent from "./_components/filterComponents";
import SortProducts from "./_components/sortProducts";
import TopCategories from "@/components/Common/TopCategories";
import { IProduct } from "@/types/product";
import getProducts from "@/actions/products/getProducts";
import getCategories from "@/actions/categories/getCategories";
import getBrands from "@/actions/brands/getBrands";
// import NotFound from "@/app/not-found";

// const buildQueryString = (searchParams: any) => {
//   const params = new URLSearchParams();
//   const limit = 8;

//   // Pagination
//   params.set('page', searchParams.page || '1');
//   params.set('limit', limit.toString());

//   // Sorting
//   if (searchParams.sort) {
//     switch(searchParams.sort) {
//       case 'price-low-high': params.set('sort', '+price');
//       case 'price-high-low': params.set('sort', '-price');
//       case 'popularity': params.set('sort', '-sold');
//       case 'rating': params.set('sort', '-ratingsAverage');
//     }
//   }

//   // Filters
//   if (searchParams.keyword) params.set('keyword', searchParams.keyword);
//   if (searchParams.category) params.set('category', searchParams.category);
//   if (searchParams.brand) params.set('brand', searchParams.brand);
//   if (searchParams.priceFrom) params.set('price[gte]', searchParams.priceFrom);
//   if (searchParams.priceTo) params.set('price[lte]', searchParams.priceTo);

//   return params.toString();
// };

type Props = {
  searchParams?: Record<string, string | string[]>;
};
export default async function ProductsPage({ searchParams }: { searchParams: Promise<Props> }) {
  const resolvedSearchParams = await searchParams;
  const query = new URLSearchParams();

  // Handle cases where values might be arrays
  Object.entries(resolvedSearchParams).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => query.append(key, v));
    } else {
      query.append(key, value.toString());
    }
  });

  const queryString = query.toString();
  // console.log(queryString);

  // const productsUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/products?${queryString}`;
  // const productsUrl = await getProducts(queryString);


  // Fetch data in parallel
  // const [ categoriesRes, brandsRes] = await Promise.all([
  //   // fetch(productsUrl),
  //   fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/categories`),
  //   fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/brands`)
  // ]);

  // const products = await productsRes.json();


  const [products, categories, brands] = await Promise.all([
    await getProducts(queryString),
    await getCategories(),
    await getBrands(),
  ])

  // if(!products || !categories || !brands) {
  //   NotFound();
  // }

  // await new Promise((resolve) => setTimeout(() => resolve(true), 3000));


  return (
    <section className='mb-10'>
      <TopCategories color="bg-gray-100" />
      <div className="container">

        <div>
          <div className="flex justify-between mt-3">
            <div className="flex ">
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
                Products
              </span>
            </div>
            <div>
              <SortProducts />
            </div>
          </div>
          <div className="flex ">
            <h2 className="font-bold text-xl xl:text-3xl text-dark">
              All Products
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-4  gap-8 mt-10">

          <FilterComponent
            categories={categories}
            brands={brands}
          // searchParams={searchParams}
          />
          {/* <FilterComponent categories={categories} brands={brands} /> */}
          <div className="flex flex-wrap col-span-3 gap-8 mx-auto" >
            {/* {
              categoryId ? (
                productsFiltered.data && productsFiltered.data.map((item: Iproduct) => (
                  <div key={item.id} className="max-w-[270px] ">
                    <ProductItem key={item.id} product={item} />
                  </div>
                ))
              ) : brandId ? (
                productsFiltereb.data && productsFiltereb.data.map((item: Iproduct) => (
                  <div key={item.id} className="max-w-[270px] ">
                    <ProductItem key={item.id} product={item} />
                  </div>
                ))
              ) : (
                products.data && products.data.map((item: Iproduct) => (
                  <div key={item.id} className="max-w-[270px] ">
                    <ProductItem key={item.id} product={item} />
                  </div>
              ))
              )
              
            } */}
            {
              products.data && products.data.map((item: IProduct) => (
                <div key={item.id} className="max-w-[270px] ">
                  <ProductItem key={item.id} product={item} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};
