import Image from 'next/image'

const SingleItem = () => {
    return (
        <div className="flex flex-col space-y-5 shadow-md rounded-lg p-5 bg-white">
            <div className="flex space-x-1">
                {
                    Array.from({ length: 5 }).map((_, i) => (
                        <Image
                            key={i}
                            src="/images/icons/icon-star.svg"
                            alt="star icon"
                            width={15}
                            height={15}
                        />
                    ))
                }
            </div>
            <p>Lorem ipsum dolor sit amet, adipiscing elit. Donec malesuada justo vitaeaugue suscipit beautiful vehicula</p>
            <div className="flex">
                <Image
                    src="/images/users/user-01.jpg"
                    alt="user"
                    width={50}
                    height={50}
                // className="rounded-full"
                />
                <div className="flex flex-col ml-3">
                    <span className="font-medium">John Doe</span>
                    <span className="text-gray-500 text-sm">CEO, Company</span>
                </div>
            </div>
        </div>
    )
}

export default SingleItem
