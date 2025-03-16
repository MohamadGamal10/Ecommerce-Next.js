"use client";

import { signinAction } from "@/actions/Auth/signinAction"
import { notify } from "@/components/Common/useNotifaction"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { SigninFormData, SigninSchema } from "@/schemas/signinSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link"
import { useState, useTransition } from "react";
// import { useActionState, useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify"


export default function SigninPage() {
    // const [state, formAction, pending] = useActionState(signinAction, {
    //     success: false,
    //     data: {},
    // })
    // console.log(state)

    // useEffect(() => {
    //     if (state.success) {
    //         localStorage.setItem("token", state.data.token);
    //         localStorage.setItem("user", JSON.stringify(state.data.data));
    //         notify("تم تسجيل الدخول بنجاح", "success");
    //         setTimeout(() => {
    //             window.location.href = "/";
    //         }, 3000)
    //     }
    // }, [state.success, state.data])

    const [pending, startTransition] = useTransition();
    const [serverError, setServerError] = useState<string | null>(null);

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SigninFormData>({
        resolver: zodResolver(SigninSchema)
    })
    const onSubmit: SubmitHandler<SigninFormData> = async (data) => {

        setServerError(null);

        const formData = new FormData();
        formData.append("email", data.email);
        formData.append("password", data.password);

        startTransition(async () => {
            try {
                const result = await signinAction({ success: false, data: { email: "", password: "" } }, formData);
                if (result.success) {
                    localStorage.setItem("token", result.data.token);
                    localStorage.setItem("user", JSON.stringify(result.data.data));
                    notify("تم تسجيل الدخول بنجاح", "success");
                    setTimeout(() => {
                        window.location.href = "/";
                    }, 3000)
                }
            } catch (error) {
                console.error("Signup error:", error);
                setServerError("خطأ في البريد الالكتروني او كلمة المرور");
            }
        })

    }
    return (
        <>
            <div className="bg-white p-4 ">
                <div className="container">
                    <div className="flex justify-between  items-center">
                        <h1 className="text-4xl font-bold">Signin</h1>
                        <div>
                            <nav aria-label="Breadcrumb">
                                <ol className="flex items-center gap-1 text-md text-gray-600 ">
                                    <li>
                                        <Link href="/" className="block transition text-gray-700 hover:text-blue-700"> Home </Link>
                                    </li>
                                    <li className="rtl:rotate-180">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="size-4"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m9 20.247 6-16.5" />
                                        </svg>
                                    </li>
                                    <li>
                                        <Link href="/signin" className="block transition text-blue-700"> Signin </Link>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 border-2 py-20 ">
                <div className="container">
                    <div className="flex flex-col max-w-[550px] space-y-3 bg-white  mx-auto p-8 md:p-11 rounded-md">
                        <h1 className="text-3xl font-bold text-center">Sign In to Your Account</h1>
                        <p className="text-gray-500 text-center font-medium">Enter your detail below</p>
                        {serverError && <p className="text-red-500 text-sm text-center">{serverError}</p>}
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    {...register("email")}
                                    autoComplete="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="mt-2 p-3 w-full rounded-lg border-[3.5px] focus:border-blue-600 focus:shadow-input focus:ring-1 focus:ring-blue-900 bg-gray-100 shadow-xs sm:text-sm"
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700"> Password <span className="text-red-500">*</span></label>
                                <input
                                    type="password"
                                    {...register("password")}
                                    id="password"
                                    autoComplete="current-password"
                                    placeholder="Enter your password"
                                    className="mt-2 p-3 w-full rounded-lg border-[3.5px] focus:border-blue-600 focus:shadow-input focus:ring-1 focus:ring-blue-900 bg-gray-100 shadow-xs sm:text-sm"
                                />
                            </div>
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                            <Button disabled={isSubmitting} className={cn(buttonVariants({ variant: "default" }), "px-10 py-6 text-md w-full cursor-pointer rounded-lg ease-in-out duration-300 hover:bg-[#3c50e0]")}>{pending ? "Sign In..." : "Sign In"}</Button>
                            <div className="flex flex-col space-y-2.5 text-gray-500 text-center">
                                <Link href="/forget-password" className="hover:text-blue-700 duration-300">Forget your password?</Link>
                                <span>Don&apos;t have an account? <Link href="signup" className="text-black hover:text-blue-700 duration-300">Sign Up Now!</Link></span>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

