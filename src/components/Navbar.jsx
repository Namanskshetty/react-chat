import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>TTG Chat</span>
      <div className='user'>
        <img src='https://namanskshetty.in.net/images/naman.jpg' alt=''/>
        <span>Naman</span>
        <button>Logout</button>
      </div>
    </div>
  )
}
export default Navbar;