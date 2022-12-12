import React, { createContext, useContext, useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import {FaAlignJustify, FaTimes} from 'react-icons/fa'
import { NavbarContext } from '../context/NavbarStatus';
import './style.css';
import 'font-awesome/css/font-awesome.min.css';

// setting url dynamically based on local or prod server
const assetUrl = process.env.NODE_ENV === 'production' ? '/minzharge/assets/': '/minzharge/assets';
const homePath = process.env.NODE_ENV === 'production' ? '/minzharge': '/';

function Navbar() {
    const {expand, setExpand} = useContext(NavbarContext)

    const navStyle = ({isActive}) => ({
        color: isActive ? 'Yellow' : 'White'
    })
    
    const mobNavStyle = ({isActive}) => ({
        color: isActive ? 'yellow' : 'black'
    })

    const handleOpen = () => {
setExpand(!expand)
 }
    console.log('navbar', expand);
    const [buyev, setBuyev] = useState(false);
    const [chrge,setChrge]  = useState(false)
    const [mob,setMob] = useState(false)
    const [mobtwo, setMobtwo] = useState(false)
        const handleOpens = () => {
        setBuyev(!buyev);
      
      };
    const handlechargeopen = () =>{
        setChrge(!chrge)
    }
 const mobileopen = () =>{
    setMob(!mob)
 
 }
 const mobiletwo = () =>{
  setMobtwo(!mobtwo)
 }
   
  return (
    <>
    <div className='flex justify-between bg-[#43aa8b]'>
    <div className='ml-5 md:ml-12 z-20'>
            <NavLink to={homePath} end>
                <img src={assetUrl+"/logo/whitelogo.png"} alt="Minzharge Logo" width={75}/>
            </NavLink>
        </div>
        {/* For Larger screens laptop and desktops */}
        <div className='hidden md:flex text-base'>
            <NavLink className='navClass' to={homePath} end style={navStyle}>Home</NavLink>
            <div className='pt-5 px-6'>
            <button onClick={handleOpens} className="text-white">Buy Ev</button>
            <i onClick={handleOpens} className={buyev ? "fa fa-chevron-up text-white ml-1" : 
            "fa fa-chevron-down ml-1 text-white"} aria-hidden="true"></i>
            </div>
            {buyev ? (
        <ul className="menu">
          <li className="menu-item">
          <NavLink className='navClass'onClick={handleOpens}  to='/Chargers'>Brands</NavLink>
          </li>
          <li className="menu-item">
          <NavLink className='navClass'onClick={handleOpens}  to='/Blogs'>Categories</NavLink>
          </li>
        </ul>
      ) : null}
       <div className='pt-5 px-6'>
            <button onClick={handlechargeopen} className="text-white">Chargers</button>
            <i onClick={handlechargeopen} className={chrge ? "fa fa-chevron-up text-white ml-1" : "fa fa-chevron-down ml-1 text-white"} aria-hidden="true"></i>
            </div>
            {chrge ? (
        <ul className="menu menu-second">
          <li className="menu-item">
          <NavLink className='navClass'onClick={handlechargeopen}    to='/Chargers'>Brands</NavLink>
          </li>
          <li className="menu-item">
          <NavLink className='navClass'onClick={handlechargeopen}  to='/Blogs'>Categories</NavLink>
          </li>
        </ul>
      ) : null}
    

            <NavLink className='navClass' to='/Blogs' style={navStyle}>Blogs</NavLink>
            <NavLink  className='navClass' to='/Dealers' style={navStyle}>Register with Min-Zharge</NavLink>
            <NavLink  className='navClass' to='/investors' style={navStyle}>Investors</NavLink>
            {/* <NavLink className='navClass' to='/products/all' style={navStyle}>Products</NavLink> */}
        </div>
        <div className='hidden md:flex'>
        <NavLink className='navClass' to='/contact' style={navStyle}>Call Us</NavLink>
        </div>

        {/* For Smaller screens mobiles and ipads */}
        <div className='flex md:hidden justify-center items-center p-4'>
                {expand ? (<>
                    <FaTimes size={20} className='z-20 text-white'onClick={handleOpen}/>
                    <div class="w-60 h-full shadow-md  top-0 left-0  bg-white px-1 absolute  text-3xl z-10 ">
  <ul class="relative top-20">
    <li class="relative">
      <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis
       whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
        href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark"> <NavLink  to={homePath} end style={mobNavStyle} onClick={() => setExpand(!expand)}>Home</NavLink>
        </a>
    </li>
    <hr class=""></hr>

    <li class="relative" id="sidenavEx1">
      <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden
       text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900
        hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"  onClick={mobileopen} >
        <span>Buy Ev</span>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
        </svg>
      </a>
      {mob ? (
      <ul class="relative">
        <li class="relative">
          <a href="#!" class="flex items-center text-xs py-4 pl-12 
          pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded
           hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" 
           ><NavLink  to='/Chargers' style={mobNavStyle} 
           onClick={() => setExpand(!expand)}>Brands</NavLink></a>
        </li><hr class="mx-4"></hr>

        <li class="relative">
          <a href="#!" class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis 
          whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">Category</a>
        </li>
      </ul>
      ):null}
    </li>
    <hr class=""></hr>

    <li class="relative" id="sidenavEx1">
      <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden
       text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900
        hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"  onClick={mobiletwo} >
        <span>Chargers</span>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
        </svg>
      </a>
      {mobtwo ? (
      <ul class="relative">
        <li class="relative">
          <a href="#!" class="flex items-center text-xs py-4 pl-12 
          pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded
           hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" 
           ><NavLink  to='/Chargers' style={mobNavStyle} 
           onClick={() => setExpand(!expand)}>Brands</NavLink></a>
        </li><hr class="mx-4"></hr>

        <li class="relative">
          <a href="#!" class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis 
          whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100
           transition duration-300 ease-in-out"><NavLink  to='/Chargers' style={mobNavStyle} 
          onClick={() => setExpand(!expand)}>Categories</NavLink></a>
        </li>
      </ul>
      ):null}
    </li>
    <hr class=""></hr>
    <li class="relative">
      <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap 
      rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!"
       data-mdb-ripple="true" data-mdb-ripple-color="dark"> <NavLink  to='/Blogs' style={mobNavStyle} 
       onClick={() => setExpand(!expand)}>Blogs</NavLink></a>
    </li>
    <hr class=""></hr>
    <li class="relative">
      <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap 
      rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!"
       data-mdb-ripple="true" data-mdb-ripple-color="dark"><NavLink  to='/Dealers' style={mobNavStyle}
       onClick={() => setExpand(!expand)}>Register with Minzharge</NavLink></a>
    </li>
    <hr class=""></hr>
    <li class="relative">
      <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap 
      rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!"
       data-mdb-ripple="true" data-mdb-ripple-color="dark"><NavLink  to='/Dealers' style={mobNavStyle}
       onClick={() => setExpand(!expand)}>Dealers</NavLink></a>
    </li>
    <hr class=""></hr>
    <li class="relative">
      <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap 
      rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!"
       data-mdb-ripple="true" data-mdb-ripple-color="dark"> <NavLink className='text-gray-700' style={mobNavStyle}   to='/contact'
       onClick={() => setExpand(!expand)}>Call Us</NavLink> </a>
    </li>
  </ul>
</div>

              
                    </>) : <FaAlignJustify size={20}className='z-20 text-black ' onClick={handleOpen}/>}
        </div>
</div>
    </>
  )
}

export default Navbar