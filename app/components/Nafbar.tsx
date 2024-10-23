import React from 'react'
import Link from 'next/link'

const Nafbar = () => {
  return (
    <div>
      <ul className='flex gap- justify-around p-4 bg-blue-900'>
        <li>
          <Link href="#" className='text-blue-300'>Home</Link>
        </li>
        <li>
          <Link href="#" className='text-blue-300'>About</Link>
        </li>
        <li>
          <Link href="#" className='text-blue-300'>Services</Link>
        </li>
        <li>
          <Link href="#" className='text-blue-300'>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nafbar