
// import { cookies } from "next/headers";
import { getUserData } from "@/actions/user/getUserData";
import EditModal from "./EditModal";
import ChangePassword from "./ChangePassword";
const Page = async() => {
  // const [user, setUser] = useState<Iuser | null>(null);

  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   if (user) {
  //     setUser(JSON.parse(user));
  //   }
  // }, [])

  const user =  await getUserData();
  // console.log(user)



  return (
    <>
      <div>
        <h1 className="text-2xl ms-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 uppercase drop-shadow-md">
          My Profile
        </h1>
        <div className="relative flex flex-col mt-4 space-y-3 bg-white p-5 rounded-md">
          {/* <div className="absolute flex right-4 top-4 border-2 p-2 rounded-2xl border-blue-500 cursor-pointer"></div> */}
          
          
          <EditModal user={user} />
          <div className="flex text-lg font-semibold">
            <span className="text-gray-600">Name:</span>
            <span className="ml-2 text-gray-900 dark:text-white">{user?.data?.name}</span>
          </div>
          <div className="flex text-lg font-semibold">
            <span className="text-gray-600">Phone:</span>
            <span className="ml-2 text-gray-900 dark:text-white">{user?.data?.phone}</span>
          </div>
          <div className="flex text-lg font-semibold">
            <span className="text-gray-600">Email:</span>
            <span className="ml-2 text-gray-900 dark:text-white">{user?.data?.email}</span>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl ms-1 mt-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 uppercase drop-shadow-md">
          Change Password
        </h1>
        <div className="relative flex flex-col mt-4 space-y-3 bg-white p-5 rounded-md">
          <ChangePassword />
        </div>
      </div>
    </>
  )
}

export default Page
