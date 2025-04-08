
import TopCategories from '@/components/Common/TopCategories';
import ProductSwiper from './ProductSwiper';
import Reviews from '@/components/Common/Reviews';
import ProductItem from '@/components/Common/ProductItem';
import AddToCart from './AddToCart';
import Colors from './Colors';
import { IProduct } from '@/types/product';
import { getUserData } from '@/actions/user/getUserData';
import { getReviews } from '@/actions/review/getReviews';
import { notFound } from 'next/navigation';


const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/products/${id}`, {
  //   next: { revalidate: 3600 }
  // });
  // const product = await res.json();

  // const resL = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/products?category=${product.data.category}`, {
  //   next: { revalidate: 3600 }
  // });
  // const productLike = await resL.json();

  // const resC = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/categories/${product.data.category}`, {
  //   next: { revalidate: 3600 }
  // });
  // const category = await resC.json();

  // const resb = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/brands/${product.data.brand}`, {
  //   next: { revalidate: 3600 }
  // });
  // const brand = await resb.json();

  // const Userdata = await getUserData();
  // const reviewsData = await getReviews(id);


  // const [product, category, brand ] = await Promise.all([
  //     fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/products/${id}`),
  //     fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/categories/${id}`),
  //     fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/brands/${id}`),
  // ]).then(([productRes, categoryRes, brandRes]) => Promise.all([productRes.json(), categoryRes.json(), brandRes.json()]));

  let product;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/products/${id}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) throw new Error('Product not found');
    const productData = await res.json();
    product = productData.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    return notFound();
  }

  // Fetch related data
  let category = null;
  let brand = null;
  let productLike = [];
  try {
    // Fetch category and brand in parallel
    const [categoryRes, brandRes] = await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/categories/${product.category}`,
        { next: { revalidate: 3600 } }
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/brands/${product.brand}`,
        { next: { revalidate: 3600 } }
      ),
    ]);

    // Process category and brand responses
    const [categoryData, brandData] = await Promise.all([
      categoryRes.ok ? categoryRes.json() : null,
      brandRes.ok ? brandRes.json() : null,
    ]);

    category = categoryData?.data || null;
    brand = brandData?.data || null;

    // Fetch similar products
    const likeRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/products?category=${product.category}`,
      { next: { revalidate: 3600 } }
    );
    const likeData = await likeRes.json();
    productLike = likeData.data || [];
  } catch (error) {
    console.error('Error fetching related data:', error);
  }

  // Fetch user and reviews data
  let Userdata = null;
  let reviewsData = { data: [] };
  try {
    [Userdata, reviewsData] = await Promise.all([
      getUserData(),
      getReviews(id),
    ]);
  } catch (error) {
    console.error('Error fetching user/reviews:', error);
  }


  return (
    <section className='pb-10 bg-gray-100'>

      <TopCategories color="bg-white" />

      <div className="container mx-auto ">
        {product && (
          <div className="grid grid-cols-1  lg:grid-cols-5 gap-1 bg-white shadow-xl rounded-xl p-6">
            <div className="col-span-2 block">
              <ProductSwiper images={product.images} />
            </div>

            <div className="col-span-3 space-y-4 my-auto">
              <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>

              <div className="flex items-center gap-3 text-lg font-medium">
                {category?.name && (
                  <>
                    <span className="font-semibold hidden md:block text-gray-700">Category:</span>
                    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">
                      {category.name}
                    </span>
                  </>

                )}
                {brand?.name && (
                  <>
                    <span className="font-semibold hidden md:block text-gray-700">Brand:</span>
                    <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full">
                      {brand.name}
                    </span>
                  </>
                )}
              </div>

              <p className="text-gray-600 leading-relaxed">{product.description}</p>

              <div className="flex items-center gap-2">
                <span className="text-yellow-500 text-xl">⭐ {product.ratingsAverage || 0}</span>
                <span className="text-gray-500">(Based on reviews)</span>
              </div>

              <p className="text-lg text-gray-700">
                <span className="font-semibold">Stock:</span> {product.quantity} available
              </p>

              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold">Colors:</span>
                <Colors availableColors={product.availableColors} />
              </div>

              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-red-600">${product.priceAfterDiscount}</span>
                <span className="text-lg text-gray-500 line-through">${product.price}</span>
              </div>

              <AddToCart />

            </div>
          </div>
        )}
      </div>


      <Reviews Userdata={Userdata} reviewsData={reviewsData} rating={product.ratingsAverage || 0} quantity={product.ratingsQuantity || 0} />

      <div className="container my-10">
        <h1 className="text-2xl mb-5 ms-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 uppercase drop-shadow-md">
          Products you may like
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 bg-white shadow-xl rounded-xl p-6">

          {
            productLike && productLike.map((product: IProduct) => (
              <ProductItem key={product.id} product={product} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ProductPage