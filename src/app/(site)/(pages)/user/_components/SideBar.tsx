import NavLink from "@/components/Common/NavLink"

const SideBar = () => {
    return (
        <div className='flex flex-col bg-white text-center rounded-md'>
            <NavLink href="/user/profile">My Profile</NavLink>
            <NavLink href="/user/allorders">Orders Management</NavLink>
            <NavLink href="/user/favoriteproducts">Favourite Products</NavLink>
            <NavLink href="/user/addresses">Personal Addresses</NavLink>
        </div>
    )
}

export default SideBar
