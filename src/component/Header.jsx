import React from 'react'
import '../component/CSS/Header.css'  

function Header() {
  return (
    <div>
     <div className='main_div'>
        <ul>
            <li><a href="/contact">CONTACT</a></li>
            <li><a href="/product">NEWS</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/">HOME</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header