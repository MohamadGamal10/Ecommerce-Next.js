"use client";
import { useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getUserAddress } from "@/actions/addresses/getUserAddress";
import { IAddress } from "@/types/address";
import { createCashOrder } from "@/actions/order/createCashOrder";
import { getUserData } from "@/actions/user/getUserData";
import { notify } from "@/hooks/useNotifaction";
import { getCartData } from "@/actions/cart/getCartData";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [address, setAddress] = useState([]);
    const [choosedAddress, setChoosedAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [cartId, setCartId] = useState("");
    const [price, setPrice] = useState(0);

    console.log(selectedOption)
    console.log(choosedAddress)
    console.log(phone)
    console.log(price)

    const formData = new FormData();
    formData.append("details", choosedAddress)
    formData.append("phone", phone)

    const handleCheck = (value: string) => {
        setSelectedOption(value);
    };

    useEffect(() => {
        const get = async () => {
            const response = await getUserAddress();
            if (response && response.data) {
                setAddress(response.data)
            }
        }
        get()
    }, []);

    useEffect(() => {
        const get = async () => {
            const responseU = await getUserData();
            const responseC = await getCartData();

            if (responseU && responseU.data) {
                setPhone(responseU.data.phone)
            }

            if (responseC && responseC.data) {
                setCartId(responseC.data._id)
                setPrice(responseC.data.totalCartPrice)
            }
        }
        get()
    }, []);

    const handleChooseAddress = (alias: string) => {
        setChoosedAddress(alias);
        console.log(alias);
    }

    const handleOrder = async () => {
        // const data = {
        //     paymentMethod: selectedOption,
        //     address: address[0]
        // }
        // console.log(data);
        if(selectedOption === ""){
           notify("من فضلك قم باختيار طريقة الدفع", "warning")
           return;
        }

        if(choosedAddress === ""){
           notify("من فضلك قم باختيار عنوان", "warning")
           return;
        }

        if (selectedOption === "cash") {
            const response = await createCashOrder(cartId, formData)
            if (response && response.status === "success") {
                notify("تم انشاء الطلب بنجاح", "success");
                router.push("/user/allorders");
            }else{
                notify("لم يتم انشاء الطلب", "error");
            }
        }

    }

    return (
        <div className="bg-gray-100">
            <div className="container">
                <div className="py-10">
                    <h1 className="text-2xl ms-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 uppercase drop-shadow-md">
                        Choose payment method
                    </h1>

                    <div className="bg-white mt-4 rounded-md p-6">
                        <div className="w-[300px]">
                            <fieldset className="space-y-3">
                                <legend className="sr-only">Delivery</legend>

                                <div>
                                    <label
                                        htmlFor="DeliveryStandard"
                                        className={`flex items-center justify-between gap-4 rounded border p-3 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50 ${selectedOption === "standard"
                                            ? "border-blue-600 ring-1 ring-blue-600"
                                            : "border-gray-300 bg-white"
                                            }`}
                                    >
                                        <div>
                                            <p className="text-gray-900">Cash on delivery</p>
                                        </div>

                                        <input
                                            type="radio"
                                            name="cash"
                                            value="cash"
                                            id="cash"
                                            className="size-5 border-gray-300"
                                            checked={selectedOption === "cash"}
                                            onChange={() => handleCheck("cash")}
                                        />
                                    </label>
                                </div>

                                <div>
                                    <label
                                        htmlFor="DeliveryPriority"
                                        className={`flex items-center justify-between gap-4 rounded border p-3 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50 ${selectedOption === "priority"
                                            ? "border-blue-600 ring-1 ring-blue-600"
                                            : "border-gray-300 bg-white"
                                            }`}
                                    >
                                        <div>
                                            <p className="text-gray-900">Credit Card / Visa</p>
                                        </div>

                                        <input
                                            type="radio"
                                            name="visa"
                                            value="visa"
                                            id="visa"
                                            className="size-5 border-gray-300"
                                            checked={selectedOption === "visa"}
                                            onChange={() => handleCheck("visa")}
                                        />
                                    </label>
                                </div>
                            </fieldset>
                        </div>

                        <Menu as="div" className="relative inline-block mt-4 text-left">
                            <div>
                                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                                    {choosedAddress ? choosedAddress : "Choose a shipping address"}
                                    <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                                </MenuButton>
                            </div>

                            <MenuItems
                                transition
                                className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                            >
                                <div className="py-1">
                                    {
                                        address && address.map((item: IAddress) => {
                                            return (
                                                <MenuItem key={item._id} >
                                                    <span
                                                    onClick={() => handleChooseAddress(item.alias)}
                                                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                                    >
                                                        {item.alias}
                                                    </span>
                                                </MenuItem>
                                            )
                                        })
                                    }
                                </div>
                            </MenuItems>
                        </Menu>
                    </div>

                    <div className="mt-3 flex gap-2">
                        <span className="w-40 h-11 flex items-center justify-center text-sm rounded-md bg-white border border-gray-300 shadow-sm">
                            {price} EGP
                        </span>
                        <Button onClick={handleOrder} className="w-40 cursor-pointer h-11 text-sm rounded-md">Submit Order</Button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
