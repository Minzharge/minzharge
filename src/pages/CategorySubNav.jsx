import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

function CategorySubNav() {
  // const [selected, setSelected] = useState(false)
    // useEffect(() => {

    // }, [])

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
            <NavLink className='p-2 m-2 md:m-5' to='/products/all-category' end style={navStyle}>All Category</NavLink>
            <NavLink className='p-2 m-2 md:m-5' to='../categories/cargo_bikes' end style={navStyle}>Cargo Bikes</NavLink>
            <NavLink className='p-2 m-2 md:m-5' to='../categories/cargo_cycles' style={navStyle}>Cargo Cycles</NavLink>
            <NavLink className='p-2 m-2 md:m-5' to='../categories/cycles' style={navStyle}>Cycles</NavLink>
            <NavLink className='p-2 m-2 md:m-5' to='../categories/lifters' style={navStyle}>Lifters</NavLink>
            <NavLink className='p-2 m-2 md:m-5' to='../categories/loaders' style={navStyle}>Loaders</NavLink>
            <NavLink className='p-2 m-2 md:m-5' to='../categories/scooters' style={navStyle}>Scooters</NavLink>
    </div>
        <Outlet />
    <div className='mb-20'></div>
    </>
  )
}

export default CategorySubNav