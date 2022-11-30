import React, { useContext,useState} from 'react'
import ProductCarousal from '../components/ProductCarousal';
import ProductVariants from './ProductVariants';
import { NavbarContext } from '../context/NavbarStatus';
import './style.css'

const assetUrl = process.env.NODE_ENV === 'production' ? '/minzharge/assets/' : '/minzharge/assets/';

function ProductView() {

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
          name: "iQube Standard",
          price: "₹ 1,08,268",
          onRoad: "(On-Road Price, Salem)",
          offerLink: '#',
          kms: "100 Km, 78 Kmph, 117 kg, 5 Hrs"
      },
      {
          name: "iQube Standard",
          price: "₹ 1,08,268",
          onRoad: "(On-Road Price, Salem)",
          offerLink: '#',
          kms: "100 Km, 78 Kmph, 117 kg, 5 Hrs"
      },
  ];
  
  const handleshowhide = (event) => {
      const getSpec = event.target.value;
      setSpechide(getSpec);
  
  }
  return (
    <div className='w-full'>
      <div className='md:w-[70%] mx-auto grid md:grid-cols-2 gap-10 mt-5'>
      <div className={expand ? 'hidden': 'p-2'}>
          <ProductCarousal />
        </div>

        <div className='md:p-5 text-center md:text-left'>
            <h1 className='text-3xl'>Nexzu Bazinga Cargo</h1>
            <div className='mt-5 mb-5'>
                {/* <label htmlFor="type"></label> */}
                <select name="" id="type" className='w-[200px] p-3 border-2 border-black rounded outline-none' onChange={handlePriceHide}>
                    <option value="" disabled>Select Type </option>
                    <option value="lead">85 Km</option>
                    <option value="lithium">100 Km</option>
					  <option value="lead1">120 Km</option>
                      </select>
            </div>
            <div className="w-layout-grid specifications-grid">
                            <div className="specification-container"> <img src={assetUrl + "/Key_highlights_icon/battery.png"} class="car-icons"/>
                                <div>
                                    <div className="car-specifications-titles">Battery</div>
                                    <div>LiFePO4</div>
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
                                    <div>25 Kmph</div>
                                </div>
                            </div>
                            <div className="specification-container"><img src={assetUrl + "/Key_highlights_icon/Range.png"}class="car-icons"/>
                                <div>
                                    <div className="car-specifications-titles">Range</div>
                                    <div>120km</div>
                                </div>
                            </div>
                            <div className="specification-container"><img src={assetUrl + "/Key_highlights_icon/fast-charge(1).png"}class="car-icons"/>
                                <div>
                                    <div className="car-specifications-titles">Technology</div>
                                    <div>Smart Ai</div>
                                </div>

                            </div>
                            <div className="specification-container" ><img src={assetUrl + "/Key_highlights_icon/Power.png"}class="car-icons"/>
                                <div>
                                    <div className="car-specifications-titles" style={{'textAlign':'left'}}>Loading Capacity</div>
                                    <div style={{'textAlign':'left'}}>200 Kgs</div>
                                </div>
                            </div>
                           
                        </div>
                        {
                        pricehide === 'lead' && (
                            <div className='flex pb-7 justify-center md:justify-start sm:mt-5'>
                                <h1 className='text-3xl text-[#40b322] font-[600]'>₹ 76,500</h1>
                                <p className='ml-4 mt-4 text-xs' >[Avg Ex-showroom price]</p>
                            </div>
                        )}

                    {
                        pricehide === 'lithium' && (
                            <div className='flex pb-7 flex pb-7 justify-center md:justify-start sm:mt-5'>
                                <h1 className='text-3xl text-[#40b322] font-[600]'>₹ 81,700</h1>
                                <p className='ml-4 mt-4 text-xs' >[Avg Ex-showroom price]</p>
                            </div>
                        )}
						{
                        pricehide === 'lead1' && (
                            <div className='flex pb-7 flex pb-7 justify-center md:justify-start sm:mt-5'>
                                <h1 className='text-3xl text-[#40b322] font-[600]'>₹ 90,700</h1>
                                <p className='ml-4 mt-4 text-xs' >[Avg Ex-showroom price]</p>
                            </div>
                        )}
            <hr className='mb-5'/>
            <button className='mb-5 text-sm font-bold bg-yellow-300 text-white px-20 py-1 rounded-md'>Get Offers</button>
        </div>
      </div>
      <div className='w-[80%] mx-auto mt-10'>
    <h3 className='font-sans text-xl mb-8 font-bold'>Variants Price List</h3>
    <div className=''>
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
        <div className='flex justify-around flex-wrap gap-5'>
            <div className='flex gap-5'>
                <div className='w-[30px] h-[30px] bg-red-500'></div>
                <div className=''>Red</div>
            </div>
            <div className='flex gap-5'>
                <div className='w-[30px] h-[30px] bg-green-500'></div>
                <div className=''>Green</div>
            </div>
            <div className='flex gap-5'>
                <div className='w-[30px] h-[30px] bg-blue-500'></div>
                <div className=''>Blue</div>
            </div>
            <div className='flex gap-5'>
                <div className='w-[30px] h-[30px] bg-yellow-500'></div>
                <div className=''>Yellow</div>
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
                    <option value="lead">85 Km</option>
                    <option value="lithium">100 Km</option>
					  <option value="lead1">120 Km</option>
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
                            <td className='w-3/6 text-right'>25 Kmph</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Mileage</td>
                            <td className='w-3/6 text-right'>85 Km</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Battery</td>
                            <td className='w-3/6 text-right'>Lithium iron phosphate</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Battery Capacity</td>
                            <td className='w-3/6 text-right'>60V/30AH</td>
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
                            <td className='w-3/6 text-right'>200 Kgs</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Rated Power</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        
                    </tbody>
                 </table>
                <table className='table-auto md:mx-10 xs:mx-5'>
                    <tbody>
                        <tr>
                            <td>Battery Charging time</td>
                             <td className='w-3/6 text-right'>4-4.5 hrs</td>
                        </tr>
                        <tr>
                            <td>Fast Charging Time</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Max Power</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Charge Output</td>
                            <td className='w-3/6 text-right'>60V, 7.5A With Over-voltage, Short-circuit protection</td>
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
                            <td>Transmission</td>
                            <td className='w-3/6 text-right'>Automatic</td>
                        </tr>
                        <tr>
                            <td>Carbon Saving</td>
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
                            <td className='w-3/6 text-right'>Hydraulic disc Brake</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>F-Brake Size</td>
                            <td className='w-3/6 text-right'>220 mm</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>R-Brake</td>
                            <td className='w-3/6 text-right'>Drum</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>R-Brake Size</td>
                            <td className='w-3/6 text-right'>130 mm</td>
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
                <table className='table-auto'>
                    <tbody>
                        <tr>
                            <td>F-Suspension</td>
                            <td className='w-3/6 text-right'>Telescopic</td>
                        </tr>
                        <tr>
                            <td>R-Suspension</td>
                            <td className='w-3/6 text-right'>Double shocker</td>
                        </tr>
                        <tr>
                            <td>R-Wheel size</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>F-Tyre size</td>
                            <td className='w-3/6 text-right'>3.0×10 pattern H-920-4PR Tubeless</td>
                        </tr>
                        <tr>
                            <td>R-Tyre size</td>
                            <td className='w-3/6 text-right'>3.0×10 pattern H-920-4PR Tubeless</td>
                        </tr>
                        <tr>
                            <td>Tyres</td>
                            <td className='w-3/6 text-right'>Tubeless</td>
                        </tr>
                        <tr>
                            <td>Raidal Tyres</td>
                            <td className='w-3/6 text-right'>No</td>
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
                            <td className='w-3/6 text-right'>59.6 kg</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Length</td>
                            <td className='w-3/6 text-right'>1800 mm</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Width</td>
                            <td className='w-3/6 text-right'>715 mm</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Height</td>
                            <td className='w-3/6 text-right'>1070 mm</td>
                        </tr>
						 </tbody>
                 </table>
				  <table className='table-auto'>
                    <tbody>
                        <tr>
                            <td>Ground Clearance</td>
                            <td className='w-3/6 text-right'>150 mm</td>
                        </tr>
                        <tr>
                            <td>Wheelbase</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Seat height</td>
                            <td className='w-3/6 text-right'>774 mm</td>
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
				  <table className='table-auto'>
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
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Stepped Seat</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Seat Height</td>
                            <td className='w-3/6 text-right'>Fixed</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Odometer</td>
                            <td className='w-3/6 text-right'>Yes</td>
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
                <table className='table-auto'>
                    <tbody>
                        <tr>
                            <td>USB Chariging Port</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
                        <tr>
                            <td>Front Storage Box</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
                        <tr>
                            <td>Under Seat Storage</td>
                            <td className='w-3/6 text-right'>No</td>
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
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
                        <tr>
                            <td>Pillon Grabrail</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr>
                            <td>Pillon Seat</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
						<tr>
                            <td>Footrest</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr>
                            <td>Start Type</td>
                            <td className='w-3/6 text-right'>Key</td>
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
                            <td className='w-3/6 text-right'>Adjustable Handlebar, Portable Battery, Smart Ai and Tubeless tyres</td>
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
                <h6 className='text-xl font-semibold  '>Power</h6>
            </div>
            <div className={power ? 'grid md:grid-cols-2 overflow-none' : 'grid md:grid-cols-2 w-full h-[100px] overflow-hidden'}>
                <table className='table-auto md:mx-10 xs:mx-5' >
                    <tbody>
                        <tr className='w-full'>
                            <td className='w-3/6'>Fuel Type</td>
                            <td className='w-3/6 text-right'>Electric</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Motor</td>
                            <td className='w-3/6 text-right'>250W, BLDC Hub Motor</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Top Speed</td>
                            <td className='w-3/6 text-right'>25 Kmph</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Mileage</td>
                            <td className='w-3/6 text-right'>85 Km</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Battery</td>
                            <td className='w-3/6 text-right'>Lithium iron phosphate</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Battery Capacity</td>
                            <td className='w-3/6 text-right'>60V/36AH</td>
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
                            <td className='w-3/6 text-right'>200 Kgs</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Rated Power</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        
                    </tbody>
                 </table>
                <table className='table-auto'>
                    <tbody>
                        <tr>
                            <td>Battery Charging time</td>
                            <td className='w-3/6 text-right'>5-5.5 hrs</td>
                        </tr>
                        <tr>
                            <td>Fast Charging Time</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Max Power</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Charge Output</td>
                            <td className='w-3/6 text-right'>60V, 7.5A With Over-voltage, Short-circuit protection</td>
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
                            <td>Transmission</td>
                            <td className='w-3/6 text-right'>Automatic</td>
                        </tr>
                        <tr>
                            <td>Carbon Saving</td>
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
                            <td className='w-3/6 text-right'>Hydraulic disc Brake</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>F-Brake Size</td>
                            <td className='w-3/6 text-right'>220 mm</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>R-Brake</td>
                            <td className='w-3/6 text-right'>Drum</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>R-Brake Size</td>
                            <td className='w-3/6 text-right'>130 mm</td>
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
                <table className='table-auto'>
                    <tbody>
                        <tr>
                            <td>F-Suspension</td>
                            <td className='w-3/6 text-right'>Telescopic</td>
                        </tr>
                        <tr>
                            <td>R-Suspension</td>
                            <td className='w-3/6 text-right'>Double shocker</td>
                        </tr>
                        <tr>
                            <td>R-Wheel size</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>F-Tyre size</td>
                            <td className='w-3/6 text-right'>3.0×10 pattern H-920-4PR Tubeless</td>
                        </tr>
                        <tr>
                            <td>R-Tyre size</td>
                            <td className='w-3/6 text-right'>3.0×10 pattern H-920-4PR Tubeless</td>
                        </tr>
                        <tr>
                            <td>Tyres</td>
                            <td className='w-3/6 text-right'>Tubeless</td>
                        </tr>
                        <tr>
                            <td>Raidal Tyres</td>
                            <td className='w-3/6 text-right'>No</td>
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
                            <td className='w-3/6 text-right'>59.6 kg</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Length</td>
                            <td className='w-3/6 text-right'>1800 mm</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Width</td>
                            <td className='w-3/6 text-right'>715 mm</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Height</td>
                            <td className='w-3/6 text-right'>1070 mm</td>
                        </tr>
						 </tbody>
                 </table>
				  <table className='table-auto'>
                    <tbody>
                        <tr>
                            <td>Ground Clearance</td>
                            <td className='w-3/6 text-right'>150 mm</td>
                        </tr>
                        <tr>
                            <td>Wheelbase</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Seat height</td>
                            <td className='w-3/6 text-right'>774 mm</td>
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
				  <table className='table-auto'>
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
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Stepped Seat</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Seat Height</td>
                            <td className='w-3/6 text-right'>Fixed</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Odometer</td>
                            <td className='w-3/6 text-right'>Yes</td>
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
                <table className='table-auto'>
                    <tbody>
                        <tr>
                            <td>USB Chariging Port</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
                        <tr>
                            <td>Front Storage Box</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
                        <tr>
                            <td>Under Seat Storage</td>
                           <td className='w-3/6 text-right'>No</td>
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
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
                        <tr>
                            <td>Pillon Grabrail</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr>
                            <td>Pillon Seat</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
						<tr>
                            <td>Footrest</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr>
                            <td>Start Type</td>
                            <td className='w-3/6 text-right'>Key</td>
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
                            <td className='w-3/6 text-right'>Adjustable Handlebar, Portable Battery, Smart Ai and Tubeless tyres</td>
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
                    <p className='py-3 border-b-1 text-gray-500'>Fuel Type : <span className='text-black pl-24'>Petrol</span></p>
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
                            <td className='w-3/6 text-right'>Electric</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Motor</td>
                            <td className='w-3/6 text-right'>250W, BLDC Hub Motor</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Top Speed</td>
                            <td className='w-3/6 text-right'>25 Kmph</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Mileage</td>
                            <td className='w-3/6 text-right'>120 Km</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Battery</td>
                            <td className='w-3/6 text-right'>Lithium iron phosphate</td>
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
                            <td className='w-3/6 text-right'>200 Kgs</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Rated Power</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        
                    </tbody>
                 </table>
                <table className='table-auto'>
                    <tbody>
                        <tr>
                            <td>Battery Charging time</td>
                            <td className='w-3/6 text-right'>6-6.5 hrs</td>
                        </tr>
                        <tr>
                            <td>Fast Charging Time</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Max Power</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Charge Output</td>
                            <td className='w-3/6 text-right'>60V, 7.5A With Over-voltage, Short-circuit protection</td>
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
                            <td>Transmission</td>
                            <td className='w-3/6 text-right'>Automatic</td>
                        </tr>
                        <tr>
                            <td>Carbon Saving</td>
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
                            <td className='w-3/6 text-right'>Hydraulic disc Brake</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>F-Brake Size</td>
                            <td className='w-3/6 text-right'>220 mm</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>R-Brake</td>
                            <td className='w-3/6 text-right'>Drum</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>R-Brake Size</td>
                            <td className='w-3/6 text-right'>130 mm</td>
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
                <table className='table-auto'>
                    <tbody>
                        <tr>
                            <td>F-Suspension</td>
                            <td className='w-3/6 text-right'>Telescopic</td>
                        </tr>
                        <tr>
                            <td>R-Suspension</td>
                            <td className='w-3/6 text-right'>Double shocker</td>
                        </tr>
                        <tr>
                            <td>R-Wheel size</td>
                            <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>F-Tyre size</td>
                            <td className='w-3/6 text-right'>3.0×10 pattern H-920-4PR Tubeless</td>
                        </tr>
                        <tr>
                            <td>R-Tyre size</td>
                            <td className='w-3/6 text-right'>3.0×10 pattern H-920-4PR Tubeless</td>
                        </tr>
                        <tr>
                            <td>Tyres</td>
                            <td className='w-3/6 text-right'>Tubeless</td>
                        </tr>
                        <tr>
                            <td>Raidal Tyres</td>
                            <td className='w-3/6 text-right'>No</td>
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
                            <td className='w-3/6 text-right'>59.6 kg</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Length</td>
                            <td className='w-3/6 text-right'>1800 mm</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Width</td>
                            <td className='w-3/6 text-right'>715 mm</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Height</td>
                            <td className='w-3/6 text-right'>1070 mm</td>
                        </tr>
						 </tbody>
                 </table>
				  <table className='table-auto'>
                    <tbody>
                        <tr>
                            <td>Ground Clearance</td>
                            <td className='w-3/6 text-right'>150 mm</td>
                        </tr>
                        <tr>
                            <td>Wheelbase</td>
                           <td className='w-3/6 text-right'>--</td>
                        </tr>
                        <tr>
                            <td>Seat height</td>
                            <td className='w-3/6 text-right'>774 mm</td>
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
				  <table className='table-auto'>
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
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Stepped Seat</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Seat Height</td>
                            <td className='w-3/6 text-right'>Fixed</td>
                        </tr>
                        <tr className='w-full'>
                            <td className='w-3/6'>Odometer</td>
                            <td className='w-3/6 text-right'>Yes</td>
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
                <table className='table-auto'>
                    <tbody>
                        <tr>
                            <td>USB Chariging Port</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
                        <tr>
                            <td>Front Storage Box</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
                        <tr>
                            <td>Under Seat Storage</td>
                            <td className='w-3/6 text-right'>No</td>
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
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
                        <tr>
                            <td>Pillon Grabrail</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr>
                            <td>Pillon Seat</td>
                            <td className='w-3/6 text-right'>No</td>
                        </tr>
						<tr>
                            <td>Footrest</td>
                            <td className='w-3/6 text-right'>Yes</td>
                        </tr>
                        <tr>
                            <td>Start Type</td>
                            <td className='w-3/6 text-right'>Key</td>
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
                            <td className='w-3/6 text-right'>Adjustable Handlebar, Portable Battery, Smart Ai and Tubeless tyres</td>
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

export default ProductView