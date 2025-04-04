"use client";
import { addAddressAction } from "@/actions/addresses/addAddressAction";
import { notify } from "@/hooks/useNotifaction";
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    // AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const AddModal = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        alias: '',
        details: '',
        phone: ''
    });
    const [errors, setErrors] = useState({
        alias: '',
        details: '',
        phone: ''
    });

    const validateForm = () => {
        let isValid = true;
        const newErrors = { alias: '', details: '', phone: '' };

        if (!formData.alias.trim()) {
            newErrors.alias = 'Name is required';
            isValid = false;
        }

        if (!formData.details.trim()) {
            newErrors.details = 'Details are required';
            isValid = false;
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone is required';
            isValid = false;
        } else if (!/^\d+$/.test(formData.phone)) {
            newErrors.phone = 'Invalid phone number (digits only)';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const response = await addAddressAction(null, new FormData(e.currentTarget));

            if (response.data.message === "Address added successfully") {
                setIsOpen(false);
                notify("تم اضافة العنوان بنجاح", "success");
                router.refresh();
            }
        } catch (error) {
            console.log("Error adding address:", error);
            notify("Failed to add address", "error");
        }
    }

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        setErrors(prev => ({ ...prev, [field]: '' }));
    };

    return (
        <div className="flex right-4 top-4">
            <AlertDialog open={isOpen} onOpenChange={(open) => {
                setIsOpen(open);
                if (!open) {
                    setFormData({ alias: '', details: '', phone: '' });
                    setErrors({ alias: '', details: '', phone: '' });
                }
            }}>
                <Button onClick={() => setIsOpen(true)} className="mx-auto mt-3 cursor-pointer p-5">
                    Add New Address
                </Button>
                <AlertDialogContent  className="md:w-[550px] w-[350px]">
                    <form onSubmit={handleSubmit}>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Add New Address</AlertDialogTitle>
                            
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="alias" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="alias"
                                        name="alias"
                                        value={formData.alias}
                                        onChange={(e) => handleInputChange('alias', e.target.value)}
                                        placeholder="Enter your full name"
                                        className="mt-2 p-3 w-full rounded-lg border-[3.5px] focus:border-blue-600 bg-gray-100 sm:text-sm"
                                    />
                                    {errors.alias && <p className="text-red-500 text-sm mt-1">{errors.alias}</p>}
                                </div>

                                <div>
                                    <label htmlFor="details" className="block text-sm font-medium text-gray-700">
                                        Details
                                    </label>
                                    <input
                                        type="text"
                                        id="details"
                                        name="details"
                                        value={formData.details}
                                        onChange={(e) => handleInputChange('details', e.target.value)}
                                        placeholder="Enter your address details"
                                        className="mt-2 p-3 w-full rounded-lg border-[3.5px] focus:border-blue-600 bg-gray-100 sm:text-sm"
                                    />
                                    {errors.details && <p className="text-red-500 text-sm mt-1">{errors.details}</p>}
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                        Phone
                                    </label>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        placeholder="Enter your phone number"
                                        className="mt-2 p-3 w-full rounded-lg border-[3.5px] focus:border-blue-600 bg-gray-100 sm:text-sm"
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
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

export default AddModal;