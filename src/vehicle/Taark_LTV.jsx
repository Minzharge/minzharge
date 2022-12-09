import React, { useContext, useState} from 'react'
import ProductVariants from '../pages/ProductVariants';
import { NavbarContext } from '../context/NavbarStatus';
import './style.css'

const assetUrl = process.env.NODE_ENV === 'production' ? '/minzharge/assets/' : '/minzharge/assets/';
function ProductCarousal () {
  let temp = 0;
  const images = [
    "https://www.taark.in/assets/images/gallery-3.jpg",
    "https://www.taark.in/assets/images/gallery-3.jpg",
    "https://www.taark.in/assets/images/gallery-1.jpg",
    "https://www.taark.in/assets/images/gallery-5.jpg"
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

function Taark_LTV() {

    const {expand} = useContext(NavbarContext)
    const [pricehide, setPricehide] = useState('lead')
    const [clamp, setClamp] = useState(false)
    const [power, setPower] = useState(false)
    const [wheels, setWheels] = useState(false)
	const [dimensions, setDimensions] = useState(false)
	const [customization, setCustomization] = useState(false)
	const [warranty, setWarranty] = useState(false)
	const [features, setFeatures] = useState(false)
    const handlePriceHide = (event) => {
        const getPrice = event.target.value;
        setPricehide(getPrice)
    } 
    const [spechide, setSpechide] = useState('lead');

    const table_data = [{
          name: "Taark LTV (Lead Acid)",
          price: "₹ 1,84,937",
          onRoad: "(Avg. Ex-Showroom price)",
          offerLink: '#',
          kms: "70 Km, 30 Kmph, 700 Kg, 7 Hrs"
      },
      {
          name: "Taark LTV - (Lithium Ferro-phosphate)",
          price: "₹ 2,36,939",
          onRoad: "(Avg. Ex-Showroom price)",
          offerLink: '#',
          kms: "70 Km, 30 Kmph, 700 Kg, 7 Hrs"
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
            <h1 className='text-3xl'>Taark LTV </ h1>
            <div className='mt-5 mb-5'>
                {/* <label htmlFor="type"></label> */}
                <select name="" id="type" className='w-[200px] p-3 border-b-2 border-black outline-none' onChange={handlePriceHide}>
                    <option value="" disabled selected>Select Type </option>
                    <option value="lead">Lead Acid</option>
                    <option value="lithium">LFP</option>					 
                      </select>
            </div>
              <div className="w-layout-grid specifications-grid">
                            <div className="specification-container"> <img src={assetUrl + "/Key_highlights_icon/battery.png"} class="car-icons"/>
                                <div>
                                    <div className="car-specifications-titles">Battery</div>
                                    <div>Lead Acid & LFP</div>
                                </div>
                            </div>
                            <div className="specification-container" ><img src={assetUrl + "/Key_highlights_icon/charging time.png"} alt="cad" class="car-icons"/>
                                <div>
                                    <div className="car-specifications-titles">Charge</div>
                                    <div>8 Hrs</div>
                                </div>
                            </div>
                            <div className="specification-container"><img src={assetUrl + "/Key_highlights_icon/Reverse Mode.png"} class="car-icons"/>
                                <div>
                                    <div className="car-specifications-titles">Top Speed</div>
                                    <div>15-30 Kmph</div>
                                </div>
                            </div>
                            <div className="specification-container"><img src={assetUrl + "/Key_highlights_icon/Range.png"}class="car-icons"/>
                                <div>
                                    <div className="car-specifications-titles">Range</div>
                                    <div>50-70 km</div>
                                </div>
                            </div>
                              <div className="specification-container" ><img src={assetUrl + "/Key_highlights_icon/tyre.png"}class="car-icons"/>
                                <div>
                                    <div className="car-specifications-titles" style={{'textAlign':'left'}}>Tyre</div>
                                    <div style={{'textAlign':'left'}}>Tube Tyers</div>
                                </div>
                            </div>
                            <div className="specification-container" ><img src={assetUrl + "/Key_highlights_icon/trolley-push-cart-with-boxes-svgrepo-com.svg"}class="car-icons"/>
                                <div>
                                    <div className="car-specifications-titles" style={{'textAlign':'left'}}>Capacity</div>
                                    <div style={{'textAlign':'left'}}>700 Kgs</div>
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
                <div className='w-[30px] h-[30px] rounded border border-slate-400 bg-red-500'></div>
                <div className=''>Red</div>
            </div> 
           <div className='flex gap-5 w-[40%] sm:w-[30%] lg:w-auto'>
                <div className='w-[30px] h-[30px] rounded border border-slate-400 bg-black'></div>
                <div className=''>Black</div>
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
                <div className='w-[30px] h-[30px] rounded border border-slate-400 bg-orange-500'></div>
                <div className=''>Orange</div>
            </div>             
            

        </div>
        <div className='font-sans mt-16'>*Customized color also available</div>
    </div>

    <hr />

    <div className='flex justify-between my-10 flex-wrap'>
        <h3 className='font-sans text-xl font-bold'>Product Details</h3>
        <div className=''>
            <label htmlFor="type"></label>
            <select name="" id="type" className='w-[200px] p-3 border-b-2 border-black outline-none' onChange={handleshowhide}>
                <option value="" disabled>Select Type </option>
                  <option value="lead">Lead Acid</option>
                    <option value="lithium">LFP</option>	
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
                            <td className='w-3/6 text-right'>1500W, Brushless (BLDC)</td>

                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Top Speed</td>
                            <td className='w-3/6 text-right'>25 Kmph</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Mileage</td>
                            <td className='w-3/6 text-right'>50-70 Kmph</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Battery</td>
                            <td className='w-3/6 text-right'>Lead Acid</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Battery Capacity</td>
                            <td className='w-3/6 text-right'>48V/88AH - 4 Battery Series</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Engine Type</td>
                            <td className='w-3/6 text-right'>Motor Directly coupled</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Brakes</td>
                            <td className='w-3/6 text-right'>Re-generative Braking</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Loading Capacity</td>
                            <td className='w-3/6 text-right'>700 Kg</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Controller</td>
                            <td className='w-3/6 text-right'>Intelligent 36 tubes</td>
                        </tr>
                        
                    </tbody>
                 </table>
                <table className='table-auto md:mx-1 xs:mx-5'>
                    <tbody>
                        <tr>
                            <td>Battery Charging time</td>
                             <td className='w-3/6 text-right'>8 hours</td>
                        </tr>
                        <tr>
                            <td>Fast Charging Time</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
						<tr>
                            <td>Carrying Capacity</td>
                            <td className='w-3/6 text-right'>700 Kgs</td>
                        </tr>
                        <tr>
                            <td>Max Power</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Charge Output</td>
                            <td className='w-3/6 text-right'>10 Amps with Auto cut off, Fast Charging support</td>
                        </tr>
                        <tr>
                            <td>Climbing</td>
                            <td className='w-3/6 text-right'>10º</td>
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
                            <td className='w-3/6 text-right'>Neutral, Drive and Reverse Switch</td>
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
                            <td className='w-3/6 text-right'>Drum (Rear)</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Brake Drum</td>
                            <td className='w-3/6 text-right'>220 mm</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Brake oil</td>
                            <td className='w-3/6 text-right'>Dot 3 (250 ML)</td>
                        </tr>
                                                                   
                    </tbody>
                 </table>
                <table className='table-auto md:mx-1 xs:mx-5'>
                    <tbody>
                        <tr>
                            <td>Axle oil</td>
                            <td className='w-3/6 text-right'> Ep 90 (300 ML)</td>
                        </tr>
                        <tr>
                            <td>Motor braking </td>
                            <td className='w-3/6 text-right'>Available while braking (Cut-off) </td>
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
                            <td className='w-3/6'>Axle Length</td>
                            <td className='w-3/6 text-right'>Rigid Axle 46 Inches</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Length</td>
                            <td className='w-3/6 text-right'>4350 mm</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Width</td>
							 <td className='w-3/6'>1216 mm </td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Height</td>
                            <td className='w-3/6 text-right'>1060 mm</td>
                        </tr>
						<tr className='w-full'>
                            <td className='w-3/6'>Ground clearance</td>
                            <td className='w-3/6 text-right'>150 mm</td>
                        </tr>
						<tr className='w-full'>
                            <td className='w-3/6'>Wheelbase</td>
                            <td className='w-3/6 text-right'>2510 mm</td>
                        </tr>
						<tr className='w-full'>
                            <td className='w-3/6'>Tyre</td>
                            <td className='w-3/6 text-right'>Tubless</td>
                        </tr>
						<tr>
                            <td>Frame</td>
                            <td className='w-3/6 text-right'>High strength steel</td>
                        </tr>
						 </tbody>
                 </table>
				  <table className='table-auto md:mx-1 xs:mx-5'>
                    <tbody>
					
                        <tr>
                            <td>Platform Length</td>
                            <td className='w-3/6 text-right'>1824 mm</td>
                        </tr>
                        <tr>
                            <td>Platform Width</td>
                            <td className='w-3/6 text-right'>1216 mm</td>
                        </tr>
                        <tr>
                            <td>Platform Height</td>
                            <td className='w-3/6 text-right'>300 mm</td>
                        </tr>
                        <tr>
                            <td>Front fork</td>
                            <td className='w-3/6 text-right'>43 mm Rigid</td>
                        </tr>
						<tr>
                            <td>Rear Leaf spring</td>
                            <td className='w-3/6 text-right'>60 x7 - 5 Plates rigid</td>
                        </tr>
						<tr>
                            <td>Rear tire</td>
                            <td className='w-3/6 text-right'>4.50 x 12- 8 PR</td>
                        </tr>
						<tr>
                            <td>Front Tyre</td>
                            <td className='w-3/6 text-right'>4.50 x 12- 8 PR7</td>
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
                            <td className='w-3/6 text-right'>1 Yr</td>
                        </tr>
                        	</tbody>
                 </table>
				  <table className='table-auto md:mx-1 xs:mx-5'>
                    <tbody>
                        <tr>
                            <td>Battery Waranty</td>
                            <td className='w-3/6 text-right'>1 Yr</td>
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
                    <h6 className='text-xl font-semibold  '>Customization</h6>
                </div>             
				<div className={warranty ? 'grid md:grid-cols-2 overflow-none' : 'grid md:grid-cols-2 w-full h-[100px] overflow-hidden'}>
                <table className='table-auto md:mx-10 xs:mx-5' >
                    <tbody>
                        <tr className='w-full'>
                            <td className='w-3/6'>Cabin</td>
                            <td className='w-3/6 text-right'>If Required</td>
                        </tr>
						<tr className='w-full'>
                            <td className='w-3/6'>Lighting, Horn & accessories</td>
                            <td className='w-3/6 text-right'>If Required</td>
                        </tr>
                        	</tbody>
                 </table>
				  <table className='table-auto md:mx-1 xs:mx-5'>
                    <tbody>
                        <tr>
                            <td>Loading cabin</td>
                            <td className='w-3/6 text-right'>If Required</td>
                        </tr>
						<tr>
                            <td>Battery</td>
                            <td className='w-3/6 text-right'>Customization is also available up to 94AH</td>
                        </tr>						
						</tbody>
                 </table>
                </div>

                <button className='text-blue-400' onClick={() => setCustomization(!customization)}>{customization ? 'Collapse' : 'View More Specs'}</button>
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
                            <td className='w-3/6'>Seat Height</td>
                            <td className='w-3/6 text-right'>Fixed</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Odometer</td>
                            <td className='w-3/6 text-right'>Customizable</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Fast Charging Support</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Regenerative Braking</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Tripmeter</td>
                            <td className='w-3/6 text-right'>Customizable</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>DRL</td>
                            <td className='w-3/6 text-right'>Customizable</td>
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
                            <td className='w-3/6 text-right'>No</td>
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
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
                          <tr>
                            <td>Under Seat Storage</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
                        <tr>
                            <td>Speedometer</td>
                            <td className='w-3/6 text-right'>Customizable</td>
                        </tr>
                        <tr>
                            <td>Tachometer</td>
                            <td className='w-3/6 text-right'>Customizable</td>
                        </tr>
                        <tr>
                            <td>Low Battery Indicator</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        
                        <tr>
                            <td>Start Type</td>
                            <td className='w-3/6 text-right'>Key</td>
                        </tr>
						
                        <tr>
                            <td>Kill Switch</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
						
                        <tr>
                            <td>Headlight</td>
                            <td className='w-3/6 text-right'>Customizable</td>
                        </tr>
						 <tr>
                            <td>Brake/Tail Light</td>
                            <td className='w-3/6 text-right'>Customizable</td>
                        </tr>
						 <tr>
                            <td>Turn Indicator</td>
                            <td className='w-3/6 text-right'>Customizable</td>
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
                            <td className='w-3/6 text-right'>1500W, Brushless (BLDC)</td>

                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Top Speed</td>
                            <td className='w-3/6 text-right'>25 Kmph</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Mileage</td>
                            <td className='w-3/6 text-right'>50-70 Kmph</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Battery</td>
                            <td className='w-3/6 text-right'>Lithium Ferro-phosphate</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Battery Capacity</td>
                            <td className='w-3/6 text-right'>48V/88AH - 4 Battery Series</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Engine Type</td>
                            <td className='w-3/6 text-right'>Motor Directly coupled</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Brakes</td>
                            <td className='w-3/6 text-right'>Re-generative Braking</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Loading Capacity</td>
                            <td className='w-3/6 text-right'>700 Kg</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Controller</td>
                            <td className='w-3/6 text-right'>Intelligent 36 tubes</td>
                        </tr>
                        
                    </tbody>
                 </table>
                <table className='table-auto md:mx-1 xs:mx-5'>
                    <tbody>
                        <tr>
                            <td>Battery Charging time</td>
                             <td className='w-3/6 text-right'>8 hours</td>
                        </tr>
                        <tr>
                            <td>Fast Charging Time</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
						<tr>
                            <td>Carrying Capacity</td>
                            <td className='w-3/6 text-right'>700 Kgs</td>
                        </tr>
                        <tr>
                            <td>Max Power</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Charge Output</td>
                            <td className='w-3/6 text-right'>10 Amps with Auto cut off, Fast Charging support</td>
                        </tr>
                        <tr>
                            <td>Climbing</td>
                            <td className='w-3/6 text-right'>10º</td>
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
                            <td className='w-3/6 text-right'>Neutral, Drive and Reverse Switch</td>
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
                            <td className='w-3/6 text-right'>Drum (Rear)</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Brake Drum</td>
                            <td className='w-3/6 text-right'>220 mm</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Brake oil</td>
                            <td className='w-3/6 text-right'>Dot 3 (250 ML)</td>
                        </tr>
                                                                   
                    </tbody>
                 </table>
                <table className='table-auto md:mx-1 xs:mx-5'>
                    <tbody>
                        <tr>
                            <td>Axle oil</td>
                            <td className='w-3/6 text-right'> Ep 90 (300 ML)</td>
                        </tr>
                        <tr>
                            <td>Motor braking </td>
                            <td className='w-3/6 text-right'>Available while braking (Cut-off) </td>
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
                            <td className='w-3/6'>Axle Length</td>
                            <td className='w-3/6 text-right'>Rigid Axle 46 Inches</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Length</td>
                            <td className='w-3/6 text-right'>4350 mm</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Width</td> 
							<td className='w-3/6'>1216 mm</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Height</td>
                            <td className='w-3/6 text-right'>1060 mm</td>
                        </tr>
						<tr className='w-full'>
                            <td className='w-3/6'>Ground clearance</td>
                            <td className='w-3/6 text-right'>150 mm</td>
                        </tr>
						<tr className='w-full'>
                            <td className='w-3/6'>Wheelbase</td>
                            <td className='w-3/6 text-right'>2510 mm</td>
                        </tr>
						<tr className='w-full'>
                            <td className='w-3/6'>Tyre</td>
                            <td className='w-3/6 text-right'>Tubless</td>
                        </tr>
						<tr>
                            <td>Frame</td>
                            <td className='w-3/6 text-right'>High strength steel</td>
                        </tr>
						 </tbody>
                 </table>
				  <table className='table-auto md:mx-1 xs:mx-5'>
                    <tbody>
					
                        <tr>
                            <td>Platform Length</td>
                            <td className='w-3/6 text-right'>1824 mm</td>
                        </tr>
                        <tr>
                            <td>Platform Width</td>
                            <td className='w-3/6 text-right'>1216 mm</td>
                        </tr>
                        <tr>
                            <td>Platform Height</td>
                            <td className='w-3/6 text-right'>300 mm</td>
                        </tr>
                        <tr>
                            <td>Front fork</td>
                            <td className='w-3/6 text-right'>43 mm Rigid</td>
                        </tr>
						<tr>
                            <td>Rear Leaf spring</td>
                            <td className='w-3/6 text-right'>60 x7 - 5 Plates rigid</td>
                        </tr>
						<tr>
                            <td>Rear tire</td>
                            <td className='w-3/6 text-right'>4.50 x 12- 8 PR</td>
                        </tr>
						<tr>
                            <td>Front Tyre</td>
                            <td className='w-3/6 text-right'>4.50 x 12- 8 PR7</td>
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
                            <td className='w-3/6 text-right'>1 Yr</td>
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
                    <h6 className='text-xl font-semibold  '>Customization</h6>
                </div>             
				<div className={warranty ? 'grid md:grid-cols-2 overflow-none' : 'grid md:grid-cols-2 w-full h-[100px] overflow-hidden'}>
                <table className='table-auto md:mx-10 xs:mx-5' >
                    <tbody>
                        <tr className='w-full'>
                            <td className='w-3/6'>Cabin</td>
                            <td className='w-3/6 text-right'>If Required</td>
                        </tr>
						<tr className='w-full'>
                            <td className='w-3/6'>Lighting, Horn & accessories</td>
                            <td className='w-3/6 text-right'>If Required</td>
                        </tr>
                        	</tbody>
                 </table>
				  <table className='table-auto md:mx-1 xs:mx-5'>
                    <tbody>
                        <tr>
                            <td>Loading cabin</td>
                            <td className='w-3/6 text-right'>If Required</td>
                        </tr>
						<tr>
                            <td>Battery</td>
                            <td className='w-3/6 text-right'>Customization is also available up to 94AH</td>
                        </tr>						
						</tbody>
                 </table>
                </div>

                <button className='text-blue-400' onClick={() => setCustomization(!customization)}>{customization ? 'Collapse' : 'View More Specs'}</button>
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
                            <td className='w-3/6'>Seat Height</td>
                            <td className='w-3/6 text-right'>Fixed</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Odometer</td>
                            <td className='w-3/6 text-right'>Customizable</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Fast Charging Support</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Regenerative Braking</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Tripmeter</td>
                            <td className='w-3/6 text-right'>Customizable</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>DRL</td>
                            <td className='w-3/6 text-right'>Customizable</td>
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
                            <td className='w-3/6 text-right'>No</td>
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
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
                          <tr>
                            <td>Under Seat Storage</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
                        <tr>
                            <td>Speedometer</td>
                            <td className='w-3/6 text-right'>Customizable</td>
                        </tr>
                        <tr>
                            <td>Tachometer</td>
                            <td className='w-3/6 text-right'>Customizable</td>
                        </tr>
                        <tr>
                            <td>Low Battery Indicator</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        
                        <tr>
                            <td>Start Type</td>
                            <td className='w-3/6 text-right'>Key</td>
                        </tr>
						
                        <tr>
                            <td>Kill Switch</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
						
                        <tr>
                            <td>Headlight</td>
                            <td className='w-3/6 text-right'>Customizable</td>
                        </tr>
						 <tr>
                            <td>Brake/Tail Light</td>
                            <td className='w-3/6 text-right'>Customizable</td>
                        </tr>
						 <tr>
                            <td>Turn Indicator</td>
                            <td className='w-3/6 text-right'>Customizable</td>
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

export default Taark_LTV