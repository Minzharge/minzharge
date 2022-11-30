import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

function ProductsSubNav() {
    // const [selected, setSelected] = useState(false)
    // useEffect(() => {

    // }, [])

    const navStyle = ({isActive}) => ({
        //color: isActive ? 'green' : 'black',
        backgroundColor: isActive ? 'green' : 'white',
        color: isActive ? 'white' : 'black',
        borderRadius: '30px',
        fontSize: '13px',
        width: '120px',
        height: '35px',
        textAlign: "center"
    })
    
  return (
    <>
<div className=' flex sm:justify-center my-4 flex-wrap '>
            <NavLink className='p-2 m-2 md:m-5' to='/products/all' end style={navStyle}>All</NavLink>
            <NavLink className='p-2 m-2 md:m-5' to='../brands/Nexzu' end style={navStyle}>NEXU</NavLink>
            <NavLink className='p-2 m-2 md:m-5' to='../brands/Rithul' style={navStyle}>RITHUL</NavLink>
            <NavLink className='p-2 m-2 md:m-5' to='../brands/Dexpress' style={navStyle}>DEXPRESS</NavLink>
            <NavLink className='p-2 m-2 md:m-5' to='../brands/Taark' style={navStyle}>TAARK</NavLink>
            <NavLink className='p-2 m-2 md:m-5' to='../brands/Gemopai' style={navStyle}>GEMOPAI</NavLink>
            <NavLink className='p-2 m-2 md:m-5' to='../brands/Semzy' style={navStyle}>SEMZY</NavLink>
            <NavLink className='p-2 m-2 md:m-5' to='../brands/Battre' style={navStyle}>Batt:RE</NavLink>
    </div>
        <Outlet />
    <div className='mb-10'></div>
    </>
  )
}

export default ProductsSubNav