import React from 'react'
import '../component/CSS/Header.css'  

function Header() {
  return (
    <div>
     <div className='main_div'>
        <ul>
            <li><a href="#home">BUY NOW</a></li>
            <li><a href="#news">BLOG</a></li>
            <li><a href="/contact">CONTACT</a></li>
            <li><a href="/product">PRODUCT</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/">HOME</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header