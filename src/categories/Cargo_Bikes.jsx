import React, { useEffect } from 'react'
import {useParams, Link, useLocation} from 'react-router-dom'
import ProductsSubNav from '../pages/ProductsSubNav'


const assetUrl = process.env.NODE_ENV === 'production' ? '/minzharge/assets/' : '/minzharge/assets/';
function ProductDexpressBrands() {
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
            <div className='pl-10 py-5 text-start font-black text-2xl'> Electric Cargo Bikes </div>  
	          <hr className='mb-5'/>
        <div className='py-5 grid sm:grid-cols-3 md:grid-cols-4 gap-5 md:justify-start justify-center px-8'>
           
            <Link  to={'/vehicle/Dexpress_Elite'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl cursor-pointer'>
                <img src="https://i.postimg.cc/Z5rgDQvp/Mettle-4.webp" alt="Product Image" className='rounded-t-xl' />
                <div className='p-3'>
                    <h6 className='text-2xl text-bold'>Dexpress Elite</h6>
                    <p className='text-red-500 font-bold'>₹ 92,100</p>
                </div>
            </Link>
            <Link  to={'/vehicle/Dexpress_Mettle'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl cursor-pointer'>
                <img src="https://i.postimg.cc/15RrZYdD/Elite-2.webp" alt="Product Image" className='rounded-t-xl' />
                <div className='p-3'>
                    <h6 className='text-2xl text-bold'>Dexpress Mettle</h6>
                    <p className='text-red-500 font-bold'>₹ 1,04,000</p>
                </div>
            </Link>
             <Link  to={'/vehicle/Nexzu_Roadlark_Cargo'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover: hover:shadow-2xl cursor-pointer'>
                <img src="https://i.postimg.cc/bw0xxwx1/Roadlock-Cargo-2.png" alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-2xl font-extrabold'>Roadlark Cargo</h6>
					<p className='text-inherit text-base'>Electric Cargo Cycle</p>
                    <p className='font-extrabold text-xl'>₹ 33,000</p>
                </div>
            </Link>
			<Link  to={'/vehicle/Nexzu_Bazinga_Cargo'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:hover:shadow-2xl cursor-pointer'>
                <img src="https://i.postimg.cc/m2My8w3x/Bazinga-Cargo-1.jpg" alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-xl font-extrabold'>Bazinga Cargo</h6>
					<p className='text-inherit text-base'>Electric Cargo Cycle</p>
                    <p className='font-extrabold text-xl'>₹ 33,000</p>
                </div>
            </Link>
           
        </div>
        <div className='m-12'>
            <h3 className='text-xl font-bold'>About Dexpress</h3>
            <p>Dexpress is a joint venture between Goreen E-Mobility and Opai Electric which is one of the largest manufacturers of electric vehicles in the world. Opai has a 15+ years’ experience in manufacturing quality electric 2 wheelers having sold more than 15 million electric 2 wheelers worldwide. Gemopai was one of the earliest brands to support a portable Li-ion battery, since its launch last year in 2018.</p>
        </div>
        </>
    )
}

export default ProductDexpressBrands