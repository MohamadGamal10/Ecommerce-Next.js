// import ProductItem from "@/components/Common/ProductItem"

import { getWishlistsAction } from "@/actions/wishlist/getWishlistsAction"
import { Iproduct } from "@/types/product";
import SingleItemFav from "../_components/SingleItemFav";

const page = async () => {
  const FavProducts = await getWishlistsAction();

  return (
    <>
      <div>
        <h1 className="text-2xl ms-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 uppercase drop-shadow-md">
          Favourite Products
        </h1>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            FavProducts?.data.length ? FavProducts?.data.map((product: Iproduct ) => (
              <div key={product.id} className="max-w-[270px] mx-auto bg-white shadow-xl rounded-md p-4">
                <SingleItemFav product={product} />
              </div>
            )): (
              <div className="mt-6 text-start text-gray-500 text-lg font-semibold">
                No favourite products found.
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}



export default page
