"use client";

import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SignupFormData, SignupSchema } from "@/schemas/signupSchema";
import { useState, useTransition } from "react";
import { signupAction } from "@/actions/Auth/signupAction";
import { notify } from "@/hooks/useNotifaction";
import { useRouter } from "next/navigation";


export default function SignupPage() {
    // with useActionState
    // const [state, formAction, pending] = useActionState(signupAction, {
    //     success: false,
    //     data: {},
    // })
    // console.log(state)

    // useEffect(() => {
    //     if (state.success) {
    //         localStorage.setItem("token", state.data.token);
    //         localStorage.setItem("user", JSON.stringify(state.data.data));
    //         notify("تم تسجيل الحساب بنجاح", "success");
    //         setTimeout(() => {
    //             window.location.href = "/";
    //         }, 3000)
    //     }
    // }, [state.success, state.data])

    // with react hook form
    const router = useRouter();
    const [pending, startTransition] = useTransition();
    const [serverError, setServerError] = useState<string | null>(null);

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignupFormData>({
        resolver: zodResolver(SignupSchema)
    })
    const onSubmit: SubmitHandler<SignupFormData> = async (data) => {
        setServerError(null);

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("phone", data.phone);
        formData.append("password", data.password);
        formData.append("confirmPassword", data.confirmPassword);

        startTransition(async () => {
            try {
                const result = await signupAction({
                    success: false, data: {
                        name: "",
                        email: "",
                        password: ""
                    }
                }, formData);

                if (result.success) {
                    notify("تم تسجيل الحساب بنجاح", "success");
                    router.push("/");
                }
            } catch (error) {
                console.error("Signup error:", error);
                setServerError("Signup failed. Please try again.");
            }
        })

    }



    return (
        <>
            <div className="bg-white p-4 ">
                <div className="container">
                    <div className="flex justify-between  items-center">
                        <h1 className="text-4xl font-bold">Signup</h1>
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
                                        <Link href="/signup" className="block transition text-blue-700"> Signup </Link>
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
                        <h1 className="text-3xl font-bold text-center">Create an Account</h1>
                        <p className="text-gray-500 text-center font-medium">Enter your detail below</p>
                        {serverError && <p className="text-red-500 text-sm text-center">{serverError}</p>}
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Full Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    id="name"
                                    {...register("name")}
                                    placeholder="Enter your full name"
                                    className="mt-2 p-3 w-full rounded-lg border-[3.5px] focus:border-blue-600 focus:shadow-input focus:ring-1 focus:ring-blue-900 bg-gray-100 shadow-xs sm:text-sm"
                                />
                            </div>
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                            <div>
                                <label htmlFor="UserEmail" className="block text-sm font-medium text-gray-700"> Email Address <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    id="UserEmail"
                                    {...register("email")}
                                    placeholder="Enter your email"
                                    className="mt-2 p-3 w-full rounded-lg border-[3.5px] focus:border-blue-600 focus:shadow-input focus:ring-1 focus:ring-blue-900 bg-gray-100 shadow-xs sm:text-sm"
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700"> Phone <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    id="phone"
                                    {...register("phone")}
                                    placeholder="Enter your phone number"
                                    className="mt-2 p-3 w-full rounded-lg border-[3.5px] focus:border-blue-600 focus:shadow-input focus:ring-1 focus:ring-blue-900 bg-gray-100 shadow-xs sm:text-sm"
                                />
                            </div>
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700"> Password <span className="text-red-500">*</span></label>
                                <input
                                    type="password"
                                    id="password"
                                    {...register("password")}
                                    placeholder="Enter your password"
                                    className="mt-2 p-3 w-full rounded-lg border-[3.5px] focus:border-blue-600 focus:shadow-input focus:ring-1 focus:ring-blue-900 bg-gray-100 shadow-xs sm:text-sm"
                                />
                            </div>
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700"> Re-type Password <span className="text-red-500">*</span></label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    {...register("confirmPassword")}
                                    placeholder="Enter your password"
                                    className="mt-2 p-3 w-full rounded-lg border-[3.5px] focus:border-blue-600 focus:shadow-input focus:ring-1 focus:ring-blue-900 bg-gray-100 shadow-xs sm:text-sm"
                                />
                            </div>
                            {errors.confirmPassword && <p className="text-red-500 text-sm mt-">{errors.confirmPassword.message}</p>}

                            <Button disabled={isSubmitting} type="submit" className={cn(buttonVariants({ variant: "default" }), "px-10 text-md  py-6 w-full cursor-pointer rounded-lg ease-in-out duration-300 hover:bg-[#3c50e0]")}>{pending ? "Creating Account..." : "Create Account"}</Button>
                            <div className="flex flex-col space-y-2.5 text-gray-500 text-center">
                                <span>Already have an account? <Link href="signin" className="text-black hover:text-blue-700 duration-300">Sign In Now!</Link></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}


