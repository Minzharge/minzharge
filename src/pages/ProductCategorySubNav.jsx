import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

function ProductCategorySubNav() {
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
            <NavLink className='p-2 m-2 md:m-5' to='/products-cat/all' end style={navStyle}>All Category</NavLink>
            <NavLink className='p-2 m-2 md:m-5' to='/categories/ThreeWheeler' end style={navStyle}>Three Wheelers</NavLink>
            <NavLink className='p-2 m-2 md:m-5' to='/categories/Cycles' style={navStyle}>Cycles</NavLink>
            <NavLink className='p-2 m-2 md:m-5' to='/categories/Fork_Lifts' style={navStyle}>Lifters</NavLink>
            <NavLink className='p-2 m-2 md:m-5' to='/categories/Loaders' style={navStyle}>Loaders</NavLink>
            <NavLink className='p-2 m-2 md:m-5' to='/categories/Scooters' style={navStyle}>Scooters</NavLink>
    </div>
        <Outlet />
    <div className='mb-20'></div>
    </>
  )
}

export default ProductCategorySubNav