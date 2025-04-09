"use client";

import { RefreshCcw } from 'lucide-react';
import Image from 'next/image';

export default function error() {
  return (
    <section className="overflow-hidden py-20 bg-gray-2">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="bg-white rounded-xl shadow-1 px-4 py-10 sm:py-15 lg:py-20 xl:py-25">
          <div className="text-center">
            <Image
              src="/images/404.svg"
              alt="404"
              className="mx-auto mb-8 w-1/2 sm:w-auto"
              width={288}
              height={190}
            />

            <h2 className="font-medium text-dark text-xl sm:text-2xl mb-3">
              Something went wrong!
            </h2>
            {/* 
                                <p className="max-w-[410px] w-full mx-auto mb-7.5">
                                    The page you were looking for appears to have been moved,
                                    deleted or does not exist.
                                </p> */}

            <button
              onClick={
                // Attempt to recover by trying to re-render the segment
                () => { window.location.reload(); }
              }
              className="inline-flex cursor-pointer items-center gap-2 font-medium text-white bg-blue-600 py-3 px-6 rounded-md ease-out duration-200 hover:bg-blue-700"
            >
              <RefreshCcw />
              Try again
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}