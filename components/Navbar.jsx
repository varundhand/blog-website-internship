import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 p-4 sticky top-0 shadow-md z-10'>
    <div className="mx-auto flex justify-between items-center">
        <Link
            className='text-white no-underline hover:text-gray-200 text-2xl font-semibold'
            href='https://varundhand.netlify.app/'
        >
            Varun Dhand
        </Link>
        <div className="flex space-x-6 items-baseline">
            <Link
                className='text-white no-underline hover:text-gray-200'
                href='#blogs'
            >
                Blogs
            </Link>
            <Link
                className='text-white no-underline hover:text-gray-200'
                href='#about-me'
            >
                About Me
            </Link>
            <div className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800'>
                <Link
                    className='relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'
                    href='#contact-me'
                >
                    Contact Me
                </Link>
            </div>
        </div>
    </div>
</nav>


  )
}

export default Navbar