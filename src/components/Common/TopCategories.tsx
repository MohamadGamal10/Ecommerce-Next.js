import getCategories from "@/actions/categories/getCategories";
import { Icategory } from "@/types/category"
import Link from "next/link"

const TopCategories = async({color="bg-gray-100"}: {color: string}) => {
    const categories = await getCategories();
  return (
    <div className={`flex  ${color} py-4 mb-10`}>
    <div className="container">
      {
        categories && categories.data.map((category: Icategory) => (
          <Link key={category._id} href={`/categories/${category._id}`} className="sm:mr-6 mr-2 font-small text-gray-700 hover:text-blue-600 duration-300 ease-out cap">{category.name}</Link>
        ))
      }
      <Link href={"/categories"} className="md:mr-3 mr-1 font-small text-gray-700 hover:text-blue-600 duration-300 ease-out cap">more</Link>
    </div>
  </div>
  )
}

export default TopCategories