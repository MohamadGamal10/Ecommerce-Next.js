"use client";

import { updatePasswordAction } from '@/actions/user/updatePasswordAction';
import { notify } from '@/hooks/useNotifaction';
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';
import React, { FormEvent } from 'react'

const ChangePassword = () => {
   const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const currentPassword = e.currentTarget.currentPassword.value;
        const password = e.currentTarget.password.value;
        const passwordConfirm = e.currentTarget.passwordConfirm.value;

        if (password !== passwordConfirm) {
            notify("كلمة المرور غير متطابقة", "error");
            return;
        }
        const formData = new FormData();
        formData.append("currentPassword", currentPassword);
        formData.append("password", password);
        formData.append("passwordConfirm", passwordConfirm);

        try {
            const response = await updatePasswordAction(null, formData);
            if (response.success === true) {
                notify("تم تحديث كلمة المرور بنجاح", "success");
                setTimeout(() => {
                    router.push("/signin");
                }, 1500)
            }
        } catch (error) {
            console.log("Error updating password:", error);
            notify("فشلت عملية تحديث كلمة المرور", "error");
        }
    }
    return (
        <form className="space-y-4" onSubmit={handleSubmit} >
            <div className="max-w-[500px]">
                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700"> Type Old Password <span className="text-red-500">*</span></label>
                <input
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    required
                    placeholder="Type old Password "
                    className="mt-2 p-3 w-full rounded-lg border-[3.5px] focus:border-blue-600 focus:shadow-input focus:ring-1 focus:ring-blue-900 bg-gray-100 shadow-xs sm:text-sm"
                />
            </div>
            <div className="max-w-[500px]">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700"> Type New Password <span className="text-red-500">*</span></label>
                <input
                    type="password"
                    id="password"
                    required
                    name="password"
                    placeholder="Type New Password"
                    className="mt-2 p-3 w-full rounded-lg border-[3.5px] focus:border-blue-600 focus:shadow-input focus:ring-1 focus:ring-blue-900 bg-gray-100 shadow-xs sm:text-sm"
                />
            </div>
            <div className="max-w-[500px]">
                <label htmlFor="passwordConfirm" className="block text-sm font-medium text-gray-700"> Confirm New Password <span className="text-red-500">*</span></label>
                <input
                    type="password"
                    id="passwordConfirm"
                    required
                    name="passwordConfirm"
                    placeholder="Confirm New Password"
                    className="mt-2 p-3 w-full rounded-lg border-[3.5px] focus:border-blue-600 focus:shadow-input focus:ring-1 focus:ring-blue-900 bg-gray-100 shadow-xs sm:text-sm"
                />
            </div>
            <Button type="submit" className='cursor-pointer'>Update Password</Button>
        </form>
    )
}

export default ChangePassword
