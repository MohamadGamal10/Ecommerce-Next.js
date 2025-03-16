import { ReactNode } from "react"
import SideBar from "./_components/SideBar"

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <section className='py-10 bg-gray-100'>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4  gap-4">
          <div className='md:col-span-3 order-last md:order-first'>
            {children}
          </div>
          <SideBar />
        </div>
      </div>
    </section>
  )
}

export default layout
