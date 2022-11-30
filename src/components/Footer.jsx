import React from 'react'
import {Link,NavLink} from 'react-router-dom'

const assetUrl = process.env.NODE_ENV === 'production' ? '/minzharge/assets/': '/minzharge/assets';

function Footer() {

  return (
    <footer>
        <div className="flex flex-wrap p-4 bg-black text-white">
            <div class=' w-full sm:w-1/2 md:w-4/12 xl:w-1/3 p-8 '>
              <div class="border-t-2 border-[#008000fa] ">
                <h3 className='text-xl text-green-300 mb-5 mt-4 '>
                  <div class=" before:absolute  before:h-1 before:w-12 before
                  :bg-green-200 before:mt-10 text-3xl font-medium">  <NavLink end>
                  <img src={assetUrl+"/logo/whitelogo.png"} alt="Minzharge Logo" width={75}/>
              </NavLink></div></h3>
                <ul>
                    <li className='mt-2 text-white hover:text-gray-500 hover:p-1 text-lg '> 
					<Link to='/AboutUs' target="blank">About us</Link></li>
                    <li className='mt-2 text-white hover:text-gray-500 hover:p-1 text-lg  hover:p-1 text-lg'>
					<Link to='/Contact' target="blank"> Let's Talk </Link> </li>
                </ul>
                </div>
            </div>
            <div className='w-full sm:w-1/2 md:w-4/12 xl:w-1/3 p-8 '>
              <div class="border-t-2 border-[#008000fa] ">
                <h3 className='text-xl text-green-300 mb-5  mt-4 '>
                  <div class=" before:absolute  before:h-1 before:w-12 before:bg-green-200 before:mt-10 text-xl font-medium">
                 Minzharge.com
                  </div>
                  </h3>
                <ul>
                    <li className='mt-2'><a className='text-white hover:text-gray-500 hover:p-1 text-lg ' href="mailto: support@minzharge.com" >Contact the team </a></li>
                    <li className='mt-2 text-white hover:text-gray-500 hover:p-1 text-lg '>					 
					<Link to='/Dealers' target="blank">Are You A Dealer? </Link> </li>
                    <li className='mt-2'><a className='text-white hover:text-gray-500 hover:p-1 text-lg ' href="mailto: support@minzharge.com" >Work With Us</a></li>
                    <li className='mt-2'><a className='text-white hover:text-gray-500 hover:p-1 text-lg ' href="mailto: support@minzharge.com" >Need Support</a></li>                   
                    <li className='mt-2'><a className='text-white hover:text-gray-500 hover:p-1 text-lg ' href="mailto: support@minzharge.com">Parterships & Advertising </a></li>
                </ul>
                </div>
            </div>
            <div className='w-full sm:w-1/2 md:w-4/12 xl:w-1/3 p-8 '>
              <div class="border-t-2 border-[#008000fa] ">
                <h3 className='text-xl text-green-300 mb-5  mt-4'>
                  <div class=" before:absolute  before:h-1 before:w-12 before:bg-green-200 before:mt-10 text-xl font-medium">
                  More From Minzharge.com
                  </div>
                  </h3>
                <ul>
                <div>
                    <div className="" style={{color: '#ffffff'}}>
                      
                    </div> 
                   
                    <li className='mt-2'>
                      <div className='text-white hover:text-gray-500 hover:p-1 text-lg ' >
                        <Link to='details/privacyandpolicy' target="blank"> Privacy Policy</Link>
                        </div>
                      </li>
                       <li className='mt-2'>
                      <div className='text-white hover:text-gray-500 hover:p-1 text-lg ' >
                        <Link to='details/cookiesandpolicy' target="blank"> Cookies Policy</Link>
                        </div>
                      </li>
                       <li className='mt-2'>
                      <div className='text-white hover:text-gray-500 hover:p-1 text-lg ' >
                        <Link to='details/termsandconditions' target="blank"> Terms &amp; Conditions</Link>
                        </div>
                      </li>
                       <li className='mt-2'>
                      <div className='text-white hover:text-gray-500 hover:p-1 text-lg ' >
                        <Link to='details/refundandcancellationpolicy' target="blank"> Refund &amp; Cancellation Policy</Link>
                        </div>
                      </li>
                    
                </div>
                </ul>
                </div>
            </div>
           
        </div>
    </footer>
  )
}



export default Footer