"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

const useSearchHook = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = usePathname();
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (search === "" && path === "/products") {
        const params = new URLSearchParams(searchParams);
        params.delete("keyword");
        router.push(`/products?${params.toString()}`, { scroll: false });
      }
      if (search !== "") {
        const params = new URLSearchParams(searchParams);
        params.set("keyword", search);
        router.push(`/products?${params.toString()}`, { scroll: false });
      }
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [search, router, searchParams, path]);

  return [search, handleChange] as [string, (e: ChangeEvent<HTMLInputElement>) => void];
};

export default useSearchHook;
