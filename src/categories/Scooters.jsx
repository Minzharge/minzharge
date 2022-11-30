import React, { useEffect, useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import ProductsSubNav from '../pages/ProductsSubNav'
const assetUrl = process.env.NODE_ENV === 'production' ? '/minzharge/assets/' : '/minzharge/assets/';


function ProductBattreBrands() {
    const { brand } = useParams();
    // const location = useLocation()
    const [show, setShow] = useState(true)
    const { pathname } = useLocation();

    // false not show 
    // true show

    const product_data = [
        {
            id: 1,
            name: "Nexzu_Rompus_Plus",
            price: "33,000",
            image_url: "http://test.minzharge.com/img/Rompus_Black.jpg"
        },
        {
            id: 2,
            name: "Nexzu_Bazinga",
            price: "31,000",
            image_url: "http://test.minzharge.com/img/Rompus_Black.jpg"
        },
        {
            id: 3,
            name: "Nexzu_Bazinga_Cargo",
            price: "12,900",
            image_url: "http://test.minzharge.com/img/Rompus_Black.jpg"
        },
        {
            id: 4,
            name: "Nexzu_Roadlark",
            price: "43,000",
            image_url: "http://test.minzharge.com/img/Rompus_Black.jpg"
        },
        {
            id: 5,
            name: "Nexzu_Roadlark_Cargo",
            price: "23,000",
            image_url: "https://3.img-dpreview.com/files/p/E~TS590x0~articles/8692662059/8283897908.jpeg"
        }
    ]
    return (
        <>
             <div className='pl-10 py-5 text-start font-black text-2xl'> Electric Scooters </div>  
	          <hr className='mb-5'/>
        <div className='py-5 grid sm:grid-cols-3 md:grid-cols-4 gap-5 md:justify-start justify-center px-8'>
                <Link to={'/vehicle/BattReLoEv'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl cursor-pointer'>
                    <img src={assetUrl + "/Elite/1.png"} alt="Product Image" className='rounded-t-xl' />
                    <div className='p-3'>
                        <h6 className='text-2xl text-bold'>BattRe LoEv</h6>
                        <p className='text-red-500 font-bold'>₹ 74,450</p>
                    </div>
                </Link>
                <Link to={'/vehicle/BattReOne'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl cursor-pointer'>
                   <img src={assetUrl + "/Elite/3.jpg"} alt="Product Image" className='rounded-t-xl' />
                    <div className='p-3'>
                        <h6 className='text-2xl text-bold'>BattRe One</h6>
                        <p className='text-red-500 font-bold'>₹ 79,700</p>
                    </div>
                </Link>
				<Link to={'/vehicle/gemopai_ryder'}  target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl cursor-pointer'>
                <img src="https://gemopai.com/frontend/img/ryder/slide/ryder4.jpg" alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-2xl text-bold'>Gemopai Ryder</h6>
                    <p className='text-red-500 font-bold'>$ 33,000</p>
                </div>
            </Link>
                <Link to={'/vehicle/gemopai_astrid_lite'}  target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl cursor-pointer'>
                <img src="https://gemopai.com/frontend/img/astrid/slide/ast2.jpg" alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-2xl text-bold'>Gemopai Astrid Lite</h6>
                    <p className='text-red-500 font-bold'>$ 31,000</p>
                </div>
            </Link>
			<Link  to={'/vehicle/Semzy_Kasa'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl cursor-pointer'>
                <img src="https://www.bikes4sale.in/pictures/default/semzy-kasa/semzy-kasa-pic-1.jpg" alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-2xl text-bold'>Semzy Kasa</h6>
                    <p className='text-red-500 font-bold'>₹ 68,500</p>
                </div>
            </Link>
                <Link  to={'/vehicle/Semzy_Kasa_Smart'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl cursor-pointer'>
                <img src="https://www.bikes4sale.in/pictures/default/semzy-kasa/semzy-kasa-640.jpg" alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-2xl text-bold'>Semzy Kasa Smart</h6>
                    <p className='text-red-500 font-bold'>₹ 69,000</p>
                </div>
            </Link>

            </div>
            <div className='m-12'>
                <h3 className='text-xl font-bold'>About Batt:RE</h3>
                <p>Batt:RE is a joint venture between Goreen E-Mobility and Opai Electric which is one of the largest manufacturers of electric vehicles in the world. Opai has a 15+ years’ experience in manufacturing quality electric 2 wheelers having sold more than 15 million electric 2 wheelers worldwide. Gemopai was one of the earliest brands to support a portable Li-ion battery, since its launch last year in 2018.</p>
            </div>
        </>
    )
}

export default ProductBattreBrands