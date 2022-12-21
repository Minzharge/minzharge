import React, { useContext,useState } from 'react'
import {BsBatteryCharging} from 'react-icons/bs'
import ProductCarousal from '../../components/ProductCarousal';
import ProductVariants from '../../pages/ProductVariants';
import { NavbarContext } from '../../context/NavbarStatus';
const assetUrl = process.env.NODE_ENV === 'production' ? '/minzharge/assets/': '/minzharge/assets/';

function DC_30kW() {
   
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
            <h1 className='text-3xl font-black'>DC Charger 30kW
</h1>
            <h1 className='py-2 text-lg text-gray-500'>AC Charger for Car, Bike, Auto and Cycle</h1>
            <hr className='mb-5'/>
            <div className='mt-5 mb-5'>
                {/* <label htmlFor="type"></label> */}
               <select name="" id="type" className='w-[200px] p-2 border-b-2 border-black-900 outline-none' onChange={handlePriceHide}>
               <option value=""  disabled>Select Watt </option>
                  <option value="3.3kW">15 KW</option>
                  <option value="7.4kW">25 KW</option>
                  <option value="11kW">30 KW</option>
                  <option value="22kW">50 KW</option>
                      </select>
            </div>
            
            <div className="py-2 w-layout-grid specifications-grid">
                            <div className="specification-container"> <img src={assetUrl + "/Key_highlights_icon/battery.png"} class="car-icons"/>
                                <div>
                                    <div>Dual Power Output up to 15kW DC</div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="specification-container" ><img src={assetUrl + "/Key_highlights_icon/Top Speed.png"} alt="cad" class="car-icons"/>
                                <div>
                                    <div >92% Nominal efficiency</div>                                 
                                </div>
                            </div>
                            <div className="specification-container"><img src={assetUrl + "/Key_highlights_icon/Reverse Mode.png"} class="car-icons"/>
                                <div>
                                    <div>Mobile App Support</div>                                                                </div>
                            </div>
                            <div className="specification-container"><img src={assetUrl + "/Key_highlights_icon/Range.png"}class="car-icons"/>
                                <div>
                                    <div >Wired/ wireless connectivity for integration</div>                                  
                                </div>
                            </div>
                            <div className="specification-container"><img src={assetUrl + "/Key_highlights_icon/fast-charge(1).png"}class="car-icons"/>
                                <div>
                                    <div>User friendly LCD display</div>
                                  
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
                              <h1 className='text-3xl text-[#40b322] font-[600]'>₹ 4,36,800</h1>
                              <p className='ml-4 mt-4 text-xs' >[Avg Ex-showroom price]</p>
                          </div>
                      )}						
                  {
                      pricehide === '11kW' && (
                          <div className='flex pb-7 flex pb-7 justify-center md:justify-start sm:mt-5'>
                              <h1 className='text-3xl text-[#40b322] font-[600]'>₹ 814.8</h1>
                              <p className='ml-4 mt-4 text-xs' >[Avg Ex-showroom price]</p>
                          </div>
                      )}						
                  {
                      pricehide === '22kW' && (
                          <div className='flex pb-7 flex pb-7 justify-center md:justify-start sm:mt-5'>
                              <h1 className='text-3xl text-[#40b322] font-[600]'>₹ 98,92,500</h1>
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
                  <option value="3.3kW">15 KW</option>
                  <option value="7.4kW">25 KW</option>
                  <option value="11kW">30 KW</option>
                  <option value="22kW">50 KW</option>                   
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
                          <td className='w-3/6 text-gray-600'>Input Voltage (AC)

</td>
                          <td className='w-3/6 text-right font-black'> 3 Phase, 400 Vac, (360 ~ 440 Vac)</td>
                      </tr>
        
                      <tr className='w-full'>
                          <td className='w-3/6 text-gray-600'>Power Factor 

</td>
                          <td className='w-3/6 text-right font-black'>&ge;0.98
</td>

                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6 text-gray-600'>Nominal Efficiency
</td>
                          <td className='w-3/6 text-right font-black'>&ge;92%</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6 text-gray-600'>Input Frequency 

</td>
                          <td className='w-3/6 text-right font-black'>50±1.5 Hz</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6 text-gray-600'>Wires 

</td>
                          <td className='w-3/6 text-right font-black'>5 Wire, L1, L2, L3, N, PE</td>
                      </tr>
                                
                  </tbody>
               </table>
              <table className='table-auto md:mx-1 xs:mx-5 antialiased'>
                  <tbody>
                  <tr className='w-full'>
                          <td className='w-3/6 text-gray-600'>Number of Outputs 


</td>
                          <td className='w-3/6 text-right font-black'>2 Nos.</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6 text-gray-600'>Output Connector 
 
</td>
                          <td className='w-3/6 text-right font-black'>GB/T 20234.3</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6 text-gray-600'>Output Current 

</td>
                          <td className='w-3/6 text-right font-black'>Max. 200Amp</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6 text-gray-600'>Output1 Rating 


</td>
                          <td className='w-3/6 text-right font-black'>15 kW (Max) at 48V/60V/72V</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6 text-gray-600'>Output2 Rating 


</td>
                          <td className='w-3/6 text-right font-black'>15 kW (Max) at 48V/60V/72V</td>
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
                          <td className='w-3/6'>Protection 
</td>
                          <td className='w-3/6 text-right font-black'>Over Voltage, Under Voltage, Over Current, Short Circuit, Surge Protection, Over
Temperature, Ground Fault, Residual Current</td>
                      </tr>
                     
                     
                  </tbody>
               </table>
        <table className='table-auto md:mx-1 xs:mx-5'>
                  <tbody>
                  <tr className='w-full'>
                          <td className='w-3/6'>Charging Protocol </td>
                          <td className='w-3/6 text-right font-black'>OCPP 1.6J</td>
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
                          <td className='w-3/6'>Display


</td>
                          <td className='w-3/6 text-right font-black'> 7” TFT LCD with Touch Control</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6'>Buttons and Switch </td>
                          <td className='w-3/6 text-right font-black'>English</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6'>Key Switch 
</td>
                          <td className='w-3/6 text-right font-black'>Reset Key, Emergency Stop (Mushroom Headed Red Color)</td>
                      </tr>
                             
                    
                  </tbody>
               </table>
        <table className='table-auto md:mx-1 xs:mx-5'>
                  <tbody>
                  <tr className='w-full'>
                          <td className='w-3/6'>User Authentication

</td>
                          <td className='w-3/6 text-right font-black'>  OTP, CMS authorization & RFID </td>
                      </tr>
                  <tr className='w-full'>
                          <td className='w-3/6'>Visual Indication 


</td>
                          <td className='w-3/6 text-right font-black'>Mains, Charging Status, System Error </td>
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
                    <tr>
                          <td className='w-3/6'>Charger & Vehicle
</td>
                          <td className='w-3/6 text-right font-black '> CAN Communication
</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6'>Charger & CMS

 
</td>
                          <td className='w-3/6 text-right  font-black'>Protocol: OCPP 1.6J (Open Charge Point Protocol)
Interface : Ethernet, 3G/4G
</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6'>Ambient Temperature  
 
</td>
                          <td className='w-3/6 text-right  font-black'>Full Power: 0°C to 55°C, De-rated: 50°C to 55°C
</td>
                      </tr>
                      
                     
                  </tbody>
               </table>
        <table className='table-auto md:mx-1 xs:mx-5'>
                  <tbody>
                  <tr className='w-full'>
                          <td className='w-3/6'>Storage Temperature 

</td>
                          <td className='w-3/6 text-right font-black '>0°C to 70°C

</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6'>Altitude


</td>
                          <td className='w-3/6 text-right font-black '>&lt;2000 Mtr.

</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6'>Humidity

</td>
                          <td className='w-3/6 text-right font-black '>&lt;95%, non-condensing
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
                  <h6 className='text-xl font-semibold '>Mechanical</h6>
              </div>             
      <div className={warranty ? 'grid md:grid-cols-2 overflow-none' : 'grid md:grid-cols-2 w-full h-[100px] overflow-hidden tracking-wide'}>
              <table className='table-auto md:mx-10 xs:mx-5' >
                  <tbody>
                      <tr className='w-full'>
                          <td className='w-3/6'>Ingress Protection
 
</td>
                          <td className='w-3/6 text-right'> IP55</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6'>Enclosure Protection 

</td>
                          <td className='w-3/6 text-right font-black '>IK 10
</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6'>Cooling  



</td>
                          <td className='w-3/6 text-right font-black '>Air Cooled</td>
                      </tr>
                     
                  </tbody>
               </table>
        <table className='table-auto md:mx-1 xs:mx-5'>
                  <tbody>
                  <tr className='w-full'>
                          <td className='w-3/6'> Output Cable
</td> 
                          <td className='w-3/6 text-right font-black '>  5 Mtr.
</td>
                      </tr>
                      <tr className='w-full'>
                          <td className='w-3/6'>Dimension (WXHXD) 
</td>
                          <td className='w-3/6 text-right'>650 mm X 1600 mm X 395 mm
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

export default DC_30kW