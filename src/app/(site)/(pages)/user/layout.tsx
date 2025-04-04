// "use client"


import { ReactNode } from "react"
import SideBar from "./_components/SideBar"
// import { cookies } from "next/headers"
// import { useSelector } from "react-redux";
// import { selectChangeLoading } from "@/redux/auth/authSlice";
// import LoadingSpinner from "@/components/Common/Loading";
// import { useAppDispatch } from "@/redux/hooks";

const Layout = async({ children }: { children: ReactNode }) => {
      



  // const loading = useSelector(selectChangeLoading);


  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   const userCookie = cookies.get("userToken"); // استبدل بـ اسم الكوكي الخاص بك
  //   if (userCookie) {
  //     dispatch(fetchUserStart());
  //     // هنا قم بتنفيذ الـ API Call باستخدام الـ Cookie
  //   }
  // }, [dispatch]);

  // if (loading) return <LoadingSpinner />;

  return (
    <section className='py-10 bg-gray-100'>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4  gap-4">
          <div className='md:col-span-3 order-last md:order-first'>
            {children}
          </div>
          <SideBar />
        </div>
      </div>
    </section>
  )
}

export default Layout
