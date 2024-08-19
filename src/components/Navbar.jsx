import React, { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const handle = (e) => {
    if (e.target.id === "sidebar") {
      setOpen(false);
    }
  }
  return (
    <div className='navbar'>
      <div className='main-navbar'>
        <h1>To-Do-List</h1>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Sign Up</li>
          <li>Login</li>
        </ul>
        <p className='menu' onClick={() => setOpen(!open)}><i class="fas fa-bars"></i>
        </p>
        {open && <div className='sidebar' id='sidebar' onClick={(e)=>handle(e)}>
          <div className='sidebar-main' >
            <h1>To-Do-List</h1>
            <ul className='list'>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Sign Up</li>
              <li>Login</li>
            </ul>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Navbar