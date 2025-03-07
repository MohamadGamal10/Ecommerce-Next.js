import Image from "next/image";
import { Fragment } from "react";

interface IfeatureData {
    img: string;
    title: string;
    description: string;
}


const featureData: IfeatureData[] = [
    {
        img: "/images/icons/icon-01.svg",
        title: "Free Shipping",
        description: "For all orders $200",
    },
    {
        img: "/images/icons/icon-02.svg",
        title: "1 & 1 Returns",
        description: "Cancellation after 1 day",
    },
    {
        img: "/images/icons/icon-03.svg",
        title: "100% Secure Payments",
        description: "Gurantee secure payments",
    },
    {
        img: "/images/icons/icon-04.svg",
        title: "24/7 Dedicated Support",
        description: "Anywhere & anytime",
    },
];

const HeroFeature = () => {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-2 items-center justify-center mt-7 ">

            {featureData.map((item, index) => (
                <Fragment key={index}>
                    <div className="flex mx-4 my-3 ">
                        <Image className="me-3" src={item.img} alt={item.title} width={40} height={41} />
                        <div className="flex flex-col">
                            <h3 className="text-lg font-medium ">{item.title}</h3>
                            <p className="text-gray-500 text-sm">{item.description}</p>
                        </div>
                    </div>
                </Fragment>
            ))
            }

        </div >
    )
}

export default HeroFeature
