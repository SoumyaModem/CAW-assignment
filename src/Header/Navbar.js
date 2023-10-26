import React from 'react'
import "./Navbar.css"
import { PiShoppingCartThin } from "react-icons/pi"
import { IoIosArrowDown } from "react-icons/io"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div>
          <ul className="nav">
            <li className='item'><img src="https://reeco.io/assets/logo.44b75468.svg" className='logo-image'/></li>
            <li className='item'>Store</li>
            <li className='item'>Orders</li>
            <li className='item'>Analytics</li>
          </ul>
        </div>
        <div>
          <ul className='cart'>
            <PiShoppingCartThin className='cart' />
            <p className='cart'>Hello,James <IoIosArrowDown /></p>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Navbar