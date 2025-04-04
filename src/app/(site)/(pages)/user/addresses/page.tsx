// "use client"

import { getUserAddress } from "@/actions/addresses/getUserAddress"
import EditModal from "./EditModal"
import { IAddress } from "@/types/address";
import AddModal from "./AddModal";

const Page = async () => {
  const userAddresses = await getUserAddress();
  return (
    <>
      <div>
        <h1 className="text-2xl ms-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 uppercase drop-shadow-md">
          Personal Addresses
        </h1>
        {userAddresses && userAddresses?.data.length !== 0 ? (
          userAddresses.data.map((address: IAddress ) => (
          <div key={address._id} className="relative flex flex-col mt-4 space-y-3 bg-white p-5 rounded-md">
            {/* <div className="absolute flex right-4 top-4 border-2 p-2 rounded-2xl border-blue-500 cursor-pointer"></div> */}
            <EditModal address={address} />

            <div className="flex text-lg font-semibold">
              <span className="text-gray-600">Name:</span>
              <span className="ml-2 text-gray-900 dark:text-white">{address.alias}</span>
            </div>
            <div className="flex text-lg font-semibold">
              <span className="text-gray-600">Details:</span>
              <span className="ml-2 text-gray-900 dark:text-white">{address.details}</span>
            </div>
            <div className="flex text-lg font-semibold">
              <span className="text-gray-600">Phone:</span>
              <span className="ml-2 text-gray-900 dark:text-white">{address.phone}</span>
            </div>

          </div>
          ))
        ): (<div className="mt-6 text-start text-gray-500 text-lg font-semibold">
          No addresses found.
        </div>)}


        <AddModal />
      </div>

    </>
  )
}

export default Page
