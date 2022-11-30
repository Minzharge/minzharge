import React, { useContext, useState } from 'react'
import { BsBatteryCharging } from 'react-icons/bs'
import ProductCarousal from '../components/ProductCarousal';
import ProductVariants from '../pages/ProductVariants';
import { NavbarContext } from '../context/NavbarStatus';
const assetUrl = process.env.NODE_ENV === 'production' ? '/minzharge/assets/' : '/minzharge/assets/';

function EVportableCharges() {

  const { expand } = useContext(NavbarContext)
  const [pricehide, setPricehide] = useState('1kW')
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
  const [spechide, setSpechide] = useState('1kW');
  const table_data = [{
    name: "Kasa (48V/24AH)",
    price: "₹ 68,500",
    onRoad: "(Avg. Ex-Showroom price)",
    offerLink: '#',
    kms: "50 Km, 35 Kmph, 80 kg, 3 Hrs"
  },
  {
    name: "iQube Standard",
    price: "₹ 75,500",
    onRoad: "(Avg. Ex-Showroom price)",
    offerLink: '#',
    kms: "60 Km, 35 Kmph, 80 kg, 4 Hrs"
  },

  ];

  const handleshowhide = (event) => {
    const getSpec = event.target.value;
    setSpechide(getSpec);

  }
  return (
    <div className='w-full'>
      <div className='md:w-[80%] mx-auto grid md:grid-cols-2 gap-10 mt-5'>
        <div className={expand ? 'hidden' : 'p-2'}>
          <ProductCarousal />
        </div>

        <div className='md:p-5 text-center md:text-left'>
          <h1 className='text-3xl'>Portable EV Chargers</h1>
          <div className='mt-5 mb-5'>
            {/* <label htmlFor="type"></label> */}
            <select name="" id="type" className='w-[200px] p-3 border-b-2 border-black-900 outline-none' onChange={handlePriceHide}>
              <option value="" disabled>Select Watt </option>
              <option value="1kW ">1 kW </option>
              <option value="2kW">2 kW</option>
           

            </select>
          </div>
          <div className="w-layout-grid specifications-grid">
            <div className="specification-container"> <img src={assetUrl + "/Key_highlights_icon/battery.png"} class="car-icons" />
              <div>
                <div className="car-specifications-titles">Battery</div>
                <div>LFP</div>
              </div>
            </div>
            <div className="specification-container" ><img src={assetUrl + "/Key_highlights_icon/Top Speed.png"} alt="cad" class="car-icons" />
              <div>
                <div className="car-specifications-titles">Speedometer</div>
                <div>Digital</div>
              </div>
            </div>
            <div className="specification-container"><img src={assetUrl + "/Key_highlights_icon/Reverse Mode.png"} class="car-icons" />
              <div>
                <div className="car-specifications-titles">Top Speed</div>
                <div>35 Kmph</div>
              </div>
            </div>
            <div className="specification-container"><img src={assetUrl + "/Key_highlights_icon/Range.png"} class="car-icons" />
              <div>
                <div className="car-specifications-titles">Range</div>
                <div>60km</div>
              </div>
            </div>
            <div className="specification-container"><img src={assetUrl + "/Key_highlights_icon/fast-charge(1).png"} class="car-icons" />
              <div>
                <div className="car-specifications-titles">Wheels</div>
                <div>Alloy</div>
              </div>

            </div>
            <div className="specification-container" ><img src={assetUrl + "/Key_highlights_icon/Power.png"} class="car-icons" />
              <div>
                <div className="car-specifications-titles" style={{ 'textAlign': 'left' }}>Start/Stop</div>
                <div style={{ 'textAlign': 'left' }}>Keyless</div>
              </div>
            </div>

          </div>
          {
            pricehide === '1kW' && (
              <div className='flex pb-7 justify-center md:justify-start sm:mt-5'>
                <h1 className='text-3xl text-[#40b322] font-[600]'>₹ 68,500</h1>
                <p className='ml-4 mt-4 text-xs' >[Avg Ex-showroom price]</p>
              </div>
            )}

          {
            pricehide === '2kW' && (
              <div className='flex pb-7 flex pb-7 justify-center md:justify-start sm:mt-5'>
                <h1 className='text-3xl text-[#40b322] font-[600]'>₹ 75,500</h1>
                <p className='ml-4 mt-4 text-xs' >[Avg Ex-showroom price]</p>
              </div>
            )}
          <hr className='mb-5' />
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
          <h3 className='font-sans text-xl mb-8 font-bold'>About Portable EV Chargers</h3>
          <p className={clamp ? "line-clamp-none" : "line-clamp-5"}>
          Hassle-free charging anywhere, anytime. A new generation of home
          chargers designed to make charging from the comfort of your home even easier, faster, and better.
          </p>
          <p onClick={() => setClamp(!clamp)} className='text-blue-500 cursor-pointer'>{clamp ? 'Read Less' : 'Read More'}</p>
        </div>

        <hr />



        <hr />

        <div className='flex justify-between my-10 flex-wrap'>
          <h3 className='font-sans text-xl font-bold'>Product Details</h3>
          <div className=''>
            <label htmlFor="type"></label>
            <select name="" id="type" className='w-[200px] p-3 border-2 border-black rounded outline-none' onChange={handleshowhide}>
            <option value="" disabled>Select Watt </option>
              <option value="1kW">1 kW </option>
              <option value="2kW">2 kW</option>
              {/* <option value="lead1">120 Km</option> */}

            </select>
          </div>
        </div>
        {
          spechide === '1kW' && (
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
                        <td className='w-3/6 text-right'>35 Kmph</td>
                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>Mileage</td>
                        <td className='w-3/6 text-right'>50 Kms</td>
                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>Battery</td>
                        <td className='w-3/6 text-right'>Lithium Ferro Phosphate</td>
                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>Battery Capacity</td>
                        <td className='w-3/6 text-right'>48V / 24AH</td>
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
                  <table className='table-auto'>
                    <tbody>
                      <tr>
                        <td className='w-3/6'>Battery Charging time</td>
                        <td className='w-3/6 text-right'>3 Hrs</td>
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
                      <tr >
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
                        <td className='w-3/6 text-right'>Disc Brake</td>
                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>F-Brake Size</td>
                        <td className='w-3/6 text-right'>--</td>
                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>R-Brake</td>
                        <td className='w-3/6 text-right'>Drum</td>
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
                  <table className='table-auto'>
                    <tbody>
                      <tr>
                        <td>F-Suspension</td>
                        <td className='w-3/6 text-right'>Hydraulic Telescopic</td>
                      </tr>
                      <tr>
                        <td>R-Suspension</td>
                        <td className='w-3/6 text-right'>Double shocker with dual tube technology</td>
                      </tr>
                      <tr>
                        <td>R-Wheel size</td>
                        <td className='w-3/6 text-right'>--</td>
                      </tr>
                      <tr>
                        <td>F-Tyre size</td>
                        <td className='w-3/6 text-right'>90/90-10 Tubeless</td>
                      </tr>
                      <tr>
                        <td>R-Tyre size</td>
                        <td className='w-3/6 text-right'>90/90-10- Tubeless</td>
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
                        <td className='w-3/6 text-right'>80 Kg</td>
                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>Length</td>
                        <td className='w-3/6 text-right'>1970 mm</td>
                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>Width</td>
                        <td className='w-3/6 text-right'>745 mm</td>
                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>Height</td>
                        <td className='w-3/6 text-right'>165 mm </td>
                      </tr>
                    </tbody>
                  </table>
                  <table className='table-auto'>
                    <tbody>
                      <tr>
                        <td>Ground Clearance</td>
                        <td className='w-3/6 text-right'>175 mm</td>
                      </tr>
                      <tr>
                        <td>Wheelbase</td>
                        <td className='w-3/6 text-right'>--</td>
                      </tr>
                      <tr>
                        <td>Seat height</td>
                        <td className='w-3/6 text-right'>800 mm</td>
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
                        <td className='w-3/6 text-right'>2 Yrs</td>
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
                        <td className='w-3/6 text-right'>No</td>
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
                        <td className='w-3/6 text-right'>No</td>
                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>Regenerative Braking</td>
                        <td className='w-3/6 text-right'>Yes</td>
                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>Tripmeter</td>
                        <td className='w-3/6 text-right'>Yes</td>
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
                        <td className='w-3/6 text-right'>Yes</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className='table-auto'>
                    <tbody>
                      <tr>
                        <td>USB Chariging Port</td>
                        <td className='w-3/6 text-right'>Yes</td>
                      </tr>
                      <tr>
                        <td>Front Storage Box</td>
                        <td className='w-3/6 text-right'>Yes</td>
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
                        <td className='w-3/6 text-right'>Yes+</td>
                      </tr>
                      <tr>
                        <td>Additional Features</td>
                        <td className='w-3/6 text-right'>Portable Battery, Anti Theft Alarm, Digital Speedometer, Keyless entry, Alloy Rims, Reverse Mode and Tubeless tyres</td>
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
          spechide === '2kW' && (
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
                        <td className='w-3/6 text-right text-black'>Electric</td>
                      </tr>

                      <tr className='w-full'>
                        <td className='w-3/6'>Motor</td>
                        <td className='w-3/6 text-right'>250W, BLDC Hub Motor</td>

                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>Top Speed</td>
                        <td className='w-3/6 text-right'>35 Kmph</td>
                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>Mileage</td>
                        <td className='w-3/6 text-right'>60 Kms</td>
                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>Battery</td>
                        <td className='w-3/6 text-right'>Lithium Ferro Phosphate</td>
                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>Battery Capacity</td>
                        <td className='w-3/6 text-right'>48V/24AH</td>
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
                        <td className='w-3/6'>Rated Power</td>
                        <td className='w-3/6 text-right'>--</td>
                      </tr>



                    </tbody>
                  </table>
                  <table className='table-auto'>
                    <tbody>
                      <tr className='w-full'>
                        <td className='w-3/6'>Battery Charging time</td>
                        <td className='w-3/6 text-right'>4 hours</td>
                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>Fast Charging Time</td>
                        <td className='w-3/6 text-right'>--</td>
                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>Carrying Capacity</td>
                        <td className='w-3/6 text-right'>150 Kg</td>
                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>Max Power</td>
                        <td className='w-3/6 text-right'>--</td>
                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>Charge Output</td>
                        <td className='w-3/6 text-right'>Micro Charger with Auto cut off</td>
                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>Climbing</td>
                        <td className='w-3/6 text-right'>15º</td>
                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>Battery Cycles</td>
                        <td className='w-3/6 text-right'>--</td>
                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>Max Torque</td>
                        <td className='w-3/6 text-right'>--</td>
                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>Carbon Saving</td>
                        <td className='w-3/6 text-right'>--</td>
                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>Transmission</td>
                        <td className='w-3/6 text-right'>Automatic</td>
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
                        <td className='w-3/6 text-right'>Disc Brake</td>
                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>F-Brake Size</td>
                        <td className='w-3/6 text-right'>--</td>
                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>R-Brake</td>
                        <td className='w-3/6 text-right'>Drum</td>
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
                  <table className='table-auto'>
                    <tbody>
                      <tr>
                        <td>F-Suspension</td>
                        <td className='w-3/6 text-right'>Hydraulic Telescopic</td>
                      </tr>
                      <tr>
                        <td>R-Suspension</td>
                        <td className='w-3/6 text-right'>Double shocker with dual tube technology</td>
                      </tr>
                      <tr>
                        <td>R-Wheel size</td>
                        <td className='w-3/6 text-right'>--</td>
                      </tr>
                      <tr>
                        <td>F-Tyre size</td>
                        <td className='w-3/6 text-right'>90/90-10</td>
                      </tr>
                      <tr>
                        <td>R-Tyre size</td>
                        <td className='w-3/6 text-right'>90/90-10</td>
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
                        <td className='w-3/6 text-right'>80 Kg</td>
                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>Length</td>
                        <td className='w-3/6 text-right'>1970 mm</td>
                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>Width</td>
                        <td className='w-3/6 text-right'>745 mm</td>
                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>Height</td>
                        <td className='w-3/6 text-right'>1650 mm</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className='table-auto'>
                    <tbody>
                      <tr>
                        <td>Ground Clearance</td>
                        <td className='w-3/6 text-right'>175 mm</td>
                      </tr>
                      <tr>
                        <td>Wheelbase</td>
                        <td className='w-3/6 text-right'>--</td>
                      </tr>
                      <tr>
                        <td>Seat height</td>
                        <td className='w-3/6 text-right'>800 mm</td>
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
                        <td className='w-3/6 text-right'>2 Yrs</td>
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
                        <td className='w-3/6 text-right'>No</td>
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
                        <td className='w-3/6 text-right'>No</td>
                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>Regenerative Braking</td>
                        <td className='w-3/6 text-right'>Yes</td>
                      </tr>
                      <tr className='w-full'>
                        <td className='w-3/6'>Tripmeter</td>
                        <td className='w-3/6 text-right'>Yes</td>
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
                        <td className='w-3/6 text-right'>Yes</td>
                      </tr>
                      <tr>
                        <td>Front Storage Box</td>
                        <td className='w-3/6 text-right'>Yes</td>
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
                        <td className='w-3/6 text-right'>Portable Battery, Anti Theft Alarm, Digital Speedometer, Keyless entry, Alloy Rims, Reverse Mode and Tubeless tyres</td>
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

export default EVportableCharges