import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 shadow-md bg-green-600'>
            <div className="">Logo</div>
            <div className="flex justify-between items-center gap-4">
                <p>Apply</p>
                <p>RECOMMEND</p>
                <button>Login</button>
            </div>
    </div>
  )
}
