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
            {pathname === "/features_brand/Battre" ? null : <ProductsSubNav /> }
           
            <div className='grid sm:grid-cols-3 md:grid-cols-4 gap-5 md:justify-start justify-center px-8'>

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


            </div>
            <div className='m-12'>
                <h3 className='text-xl font-bold'>About Batt:RE</h3>
                <p>Batt:RE is a joint venture between Goreen E-Mobility and Opai Electric which is one of the largest manufacturers of electric vehicles in the world. Opai has a 15+ years’ experience in manufacturing quality electric 2 wheelers having sold more than 15 million electric 2 wheelers worldwide. Gemopai was one of the earliest brands to support a portable Li-ion battery, since its launch last year in 2018.</p>
            </div>
        </>
    )
}

export default ProductBattreBrands