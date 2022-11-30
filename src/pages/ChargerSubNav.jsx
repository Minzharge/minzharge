import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

function ChargerSubNav() {
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
            <NavLink className='p-2 m-2 md:m-5' to='/products/All' end style={navStyle}>All</NavLink>
            <NavLink className='p-2 m-2 md:m-5' to='../Chargers/AmpVConnect' end style={navStyle}>AmpVConnect</NavLink>
            <NavLink className='p-2 m-2 md:m-5' to='../Chargers/Delta' style={navStyle}>Delta</NavLink>
    </div>
        <Outlet />
    <div className='mb-20'></div>
    </>
  )
}

export default ChargerSubNav