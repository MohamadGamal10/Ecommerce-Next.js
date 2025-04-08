import PreLoader from "@/components/Common/Loading";
import Home from "@/components/Home";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Suspense fallback={<PreLoader />} >
      <Home />
    </Suspense>
  );
}
