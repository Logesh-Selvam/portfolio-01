import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.png'
import menu_cross from '../../assets/menu_cross.png'


const Navbar = () => {

  const [menu,setMenu] = useState("home");

  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right="0";
  }

  const closeMenu = ()=>{
    menuRef.current.style.right="-350px";
  }


  return (
    <div className='navbar'>
        <div className="logo">
          <samp>L</samp>ogesh
          <img width={30} height={30} src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
        </div>
      <ul ref={menuRef} className="nav-menu">
        <img width={30} height={30} src={menu_cross} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src="" alt="" />:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src="" alt="" />:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src="" alt="" />:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Projects</p></AnchorLink>{menu==="work"?<img src="" alt="" />:<></>}</li> 
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src="" alt="" />:<></>}</li>
      </ul>
      <div className="nav-connect">Say hii..</div>
    </div>
  )
}

export default Navbar
