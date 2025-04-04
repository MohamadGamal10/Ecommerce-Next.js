"use client";

import { UserRoundPen } from "lucide-react"
import {
    AlertDialog,
    // AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";
import { Iuser } from "@/types/user";
import { ChangeEvent, FormEvent, useState } from "react";
import { updateUserData } from "@/actions/user/updateUserData";
import { notify } from "@/hooks/useNotifaction";
import { useRouter } from "next/navigation";

interface IProps {
    name: string;
    phone: string;
}

const EditModal = ({ user }: { user: Iuser }) => {
    const oldData = user && user?.data;

    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [userData, setUserData] = useState<IProps>({
        name: oldData?.name,
        phone: oldData?.phone
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("phone", userData.phone);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await updateUserData(null, formData);

            if (response.message === "success") {
                setOpen(false);
                notify("تم تحديث البيانات بنجاح", "success");
                router.refresh();
            }
        } catch (error) {
            console.error("Error updating user data:", error);
        }
    }

    return (
        <div className="absolute flex right-4 top-4 ">
            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogTrigger asChild>
                    <Button className="cursor-pointer"><UserRoundPen className="mr-1" /> Edit</Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="md:w-[550px] w-[350px]">
                    <form onSubmit={handleSubmit} >
                        <AlertDialogHeader>
                            <AlertDialogTitle>Edit Personal Data</AlertDialogTitle>
                            <AlertDialogDescription></AlertDialogDescription>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Full Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={userData?.name}
                                    onChange={handleChange}
                                    name="name"
                                    placeholder="Enter your full name"
                                    className="mt-2 p-3 w-full rounded-lg border-[3.5px] focus:border-blue-600 focus:shadow-input focus:ring-1 focus:ring-blue-900 bg-gray-100 shadow-xs sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700"> Phone <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    id="phone"
                                    required
                                    name="phone"
                                    value={userData?.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    className="mt-2 p-3 w-full rounded-lg border-[3.5px] focus:border-blue-600 focus:shadow-input focus:ring-1 focus:ring-blue-900 bg-gray-100 shadow-xs sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="UserEmail" className="block text-sm font-medium text-gray-700"> Email Address <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    id="UserEmail"
                                    required
                                    value={oldData?.email}
                                    readOnly
                                    placeholder="Enter your email"
                                    className="mt-2 p-3 w-full rounded-lg border-[3.5px] focus:border-blue-600 focus:shadow-input focus:ring-1 focus:ring-blue-900 bg-gray-100 shadow-xs sm:text-sm"
                                />
                            </div>
                        </AlertDialogHeader>
                        <AlertDialogFooter className="mt-4">
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <Button type="submit" className="cursor-pointer">Continue</Button>
                        </AlertDialogFooter>
                    </form>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

export default EditModal
