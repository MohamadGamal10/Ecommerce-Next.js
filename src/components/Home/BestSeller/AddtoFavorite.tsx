"use client";

import useFavouriteHook from "@/hooks/useFavouriteHook";
import { IProduct } from "@/types/product";

const AddtoFavorite = ({ product }: { product: IProduct }) => {
   const [isFav, handleItemToWishList] = useFavouriteHook(product);
   
    return (
        <button
            onClick={handleItemToWishList}
            aria-label="button for add to fav"
            id="addFavOne"
            className="cursor-pointer flex items-center justify-center w-9 h-9 rounded-[5px] shadow-1 ease-out duration-200 text-dark bg-white hover:text-white hover:bg-blue-600"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
            >
                <path
                    fill={isFav ? '#ff0000' : 'transparent'}
                    stroke={isFav ? '#ff0000' : 'currentColor'}
                    strokeWidth="1.5"
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
            </svg>
        </button>
    )
}

export default AddtoFavorite
