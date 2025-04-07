"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

const useSearchHook = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = usePathname();
  const [search, setSearch] = useState(searchParams.get("keyword") || "");

  console.log(path);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const keywordFromParams = searchParams.get("keyword") || "";
    setSearch(keywordFromParams);
  }, [searchParams]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const params = new URLSearchParams(searchParams);

      console.log(searchParams.get("keyword"));

      // if (search === "" &&  path.includes("products")) {
      //   params.delete("keyword");
      //   // router.push(`/products`, { scroll: false });
      // }

      if (search === "" && !!params.get("keyword")) {
        params.delete("keyword");
        router.push(`/products`, { scroll: false });
        return;
      }

      if (search !== "") {
        params.set("keyword", search);
        router.push(`/products?${params.toString()}`, { scroll: false });
      }
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [search, router,searchParams, path]);

  return [search, handleChange] as [
    string,
    (e: ChangeEvent<HTMLInputElement>) => void
  ];
};

export default useSearchHook;
