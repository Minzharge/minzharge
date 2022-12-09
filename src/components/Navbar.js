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
        color: isActive ? 'yellow' : 'white'
    })

    const handleOpen = () => {
        setExpand(!expand);
    }
    console.log('navbar', expand);
    const [buyev, setBuyev] = useState(false);
    const [chrge,setChrge]  = useState(false)
    const [mob,setMob] = useState(false)
    const handleOpens = () => {
        setBuyev(!buyev);
      
      };
    const handlechargeopen = () =>{
        setChrge(!chrge)
    }
 const mobileopen = () =>{
    setMob(!mob)
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
                    <div className={'absolute top-0 left-0 w-[75%] min-h-screen bg-black text-white  flex flex-col justify-center items-center text-3xl z-10'}>
                     
               <NavLink className='navClass mt-6' to={homePath} end style={mobNavStyle} onClick={() => setExpand(!expand)}>Home</NavLink>
                        <div className=''>
                        <button 
                        onClick={mobileopen}>Buy Ev
                          <i onClick={mobileopen} className={mob ? "fa fa-chevron-up text-white ml-1" : 
            "fa fa-chevron-down ml-1 text-white"} aria-hidden="true"></i>
                        </button>
                      
                        </div>
                        {mob  ?(
                      <>
<NavLink className='navClass' to='/Chargers' style={mobNavStyle} 
                        onClick={() => setExpand(!expand)}>Brands</NavLink>
                        <NavLink className='navClass' to='/Chargers' style={mobNavStyle} 
                        onClick={() => setExpand(!expand)}>Categories</NavLink>
                       </>

                       ): null}
						<NavLink className='navClass' to='/Chargers' style={mobNavStyle} 
                        onClick={() => setExpand(!expand)}>Chargers</NavLink>
                        <NavLink className='navClass' to='/Blogs' style={mobNavStyle} 
                        onClick={() => setExpand(!expand)}>Blogs</NavLink>
                        <NavLink className='navClass' to='/Dealers' style={mobNavStyle}
                         onClick={() => setExpand(!expand)}>Dealers</NavLink>
                       
                        <NavLink className='navClass' to='/contact' style={mobNavStyle} 
                        onClick={() => setExpand(!expand)}>Call Us</NavLink>                       
                      
                     
                    </div>
                    </>) : <FaAlignJustify size={20}className='z-20 text-black ' onClick={handleOpen}/>}
        </div>
    </div>
    </>
  )
}

export default Navbar