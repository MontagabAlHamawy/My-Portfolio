'use client';
 
import { Metadata } from 'next';
import Error from 'next/error';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Not Found",
  description: "Error 404 Page not found",
};
 
export default function NotFound() {
  
  return (
    <html lang="en">
      <body className='w-[100vw] h-[100vh] flex gap-4  justify-center items-center flex-col'>
        <Image
        width={500}
        height={400}
        alt='error'
        src={"/error.png"}
        className='p-0 mt-[-70px] xl:mt-[-90px]'
        />
        <p className='text-accent text-2xl mt-[-70px] xl:mt-[-90px]'>Page Not Found</p>
        <Link
          href={"/"}
          aria-label="home"
          className=""
        >
          <div
            className="btn btn-sm btn-accent w-[164px] mt-5 xl:mb-0"
          >
            <p className="text-base font-400 text-white">Home</p>
          </div>
        </Link>
      </body>
    </html>
  );
}