import React, { useEffect } from 'react'
import {useParams, Link, useLocation} from 'react-router-dom'

function AmpVConnect() {
    const {brand} = useParams();
    const {pathname}  = useLocation()

    /* useEffect(() => {
    //     if(brand == 'all') get all Products
    //     else get the specific product details
    alert(brand)
    }, [brand]) */


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
            <h1 className='px-10 py-5 text-lg text-gray-500'>DELTA - Chargers</h1>
		  <hr className='mb-5'/>
        <div className='py-5 grid sm:grid-cols-3 md:grid-cols-4 gap-5 md:justify-start justify-center px-8'>
           
            <Link  to={'/vehicle/Nexzu_Rompus_Plus'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:hover:shadow-2xl cursor-pointer '>
                <img src="https://i.postimg.cc/vmDBSHnt/25k-W-DC-WALLBOX-Leaflet-Single-Gun-CCS2-1-page-0001-Edited.png" alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='font-extrabold text-lg'>AmpVConnect AC - 3.3 kW</h6>
					<p className='text-inherit text-base'>AC Charger for Car, Bike and Auto</p>
                    <p className='font-extrabold text-xl'>$ 33,000</p>
                </div>
            </Link>
                <Link  to={'/vehicle/Nexzu_Bazinga'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:hover:shadow-2xl cursor-pointer'>
                <img src="https://i.postimg.cc/x8kqPqnB/30k-W-DC-Charger-Dual-GBT-Leaflet-V2-1-page-0001-Edited.png" alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-lg font-extrabold'>AmpVConnect AC - 7.3 kW</h6>
					<p className='text-inherit text-base'>AC Charger for Car, Bike and Auto</p>
                    <p className='font-extrabold text-xl'>$ 31,000</p>
                </div>
            </Link>
                <Link  to={'/vehicle/Nexzu_Bazinga_Cargo'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:hover:shadow-2xl cursor-pointer'>
                <img src="https://i.postimg.cc/m2My8w3x/Bazinga-Cargo-1.jpg" alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-lg font-extrabold'>AmpVConnect AC - 11 kW</h6>
					<p className='text-inherit text-base'>AC Charger for Car, Bike and Auto</p>
                    <p className='font-extrabold text-xl'>$ 33,000</p>
                </div>
            </Link>
                <Link  to={'/vehicle/Nexzu_Roadlark'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:hover:shadow-2xl cursor-pointer'>
                <img src="https://i.postimg.cc/J45Lgtkp/Screenshot-1.png" alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-lg font-extrabold'>AmpVConnect AC - 22 kW</h6>
					<p className='text-inherit text-base'>AC Charger for Car, Bike and Auto</p>
                    <p className='font-extrabold text-xl'>$ 33,000</p>
                </div>
            </Link>
			<Link  to={'/vehicle/Nexzu_Roadlark_Cargo'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover: hover:shadow-2xl cursor-pointer'>
                <img src="https://i.postimg.cc/bw0xxwx1/Roadlock-Cargo-2.png" alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-lg font-extrabold'>AmpVConnect DC 48V 20A</h6>
					<p className='text-inherit text-base'>2 & 3 Wheeler DC Fast Charger</p>
                    <p className='font-extrabold text-xl'>$ 33,000</p>
                </div>
            </Link>
			<Link  to={'/vehicle/Nexzu_Roadlark_Cargo'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover: hover:shadow-2xl cursor-pointer'>
                <img src="https://i.postimg.cc/bw0xxwx1/Roadlock-Cargo-2.png" alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-lg font-extrabold'>AmpVConnect DC 48V 40A</h6>
					<p className='text-inherit text-base'>2 & 3 Wheeler DC Fast Charger</p>
                    <p className='font-extrabold text-xl'>$ 33,000</p>
                </div>
            </Link>
			<Link  to={'/vehicle/Nexzu_Roadlark_Cargo'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover: hover:shadow-2xl cursor-pointer'>
                <img src="https://i.postimg.cc/bw0xxwx1/Roadlock-Cargo-2.png" alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-lg font-extrabold'>AmpVConnect DC - 15 kW</h6>
					<p className='text-inherit text-base'>4 Wheeler DC Fast Charger</p>
                    <p className='font-extrabold text-xl'>$ 33,000</p>
                </div>
            </Link>
			<Link  to={'/vehicle/Nexzu_Roadlark_Cargo'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover: hover:shadow-2xl cursor-pointer'>
                <img src="https://i.postimg.cc/bw0xxwx1/Roadlock-Cargo-2.png" alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-lg font-extrabold'>AmpVConnect DC - 30 kW</h6>
					<p className='text-inherit text-base'>4 Wheeler DC Fast Charger</p>
                    <p className='font-extrabold text-xl'>$ 33,000</p>
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

export default AmpVConnect