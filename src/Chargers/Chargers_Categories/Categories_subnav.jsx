import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

function Categories_subnav() {
 
    const navStyle = ({isActive}) => ({
        // color: isActive ? 'green' : 'black',
        backgroundColor: isActive ? 'green' : 'white',
        color: isActive ? 'white' : 'black',
        borderRadius: '50px',
        fontSize: '13px',
        width: '120px',
        height: '35px',
        textAlign: "center"
    })
    
  return (
    <>
    <div className='flex sm:justify-center flex-wrap my-10'>
            <NavLink className='p-2 m-2 md:m-5' to='/Charger-Categories/all' end style={navStyle}>All Categories</NavLink>
            <NavLink className='p-2 m-2 md:m-5' to='/Chargers/DC_chargers' end style={navStyle}>DC Chargers</NavLink>
            <NavLink className='p-2 m-2 md:m-5' to='/Chargers/AC_chargers' style={navStyle}>AC Chargers</NavLink>
    </div>
        <Outlet />
    <div className='mb-20'></div>
    </>
  )
}

export default Categories_subnav