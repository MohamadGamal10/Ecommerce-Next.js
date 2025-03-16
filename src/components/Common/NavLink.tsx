"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    activeClassName?: string;
}

const NavLink: React.FC<NavLinkProps> = ({
    href,
    children,
    className = "",
    activeClassName = "text-white bg-blue-500",
}) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} className={`${className} border-b p-2 cursor-pointer font-semibold ${isActive ? activeClassName : ""} hover:bg-blue-500 hover:text-white ease-out duration-300 rounded-md`}>
            {children}
        </Link>
    );
};

export default NavLink;
