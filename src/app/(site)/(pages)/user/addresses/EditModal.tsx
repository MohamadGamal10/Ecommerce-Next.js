"use client";
import { Trash2, UserRoundPen } from "lucide-react"
import {
  AlertDialog,
  // AlertDialogAction,
  // AlertDialogCancel,
  AlertDialogContent,
  // AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";
import { IAddress } from "@/types/address";
import { FormEvent, useState } from "react";
import { notify } from "@/hooks/useNotifaction";
import { useRouter } from "next/navigation";
import { editAddressAction } from "@/actions/addresses/editAddressAction";
import { deleteAddressAction } from "@/actions/addresses/deleteAddressAction";
const EditModal = ({ address }: { address: IAddress }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<{ alias: string; details: string; phone: string }>({
    alias: address.alias,
    details: address.details,
    phone: address.phone
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {    
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const formData = new FormData();
  formData.append("alias", data.alias);
  formData.append("details", data.details);
  formData.append("phone", data.phone);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await editAddressAction(null, formData, address._id);

      if (response.data.message === "Address updated successfully") {
        setIsOpen(false);
        notify("تم تعديل العنوان بنجاح", "success");
        router.refresh();
      }
    } catch (error) {
      console.log("Error updating address:", error);
      notify("Failed to update address", "error");
    }
  }

 
  const handleDelete = async () => {
    try {
      const response = await deleteAddressAction(null, address._id);
      if (response.success) {
        setIsOpen(false);
        notify("تم حذف العنوان بنجاح", "success");
        router.refresh();
      }
    } catch (error) {
      console.log("Error deleting address:", error);
      notify("Failed to delete address", "error");
    }
  }

  return (
    <div className="absolute flex right-4 top-4 ">
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogTrigger asChild>
          <Button className="cursor-pointer"><UserRoundPen className="mr-1" /> Edit</Button>
        </AlertDialogTrigger>
        <div onClick={handleDelete} className="ml-2">
          <Button variant="destructive" className="cursor-pointer"><Trash2 className="mr-1" /> Delete</Button>
        </div>
        <AlertDialogContent className="md:w-[550px] w-[350px]">
          <form onSubmit={handleSubmit}>
            <AlertDialogHeader>
              <AlertDialogTitle>Edit Address</AlertDialogTitle>

              <div className="space-y-4">
                <div>
                  <label htmlFor="alias" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="alias"
                    name="alias"
                    onChange={handleChange}
                    value={data.alias}
                    placeholder="Enter your full name"
                    className="mt-2 p-3 w-full rounded-lg border-[3.5px] focus:border-blue-600 bg-gray-100 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-gray-700">
                    Details
                  </label>
                  <input
                    type="text"
                    id="details"
                    onChange={handleChange}
                    name="details"
                    value={data.details}
                    placeholder="Enter your address details"
                    className="mt-2 p-3 w-full rounded-lg border-[3.5px] focus:border-blue-600 bg-gray-100 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    onChange={handleChange}
                    name="phone"
                    value={data.phone}
                    placeholder="Enter your phone number"
                    className="mt-2 p-3 w-full rounded-lg border-[3.5px] focus:border-blue-600 bg-gray-100 sm:text-sm"
                  />
                </div>
              </div>
            </AlertDialogHeader>
            <AlertDialogFooter className="mt-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button className="cursor-pointer" type="submit">Continue</Button>
            </AlertDialogFooter>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default EditModal
