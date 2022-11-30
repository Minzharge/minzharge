import React, { useContext,useState} from 'react'
import ProductVariants from './ProductVariants';
import { NavbarContext } from '../context/NavbarStatus';
import './style.css'

const assetUrl = process.env.NODE_ENV === 'production' ? '/minzharge/assets/' : '/minzharge/assets/';

function ProductCarousal () {
  let temp = 0;
  const images = [
    "https://image1.jdomni.in/product/01052021/5B/73/FD/4472363EAF473C9FA81FC69922_1619849320028.png",
    "https://image1.jdomni.in/product/01052021/06/6C/85/E998A3E45BDDB8A6F966406DBF_1619849366540.png",
    "https://image1.jdomni.in/product/01052021/61/B7/AD/4A69C7298AE1F7BF702A7BE835_1619849348032.jpg",
	"https://5.imimg.com/data5/SELLER/Default/2022/8/ZV/AB/FO/121847867/dexpress-lite-electric-bike-1000x1000.jpg",
	"https://5.imimg.com/data5/SELLER/Default/2022/8/LB/JK/EA/121847867/dexpress-lite-electric-bike-1000x1000.jpg"
  ];

  const [count, setCount] = useState(0);

  const nextHandler = () => {
    temp = (count + 1) % images.length;
    setCount(temp);
  };

  const prevHandler = () => {
    temp = (count + images.length - 1) % images.length;
    setCount(temp);
  };

  // useEffect(() => {
  //   console.log(count);

  //   setTimeout(() => {
  //     nextHandler();
  //   }, 3000);
  // }, [count]);

  return (
    <div className="w-full">
      <div className="relative mb-4">
        <img src={images[count]} alt="someimage" className="object-cover"/>
        <div className="">
          <div
            className="select-none text-8xl absolute top-[40%] left-10 text-gray-700 hover:text-black cursor-pointer"
            onClick={prevHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div
            className="select-none text-8xl absolute top-[40%] right-10 text-gray-700 hover:text-black cursor-pointer"
            onClick={nextHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex overflow-x-auto justify-center">
        <div className="flex">
          {/* flex-shrink-0 */}
          <img
            src={images[0]}
            width="100"
            alt=""
            onMouseOver={() => setCount(0)}
            className={
              count === 0
                ? "cursor-pointer border-2 border-black p-1 m-1"
                : "p-1 mr-1"
            }
          />
          <img
            src={images[1]}
            width="100"
            alt=""
            onMouseOver={() => setCount(1)}
            className={
              count === 1
                ? "cursor-pointer border-2 border-black p-1 m-1"
                : "p-1 mr-1"
            }
          />
          <img
            src={images[2]}
            width="100"
            alt=""
            onMouseOver={() => setCount(2)}
            className={
              count === 2
                ? "cursor-pointer border-2 border-black p-1 m-1"
                : "p-1 mr-1"
            }
          />
          <img
            src={images[3]}
            width="100"
            alt=""
            onMouseOver={() => setCount(3)}
            className={
              count === 3
                ? "cursor-pointer border-2 border-black p-1 m-1"
                : "p-1 mr-1"
            }
          />
          <img
            src={images[4]}
            width="100"
            alt=""
            onMouseOver={() => setCount(4)}
            className={
              count === 4
                ? "cursor-pointer border-2 border-black p-1 m-1"
                : "p-1 mr-1"
            }
          />
        </div>
      </div>
    </div>
  );
}

function Nexzu_Bazinga() {

    const {expand} = useContext(NavbarContext)
    const [pricehide, setPricehide] = useState('lead')
    const [clamp, setClamp] = useState(false)
    const [power, setPower] = useState(false)    
	const [warranty, setWarranty] = useState(false)
    const handlePriceHide = (event) => {
        const getPrice = event.target.value;
        setPricehide(getPrice)
    } 
    const [spechide, setSpechide] = useState('lead');
    const table_data = [{
          name: "Bazinga (42V/2AH)",
          price: "₹ 49,445",
		  onRoad: "(Avg. Ex-Showroom price)",
          offerLink: '#',
          kms: "100 Km, 25 Kmph, 7.5 Hrs"
      }
	  
  ];
  
  const handleshowhide = (event) => {
      const getSpec = event.target.value;
      setSpechide(getSpec);
  
  }
  return (
    <div className='w-full'>
      <div className='md:w-[80%] mx-auto grid md:grid-cols-2 gap-10 mt-5'>
      <div className={expand ? 'hidden': 'p-2'}>
          <ProductCarousal />
        </div>

        <div className='md:p-5 text-center md:text-left'>
            <h1 className='text-3xl'>Nexzu Bazinga</h1>
			<h1 className='py-2 text-lg text-gray-500'>Electric Cycle</h1>
		  <hr className='mb-5'/>
            <div className='mt-5 mb-5'>
                {/* <label htmlFor="type"></label> */}
               <select name="" id="type" className='w-[200px] p-3 border-b-2 border-black-900 outline-none' onChange={handlePriceHide}>
                    <option value="" disabled>Select Type </option>
                    <option value="lead">100 Km</option>
                      </select>
            </div>
            <div className="w-layout-grid specifications-grid">
                            <div className="specification-container"> <img src={assetUrl + "/Key_highlights_icon/battery.png"} class="car-icons"/>
                                <div>
                                    <div className="car-specifications-titles">Battery</div>
                                    <div>Li-ion</div>
                                </div>
                            </div>
                            <div className="specification-container" ><img src={assetUrl + "/Key_highlights_icon/Top Speed.png"} alt="cad" class="car-icons"/>
                                <div>
                                    <div className="car-specifications-titles">Speedometer</div>
                                    <div>Digital</div>
                                </div>
                            </div>
                            <div className="specification-container"><img src={assetUrl + "/Key_highlights_icon/Reverse Mode.png"} class="car-icons"/>
                                <div>
                                    <div className="car-specifications-titles">Top Speed</div>
                                    <div>25 Km/hr</div>
                                </div>
                            </div>
                            <div className="specification-container"><img src={assetUrl + "/Key_highlights_icon/Range.png"}class="car-icons"/>
                                <div>
                                    <div className="car-specifications-titles">Range</div>
                                    <div>100 Km</div>
                                </div>
                            </div>
                            <div className="specification-container"><img src={assetUrl + "/Key_highlights_icon/fast-charge(1).png"}class="car-icons"/>
                                <div>
                                    <div className="car-specifications-titles">Wheels</div>
                                    <div>Alloy</div>
                                </div>

                            </div>
                            <div className="specification-container" ><img src={assetUrl + "/Key_highlights_icon/Power.png"}class="car-icons"/>
                                <div>
                                    <div className="car-specifications-titles">Start/Stop</div>
                                    <div>Keyless</div>
                                </div>
                            </div>
                           
                        </div>
                        {
                        pricehide === 'lead' && (
                            <div className='flex pb-7 justify-center md:justify-start sm:mt-5'>
                                <h1 className='text-3xl text-[#40b322] font-[600]'>₹ 49,445</h1>
                                <p className='ml-4 mt-4 text-xs' >[Avg Ex-showroom price]</p>
                            </div>
                        )}
            <hr className='mb-5'/>
            <button className='mb-5 text-sm font-bold bg-yellow-300 text-white px-20 py-1 rounded-md'>Get Offers</button>
        </div>
      </div>
      <div className='w-[80%] mx-auto mt-10'>
    <h3 className='font-sans text-xl mb-8 font-bold'>Variants Price List</h3>
    <div className='overflow-x-auto'>
        <table className='text-sm text-gray-500 w-full'>
            <thead>
                <tr className='border-b-2 p-8 text-left'>
                    <th scope="col" className="py-3 px-6">VARIANT</th>
                    <th scope="col" className="py-3 px-6">PRICE</th>
                    <th scope="col" className="py-3 px-6">SPECIFICATIONS</th>
                </tr>
            </thead>
            <tbody>
                {table_data.map(res => <>
                    <tr className='border-b-2 p-8'>
                        <td scope="row" className="py-5  xs:px-0 xss:pr-0">{res.name}</td>
                        <td scope="row" className="py-5  xs:px-0 xss:pr-0">
                            <p><span className='text-black'>{res.price} </span>{res.onRoad}</p>
                            <p className='mt-3'><a href={res.offerLink} target='_blank' className='text-blue-400'>Get Offers</a></p></td>
                        <td scope="row" className="py-5 px-6">{res.kms}</td>
                    </tr>
                </>)}
            </tbody>
        </table>
    </div>

    <div className='my-10'>
        <h3 className='font-sans text-xl mb-8 font-bold'>About Nexzu Bazinga</h3>
        <p className={clamp ? "line-clamp-none" : "line-clamp-5"}>
            Here's a block of text from a blog post that isn't conveniently three lines long like you designed
            for originally. It's probably like 6 lines on mobile or even on desktop depending on how you have
            things laid out. Truly a big pain in the derriere, and not the sort of thing you expected to be
            wasting your time trying to deal with at 4:45pm on a Friday am I right? You've got tickets to
            SmackDown and you heard there's gonna be a dark match with that local guy from two towns over that
            your cousin went to high school with before the show starts, and you're gonna miss it if you're
            not there early.
            Here's a block of text from a blog post that isn't conveniently three lines long like you designed
            for originally. It's probably like 6 lines on mobile or even on desktop depending on how you have
            things laid out. Truly a big pain in the derriere, and not the sort of thing you expected to be
            wasting your time trying to deal with at 4:45pm on a Friday am I right? You've got tickets to
            SmackDown and you heard there's gonna be a dark match with that local guy from two towns over that
            your cousin went to high school with before the show starts, and you're gonna miss it if you're
            not there early.
            Here's a block of text from a blog post that isn't conveniently three lines long like you designed
            for originally. It's probably like 6 lines on mobile or even on desktop depending on how you have
            things laid out. Truly a big pain in the derriere, and not the sort of thing you expected to be
            wasting your time trying to deal with at 4:45pm on a Friday am I right? You've got tickets to
            SmackDown and you heard there's gonna be a dark match with that local guy from two towns over that
            your cousin went to high school with before the show starts, and you're gonna miss it if you're
            not there early.
        </p>
        <p onClick={() => setClamp(!clamp)} className='text-blue-500 cursor-pointer'>{clamp ? 'Read Less' : 'Read More'}</p>
    </div>

    <hr />

    <div className='my-10'>
        <h3 className='font-sans text-xl mb-8 font-bold'>Colors</h3>
        <div className='flex justify-around flex-wrap gap-5'>
            <div className='flex gap-5'>
                <div className='w-[30px] h-[30px] bg-red-500'></div>
                <div className=''>Red</div>
            </div>
            <div className='flex gap-5'>
                <div className='w-[30px] h-[30px] bg-yellow-500'></div>
                <div className=''>Yellow</div>
            </div>
            <div className='flex gap-5'>
                <div className='w-[30px] h-[30px] bg-darkblue-500'></div>
                <div className=''>Dark Blue</div>
            </div>           
        </div>
    </div>

    <hr />

    <div className='flex justify-between my-10 flex-wrap'>
        <h3 className='font-sans text-xl font-bold'>Product Details</h3>
        <div className=''>
            <label htmlFor="type"></label>
            <select name="" id="type" className='w-[200px] p-3 border-2 border-black rounded outline-none' onChange={handleshowhide}>
                <option value="" disabled>Select Type </option>
                    <option value="lead">100 Km</option>
            </select>
        </div>
    </div>
    {
        spechide === 'lead' &&(
            <div>
            <div className='w-full md:w-[80%] mx-auto my-10'>
                <div className='flex'>
                    <h6 className='text-xl font-semibold'>Battery & Range</h6>
                </div>
                
                <div className={power ? 'grid md:grid-cols-2 overflow-none' : 'grid md:grid-cols-2 w-full h-[100px] overflow-hidden'}>
                <table className='table-auto md:mx-10 xs:mx-5' >
                    <tbody>
                        <tr className='w-full'>
                            <td className='w-3/6'>Battery</td>
                            <td className='w-3/6 text-right text-black'>Lithium -Ion 36V 14.5 AH</td>
                        </tr>
					
                        <tr className='w-full'>
                            <td className='w-3/6'>Motor</td>
                            <td className='w-3/6 text-right'>BLDC Motor 250W 36V</td>

                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Battery Location</td>
                            <td className='w-3/6 text-right'>In–Frame + Rear</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Charger</td>
                            <td className='w-3/6 text-right'>42 V, 2A</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Charging Time</td>
                            <td className='w-3/6 text-right'>7 - 8 Hrs</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Battery Life Cycle</td>
                            <td className='w-3/6 text-right'>1000</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Pedelec Mode</td>
                            <td className='w-3/6 text-right'>100 Km</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Throttle Mode</td>
                            <td className='w-3/6 text-right'>75 Km</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Cargo</td>
                            <td className='w-3/6 text-right'>Not Available</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Tyre</td>
                            <td className='w-3/6 text-right'>26″ Cotton Tube Tyres</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Suspension</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        
                        
                        
                    </tbody>
                 </table>
                <table className='table-auto md:mx-1 xs:mx-5'>
                    <tbody>
                    <tr>
                            <td className='w-3/6'>Brake</td>
                            <td className='w-3/6 text-right'>Dual Electric Disc Brakes</td>
                        </tr>
                        <tr>
                            <td className='w-3/6' >Frame Material</td>
                            <td className='w-3/6 text-right'>Cold Rolled Steel</td>
                        </tr>
                        <tr>
                            <td className='w-3/6' >Saddle</td>
                            <td className='w-3/6 text-right'>High Grade Foam Cushion</td>
                        </tr>
                        <tr>
                            <td className='w-3/6'>Reflector</td>
                            <td className='w-3/6 text-right'>10</td>
                        </tr>
                        <tr>
                            <td className='w-3/6' >Waranty</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr>
                            <td className='w-3/6' >Handles</td>
                            <td className='w-3/6 text-right'>Flat</td>
                        </tr>
                        <tr>
                            <td className='w-3/6' >Head Light</td>
                            <td className='w-3/6 text-right'>LED (Tiltable)</td>
                        </tr>
                        <tr>
                            <td className='w-3/6'>Horn</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr>
                            <td className='w-3/6'>Anti-Skid Pedals</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr>
                            <td className='w-3/6'>Tyres</td>
                            <td className='w-3/6 text-right'>26″ Tubeless</td>
                        </tr>
						<tr >
                            <td className='w-3/6'>Brake</td>
                            <td className='w-3/6 text-right'>Auto electric cut off on braking</td>
                        </tr>
                       
                    </tbody>
                 </table>
                </div>
                
                <button className='text-blue-400' onClick={() => setPower(!power)}>{power ? 'Collapse' : 'View More Specs'}</button>
                <br />
                <br />
                <hr />
            </div>

           
            <div className='w-full md:w-[80%] mx-auto my-10'>
                <div className='flex'>
                    <h6 className='text-xl font-semibold  '>Warranty</h6>
                </div>
               
				<div className={warranty ? 'grid md:grid-cols-2 overflow-none' : 'grid md:grid-cols-2 w-full h-[100px] overflow-hidden'}>
                <table className='table-auto md:mx-10 xs:mx-5' >
						<tbody>
							<tr className='w-full'>
								<td className='w-3/6'>Frame</td>
								<td className='w-3/6 text-right'>12 Months functional (6 months aesthetic)</td>
							</tr>
							<tr className='w-full'>
								<td className='w-3/6'>Front fork</td>
								<td className='w-3/6 text-right'>12 Months</td>
							</tr>
							<tr className='w-full'>
								<td className='w-3/6'>Battery</td>
								<td className='w-3/6 text-right'>18 Months</td>
							</tr>
						                                            
						</tbody>
					 </table>
					<table className='table-auto md:mx-1 xs:mx-5'>
						<tbody>
							<tr>
								<td>Charger</td>
								<td className='w-3/6 text-right'>6 Months</td>
							</tr>
							<tr>
								<td>Motor 36V 250W</td>
								<td className='w-3/6 text-right'>18 Months</td>
							</tr>
							<tr>
								<td>Controller</td>
								<td className='w-3/6 text-right'>6 Months</td>
							</tr>
							                                             
						</tbody>
                 </table>
                </div>

                <button className='text-blue-400' onClick={() => setWarranty(!warranty)}>{warranty ? 'Collapse' : 'View More Specs'}</button>
                <br />
                <br />
                <hr />
            </div>  
            </div>
        )
    }
    <hr />
</div>
    </div>
  )
}

export default Nexzu_Bazinga