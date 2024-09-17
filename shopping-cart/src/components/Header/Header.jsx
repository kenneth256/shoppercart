import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className='flex justify-between h-20 max-w-6xl mx-auto'>
       <Link to={'/'}>
       <div className='ml-5 items-center'>
        <h1 className='text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide'>
            REACT REDUX SHOPPING CART
        </h1>
       </div>
       </Link>
       <ul className=' flex items-center list-none space-x-6 text-gray-800 font-semibold'>
        <Link to={'/'}>
        <li className='cursor-pointer'>Home</li>
        </Link>
        <Link to={'/cart'}>
        <li className='cursor-pointer'>Cart</li>
        </Link>

       </ul>
      </nav>
    </div>
  )
}

export default Header