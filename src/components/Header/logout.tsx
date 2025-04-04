"use client";

import { logout } from "@/actions/Auth/logoutAction";
import { useRouter } from "next/navigation";
import { MenuItem } from '@headlessui/react'
import { notify } from "../../hooks/useNotifaction";

const Logout = () => {
    const router = useRouter();
    const handleLogout = async () => {
        await logout();
        notify("تم تسجيل الخروج بنجاح", "success");
        setTimeout(() => {
            router.push("/signin");
        }, 2000);
    }
    return (
        <MenuItem>
            <div
                onClick={handleLogout}
                className="block cursor-pointer px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
            >
                logout
            </div>
        </MenuItem>
    )
}

export default Logout
