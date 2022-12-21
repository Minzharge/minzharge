import React from 'react'
import {useParams, Link, useLocation} from 'react-router-dom'
import Subnavbar from './Categories_subnav'

function AllChargerCategories() {
    const {pathname}  = useLocation()
    const product_data = [
        {
            id: 1,
            name: "Nexu Rompus Plus",
            price: "33,000",
            image_url: "http://test.minzharge.com/img/Rompus_Black.jpg"
    },
        {
            id: 2,
            name: "Rithul Fork",
            price: "31,000",
            image_url: "http://test.minzharge.com/img/Rompus_Black.jpg"
    },
        {
            id: 3,
            name: "Dexpress",
            price: "12,900",
            image_url: "http://test.minzharge.com/img/Rompus_Black.jpg"
    },
        {
            id: 4,
            name: "Semxy",
            price: "43,000",
            image_url: "http://test.minzharge.com/img/Rompus_Black.jpg"
    },
        {
            id: 5,
            name: "Gemopai",
            price: "23,000",
            image_url: "https://3.img-dpreview.com/files/p/E~TS590x0~articles/8692662059/8283897908.jpeg"
    },
        {
            id: 6,
            name: "Taark",
            price: "53,000",
            image_url: "https://3.img-dpreview.com/files/p/E~TS590x0~articles/8692662059/8283897908.jpeg"
    }
    ] 
    
  return (
    <>
   {pathname === "/Charger-Categories/all" ? <div className='pl-10 py-5 text-start font-black text-2xl'> 
            </div>  
	          : <Subnavbar /> }
 <div className='py-5 grid sm:grid-cols-3 md:grid-cols-4 gap-5 md:justify-start justify-center px-8'>
    
     <Link  to={'/vehicle/Nexzu_Rompus_Plus'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:hover:shadow-2xl cursor-pointer '>
         <img src="https://i.postimg.cc/0yRHNYy5/amp-Vconnect-3-3k-W.png" alt="Product Image" className='rounded-t-xl'/>
         <div className='p-3'>
             <h6 className='font-extrabold text-lg'>AmpVConnect AC - 3.3 kW</h6>
             <p className='text-inherit text-base'>AC Charger with Universal Socket</p>
             <p className='font-extrabold text-xl'>₹ 47,500</p>
         </div>
     </Link>
     <Link  to={'/vehicle/Nexzu_Rompus_Plus'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:hover:shadow-2xl cursor-pointer '>
         <img src="https://i.postimg.cc/0yRHNYy5/amp-Vconnect-3-3k-W.png" alt="Product Image" className='rounded-t-xl'/>
         <div className='p-3'>
             <h6 className='font-extrabold text-lg'>AmpVConnect AC - 3.3 kW</h6>
             <p className='text-inherit text-base'>AC Charger with Dual universal Socket</p>
             <p className='font-extrabold text-xl'>₹ 53,550</p>
         </div>
     </Link>
     <Link  to={'/vehicle/Nexzu_Rompus_Plus'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:hover:shadow-2xl cursor-pointer '>
         <img src="https://i.postimg.cc/SssgPVDd/amp-Vconnect-3-3k-W-3-3k-W-3-3k-W.png" alt="Product Image" className='rounded-t-xl'/>
         <div className='p-3'>
             <h6 className='font-extrabold text-lg'>AmpVConnect AC - 3.3 kW</h6>
             <p className='text-inherit text-base'>AC Charger with Three universal Socket</p>
             <p className='font-extrabold text-xl'>₹ 60,375</p>
         </div>
     </Link>
     <Link  to={'/vehicle/Nexzu_Rompus_Plus'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:hover:shadow-2xl cursor-pointer '>
         <img src="https://i.postimg.cc/SssgPVDd/amp-Vconnect-3-3k-W-3-3k-W-3-3k-W.png" alt="Product Image" className='rounded-t-xl'/>
         <div className='p-3'>
             <h6 className='font-extrabold text-lg'>AmpVConnect AC - 3.3 kW</h6>
             <p className='text-inherit text-base'>AC Charger with Five Uiversal Socket</p>
             <p className='font-extrabold text-xl'>₹ 78,875</p>
         </div>
     </Link>
     <Link  to={'/vehicle/Nexzu_Rompus_Plus'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:hover:shadow-2xl cursor-pointer '>
         <img src="https://i.postimg.cc/0yRHNYy5/amp-Vconnect-3-3k-W.png" alt="Product Image" className='rounded-t-xl'/>
         <div className='p-3'>
             <h6 className='font-extrabold text-lg'>AmpVConnect AC - 3.3 kW</h6>
             <p className='text-inherit text-base'>AC Charger with Uiversal Socket & Type 2 Connector</p>
             <p className='font-extrabold text-xl'>₹ 60,900</p>
         </div>
     </Link>
         <Link  to={'/vehicle/Nexzu_Bazinga'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:hover:shadow-2xl cursor-pointer'>
         <img src="https://i.postimg.cc/VN4742B5/amp-Vconnect-7-4k-W.png" alt="Product Image" className='rounded-t-xl'/>
         <div className='p-3'>
             <h6 className='text-lg font-extrabold'>AmpVConnect AC - 7.4 kW</h6>
             <p className='text-inherit text-base'>AC Charger with Universal socket</p>
             <p className='font-extrabold text-xl'>₹ 59,375</p>
         </div>
     </Link>
     <Link  to={'/vehicle/Nexzu_Bazinga'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:hover:shadow-2xl cursor-pointer'>
         <img src="https://i.postimg.cc/VN4742B5/amp-Vconnect-7-4k-W.png" alt="Product Image" className='rounded-t-xl'/>
         <div className='p-3'>
             <h6 className='text-lg font-extrabold'>AmpVConnect AC - 3.3 kW & 7.4 kW</h6>
             <p className='text-inherit text-base'>AC Charger with Type 2 & Universal socket</p>
             <p className='font-extrabold text-xl'>₹ 67,725</p>
         </div>
     </Link>
     <Link  to={'/vehicle/Nexzu_Bazinga'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:hover:shadow-2xl cursor-pointer'>
         <img src="https://i.postimg.cc/k571Q7Sk/amp-Vconnect-7-4k-W-3-3k-W.png" alt="Product Image" className='rounded-t-xl'/>
         <div className='p-3'>
             <h6 className='text-lg font-extrabold'>AmpVConnect AC - 7.4 kW</h6>
             <p className='text-inherit text-base'>AC Charger with Dual type 2 Connector</p>
             <p className='font-extrabold text-xl'>₹ 72,975</p>
         </div>
     </Link>
         <Link  to={'/vehicle/Nexzu_Bazinga_Cargo'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:hover:shadow-2xl cursor-pointer'>
         <img src="https://i.postimg.cc/ZKyMZ7ZD/amp-Vconnect-11k-W.png" alt="Product Image" className='rounded-t-xl'/>
         <div className='p-3'>
             <h6 className='text-lg font-extrabold'>AmpVConnect AC - 11 kW</h6>
             <p className='text-inherit text-base'>AC Charger with Universal Socket</p>
             <p className='font-extrabold text-xl'>₹ 65,625</p>
         </div>
     </Link>
         <Link  to={'/vehicle/Nexzu_Roadlark'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:hover:shadow-2xl cursor-pointer'>
         <img src="https://i.postimg.cc/wjX4R11X/amp-Vconnect-22k-W.png" alt="Product Image" className='rounded-t-xl'/>
         <div className='p-3'>
             <h6 className='text-lg font-extrabold'>AmpVConnect AC - 22 kW</h6>
             <p className='text-inherit text-base'>AC Charger with Single connector</p>
             <p className='font-extrabold text-xl'>₹ 79,750</p>
         </div>
     </Link>
     <Link  to={'/vehicle/Nexzu_Roadlark_Cargo'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover: hover:shadow-2xl cursor-pointer'>
         <img src="https://i.postimg.cc/bw0xxwx1/Roadlock-Cargo-2.png" alt="Product Image" className='rounded-t-xl'/>
         <div className='p-3'>
             <h6 className='text-lg font-extrabold'>AmpVConnect DC 48V 20A</h6>
             <p className='text-inherit text-base'>2 & 3 Wheeler DC Fast Charger</p>
             <p className='font-extrabold text-xl'>₹ 33,000</p>
         </div>
     </Link>
     <Link  to={'/vehicle/Nexzu_Roadlark_Cargo'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover: hover:shadow-2xl cursor-pointer'>
         <img src="https://i.postimg.cc/bw0xxwx1/Roadlock-Cargo-2.png" alt="Product Image" className='rounded-t-xl'/>
         <div className='p-3'>
             <h6 className='text-lg font-extrabold'>AmpVConnect DC 48V 40A</h6>
             <p className='text-inherit text-base'>2 & 3 Wheeler DC Fast Charger</p>
             <p className='font-extrabold text-xl'>₹ 33,000</p>
         </div>
     </Link>
     <Link  to={'/vehicle/Nexzu_Roadlark_Cargo'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover: hover:shadow-2xl cursor-pointer'>
         <img src="https://i.postimg.cc/bw0xxwx1/Roadlock-Cargo-2.png" alt="Product Image" className='rounded-t-xl'/>
         <div className='p-3'>
             <h6 className='text-lg font-extrabold'>AmpVConnect DC - 15 kW</h6>
             <p className='text-inherit text-base'>4 Wheeler DC Fast Charger</p>
             <p className='font-extrabold text-xl'>₹ 6,82,500</p>
         </div>
     </Link>
     <Link  to={'/vehicle/Nexzu_Roadlark_Cargo'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover: hover:shadow-2xl cursor-pointer'>
         <img src="https://i.postimg.cc/bw0xxwx1/Roadlock-Cargo-2.png" alt="Product Image" className='rounded-t-xl'/>
         <div className='p-3'>
             <h6 className='text-lg font-extrabold'>AmpVConnect DC - 30 kW</h6>
             <p className='text-inherit text-base'>4 Wheeler DC Fast Charger</p>
             <p className='font-extrabold text-xl'>₹ 12,91,500</p>
         </div>
     </Link>
 </div>
 <div className='m-12'>
     <h3 className='font-extrabold text-xl'>About Nexzu</h3>
     
     <p className='whitespace-pre-wrap' >Nexzu is manufacturing E-cycles and E-cargo cycles which comes in two battery options. You can also availe EMI for Nexzu E-vehicles.</p>
 </div>
 </>
  )
}

export default AllChargerCategories