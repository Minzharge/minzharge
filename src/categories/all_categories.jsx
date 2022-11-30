import React, { useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'

const assetUrl = process.env.NODE_ENV === 'production' ? '/minzharge/assets/' : '/minzharge/assets/';

function ProductBrands() {
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

        <div className='grid sm:grid-cols-3 md:grid-cols-4 gap-5 md:justify-start justify-center px-8'>
           
            <Link to={'/vehicle/BattReLoEv'} target="_blank" className='p-b-5 bg-green-600 rounded-2xl hover:bg-green-600 hover:shadow-xl cursor-pointer'>
                    <img src="https://bd.gaadicdn.com/processedimages/battre-electric-mobility/oem/640X309/oem603e281e09a77.jpg?tr=w-300" alt="Product Image" className='rounded-t-xl' />
                    <div className='p-3'>
                        <h6 className='text-2xl text-bold'>BattRe LoEv</h6>
                        <p className='text-red-500 font-bold'>₹ 74,450</p>
                    </div>
                </Link>
                <Link to={'/vehicle/BattReOne'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl cursor-pointer'>
                   <img src={"https://bd.gaadicdn.com/processedimages/battre-electric-mobility/loev/640X309/loev603f36e673dae.jpg"} alt="Product Image" className='rounded-t-xl' />
                    <div className='p-3'>
                        <h6 className='text-2xl text-bold'>BattRe One</h6>
                        <p className='text-red-500 font-bold'>₹ 79,700</p>
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
			<Link  to={'/vehicle/Nexzu_Rompus_Plus'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl cursor-pointer'>
                <img src={assetUrl + "/products/90.png"} alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-2xl text-bold'>Rompus Plus</h6>
                    <p className='text-red-500 font-bold'>$ 33,000</p>
                </div>
            </Link>
                <Link  to={'/vehicle/Nexzu_Bazinga'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl cursor-pointer'>
                <img src="https://nexzu.in/wp-content/uploads/2022/06/right-scaled.jpg" alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-2xl text-bold'>Bazinga</h6>
                    <p className='text-red-500 font-bold'>$ 31,000</p>
                </div>
            </Link>
                <Link  to={'/vehicle/Nexzu_Bazinga_Cargo'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl cursor-pointer'>
                <img src="https://nexzu.in/wp-content/uploads/2022/06/cross-1-scaled.jpg" alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-2xl text-bold'>Bazinga Cargo</h6>
                    <p className='text-red-500 font-bold'>$ 33,000</p>
                </div>
            </Link>
                <Link  to={'/vehicle/Nexzu_Roadlark'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl cursor-pointer'>
                <img src={assetUrl + "/products/91.png"} alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-2xl text-bold'>Roadlark</h6>
                    <p className='text-red-500 font-bold'>$ 33,000</p>
                </div>
            </Link>
			<Link  to={'/vehicle/Nexzu_Roadlark_Cargo'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl cursor-pointer'>
                <img src="http://test.minzharge.com/img/Rompus_Black.jpg" alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-2xl text-bold'>Roadlark Cargo</h6>
                    <p className='text-red-500 font-bold'>$ 33,000</p>
                </div>
            </Link>
			
				<Link  to={'/vehicle/Dexpress_Elite'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl cursor-pointer'>
                <img src={assetUrl + "/Elite/6.png"} alt="Product Image" className='rounded-t-xl' />
                <div className='p-3'>
                    <h6 className='text-2xl text-bold'>Dexpress Elite</h6>
                    <p className='text-red-500 font-bold'>₹ 92,100</p>
                </div>
            </Link>
            <Link  to={'/vehicle/Dexpress_Mettle'} target="_blank" className='p-b-5 bg-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl cursor-pointer'>
                <img src={assetUrl + "/Mettle/7.jpeg"} alt="Product Image" className='rounded-t-xl' />
                <div className='p-3'>
                    <h6 className='text-2xl text-bold'>Dexpress Mettle</h6>
                    <p className='text-red-500 font-bold'>₹ 1,04,000</p>
                </div>
            </Link>
			
               
			
			
           
        </div>
        {/* {brand !== 'all' ? <div className='m-12'>
            <h3 className='text-xl font-bold'>About {brand}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cumque repudiandae neque? Magnam qui quaerat corporis doloremque aspernatur. Labore dolores voluptatibus nisi facere debitis beatae vero ducimus in exercitationem consectetur!</p>
        </div> : ''} */}
        </>
    )
}

export default ProductBrands