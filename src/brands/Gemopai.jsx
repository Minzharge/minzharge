import React, { useEffect } from 'react'
import {useParams, Link, useLocation} from 'react-router-dom'
import ProductsSubNav from '../pages/ProductsSubNav'

function ProductGemopaiBrands() {
    const {brand} = useParams();
    const {pathname} = useLocation()

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
            {pathname === "/features_brand/Gemopai" ? null : <ProductsSubNav /> }
        <div className='grid sm:grid-cols-3 md:grid-cols-4 gap-5 md:justify-start justify-center px-8'>
           
            <Link to={'/vehicle/gemopai_ryder'}  target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl cursor-pointer'>
                <img src="https://gemopai.com/frontend/img/ryder/slide/ryder4.jpg" alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-2xl text-bold'>Gemopai Ryder</h6>
                    <p className='text-red-500 font-bold'>₹ 33,000</p>
                </div>
            </Link>
                <Link to={'/vehicle/gemopai_astrid_lite'}  target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl cursor-pointer'>
                <img src="https://gemopai.com/frontend/img/astrid/slide/ast2.jpg" alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-2xl text-bold'>Gemopai Astrid Lite</h6>
                    <p className='text-red-500 font-bold'>₹ 31,000</p>
                </div>
            </Link>
             
           
        </div>
        <div className='m-12'>
            <h3 className='text-xl font-bold'>About Gemopai</h3>
            <p>Gemopai is a joint venture between Goreen E-Mobility and Opai Electric which is one of the largest manufacturers of electric vehicles in the world. Opai has 15+ years of experience in manufacturing quality electric 2 wheelers having sold more than 15 million electric 2 wheelers worldwide. Gemopai was one of the earliest brands to support a portable Li-ion battery, since its launch last year in 2018.</p>
        </div>
        </>
    )
}

export default ProductGemopaiBrands