// "use client";

// import { useEffect } from 'react';
// import { useAppDispatch, useAppSelector } from '@/redux/hooks';
// import { fetchProducts } from '@/redux/products/productsSlice';



const ProductsPage = async() => {
  const data = await fetch('https://backend-for-ecommerce-plateform2.onrender.com/api/v1/products')
  const products = await data.json()
  // const dispatch = useAppDispatch();
  // const { products, loading, error } = useAppSelector((state) => state.products);
  // console.log(products)

  // useEffect(() => {
  //   dispatch(fetchProducts(10));
  // }, [dispatch]);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.data && products.data.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;





