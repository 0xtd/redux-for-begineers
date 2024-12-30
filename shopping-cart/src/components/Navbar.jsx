import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-500 p-2">
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/' className='text-white text-2xl font-bold'>Shopping</Link>
        <ul>
          <li className='inline-block mx-2'>
            <Link to='/' className='text-white'>Home</Link>
          </li>
          <li className='inline-block mx-2'>
            <Link to='/products' className='text-white'>Products</Link>
          </li>
          <li className='inline-block mx-2'>
            <Link to='/cart' className='text-white'>Cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar