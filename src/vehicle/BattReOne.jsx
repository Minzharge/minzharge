import React, { useContext,useState} from 'react'
import ProductVariants from '../pages/ProductVariants';
import { NavbarContext } from '../context/NavbarStatus';
import './style.css'

const assetUrl = process.env.NODE_ENV === 'production' ? '/minzharge/assets/' : '/minzharge/assets/';

function ProductCarousal () {
  let temp = 0;
  const images = [
    "https://5.imimg.com/data5/SELLER/Default/2020/10/TH/GB/QO/76153083/battre-one-battery-operated-scooter-500x500.jpg",
    "https://image1.jdomni.in/product/01052021/06/6C/85/E998A3E45BDDB8A6F966406DBF_1619849366540.png",
    "https://5.imimg.com/data5/ANDROID/Default/2021/10/YD/KS/EV/50063354/product-jpeg-1000x1000.jpg",
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

function BattReOne() {

    const {expand} = useContext(NavbarContext)
    const [pricehide, setPricehide] = useState('lead')
    const [clamp, setClamp] = useState(false)
    const [power, setPower] = useState(false)
    const [wheels, setWheels] = useState(false)
	const [dimensions, setDimensions] = useState(false)
	const [warranty, setWarranty] = useState(false)
	const [features, setFeatures] = useState(false)
    const handlePriceHide = (event) => {
        const getPrice = event.target.value;
        setPricehide(getPrice)
    } 
    const [spechide, setSpechide] = useState('lead');

    const table_data = [{
          name: "Batt:RE One (48 V/ 26 Ah)",
          price: "₹ 79,700",
          onRoad: "Avg. Ex-Showroom price)",
          offerLink: '#',
          kms: "55 Kms, 45 Kmph, 65 kg, 3 Hrs"
      },
      {
          name: "Batt:RE One - (60V / 28Ah)",
          price: "₹ 89,150",
          onRoad: "(Avg. Ex-Showroom price)",
          offerLink: '#',
          kms: "65 Km, 45 Kmph, 65 kg, 5 Hrs"
      },
      {
          name: "Batt:RE One - 60 V / 42Ah)",
          price: "₹ 1,04,900",
          onRoad: "Avg. Ex-Showroom price)",
          offerLink: '#',
          kms: "90 Km, 45 Kmph, 65 kg, 5 Hrs"
      },
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
            <h1 className='text-3xl'>Batt:RE one</h1>
			<h1 className='py-2 text-lg text-gray-500'>Electric Scooter</h1>
		  <hr className='mb-5'/>
            <div className='mt-5 mb-5'>
                {/* <label htmlFor="type"></label> */}
                <select name="" id="type" className='w-[200px] p-3 border-b-2 border-black outline-none' onChange={handlePriceHide}>
                    <option value="" disabled selected>Select Type </option>
                    <option value="lead">55 Km</option>
                    <option value="lithium">65 Km</option>
					  <option value="lead1">90 Km</option>
                      </select>
            </div>
            {/* <div className="w-layout-grid specifications-grid">
                            <div className="specification-container"> <img src={assetUrl + "/Key_highlights_icon/battery.png"} class="car-icons"/>
                                <div>
                                    <div className="car-specifications-titles">Battery</div>
                                    <div>Li-ion</div>
                                </div>
                            </div>
                          
                            <div className="specification-container"><img src={assetUrl + "/Key_highlights_icon/power.png"} class="car-icons"/>
                                <div>
                                    <div className="car-specifications-titles">Power</div>
                                    <div>250W BLDC</div>
                                </div>
                            </div>
                              <div className="specification-container" ><img src={assetUrl + "/Key_highlights_icon/Top Speed.png"} alt="cad" class="car-icons"/>
                                <div>
                                    <div className="car-specifications-titles">Speed</div>
                                    <div>City Limit</div>
                                </div>
                            </div>
                            <div className="specification-container"><img src={assetUrl + "/Key_highlights_icon/Range.png"}class="car-icons"/>
                                <div>
                                    <div className="car-specifications-titles">Range</div>
                                    <div>50-75 Kms</div>
                                </div>
                            </div>
                            <div className="specification-container"><img src={assetUrl + "/Key_highlights_icon/fast-charge(1).png"}class="car-icons"/>
                                <div>
                                    <div className="car-specifications-titles">Charge</div>
                                    <div>3-4 Hrs</div>
                                </div>

                            </div>
                            <div className="specification-container" ><img src={assetUrl + "/Key_highlights_icon/trolley-push-cart-with-boxes-svgrepo-com.svg"}class="car-icons"/>
                                <div>
                                    <div className="car-specifications-titles" style={{'textAlign':'left'}}>Capacity</div>
                                    <div style={{'textAlign':'left'}}>150 Kgs</div>
                                </div>
                            </div>
                           
                        </div> */}
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
                                    <div>City Limit</div>
                                </div>
                            </div>
                            <div className="specification-container"><img src={assetUrl + "/Key_highlights_icon/Range.png"}class="car-icons"/>
                                <div>
                                    <div className="car-specifications-titles">Range</div>
                                    <div>50-75 kms</div>
                                </div>
                            </div>
                             <div className="specification-container"><img src={assetUrl + "/Key_highlights_icon/fast-charge(1).png"}class="car-icons"/>
                                <div>
                                    <div className="car-specifications-titles">Charge</div>
                                    <div>3-4 Hrs</div>
                                </div>

                            </div>
                            <div className="specification-container" ><img src={assetUrl + "/Key_highlights_icon/trolley-push-cart-with-boxes-svgrepo-com.svg"}class="car-icons"/>
                                <div>
                                    <div className="car-specifications-titles">Capacity</div>
                                    <div>150 Kgs</div>
                                </div>
                            </div>
                           
                        </div>
                        
                        {
                        pricehide === 'lead' && (
                            <div className='flex pb-7 justify-center md:justify-start sm:mt-5'>
                                <h1 className='text-3xl text-[#40b322] font-[600]'>₹ 74,450</h1>
                                <p className='ml-4 mt-4 text-xs' >[Avg Ex-showroom price]</p>
                            </div>
                        )}

                    {
                        pricehide === 'lithium' && (
                            <div className='flex pb-7 flex pb-7 justify-center md:justify-start sm:mt-5'>
                                <h1 className='text-3xl text-[#40b322] font-[600]'>₹ 83,900</h1>
                                <p className='ml-4 mt-4 text-xs' >[Avg Ex-showroom price]</p>
                            </div>
                        )}
						{
                        pricehide === 'lead1' && (
                            <div className='flex pb-7 flex pb-7 justify-center md:justify-start sm:mt-5'>
                                <h1 className='text-3xl text-[#40b322] font-[600]'>₹ 99,650</h1>
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
        <h3 className='font-sans text-xl mb-8 font-bold'>About Rompus+</h3>
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
        <div className='flex justify-left lg:justify-around flex-wrap gap-5'>
            <div className='flex gap-5 w-[40%] sm:w-[30%] lg:w-auto'>
                <div className='w-[30px] h-[30px] rounded border border-slate-400 bg-black'></div>
                <div className=''>Black</div>
            </div>
            <div className='flex gap-5 w-[40%] sm:w-[30%] lg:w-auto'>
                <div className='w-[30px] h-[30px] rounded border border-slate-400 bg-orange-500'></div>
                <div className=''>Orange</div>
            </div>
            <div className='flex gap-5 w-[40%] sm:w-[30%] lg:w-auto'>
                <div className='w-[30px] h-[30px] rounded border border-slate-400 bg-red-500'></div>
                <div className=''>Red</div>
            </div>
            <div className='flex gap-5 w-[40%] sm:w-[30%] lg:w-auto'>
                <div className='w-[30px] h-[30px] rounded border border-slate-400 bg-white-500'></div>
                <div className=''>White</div>
            </div>
			<div className='flex gap-5 w-[40%] sm:w-[30%] lg:w-auto'>
                <div className='w-[30px] h-[30px] rounded border border-slate-400 bg-yellow-500'></div>
                <div className=''>Yellow</div>
            </div>
			<div className='flex gap-5 w-[40%] sm:w-[30%] lg:w-auto'>
                <div className='w-[30px] h-[30px] rounded border border-slate-400 bg-blue-500'></div>
                <div className=''>Blue</div>
            </div>
            <div className='flex gap-5 w-[40%] sm:w-[30%] lg:w-auto'>
                <div className='w-[30px] h-[30px] rounded border border-slate-400 bg-slate-300'></div>
                <div className=''>Silver</div>
            </div>
        </div>
    </div>

    <hr />

    <div className='flex justify-between my-10 flex-wrap'>
        <h3 className='font-sans text-xl font-bold'>Product Details</h3>
        <div className=''>
            <label htmlFor="type"></label>
            <select name="" id="type" className='w-[200px] p-3 border-b-2 border-black outline-none' onChange={handleshowhide}>
                <option value="" disabled>Select Type </option>
                    <option value="lead">55 Km</option>
                    <option value="lithium">65 Km</option>
					  <option value="lead1">90 Km</option>
            </select>
        </div>
    </div>
    {
        spechide === 'lead' &&(
            <div>
            <div className='w-full md:w-[80%] mx-auto my-10'>
                <div className='flex'>
                    <h6 className='text-xl font-semibold'>Power</h6>
                </div>
                {/* <div className={power ? 'grid md:grid-cols-2 overflow-none' : 'grid md:grid-cols-2 w-full h-[100px] overflow-hidden'}>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black  pl-24'>Petrol</span></p>
                    <p className='py-3 border-b-1 text-gray-500'>Battery Type: <span className='text-black pl-24'>Petrol</span></p>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className=' pl-24'>Petrol</span></p>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
               
                </div> */}
                <div className={power ? 'grid md:grid-cols-2 overflow-none' : 'grid md:grid-cols-2 w-full h-[100px] overflow-hidden'}>
                <table className='table-auto md:mx-10 xs:mx-5' >
                    <tbody>
                        <tr className='w-full'>
                            <td className='w-3/6'>Fuel Type</td>
                            <td className='w-3/6 text-right text-black'>Electric</td>
                        </tr>
					
                        <tr className='w-full'>
                            <td className='w-3/6'>Motor</td>
                            <td className='w-3/6 text-right'>250W, BLDC Hub Motor</td>

                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Top Speed</td>
                            <td className='w-3/6 text-right'>45 Kmph</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Mileage</td>
                            <td className='w-3/6 text-right'>55 Kmph</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Battery</td>
                            <td className='w-3/6 text-right'>Nickel, Manganese and Cobalt</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Battery Capacity</td>
                            <td className='w-3/6 text-right'>48V/26AH</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Batter IP Rating</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>0-40 Kms</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Loading Capacity</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Controller</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        
                    </tbody>
                 </table>
                <table className='table-auto md:mx-1 xs:mx-5'>
                    <tbody>
                        <tr>
                            <td>Battery Charging time</td>
                             <td className='w-3/6 text-right'>3 hours</td>
                        </tr>
                        <tr>
                            <td>Fast Charging Time</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
						<tr>
                            <td>Carrying Capacity</td>
                            <td className='w-3/6 text-right'>150 Kg</td>
                        </tr>
                        <tr>
                            <td>Max Power</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Charge Output</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Climbing</td>
                            <td className='w-3/6 text-right'>15º</td>
                        </tr>
                        <tr>
                            <td>Battery Cycles</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Max Torque</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Carbon Saving</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Transmission</td>
                            <td className='w-3/6 text-right'>Automatic</td>
                        </tr>						
                        <tr>
                            <td>Rated Power</td>
                            <td className='w-3/6 text-right'>--</td>
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
                    <h6 className='text-xl font-semibold  '>Wheels and Suspension</h6>
                </div>
               
				<div className={wheels ? 'grid md:grid-cols-2 overflow-none' : 'grid md:grid-cols-2 w-full h-[100px] overflow-hidden'}>
                <table className='table-auto md:mx-10 xs:mx-5' >
                    <tbody>
                        <tr className='w-full'>
                            <td className='w-3/6'>Braking system</td>
                            <td className='w-3/6 text-right'>Standard</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>F-Brake</td>
                            <td className='w-3/6 text-right'>Dual Disc</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>F-Brake Size</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>R-Brake</td>
                            <td className='w-3/6 text-right'>Disc</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>R-Brake Size</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Callipar Type</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Wheel</td>
                            <td className='w-3/6 text-right'>Stylish Aluminium Alloy Wheel</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>F-Wheel Size</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>                                             
                    </tbody>
                 </table>
                <table className='table-auto md:mx-1 xs:mx-5'>
                    <tbody>
                        <tr>
                            <td>R-Wheel size</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>F-Tyre size</td>
                            <td className='w-3/6 text-right'>3.5-10 Tubeless</td>
                        </tr>
                        <tr>
                            <td>R-Tyre size</td>
                            <td className='w-3/6 text-right'>3.5-10 Tubeless</td>
                        </tr>
                        <tr>
                            <td>Tyres</td>
                            <td className='w-3/6 text-right'>Tubeless</td>
                        </tr>
                        <tr>
                            <td>Raidal Tyres</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
                        <tr>
                            <td>F-Suspension</td>
                            <td className='w-3/6 text-right'>Telescopic</td>
                        </tr>
                        <tr>
                            <td>R-Suspension</td>
                            <td className='w-3/6 text-right'>Double shocker</td>
                        </tr>                                               
                    </tbody>
                 </table>
                </div>

                <button className='text-blue-400' onClick={() => setWheels(!wheels)}>{wheels ? 'Collapse' : 'View More Specs'}</button>
                <br />
                <br />
                <hr />
            </div>
           
            <div className='w-full md:w-[80%] mx-auto my-10'>
                <div className='flex'>
                    <h6 className='text-xl font-semibold  '>Dimensions</h6>
                </div>
                
				<div className={dimensions ? 'grid md:grid-cols-2 overflow-none' : 'grid md:grid-cols-2 w-full h-[100px] overflow-hidden'}>
                <table className='table-auto md:mx-10 xs:mx-5' >
                    <tbody>
                        <tr className='w-full'>
                            <td className='w-3/6'>Kerb Weight</td>
                            <td className='w-3/6 text-right'>65 Kgs</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Length</td>
                            <td className='w-3/6 text-right'>1800 mm</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Width</td>
                            <td className='w-3/6 text-right'>700 mm</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Height</td>
                            <td className='w-3/6 text-right'>1100 mm</td>
                        </tr>
						 </tbody>
                 </table>
				  <table className='table-auto md:mx-1 xs:mx-5'>
                    <tbody>
                        <tr>
                            <td>Wheelbase</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Ground Clearance</td>
                            <td className='w-3/6 text-right'>185 mm</td>
                        </tr>
                        <tr>
                            <td>Seat height</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Chassis Type</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
						</tbody>
                 </table>
                </div>


                <button className='text-blue-400' onClick={() => setDimensions(!dimensions)}>{dimensions ? 'Collapse' : 'View More Specs'}</button>
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
                            <td className='w-3/6'>Motor Waranty</td>
                            <td className='w-3/6 text-right'>2 Yrs</td>
                        </tr>
                        	</tbody>
                 </table>
				  <table className='table-auto md:mx-1 xs:mx-5'>
                    <tbody>
                        <tr>
                            <td>Battery Waranty</td>
                            <td className='w-3/6 text-right'>3 Yrs</td>
                        </tr>                        
						</tbody>
                 </table>
                </div>

                <button className='text-blue-400' onClick={() => setWarranty(!warranty)}>{warranty ? 'Collapse' : 'View More Specs'}</button>
                <br />
                <br />
                <hr />
            </div>

            <div className='w-full md:w-[80%] mx-auto my-10'>
                <div className='flex'>
                    <h6 className='text-xl font-semibold  '>Features</h6>
                </div>
				<div className={features ? 'grid md:grid-cols-2 overflow-none' : 'grid md:grid-cols-2 w-full h-[100px] overflow-hidden'}>
                <table className='table-auto md:mx-10 xs:mx-5' >
                    <tbody>
                        <tr className='w-full'>
                            <td className='w-3/6'>Reverse Mode</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Stand Alarm</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Stepped Seat</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Seat Height</td>
                            <td className='w-3/6 text-right'>Adjustable</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Odometer</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Fast Charging Support</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Regenerative Braking</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Tripmeter</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>DRL</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Mobile App Connectivity</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
						<tr className='w-full'>
                            <td className='w-3/6'>GPS & Navigation</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
						<tr className='w-full'>
                            <td className='w-3/6'>Central Locking System</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
						<tr className='w-full'>
                            <td className='w-3/6'>Artifical Sound</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
						<tr className='w-full'>
                            <td className='w-3/6'>Parking Assist</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
						<tr className='w-full'>
                            <td className='w-3/6'>Hill Assist</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
						<tr className='w-full'>
                            <td className='w-3/6'>Anti Theft Alarm</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
						<tr className='w-full'>
                            <td className='w-3/6'>Geo Fencing</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
						<tr className='w-full'>
                            <td className='w-3/6'>Start/Stop Button</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>						                        
                    </tbody>
                 </table>
                <table className='table-auto md:mx-1 xs:mx-5'>
                    <tbody>
                        <tr>
                            <td>USB Chariging Port</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr>
                            <td>Front Storage Box</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
                        <tr>
                            <td>Under Seat Storage</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr>
                            <td>Speedometer</td>
                            <td className='w-3/6 text-right'>Digital</td>
                        </tr>
                        <tr>
                            <td>Tachometer</td>
                            <td className='w-3/6 text-right'>Digital</td>
                        </tr>
                        <tr>
                            <td>Low Battery Indicator</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr>
                            <td>Pillon Backrest</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr>
                            <td>Pillon Grabrail</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr>
                            <td>Pillon Seat</td>
                            <td className='w-3/6 text-right'>Convertible</td>
                        </tr>
						<tr>
                            <td>Footrest</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr>
                            <td>Start Type</td>
                            <td className='w-3/6 text-right'>Keyless</td>
                        </tr>
						<tr>
                            <td>Gear-Shift Light</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
                        <tr>
                            <td>Kill Switch</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
						<tr>
                            <td>Clock</td>
                           <td className='w-3/6 text-right'>No</td>
                        </tr>
                        <tr>
                            <td>Headlight</td>
                            <td className='w-3/6 text-right'>LED</td>
                        </tr>
						 <tr>
                            <td>Brake/Tail Light</td>
                            <td className='w-3/6 text-right'>LED</td>
                        </tr>
						 <tr>
                            <td>Turn Indicator</td>
                            <td className='w-3/6 text-right'>LED</td>
                        </tr>
						<tr>
                            <td>Pass Light</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
						<tr>
                            <td>Additional Features</td>
                            <td className='w-3/6 text-right'>Anti theft Alarm, Dual Disk Brake, USB Charging Port, Reverse Mode, Tubeless Tyres, Alloy Rims, Portable Battery, Remote Key, Digital Speedometer, LED Head lights, DRL, Parking assist</td>
                        </tr>
                       
                    </tbody>
                 </table>
                </div>                

                <button className='text-blue-400' onClick={() => setFeatures(!features)}>{features ? 'Collapse' : 'View More Specs'}</button>
                <br />
                <br />
                <hr />
            </div>
            </div>
        )
    }
 {
      spechide === 'lithium' &&(
        <div>
        <div className='w-full md:w-[80%] mx-auto my-10'>
            <div className='flex'>
                <h6 className='text-xl font-semibold'>Power</h6>
            </div>
            {/* <div className={power ? 'grid md:grid-cols-2 overflow-none' : 'grid md:grid-cols-2 w-full h-[100px] overflow-hidden'}>
                <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black  pl-24'>Petrol</span></p>
                <p className='py-3 border-b-1 text-gray-500'>Battery Type: <span className='text-black pl-24'>Petrol</span></p>
                <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className=' pl-24'>Petrol</span></p>
                <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
           
            </div> */}
            <div className={power ? 'grid md:grid-cols-2 overflow-none' : 'grid md:grid-cols-2 w-full h-[100px] overflow-hidden'}>
            <table className='table-auto md:mx-10 xs:mx-5' >
                <tbody>
                        <tr className='w-full'>
                            <td className='w-3/6'>Fuel Type</td>
                            <td className='w-3/6 text-right text-black'>Electric</td>
                        </tr>
					
                        <tr className='w-full'>
                            <td className='w-3/6'>Motor</td>
                            <td className='w-3/6 text-right'>250W, BLDC Hub Motor</td>

                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Top Speed</td>
                            <td className='w-3/6 text-right'>45 Kmph</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Mileage</td>
                            <td className='w-3/6 text-right'>65 Kmph</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Battery</td>
                            <td className='w-3/6 text-right'>Nickel, Manganese and Cobalt</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Battery Capacity</td>
                            <td className='w-3/6 text-right'>48V/26AH</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Batter IP Rating</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>0-40 Kms</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Loading Capacity</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Controller</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        
                    </tbody>
                 </table>
                <table className='table-auto md:mx-1 xs:mx-5'>
                    <tbody>
                        <tr>
                            <td>Battery Charging time</td>
                             <td className='w-3/6 text-right'>5 Hrs</td>
                        </tr>
                        <tr>
                            <td>Fast Charging Time</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
						<tr>
                            <td>Carrying Capacity</td>
                            <td className='w-3/6 text-right'>150 Kg</td>
                        </tr>
                        <tr>
                            <td>Max Power</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Charge Output</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Climbing</td>
                            <td className='w-3/6 text-right'>15º</td>
                        </tr>
                        <tr>
                            <td>Battery Cycles</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Max Torque</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Carbon Saving</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Transmission</td>
                            <td className='w-3/6 text-right'>Automatic</td>
                        </tr>						
                        <tr>
                            <td>Rated Power</td>
                            <td className='w-3/6 text-right'>--</td>
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
                <h6 className='text-xl font-semibold  '>Wheels and Suspension</h6>
            </div>
           
            <div className={wheels ? 'grid md:grid-cols-2 overflow-none' : 'grid md:grid-cols-2 w-full h-[100px] overflow-hidden'}>
            <table className='table-auto md:mx-10 xs:mx-5' >
                <tbody>
                        <tr className='w-full'>
                            <td className='w-3/6'>Braking system</td>
                            <td className='w-3/6 text-right'>Standard</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>F-Brake</td>
                            <td className='w-3/6 text-right'>Dual Disc</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>F-Brake Size</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>R-Brake</td>
                            <td className='w-3/6 text-right'>Disc</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>R-Brake Size</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Callipar Type</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Wheel</td>
                            <td className='w-3/6 text-right'>Stylish Aluminium Alloy Wheel</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>F-Wheel Size</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>                                             
                    </tbody>
                 </table>
                <table className='table-auto md:mx-1 xs:mx-5'>
                    <tbody>
                        <tr>
                            <td>R-Wheel size</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>F-Tyre size</td>
                            <td className='w-3/6 text-right'>3.5-10 Tubeless</td>
                        </tr>
                        <tr>
                            <td>R-Tyre size</td>
                            <td className='w-3/6 text-right'>3.5-10 Tubeless</td>
                        </tr>
                        <tr>
                            <td>Tyres</td>
                            <td className='w-3/6 text-right'>Tubeless</td>
                        </tr>
                        <tr>
                            <td>Raidal Tyres</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
                        <tr>
                            <td>F-Suspension</td>
                            <td className='w-3/6 text-right'>Telescopic</td>
                        </tr>
                        <tr>
                            <td>R-Suspension</td>
                            <td className='w-3/6 text-right'>Double shocker</td>
                        </tr>                                               
                    </tbody>
             </table>
            </div>

            <button className='text-blue-400' onClick={() => setWheels(!wheels)}>{wheels ? 'Collapse' : 'View More Specs'}</button>
            <br />
            <br />
            <hr />
        </div>
       
        <div className='w-full md:w-[80%] mx-auto my-10'>
            <div className='flex'>
                <h6 className='text-xl font-semibold  '>Dimensions</h6>
            </div>
            
            <div className={dimensions ? 'grid md:grid-cols-2 overflow-none' : 'grid md:grid-cols-2 w-full h-[100px] overflow-hidden'}>
            <table className='table-auto md:mx-10 xs:mx-5' >
                 <tbody>
                        <tr className='w-full'>
                            <td className='w-3/6'>Kerb Weight</td>
                            <td className='w-3/6 text-right'>65 Kgs</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Length</td>
                            <td className='w-3/6 text-right'>1800 mm</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Width</td>
                            <td className='w-3/6 text-right'>700 mm</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Height</td>
                            <td className='w-3/6 text-right'>1100 mm</td>
                        </tr>
						 </tbody>
                 </table>
				  <table className='table-auto md:mx-1 xs:mx-5'>
                    <tbody>
                        <tr>
                            <td>Wheelbase</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Ground Clearance</td>
                            <td className='w-3/6 text-right'>185 mm</td>
                        </tr>
                        <tr>
                            <td>Seat height</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Chassis Type</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
						</tbody>
             </table>
            </div>


            <button className='text-blue-400' onClick={() => setDimensions(!dimensions)}>{dimensions ? 'Collapse' : 'View More Specs'}</button>
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
                        <td className='w-3/6'>Motor Waranty</td>
                        <td className='w-3/6 text-right'>2 Yrs</td>
                    </tr>
                        </tbody>
             </table>
              <table className='table-auto md:mx-1 xs:mx-5'>
                <tbody>
                    <tr>
                        <td>Battery Waranty</td>
                        <td className='w-3/6 text-right'>3 Yrs</td>
                    </tr>                        
                    </tbody>
             </table>
            </div>

            <button className='text-blue-400' onClick={() => setWarranty(!warranty)}>{warranty ? 'Collapse' : 'View More Specs'}</button>
            <br />
            <br />
            <hr />
        </div>

        <div className='w-full md:w-[80%] mx-auto my-10'>
            <div className='flex'>
                <h6 className='text-xl font-semibold  '>Features</h6>
            </div>
            <div className={features ? 'grid md:grid-cols-2 overflow-none' : 'grid md:grid-cols-2 w-full h-[100px] overflow-hidden'}>
            <table className='table-auto md:mx-10 xs:mx-5' >
                <tbody>
                    <tr className='w-full'>
                        <td className='w-3/6'>Reverse Mode</td>
                        <td className='w-3/6 text-right'>Yes</td>
                    </tr>
                    <tr className='w-full'>
                        <td className='w-3/6'>Stand Alarm</td>
                        <td className='w-3/6 text-right'>No</td>
                    </tr>
                    <tr className='w-full'>
                        <td className='w-3/6'>Stepped Seat</td>
                        <td className='w-3/6 text-right'>Yes</td>
                    </tr>
                    <tr className='w-full'>
                        <td className='w-3/6'>Seat Height</td>
                        <td className='w-3/6 text-right'>Adjustable</td>
                    </tr>
                    <tr className='w-full'>
                        <td className='w-3/6'>Odometer</td>
                        <td className='w-3/6 text-right'>Yes</td>
                    </tr>
                    <tr className='w-full'>
                        <td className='w-3/6'>Fast Charging Support</td>
                        <td className='w-3/6 text-right'>No</td>
                    </tr>
                    <tr className='w-full'>
                        <td className='w-3/6'>Regenerative Braking</td>
                        <td className='w-3/6 text-right'>Yes</td>
                    </tr>
                    <tr className='w-full'>
                        <td className='w-3/6'>Tripmeter</td>
                        <td className='w-3/6 text-right'>--</td>
                    </tr>
                    <tr className='w-full'>
                        <td className='w-3/6'>DRL</td>
                        <td className='w-3/6 text-right'>Yes</td>
                    </tr>
                    <tr className='w-full'>
                        <td className='w-3/6'>Mobile App Connectivity</td>
                        <td className='w-3/6 text-right'>No</td>
                    </tr>
                    <tr className='w-full'>
                        <td className='w-3/6'>GPS & Navigation</td>
                        <td className='w-3/6 text-right'>No</td>
                    </tr>
                    <tr className='w-full'>
                        <td className='w-3/6'>Central Locking System</td>
                        <td className='w-3/6 text-right'>No</td>
                    </tr>
                    <tr className='w-full'>
                        <td className='w-3/6'>Artitical Sound</td>
                        <td className='w-3/6 text-right'>No</td>
                    </tr>
                    <tr className='w-full'>
                        <td className='w-3/6'>Parking Assist</td>
                        <td className='w-3/6 text-right'>No</td>
                    </tr>
                    <tr className='w-full'>
                        <td className='w-3/6'>Hill Assist</td>
                        <td className='w-3/6 text-right'>No</td>
                    </tr>
                    <tr className='w-full'>
                        <td className='w-3/6'>Anti Theft Alarm</td>
                        <td className='w-3/6 text-right'>Yes</td>
                    </tr>
                    <tr className='w-full'>
                        <td className='w-3/6'>Geo Fencing</td>
                        <td className='w-3/6 text-right'>No</td>
                    </tr>
                    <tr className='w-full'>
                        <td className='w-3/6'>Start/Stop Button</td>
                        <td className='w-3/6 text-right'>No</td>
                    </tr>						                        
                </tbody>
             </table>
            <table className='table-auto md:mx-1 xs:mx-5'>
                <tbody>
                    <tr>
                        <td>USB Chariging Port</td>
                        <td className='w-3/6 text-right'>Yes</td>
                    </tr>
                    <tr>
                        <td>Front Storage Box</td>
                        <td className='w-3/6 text-right'>No</td>
                    </tr>
                    <tr>
                        <td>Under Seat Storage</td>
                        <td className='w-3/6 text-right'>Yes</td>
                    </tr>
                    <tr>
                        <td>Speedometer</td>
                        <td className='w-3/6 text-right'>Digital</td>
                    </tr>
                    <tr>
                        <td>Tachometer</td>
                        <td className='w-3/6 text-right'>Digital</td>
                    </tr>
                    <tr>
                        <td>Low Battery Indicator</td>
                        <td className='w-3/6 text-right'>Yes</td>
                    </tr>
                    <tr>
                        <td>Pillon Backrest</td>
                        <td className='w-3/6 text-right'>Yes</td>
                    </tr>
                    <tr>
                        <td>Pillon Grabrail</td>
                        <td className='w-3/6 text-right'>Yes</td>
                    </tr>
                    <tr>
                        <td>Pillon Seat</td>
                        <td className='w-3/6 text-right'>Convertible</td>
                    </tr>
                    <tr>
                        <td>Footrest</td>
                        <td className='w-3/6 text-right'>Yes</td>
                    </tr>
                    <tr>
                        <td>Start Type</td>
                        <td className='w-3/6 text-right'>Keyless</td>
                    </tr>
                    <tr>
                        <td>Gear-Shift Light</td>
                        <td className='w-3/6 text-right'>No</td>
                    </tr>
                    <tr>
                        <td>Kill Switch</td>
                        <td className='w-3/6 text-right'>No</td>
                    </tr>
                    <tr>
                        <td>Clock</td>
                       <td className='w-3/6 text-right'>No</td>
                    </tr>
                    <tr>
                        <td>Headlight</td>
                        <td className='w-3/6 text-right'>LED</td>
                    </tr>
                     <tr>
                        <td>Brake/Tail Light</td>
                        <td className='w-3/6 text-right'>LED</td>
                    </tr>
                     <tr>
                        <td>Turn Indicator</td>
                        <td className='w-3/6 text-right'>LED</td>
                    </tr>
                    <tr>
                        <td>Pass Light</td>
                        <td className='w-3/6 text-right'>Yes</td>
                    </tr>
                    <tr>
                        <td>Additional Features</td>
                        <td className='w-3/6 text-right'>Anti theft Alarm, Dual Disk Brake, USB Charging Port, Reverse Mode, Tubeless Tyres, Alloy Rims, Portable Battery, Remote Key, Digital Speedometer, LED Head lights, DRL, Parking assist</td>
                    </tr>
                   
                </tbody>
             </table>
            </div>                

            <button className='text-blue-400' onClick={() => setFeatures(!features)}>{features ? 'Collapse' : 'View More Specs'}</button>
            <br />
            <br />
            <hr />
        </div>
        </div>
    )
 }
 {
        spechide === 'lead1' &&(
            <div>
            <div className='w-full md:w-[80%] mx-auto my-10'>
                <div className='flex'>
                    <h6 className='text-xl font-semibold'>Power</h6>
                </div>
                {/* <div className={power ? 'grid md:grid-cols-2 overflow-none' : 'grid md:grid-cols-2 w-full h-[100px] overflow-hidden'}>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black  pl-24'>Petrol</span></p>
                    <p className='py-3 border-b-1 text-gray-500'>Battery Type: <span className='text-black pl-24'>Petrol</span></p>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className=' pl-24'>Petrol</span></p>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
               
                </div> */}
                <div className={power ? 'grid md:grid-cols-2 overflow-none' : 'grid md:grid-cols-2 w-full h-[100px] overflow-hidden'}>
                <table className='table-auto md:mx-10 xs:mx-5' >
                    <tbody>
                        <tr className='w-full'>
                            <td className='w-3/6'>Fuel Type</td>
                            <td className='w-3/6 text-right text-black'>Electric</td>
                        </tr>
					
                        <tr className='w-full'>
                            <td className='w-3/6'>Motor</td>
                            <td className='w-3/6 text-right'>250W, BLDC Hub Motor</td>

                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Top Speed</td>
                            <td className='w-3/6 text-right'>45 Kmph</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Mileage</td>
                            <td className='w-3/6 text-right'>90 Kmph</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Battery</td>
                            <td className='w-3/6 text-right'>Lithium Iron</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Battery Capacity</td>
                            <td className='w-3/6 text-right'>60V/42AH</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Batter IP Rating</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>0-40 Kms</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Loading Capacity</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Controller</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        
                    </tbody>
                 </table>
                <table className='table-auto md:mx-1 xs:mx-5'>
                    <tbody>
                        <tr>
                            <td>Battery Charging time</td>
                             <td className='w-3/6 text-right'>5 Hrs</td>
                        </tr>
                        <tr>
                            <td>Fast Charging Time</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
						<tr>
                            <td>Carrying Capacity</td>
                            <td className='w-3/6 text-right'>150 Kg</td>
                        </tr>
                        <tr>
                            <td>Max Power</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Charge Output</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Climbing</td>
                            <td className='w-3/6 text-right'>15º</td>
                        </tr>
                        <tr>
                            <td>Battery Cycles</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Max Torque</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Carbon Saving</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Transmission</td>
                            <td className='w-3/6 text-right'>Automatic</td>
                        </tr>						
                        <tr>
                            <td>Rated Power</td>
                            <td className='w-3/6 text-right'>--</td>
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
                    <h6 className='text-xl font-semibold  '>Wheels and Suspension</h6>
                </div>
               
                <div className={wheels ? 'grid md:grid-cols-2 overflow-none' : 'grid md:grid-cols-2 w-full h-[100px] overflow-hidden'}>
                <table className='table-auto md:mx-10 xs:mx-5' >
                    <tbody>
                        <tr className='w-full'>
                            <td className='w-3/6'>Braking system</td>
                            <td className='w-3/6 text-right'>Standard</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>F-Brake</td>
                            <td className='w-3/6 text-right'>Dual Disc</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>F-Brake Size</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>R-Brake</td>
                            <td className='w-3/6 text-right'>Disc</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>R-Brake Size</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Callipar Type</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Wheel</td>
                            <td className='w-3/6 text-right'>Stylish Aluminium Alloy Wheel</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>F-Wheel Size</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>                                             
                    </tbody>
                 </table>
                <table className='table-auto md:mx-1 xs:mx-5'>
                    <tbody>
                        <tr>
                            <td>R-Wheel size</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>F-Tyre size</td>
                            <td className='w-3/6 text-right'>3.5-10 Tubeless</td>
                        </tr>
                        <tr>
                            <td>R-Tyre size</td>
                            <td className='w-3/6 text-right'>3.5-10 Tubeless</td>
                        </tr>
                        <tr>
                            <td>Tyres</td>
                            <td className='w-3/6 text-right'>Tubeless</td>
                        </tr>
                        <tr>
                            <td>Raidal Tyres</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
                        <tr>
                            <td>F-Suspension</td>
                            <td className='w-3/6 text-right'>Telescopic</td>
                        </tr>
                        <tr>
                            <td>R-Suspension</td>
                            <td className='w-3/6 text-right'>Double shocker</td>
                        </tr>                                               
                    </tbody>
                 </table>
                </div>
    
                <button className='text-blue-400' onClick={() => setWheels(!wheels)}>{wheels ? 'Collapse' : 'View More Specs'}</button>
                <br />
                <br />
                <hr />
            </div>
           
            <div className='w-full md:w-[80%] mx-auto my-10'>
                <div className='flex'>
                    <h6 className='text-xl font-semibold  '>Dimensions</h6>
                </div>
                
                <div className={dimensions ? 'grid md:grid-cols-2 overflow-none' : 'grid md:grid-cols-2 w-full h-[100px] overflow-hidden'}>
                <table className='table-auto md:mx-10 xs:mx-5' >
                    <tbody>
                        <tr className='w-full'>
                            <td className='w-3/6'>Kerb Weight</td>
                            <td className='w-3/6 text-right'>65 Kgs</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Length</td>
                            <td className='w-3/6 text-right'>1800 mm</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Width</td>
                            <td className='w-3/6 text-right'>700 mm</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Height</td>
                            <td className='w-3/6 text-right'>1100 mm</td>
                        </tr>
                         </tbody>
                 </table>
                  <table className='table-auto md:mx-1 xs:mx-5'>
                    <tbody>
                        <tr>
                            <td>Wheelbase</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Ground Clearance</td>
                            <td className='w-3/6 text-right'>185 mm</td>
                        </tr>
                        <tr>
                            <td>Seat height</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Chassis Type</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        </tbody>
                 </table>
                </div>
    
    
                <button className='text-blue-400' onClick={() => setDimensions(!dimensions)}>{dimensions ? 'Collapse' : 'View More Specs'}</button>
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
                            <td className='w-3/6'>Motor Waranty</td>
                            <td className='w-3/6 text-right'>2 Yrs</td>
                        </tr>
                            </tbody>
                 </table>
                  <table className='table-auto md:mx-1 xs:mx-5'>
                    <tbody>
                        <tr>
                            <td>Battery Waranty</td>
                            <td className='w-3/6 text-right'>3 Yrs</td>
                        </tr>                        
                        </tbody>
                 </table>
                </div>
    
                <button className='text-blue-400' onClick={() => setWarranty(!warranty)}>{warranty ? 'Collapse' : 'View More Specs'}</button>
                <br />
                <br />
                <hr />
            </div>
    
            <div className='w-full md:w-[80%] mx-auto my-10'>
                <div className='flex'>
                    <h6 className='text-xl font-semibold  '>Features</h6>
                </div>
                <div className={features ? 'grid md:grid-cols-2 overflow-none' : 'grid md:grid-cols-2 w-full h-[100px] overflow-hidden'}>
                <table className='table-auto md:mx-10 xs:mx-5' >
                     <tbody>
                        <tr className='w-full'>
                            <td className='w-3/6'>Reverse Mode</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Stand Alarm</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Stepped Seat</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Seat Height</td>
                            <td className='w-3/6 text-right'>Adjustable</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Odometer</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Fast Charging Support</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Regenerative Braking</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Tripmeter</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>DRL</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Mobile App Connectivity</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
						<tr className='w-full'>
                            <td className='w-3/6'>GPS & Navigation</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
						<tr className='w-full'>
                            <td className='w-3/6'>Central Locking System</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
						<tr className='w-full'>
                            <td className='w-3/6'>Artifical Sound</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
						<tr className='w-full'>
                            <td className='w-3/6'>Parking Assist</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
						<tr className='w-full'>
                            <td className='w-3/6'>Hill Assist</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
						<tr className='w-full'>
                            <td className='w-3/6'>Anti Theft Alarm</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
						<tr className='w-full'>
                            <td className='w-3/6'>Geo Fencing</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
						<tr className='w-full'>
                            <td className='w-3/6'>Start/Stop Button</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>						                        
                    </tbody>
                 </table>
                <table className='table-auto md:mx-1 xs:mx-5'>
                    <tbody>
                        <tr>
                            <td>USB Chariging Port</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr>
                            <td>Front Storage Box</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
                        <tr>
                            <td>Under Seat Storage</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr>
                            <td>Speedometer</td>
                            <td className='w-3/6 text-right'>Digital</td>
                        </tr>
                        <tr>
                            <td>Tachometer</td>
                            <td className='w-3/6 text-right'>Digital</td>
                        </tr>
                        <tr>
                            <td>Low Battery Indicator</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr>
                            <td>Pillon Backrest</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr>
                            <td>Pillon Grabrail</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr>
                            <td>Pillon Seat</td>
                            <td className='w-3/6 text-right'>Convertible</td>
                        </tr>
						<tr>
                            <td>Footrest</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr>
                            <td>Start Type</td>
                            <td className='w-3/6 text-right'>Keyless</td>
                        </tr>
						<tr>
                            <td>Gear-Shift Light</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
                        <tr>
                            <td>Kill Switch</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
						<tr>
                            <td>Clock</td>
                           <td className='w-3/6 text-right'>No</td>
                        </tr>
                        <tr>
                            <td>Headlight</td>
                            <td className='w-3/6 text-right'>LED</td>
                        </tr>
						 <tr>
                            <td>Brake/Tail Light</td>
                            <td className='w-3/6 text-right'>LED</td>
                        </tr>
						 <tr>
                            <td>Turn Indicator</td>
                            <td className='w-3/6 text-right'>LED</td>
                        </tr>
						<tr>
                            <td>Pass Light</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
						<tr>
                            <td>Additional Features</td>
                            <td className='w-3/6 text-right'>Anti theft Alarm, Dual Disk Brake, USB Charging Port, Reverse Mode, Tubeless Tyres, Alloy Rims, Portable Battery, Remote Key, Digital Speedometer, LED Head lights, DRL, Parking assist</td>
                        </tr>
                       
                    </tbody>
                 </table>
                </div>                
    
                <button className='text-blue-400' onClick={() => setFeatures(!features)}>{features ? 'Collapse' : 'View More Specs'}</button>
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

export default BattReOne