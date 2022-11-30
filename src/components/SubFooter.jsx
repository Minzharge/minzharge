import React from 'react'

function SubFooter() {

  return (
    <footer>
        <div className="flex flex-wrap p-4 bg-black text-white">
            <div class=' w-full sm:w-1/2 md:w-4/12 xl:w-1/3 p-8 '>
              <div class="border-t-2 border-[#008000fa] ">
                <h3 className='text-xl text-green-300 mb-5 mt-4 '>
                  <div class=" before:absolute  before:h-1 before:w-12 before:bg-green-200 before:mt-10 text-3xl font-medium">Minzharge.com</div></h3>
                <ul>
                    <li className='mt-2'><a className='text-white hover:text-gray-500 hover:p-2 text-lg ' href="/about-us" target={'_blank'}>About us</a></li>
                    <li className='mt-2'><a className='text-white hover:text-gray-500 hover:p-2 text-lg  hover:p-2 text-lg' href="#">Let's Talk</a></li>
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
                    <li className='mt-2'><a className='text-white hover:text-gray-500 hover:p-2 text-lg ' href="#">Contact the team </a></li>
                    <li className='mt-2'><a className='text-white hover:text-gray-500 hover:p-2 text-lg ' href="#">Are You A Dealer? </a></li>
                    <li className='mt-2'><a className='text-white hover:text-gray-500 hover:p-2 text-lg ' href="#">Work With Us</a></li>
                    <li className='mt-2'><a className='text-white hover:text-gray-500 hover:p-2 text-lg ' href="#">Need Support</a></li>
                    <li className='mt-2'><a className='text-white hover:text-gray-500 hover:p-2 text-lg ' href="#">Work With Us</a></li>
                    <li className='mt-2'><a className='text-white hover:text-gray-500 hover:p-2 text-lg ' href="#">Parterships & Advertising </a></li>
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
                    <li className='mt-2'><a className='text-white hover:text-gray-500 hover:p-2 text-lg ' href="#">Privacy Policy</a></li>
                    <li className='mt-2'><a className='text-white hover:text-gray-500 hover:p-2 text-lg ' href="#">Cookies Policy</a></li>
                    <li className='mt-2'><a className='text-white hover:text-gray-500 hover:p-2 text-lg ' href="#">Terms &amp; Conditions</a></li>
                    <li className='mt-2'><a className='text-white hover:text-gray-500 hover:p-2 text-lg ' href="#">Refund &amp; Cancellation Policy</a></li>
                </div>
                </ul>
                </div>
            </div>
           
        </div>
    </footer>
  )
}



export default SubFooter