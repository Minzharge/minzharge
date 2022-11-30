import React, { useContext,useState } from 'react'
import {BsBatteryCharging} from 'react-icons/bs'
import ProductCarousal from '../components/ProductCarousal';
import ProductVariants from '../pages/ProductVariants';
import { NavbarContext } from '../context/NavbarStatus';
const assetUrl = process.env.NODE_ENV === 'production' ? '/minzharge/assets/': '/minzharge/assets/';

function AmpVConnect_AC()
{
  
  const {expand} = useContext(NavbarContext)
  const [pricehide, setPricehide] = useState('3.3kW')
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
  const [spechide, setSpechide] = useState('3.3kW');
  const table_data = [{
        name: "AmpVconnect",
        price: "₹ 68,500",
    onRoad: "(Avg. Ex-Showroom price)",
        offerLink: '#',
        Kms: " 3 Hrs"
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
    <div className={expand ? 'hidden': 'p-2'}>
        <ProductCarousal />
      </div>

      <div className='md:p-5 text-center md:text-left'>
          <h1 className='text-3xl font-black'>AmpVConnect</h1>
		  <h1 className='py-2 text-lg text-gray-500'>AC Charger for Car, Bike, Auto and Cycle</h1>
		  <hr className='mb-5'/>
          <div className='mt-5 mb-5'>
              {/* <label htmlFor="type"></label> */}
             <select name="" id="type" className='w-[200px] p-2 border-b-2 border-black-900 outline-none' onChange={handlePriceHide}>
                  <option value=""  disabled>Select Watt </option>
                  <option value="3.3kW">3.3 KW</option>
                  <option value="7.4kW">7.4 KW</option>
                  <option value="11kW">11 KW</option>
                  <option value="22kW">22 KW</option>
                    </select>
          </div>
		  
          <div className="py-2 w-layout-grid specifications-grid">
                          <div className="specification-container"> <img src={assetUrl + "/Key_highlights_icon/battery.png"} class="car-icons"/>
                              <div>
                                  <div> Type1 & Type2 Connectors</div>
                                  <div></div>
                              </div>
                          </div>
                          <div className="specification-container" ><img src={assetUrl + "/Key_highlights_icon/Top Speed.png"} alt="cad" class="car-icons"/>
                              <div>
                                  <div >Remote Monitoring</div>                                 
                              </div>
                          </div>
                          <div className="specification-container"><img src={assetUrl + "/Key_highlights_icon/Reverse Mode.png"} class="car-icons"/>
                              <div>
                                  <div>Mobile App Support</div>                                                                </div>
                          </div>
                          <div className="specification-container"><img src={assetUrl + "/Key_highlights_icon/Range.png"}class="car-icons"/>
                              <div>
                                  <div >QR & RFID Authentication</div>                                  
                              </div>
                          </div>
                          <div className="specification-container"><img src={assetUrl + "/Key_highlights_icon/fast-charge(1).png"}class="car-icons"/>
                              <div>
                                  <div>RFID Authentication</div>
                                
                              </div>

                          </div>
                          <div className="specification-container" ><img src={assetUrl + "/Key_highlights_icon/Power.png"}class="car-icons"/>
                              <div>
                                  <div style={{'textAlign':'left'}}>IP55 Rating</div>
                                 
                              </div>
                          </div>
                         
                      </div>
                      {
                      pricehide === '3.3kW' && (
                          <div className='flex pb-7 justify-center md:justify-start sm:mt-5'>
                              <h1 className='text-3xl text-[#40b322] font-[600]'>₹ 68,500</h1>
                              <p className='ml-4 mt-4 text-xs' >[Avg Ex-showroom price]</p>
                          </div>
                      )}

                  {
                      pricehide === '7.4kW' && (
                          <div className='flex pb-7 flex pb-7 justify-center md:justify-start sm:mt-5'>
                              <h1 className='text-3xl text-[#40b322] font-[600]'>₹ 75,500</h1>
                              <p className='ml-4 mt-4 text-xs' >[Avg Ex-showroom price]</p>
                          </div>
                      )}						
                  {
                      pricehide === '11kW' && (
                          <div className='flex pb-7 flex pb-7 justify-center md:justify-start sm:mt-5'>
                              <h1 className='text-3xl text-[#40b322] font-[600]'>₹ 85,500</h1>
                              <p className='ml-4 mt-4 text-xs' >[Avg Ex-showroom price]</p>
                          </div>
                      )}						
                  {
                      pricehide === '22kW' && (
                          <div className='flex pb-7 flex pb-7 justify-center md:justify-start sm:mt-5'>
                              <h1 className='text-3xl text-[#40b322] font-[600]'>₹ 90,500</h1>
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
      <h3 className='font-sans text-xl mb-8 font-bold'>About AC Chargers</h3>
      <p className={clamp ? "line-clamp-none" : "line-clamp-5"}>
      Plugzmart introduces the Future of EV charging. The sleek design and high output make it ideal for an easier, faster, and better charging experience. Accessible through our robust mobile app,
       these chargers can offer you real-time data from anywhere, thus allowing you to schedule your charging hours.
      </p>      
  </div>

  <hr />

  <hr />

  <div className='flex justify-between my-10 flex-wrap'>
      <h3 className='font-sans text-xl font-bold'>Product Details</h3>
      <div className=''>
          <label htmlFor="type"></label>
          <select name="" id="type" className='w-[200px] p-3 border-2 border-black rounded outline-none' onChange={handleshowhide}>
          <option value=""  disabled>Select Watt </option>
                  <option value="3.3kW">3.3 KW</option>
                  <option value="7.4kW">7.4 KW</option>
                  <option value="11kW">11 KW</option>
                  <option value="22kW">22 KW</option>                    
          </select>
      </div>
  </div>
  {
      spechide === '3.3kW' &&(
          <div>
          <div className='w-full md:w-[80%] mx-auto my-10'>
              <div className='flex'>
                  <h6 className='text-xl font-semibold'>Power</h6>
              </div>              
              <div className={power ? 'grid md:grid-cols-2 overflow-none' : 'grid md:grid-cols-2 w-full h-[100px] overflow-hidden '}>
              <table className='table-auto md:mx-10 xs:mx-5 antialiased ' >
                  <tbody>
                      <tr className='w-full'>
                          <td className='w-3/6 text-gray-600'>Power Rating</td>
                          <td className='w-3/6 text-right font-black'>3.3 KW</td>
                      </tr>
        
                      <tr className='w-full'>
                          <td className='w-3/6 text-gray-600'>Input voltage</td>
                          <td className='w-3/6 text-right font-black'>L+ N + PE; 170-270VAC</td>

                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6 text-gray-600'>Power Factor</td>
                          <td className='w-3/6 text-right font-black'> 0.95</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6 text-gray-600'>Authentication</td>
                          <td className='w-3/6 text-right font-black'>RFID/Mobile Application</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6 text-gray-600'>Supported communication protocol</td>
                          <td className='w-3/6 text-right font-black'>OCPP 1.6 & 2.0.1</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6 text-gray-600'>Display</td>
                          <td className='w-3/6 text-right font-black'>48V / 24AH</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6 text-gray-600'>user interface</td>
                          <td className='w-3/6 text-right font-black'>Optional</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6 text-gray-600'>Operating temperature</td>
                          <td className='w-3/6 text-right font-black'>- 20 °C to 65 °C</td>
                      </tr>                      
                  </tbody>
               </table>
              <table className='table-auto md:mx-1 xs:mx-5 antialiased'>
                  <tbody>
                  <tr>
                          <td className='w-3/6 text-gray-600'>IP Rating</td>
                          <td className='w-3/6 text-right font-black'>IP55 Rating</td>
                      </tr>
                      <tr>
                          <td className='text-gray-600'>Max dimensions - (WxDxH)</td>
                          <td className='w-3/6 text-right font-black'>360 x 260 x30 mm</td>
                      </tr>
                      <tr>
                          <td className='text-gray-600'>Weight</td>
                          <td className='w-3/6 text-right font-black'>12 kg</td>
                      </tr>
                      <tr>
                          <td className='text-gray-600'>Output</td>
                          <td className='w-3/6 text-right font-black'>1 AC</td>
                      </tr>
                      <tr>
                          <td className='text-gray-600'>Plug type</td>
                          <td className='w-3/6 text-right font-black'>Type 1 ,Type 2 and 60309 (Industrial socket or plug)</td>
                      </tr>
                      <tr>
                          <td className='text-gray-600'>Cable length</td>
                          <td className='w-3/6 text-right font-black'>5 Mts</td>
                      </tr>
                      <tr>
                          <td className='text-gray-600'>Supported Connectors</td>
                          <td className='w-3/6 text-right font-black'>Type 1 ,Type 2 and 60309 (Industrial socket or plug)</td>
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
      <div className={warranty ? 'grid md:grid-cols-2 overflow-none' : 'grid md:grid-cols-2 w-full h-[100px] overflow-hidden tracking-wide'}>
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
      <div className={features ? 'grid md: overflow-none' : 'grid md:w-full h-[100px] overflow-hidden tracking-tight '}>
              <table className='table-auto tracking-wide' >
                  <tbody>
                      <tr className='w-full'>
                          <td className='text-current'>Mobile Application Support</td>
                          <td className='w-4/6 text-start'>Locate nearby chargers, Planning a trip - Reserve a charger on-the-go, 
Access real-time charging data anytime, anywhere, Supports - UPI, Credit & Debit card for invoice payments</td>
                      </tr> 
						<tr className='w-full'>
                          <td className='text-current'>Web Application Support</td>
                          <td className='w-4/6 text-start'>user-friendly Dashboard to completely control and
manage all your chargers & earnings. OTA Firmware Updates, OCPP Management, RFID Management, Invoice Management and Revenue/Profit/Tax and Energy usage Reports</td>
                      </tr> 					  
                  </tbody>
               </table></div>
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
export default AmpVConnect_AC