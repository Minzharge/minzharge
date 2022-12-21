import React, { useEffect } from 'react'
import {useParams, Link,useLocation} from 'react-router-dom'
import ProductsSubNav from '../pages/ProductsSubNav'

function ProductSemzyBrands() {
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
            {pathname === "/features_brand/Semzy" ? <div><div className='pl-10 py-5 text-start font-black text-2xl'> 
            Semzy</div>  
	          <hr className='mb-5'/></div>: <ProductsSubNav /> }
        <div className='grid sm:grid-cols-3 md:grid-cols-4 gap-5 md:justify-start justify-center px-8'>
           
            <Link  to={'/vehicle/Semzy_Kasa'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl cursor-pointer'>
                <img src="https://www.bikes4sale.in/pictures/default/semzy-kasa/semzy-kasa-pic-1.jpg" alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-2xl text-bold'>Semzy Kasa</h6>
                    <p className='text-inherit text-base'>Electric Scooter</p>
                    <p className='text-red-500 font-bold'>₹ 68,500</p>
                </div>
            </Link>
                <Link  to={'/vehicle/Semzy_Kasa_Smart'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl cursor-pointer'>
                <img src="https://www.bikes4sale.in/pictures/default/semzy-kasa/semzy-kasa-640.jpg" alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-2xl text-bold'>Semzy Kasa Smart</h6>
                    <p className='text-inherit text-base'>Electric Scooter</p>
                    <p className='text-red-500 font-bold'>₹ 69,000</p>
                </div>
            </Link>
               
           
        </div>
        <div className='m-12'>
            <h3 className='text-xl font-bold'>About Semzy</h3>
            <p>Semzy is an ISO certified company that specializes in ISO 9001. Semzy supports efforts to green the country with 'zero pollution' of electric vehicles. Semzy started to produce electric bikes in 2021. Semzy offers various range of E-Bikes from economy to high performance bikes. Bikes with good performance and perfect battery backup. You can also availe EMI for Semzy E-vehicles</p>
        </div>
        </>
    )
}

export default ProductSemzyBrands