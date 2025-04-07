"use client";

import { addToWishlistAction } from "@/actions/wishlist/addToWishlistAction";
import { getWishlistsAction } from "@/actions/wishlist/getWishlistsAction";
import { removeWishlistAction } from "@/actions/wishlist/removeWishlistAction";
import { notify } from "@/hooks/useNotifaction";
import { IProduct } from "@/types/product";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useFavouriteHook = (product: IProduct) => {
  const router = useRouter();
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const  data  = await getWishlistsAction();
        setIsFav(data && data.data.some((item: IProduct) => item.id === product.id));
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };
    fetchWishlist();
  }, [product.id]);

  const handleItemToWishList = async() => {
    try {
      if (isFav === true) {
        const response = await removeWishlistAction(product.id);
        if (response.status === "success") {
          setIsFav(false);
          notify("تم حذف المنتج من المفضلة", "success");
          router.refresh();
        }
      } else {
        const response = await addToWishlistAction(product.id);
        if (response.status === "success") {
          setIsFav(true);
          notify("تم إضافة المنتج إلى المفضلة", "success");
          router.refresh();
        }
      }
    } catch (error) {
      console.error("Error updating wishlist:", error);
    }
  };

  return [isFav, handleItemToWishList] as [boolean, () => Promise<void>];
};

export default useFavouriteHook;
