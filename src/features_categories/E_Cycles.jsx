import React, { useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import ProductsSubNav from '../pages/ProductsSubNav'

function E_Cycles() {
    const {brand} = useParams();

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
{/* <ProductsSubNav /> */}
        <div className='grid sm:grid-cols-3 md:grid-cols-4 gap-5 md:justify-start justify-center px-8 mt-6'>
           
            <Link  to={'/vehicle/Nexzu_Rompus_Plus'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl cursor-pointer'>
                <img src="http://test.minzharge.com/img/Rompus_Black.jpg" alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-2xl text-bold'>Nexu Rompus Plus</h6>
                    <p className='text-red-500 font-bold'>₹ 33,000</p>
                </div>
            </Link>
                <Link  to={'/vehicle/Nexzu_Rompus_Plus'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl cursor-pointer'>
                <img src="http://test.minzharge.com/img/Rompus_Black.jpg" alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-2xl text-bold'>Rithul Fork</h6>
                    <p className='text-red-500 font-bold'>₹ 31,000</p>
                </div>
            </Link>
                <Link  to={'/vehicle/Nexzu_Rompus_Plus'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl cursor-pointer'>
                <img src="http://test.minzharge.com/img/Rompus_Black.jpg" alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-2xl text-bold'>Nexu Rompus Plus1</h6>
                    <p className='text-red-500 font-bold'>₹ 33,000</p>
                </div>
            </Link>
                <Link  to={'/vehicle/Nexzu_Rompus_Plus'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl cursor-pointer'>
                <img src="http://test.minzharge.com/img/Rompus_Black.jpg" alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-2xl text-bold'>Nexu Rompus Plus1</h6>
                    <p className='text-red-500 font-bold'>₹ 33,000</p>
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

export default E_Cycles