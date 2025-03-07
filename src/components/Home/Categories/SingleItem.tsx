import Image from 'next/image'
import Link from 'next/link'

const SingleItem = ({ title, img }: { title: string, img: string }) => {
    return (
        <Link href="/categories" className='group flex flex-col mx-auto items-center justify-center my-4'>
            <div className='rounded-full m-2 bg-gray-100 w-full p-6 h-32.5 max-w-[130px] flex items-center justify-center'>
                <Image src={img} alt="Category" width={70} height={70} />
            </div>
            <div className='relative font-medium text-medium pt-2 duration-500 group-hover:bg-[length:100%_1px] hover:bg-[length:100%_3px] group-hover:text-[#3c50e0]'>
                <h3>{title}</h3>
                <span className="absolute bottom-0 left-0 h-[0.25px] bg-[#3c50e0] transition-all duration-500 w-0 group-hover:w-full"></span>
            </div>

        </Link>
    )
}

export default SingleItem
