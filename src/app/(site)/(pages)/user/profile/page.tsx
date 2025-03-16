"use client"
import { UserRoundPen } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Iuser } from "@/types/user"
const Page = () => {
  const [user, setUser] = useState<Iuser | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, [])
 
  return (
    <>
      <div>
        <h1 className="text-2xl ms-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 uppercase drop-shadow-md">
          My Profile
        </h1>
        <div className="relative flex flex-col mt-4 space-y-3 bg-white p-5 rounded-md">
          {/* <div className="absolute flex right-4 top-4 border-2 p-2 rounded-2xl border-blue-500 cursor-pointer"></div> */}
          <div className="absolute flex right-4 top-4 ">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="cursor-pointer"><UserRoundPen className="mr-1" /> Edit</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="md:w-[550px] w-[350px]">
                <AlertDialogHeader>
                  <AlertDialogTitle>Edit Personal Data</AlertDialogTitle>
                  <AlertDialogDescription></AlertDialogDescription>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Full Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="name"
                      value={user?.name}
                      onChange={(e) => console.log(e)}
                      // {...register("name")}
                      placeholder="Enter your full name"
                      className="mt-2 p-3 w-full rounded-lg border-[3.5px] focus:border-blue-600 focus:shadow-input focus:ring-1 focus:ring-blue-900 bg-gray-100 shadow-xs sm:text-sm"
                    />
                  </div>
                  {/* {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>} */}
                  <div>
                    <label htmlFor="UserEmail" className="block text-sm font-medium text-gray-700"> Email Address <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      id="UserEmail"
                      value={user?.email}
                      onChange={(e) => console.log(e)}
                      // {...register("email")}
                      placeholder="Enter your email"
                      className="mt-2 p-3 w-full rounded-lg border-[3.5px] focus:border-blue-600 focus:shadow-input focus:ring-1 focus:ring-blue-900 bg-gray-100 shadow-xs sm:text-sm"
                    />
                  </div>
                  {/* {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>} */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700"> Phone <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="phone"
                      value={user?.phone}
                      onChange={(e) => console.log(e)}
                      // {...register("phone")}
                      placeholder="Enter your phone number"
                      className="mt-2 p-3 w-full rounded-lg border-[3.5px] focus:border-blue-600 focus:shadow-input focus:ring-1 focus:ring-blue-900 bg-gray-100 shadow-xs sm:text-sm"
                    />
                  </div>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <div className="flex text-lg font-semibold">
            <span className="text-gray-600">Name:</span>
            <span className="ml-2 text-gray-900 dark:text-white">{user?.name}</span>
          </div>
          <div className="flex text-lg font-semibold">
            <span className="text-gray-600">Phone:</span>
            <span className="ml-2 text-gray-900 dark:text-white">{user?.phone}</span>
          </div>
          <div className="flex text-lg font-semibold">
            <span className="text-gray-600">Email:</span>
            <span className="ml-2 text-gray-900 dark:text-white">{user?.email}</span>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl ms-1 mt-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 uppercase drop-shadow-md">
          Change Password
        </h1>
        <div className="relative flex flex-col mt-4 space-y-3 bg-white p-5 rounded-md">
          <form className="space-y-4" action="">
            <div className="max-w-[500px]">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700"> Type Old Password <span className="text-red-500">*</span></label>
              <input
                type="password"
                id="password"
                // {...register("password")}
                placeholder="Type old Password "
                className="mt-2 p-3 w-full rounded-lg border-[3.5px] focus:border-blue-600 focus:shadow-input focus:ring-1 focus:ring-blue-900 bg-gray-100 shadow-xs sm:text-sm"
              />
            </div>
            <div className="max-w-[500px]">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700"> Type New Password <span className="text-red-500">*</span></label>
              <input
                type="password"
                id="password"
                // {...register("password")}
                placeholder="Type New Password"
                className="mt-2 p-3 w-full rounded-lg border-[3.5px] focus:border-blue-600 focus:shadow-input focus:ring-1 focus:ring-blue-900 bg-gray-100 shadow-xs sm:text-sm"
              />
            </div>
            <div className="max-w-[500px]">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700"> Confirm New Password <span className="text-red-500">*</span></label>
              <input
                type="password"
                id="password"
                // {...register("password")}
                placeholder="Confirm New Password"
                className="mt-2 p-3 w-full rounded-lg border-[3.5px] focus:border-blue-600 focus:shadow-input focus:ring-1 focus:ring-blue-900 bg-gray-100 shadow-xs sm:text-sm"
              />
            </div>
            <Button>Update Password</Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Page
