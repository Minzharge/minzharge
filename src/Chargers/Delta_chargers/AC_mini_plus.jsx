import React, { useContext,useState } from 'react'
import {BsBatteryCharging} from 'react-icons/bs'
import ProductCarousal from '../../components/ProductCarousal';
import ProductVariants from '../../pages/ProductVariants';
import { NavbarContext } from '../../context/NavbarStatus';
const assetUrl = process.env.NODE_ENV === 'production' ? '/minzharge/assets/': '/minzharge/assets/';

function AC_mini_plus()
{
  const {expand} = useContext(NavbarContext)
  const [pricehide, setPricehide] = useState('3.3kW')
  const [clamp, setClamp] = useState(false)
  const [power, setPower] = useState(false)

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
     <ProductCarousal/>
      </div>

      <div className='md:p-5 text-center md:text-left'>
          <h1 className='text-3xl font-black'>Delta AC Mini Plus EV Charger
</h1>
          <h1 className='py-2 text-lg text-gray-500'>AC Charger for Car, Bike, Auto and Cycle</h1>
          <hr className='mb-5'/>
          <div className='mt-5 mb-5'>
              {/* <label htmlFor="type"></label> */}
             <select name="" id="type" className='w-[200px] p-2 border-b-2 border-black-900 outline-none' onChange={handlePriceHide}>
                  <option value=""  disabled>Select Watt </option>
                  <option value="3.3kW">3.68kW</option>
                  <option value="7.4kW">7.36kW</option>
               
                    </select>
          </div>
          
          <div className="py-2 w-layout-grid specifications-grid">
                          <div className="specification-container"> <img src={assetUrl + "/Key_highlights_icon/battery.png"} class="car-icons"/>
                              <div>
                                  <div> Type1 plug & Type2 socket</div>
                                  <div></div>
                              </div>
                          </div>
                          <div className="specification-container" ><img src={assetUrl + "/Key_highlights_icon/Top Speed.png"}  class="car-icons"/>
                              <div>
                                  <div>32A @ 230V charging</div>                                 
                              </div>
                          </div>
                          <div className="specification-container"><img src={assetUrl + "/Key_highlights_icon/Reverse Mode.png"} class="car-icons"/>
                              <div>
                                  <div> Easy for installation and wiring</div>                                                                </div>
                          </div>
                          <div className="specification-container"><img src={assetUrl + "/Key_highlights_icon/Range.png"}class="car-icons"/>
                              <div>
                                  <div >QR & RFID Authentication</div>                                  
                              </div>
                          </div>
                          <div className="specification-container"><img src={assetUrl + "/Key_highlights_icon/fast-charge(1).png"}class="car-icons"/>
                              <div>
                                  <div>Built-in network connectivity</div>
                                
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
                              <h1 className='text-3xl text-[#40b322] font-[600]'>₹ 98,700</h1>
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
          <option value=""  disabled>Select Watt </option>
                  <option value="3.3kW">3.68kW</option>
                  <option value="7.4kW">7.36kW</option>                   
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
                          <td className='w-3/6 text-gray-600'>Input Rating 
</td>
                          <td className='w-3/6 text-right font-black'>230 Vac, single phase, 16 A or 32 A maximum, 50/60 Hz</td>
                      </tr>
        
                      <tr className='w-full'>
                          <td className='w-3/6 text-gray-600'>Number of Phase / Wire
</td>
                          <td className='w-3/6 text-right font-black'>L, N and PE (Ground), hardwired with terminal block
</td>

                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6 text-gray-600'>Standby Power 
</td>
                          <td className='w-3/6 text-right font-black'>&lt;5W</td>
                      </tr>
                                
                  </tbody>
               </table>
              <table className='table-auto md:mx-1 xs:mx-5 antialiased'>
                  <tbody>
                  <tr className='w-full'>
                          <td className='w-3/6 text-gray-600'>Internal RCD 
</td>
                          <td className='w-3/6 text-right font-black'>30 mA RCD and DC 6 mA RCD function</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6 text-gray-600'>Output Rating 
</td>
                          <td className='w-3/6 text-right font-black'>230 Vac, single phase, 16 A or 32 A maximum, 50 / 60 Hz</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6 text-gray-600'>Charging Interface 
</td>
                          <td className='w-3/6 text-right font-black'>3.68 kW Socket or 7.4 kW Plug </td>
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
                  <h6 className='text-xl font-semibold '>Protection</h6>
              </div>             
      <div className={warranty ? 'grid md:grid-cols-2 overflow-none' : 'grid md:grid-cols-2 w-full h-[100px] overflow-hidden tracking-wide'}>
              <table className='table-auto md:mx-10 xs:mx-5' >
                  <tbody>
                      <tr className='w-full'>
                          <td className='w-3/6'>Upstream 
</td>
                          <td className='w-3/6 text-right font-black'>In accordance with local regulations</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6'>Electrical Protection 
</td>
                          <td className='w-3/6 text-right font-black '>Over current, Under voltage, Over voltage, Residual current, Surge protection,
Short circuit, Over temperature, Ground fault, Plug-out protection</td>
                      </tr>
                     
                  </tbody>
               </table>
        <table className='table-auto md:mx-1 xs:mx-5'>
                  <tbody>
                  <tr className='w-full'>
                          <td className='w-3/6'>Cold-Load Pickup 

</td>
                          <td className='w-3/6 text-right font-black'>Randomized delay before charge resume after power failure</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6'>Automatic recovery after Nuisance Trip 
</td>
                          <td className='w-3/6 text-right font-black '>The EVSE will automatically resume charging after a minor fault such as 
                          OVP, UVP, OTP or OCP. No user intervention required.
                          </td>
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
                  <h6 className='text-xl font-semibold '>User Interface & Control
</h6>
              </div>             
      <div className={warranty ? 'grid md:grid-cols-2 overflow-none' : 'grid md:grid-cols-2 w-full h-[100px] overflow-hidden tracking-wide'}>
              <table className='table-auto md:mx-10 xs:mx-5' >
                  <tbody>
                      <tr className='w-full'>
                          <td className='w-3/6'>Status Indicators 

</td>
                          <td className='w-3/6 text-right font-black'>Power, Status, Charge, Fault</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6'>Buttons and Switch </td>
                          <td className='w-3/6 text-right font-black '>Key switch, On/Off switch, Reset button</td>
                      </tr>
                             
                    
                  </tbody>
               </table>
        <table className='table-auto md:mx-1 xs:mx-5'>
                  <tbody>
                  <tr className='w-full'>
                          <td className='w-3/6'>Charger Configuration
</td>
                          <td className='w-3/6 text-right font-black'> Charging Current Adjustment, Charging Duration Limitation</td>
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
                  <h6 className='text-xl font-semibold '>Communication & Environmental </h6>
              </div>             
      <div className={warranty ? 'grid md:grid-cols-2 overflow-none' : 'grid md:grid-cols-2 w-full h-[100px] overflow-hidden tracking-wide'}>
              <table className='table-auto md:mx-10 xs:mx-5' >
                  <tbody>
                      <tr className='w-full'>
                          <td className='w-3/6'>Network Interface 

 
</td>
                          <td className='w-3/6 text-right font-black'>Ethernet (standard), 3G (option) for backend communication 
 Ethernet (standard) for local access
</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6'>Charging Protocol

 
</td>
                          <td className='w-3/6 text-right font-black '> OCPP 1.6 
</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6'>Operating Temperature 
 
</td>
                          <td className='w-3/6 text-right font-black '>-30 C to + 50 C (-22 F to +122 F)
</td>
                      </tr>
                      
                     
                  </tbody>
               </table>
        <table className='table-auto md:mx-1 xs:mx-5'>
                  <tbody>
                  <tr className='w-full'>
                          <td className='w-3/6'>Storage Temperature 

</td>
                          <td className='w-3/6 text-right font-black'>-40 C to + 80 C (-40 F to +176 F)
</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6'>Humidity

</td>
                          <td className='w-3/6 text-right font-black'>&lt;	 95% relative humidity, non-condensing

</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6'>Altitude

</td>
                          <td className='w-3/6 text-right font-black'> Up to 2,000 m (6,000 ft.)
</td>
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
                  <h6 className='text-xl font-semibold '>Mechanical & Regulation</h6>
              </div>             
      <div className={warranty ? 'grid md:grid-cols-2 overflow-none' : 'grid md:grid-cols-2 w-full h-[100px] overflow-hidden tracking-wide'}>
              <table className='table-auto md:mx-10 xs:mx-5' >
                  <tbody>
                      <tr className='w-full'>
                          <td className='w-3/6'>Ingress Protection
 
</td>
                          <td className='w-3/6 text-right font-black '> IP55</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6'>Enclosure Protection 

</td>
                          <td className='w-3/6 text-right  font-black'>Ik08 according to IEC 62262</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6'>Enclosure Protection

                         
</td>
                          <td className='w-3/6 text-right font-black '>Cooling Natural cooling</td>
                      </tr>
                     
                  </tbody>
               </table>
        <table className='table-auto md:mx-1 xs:mx-5'>
                  <tbody>
                  <tr className='w-full'>
                          <td className='w-3/6'>Dimension (WxHxD) / Weight 
</td>
                          <td className='w-3/6 text-right font-black '> 363 x 318 x 136 mm (14.3 x 12.6 x 5.4 inch),
                           excluding charging cable, mounting plate and cable holder, 3.7kg (8.2 lbs), without package
</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6'>Certificate / Compliance

</td>
                          <td className='w-3/6 text-right font-black'> CE, IEC 61851-1, IEC 61851-2
                          </td>
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
export default AC_mini_plus