import React, { useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import image from './pic-web1.jpg'


const ReadMore = ({ children }) => {
const text = children;
const [isReadMore, setIsReadMore] = useState(true);
const toggleReadMore = () => {
	setIsReadMore(!isReadMore);
};
return (
	<p className="text inline w-full">
	{isReadMore ? text.slice(0, 150) : text}
	<span onClick={toggleReadMore} className="cursor-pointer border">
		{isReadMore ? "...read more" : " show less"}
	</span>
	</p>
);
};

function Contact() {
  const [clamp, setClamp] = useState(false)
  return (
    <><div className="">

     <div
  class="px-4 pt-12 mx-0 mt-0 mb-4 w-full text-3xl font-bold leading-[3rem] text-black md:text-5xl  md:px-0 md:pt-24 md:text-center text-center bg-cover h-screen bg-[url('https://img.freepik.com/premium-photo/web-contact-us-icons-blue-background-contact-us-cutomer-support-concept-copy-space-website-page-contact-us-web-banner-copy-space-blue-background_256259-1520.jpg?w=996')] bg-no-repeat "
>
 <h2 class="mt-8 leading-[3rem] xl:leading-[5rem]">Look, we understand electric vehicles can be confusing. It doesn’t have to be. That’s why we created Min-Zharge.</h2>
 <h3  class="mt-4 leading-[3rem]">LET’S TALK </h3>
</div>


<div className="mx-auto px-4 w-full">
              <div className="gap-6 flex">
                  <div className="col-md-12 md:flex-none md:w-full  md:w-full px-4 relative" style={{ marginTop: '35px' }}>
                     
                      <p class=" mx-0 mt-4 mb-0 leading-10 text-xl	font-normal text-[#888] " > Although you’re here for a reason, we get it, you may have questions.Since we’re passionate about electric vehicles and we’re experts on the subject matter, we’re in a position to help you.We want to.From the bottom of our hearts.The more electric vehicles on the road, the better it is for everyone.
                      </p>
                  </div>
              </div>
          </div>

   
    </div>


<section
  class="flex relative flex-col justify-between items-center mt-16 leading-6 text-black lg:flex-row"
  id="features"
>
  <img
   src={image}
  
  class="block max-w-full h-auto leading-6 text-black align-middle "
/>
  <div class="px-4 w-full text-black lg:pr-16 lg:w-1/2 xl:pl-16 ">
    <h2
      class="m-0 text-3xl font-bold leading-10  md:text-5xl md:leading-none mb-8 mt-8"
    >
      Here’s our promise to you
    </h2>
    <p class="mx-0 mt-4 mb-0 leading-10 text-xl	font-normal text-[#888]">
      Reach out to us and we’ll answer every single question and help the best we can from our side to satisfy you and it is Absolutely free. It’s that simple! No catch, no commitments, we just want to do our part.
    </p>

  
  </div>


</section>
<section
  class="flex relative flex-col flex-col-reverse justify-between items-center mt-16 leading-6 text-black lg:flex-row flex-row-reverse"
  
>
  <div class="px-4 w-full text-black lg:pr-16 lg:w-1/2 xl:pl-16 ">
<h2
    class="m-0 text-3xl font-bold leading-10  md:text-5xl md:leading-none mb-8 mt-8"
  >
   Some things we can help with
  </h2>
  
 
     <p className={clamp ? "line-clamp-none leading-[2.5rem] mx-0 mt-4 mb-0 leading-10 font-normal text-xl  m-0 text-[#888]" : "line-clamp-[10] mx-0 mt-4 mb-0 leading-10 font-normal text-xl  m-0 text-[#888] "}>
       <ul class="leading-6">
        
       
                              <li class="text-[#888]"><p>What are the different types of electric vehicles?</p></li><br />
                              <li class="text-[#888]"><p>Which car is right for me?</p></li><br />
                              <li class="text-[#888]"><p>	Which two-wheeler is right for me?</p></li><br />
                              <li class="text-[#888]"><p>	I am interested in a car; can you help me find one?</p></li><br />
                              <li class="text-[#888]"><p>	Can you help me understand chargers?</p></li><br />
                              <li class="text-[#888]"><p>	Do I need a garage or charger at home?</p></li><br />
                              <li class="text-[#888]"><p>	What kind of tax incentives can I qualify for?</p></li><br />
                              <li class="text-[#888]"><p>	What kind of savings can I expect?</p></li><br />
                              <li class="text-[#888]"><p>	How do they help the environment?</p></li><br />
                              <li class="text-[#888]"><p>	How can I sell my car on buying an EV?</p></li><br />
                              <li class="text-[#888]"><p>How to buy a 2 wheelers EV?</p></li><br />
                              <li class="text-[#888]"><p>What can I do with my used car battery?</p></li><br />
                              <li class="text-[#888]"><p>Where can I get the spares and accessories for my EV?</p></li><br />
                              <li class="text-[#888]"><p>How to start a business in Charging Station?</p></li><br />
                              <li class="text-[#888]"><p>Can I become a charge point operator and Min-Zharge can help with it?</p></li><br />
                              <li class="text-[#888]"><p>Best charging operator in India?</p></li><br />
                              <li class="text-[#888]"><p>other</p></li><br />
                          </ul>
  </p>
   <button onClick={() => setClamp(!clamp)} className='border p-1	rounded-md border-green-400'>{clamp ? 'Read Less' : 'Read More'}</button>
  
  </div>
<img
   src={image}
 
  class="block max-w-full h-auto leading-6 text-black align-middle "
/>

</section>




    <div className="">
        <div className="">
          <div ><div className="text-3xl font-semibold leading-none pl-16 relative text-black mb-8 mt-24 before:left-0 before:top-4 before:inline-block before:w-16 before:h-px before:bg-gray-400 before:absolute ">CONTACT US </div> </div>
        </div>
      </div>



<section
  class="flex relative flex-col   mt-16 leading-6 text-black lg:flex-row "
  
>
<div className="form-group col-md-6 relative px-4 pr-4 md:pl-8 lg:pl-12 min-[320px]:pl-4 leading-4  w-full">
                  <select name="country" id className="select leading-4 border-b-2 block w-full pt-1 pr-3  bg-white rounded-none" type="drop-down" style={{}}>
                    <option value="I want to buy" className="form-control">I want to buy</option>
                    <option value="I have a general question" className="form-control">I have a general question</option>
                    <option value="I want to ask about chargers" className="form-control">I want to ask about chargers</option>
                    <option value="Other" className="form-control">Other</option>
                  </select>
                  
                  <label htmlFor="inputName" class="leading-8 "/>
                  <input type="text" className=" w-full border-b-2 block w-full pt-1 pr-3 text-lg bg-white rounded-none leading-[4rem]  focus:border-b-2 " name="name" placeholder="*First name" id="inputName" />
                  
                  <label htmlFor="inputEmail" />
                  <input type="email" className="  w-full border-b-2 block w-full pt-1 pr-3 text-lg bg-white rounded-none leading-[4rem] focus:border-none" name="email" placeholder="*Email" id="inputEmail" />
                  <label htmlFor="inputNumber" />
                  <input type="text" className="  w-full border-b-2 block w-full pt-1 pr-3 text-lg bg-white rounded-none leading-[4rem] focus:border-none" name="phone" placeholder="*Phone" id="inputNumber" /> 
                  
                </div>
<div
  class="px-4 mb-8 w-full leading-6 text-black lg:mt-0 lg:pl-4 xl:pr-12 xl:pl-12 sm:mb-0"
>
<div className="form-group col-md-6 relative ">
                  
                  <textarea className="form-control1  w-full leading-[2.5rem] border-2 pt-1 pr-3 text-lg bg-white rounded-none  focus:border-none" rows={5} placeholder="*how can we help you?" id="inputMessage" defaultValue={""} />
                  <label htmlFor="inputNumber" />
                  <button type="submit" className="btn btn-primary button-contact text-center border border-green w-full " style={{color: '#56cb5b', borderColor: '#56cb5b', backgroundColor: 'transparent', borderRadius: '0.2rem'}}><div class="border-green-500 text-center">Submit</div></button>
                </div>
</div>

</section>

<div
  class="flex flex-col mt-8 leading-6 text-black lg:flex-row sm:items-center md:text-center justify-center sm:mt-1 lg:ml-24 sm:ml-0"
>
  <a href="tel:+919150759997"
    data-hover={+919150759997} data-active="+91 9150759997" 
    class="flex justify-center items-center py-3 px-4 my-0 mr-4 ml-0 text-base font-bold text-center text-white normal-case bg-green-500 bg-none rounded-lg duration-150 ease-in-out cursor-pointer shadow-xs   mt-4"
  >
   Call Us
  
  </a>
  <div class="mr-4 text-center">OR </div>

   <a href="https://wa.me/919150759997" target="_blank"
    class="flex justify-center items-center py-3 px-4 my-0 mr-4 ml-0 text-base font-bold text-center text-white normal-case bg-green-500 bg-none rounded-lg duration-150 ease-in-out cursor-pointer shadow-xs   mt-4 "
   data-hover={+919150759997} data-active="+91 9150759997">
   <i className="fa fa-whatsapp " > Whatsapp Us
              </i>
  </a>
</div>
<div className="mx-auto px-4 w-full">
              <div className="gap-6 flex">
                  <div className="col-md-12 md:flex-none md:w-full  md:w-full px-4 relative mt-14" >
                     
                      <p class="m-0 text-3xl font-bold leading-10  md:text-5xl md:leading-none mb-8 mt-8">While we process your question, why not check out what we’ve got for sale?
                      </p>
                  </div>
              </div>
          </div>
<div className='grid sm:grid-cols-3 md:grid-cols-4 gap-5 md:justify-start justify-center px-8 mt-14' >
           
            <Link to={'/vehicle/Nexzu_Rompus_Plus'} className='p-b-5 bg-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl cursor-pointer'>
                <img src="http://test.minzharge.com/img/Rompus_Black.jpg" alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-2xl text-bold'>Nexu Rompus Plus</h6>
                    <p className='text-red-500 font-bold'>$ 33,000</p>
                </div>
            </Link>
              <Link to={'/vehicle/Nexzu_Rompus_Plus'} className='p-b-5 bg-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl cursor-pointer'>
                <img src="http://test.minzharge.com/img/Rompus_Black.jpg" alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-2xl text-bold'>Nexu Rompus Plus</h6>
                    <p className='text-red-500 font-bold'>$ 33,000</p>
                </div>
            </Link>
              <Link to={'/vehicle/Nexzu_Rompus_Plus'} className='p-b-5 bg-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl cursor-pointer'>
                <img src="http://test.minzharge.com/img/Rompus_Black.jpg" alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-2xl text-bold'>Nexu Rompus Plus</h6>
                    <p className='text-red-500 font-bold'>$ 33,000</p>
                </div>
            </Link>
              <Link to={'/vehicle/Nexzu_Rompus_Plus'} className='p-b-5 bg-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl cursor-pointer'>
                <img src="http://test.minzharge.com/img/Rompus_Black.jpg" alt="Product Image" className='rounded-t-xl'/>
                <div className='p-3'>
                    <h6 className='text-2xl text-bold'>Nexu Rompus Plus</h6>
                    <p className='text-red-500 font-bold'>$ 33,000</p>
                </div>
            </Link>
            </div>

    </>
  )
}

export default Contact