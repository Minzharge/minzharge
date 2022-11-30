import React, { useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import image from './pic-web1.jpg'
import image1 from './image1.jpg'



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

function Dealers() {
  const [clamp, setClamp] = useState(false)
  return (
    <><div className="">

     {/* <div
  class="px-4 pt-12 mx-0 mt-0 mb-4 w-full text-3xl font-bold leading-[3rem] text-black md:text-5xl  md:px-0 md:pt-24  text-left  bg-cover h-screen bg-[url('https://img.freepik.com/free-photo/happy-professional-asian-female-manager-businesswoman-suit-showing-announcement-smiling-pointing-finger-left-product-project-banner-standing-white-background_1258-69508.jpg?w=996&t=st=1667804260~exp=1667804860~hmac=ebf4c267cea2817acf3e35a49383c4ca4b62b8b8e26d9a529bff1b34db79842f')] bg-no-repeat "
>
 <h2 class="mt-8 leading-[3rem] xl:leading-[5rem]">JOIN HANDS WITH US
</h2>
 <h3  class="mt-4 leading-[3rem]">Min-Zharge will help you to sell electric vehicles
</h3>
<button type="submit"class="mt-6 leading-[3rem] border-[black]">Be Min-Zhargers</button>
</div> */}
<div class="relative h-[38rem] overflow-hidden bg-indigo-500 z-[-1]">
  <div class="absolute z-30 flex w-full h-full">
    <div class="relative z-30 w-5/6 pl-6 py-8 text-black md:py-10 md:w-7/12 text-center">
      <h2 class="md:text-7xl sm:text-5xl xs:text-5xl text-4xl mt-20">JOIN HANDS WITH US</h2>
      <h3 class="text-3xl mt-16 ">Min-Zharge will help you to sell electric vehicles</h3>
       <button class="text-2xl mt-16 border border-black w-full sm:w-1/2 md:w-1/2 text-center">Be Min-Zharges</button>
      <span></span>
    </div>
    <div class="absolute top-0 right-0 flex w-full h-full">
      <div class=" h-full "></div>
    </div>
  </div>
  <div class="absolute top-0 right-0 block w-full h-full">
    <img
      alt=""
      class=" h-full min-w-full"
      src={image1}
    />
  </div>
</div>

<div className="mx-auto px-4 w-full">
              <div className="gap-6 flex">
                  <div className=" md:flex-none md:w-full  md:w-full px-4 relative mt-9" >
                     <p class=" mx-0 mt-4 mb-0 leading-10 text-xl	font-normal text-[black] "><b>We know there’s an educational component to selling electric vehicles. That’s what we’re here to solve and ultimately pass on to you.</b></p>
                      <p class=" mx-0 mt-4 mb-0 leading-10 text-xl	font-normal text-[black] " > Although you’re here for a reason, we get it, you may have questions.Since we’re passionate about electric vehicles and we’re experts on the subject matter, we’re in a position to help you.We want to.From the bottom of our hearts.The more electric vehicles on the road, the better it is for everyone.
                      </p>
                      <p class=" mx-0 mt-4 mb-0 leading-10 text-xl	font-normal text-[black] "><b>What does that mean for you?</b></p>
                      <p class=" mx-0 mt-4 mb-0 leading-10 text-xl	font-normal text-[black] " > It means you will have highly educated and informed customers walking into your store. Our partners say our leads are easier to work with and are three times more likely to close than a traditional third-party lead.
                      </p>
                      <p class=" mx-0 mt-4 mb-0 leading-10 text-xl	font-normal text-[black] " > Min-Zharge is dedicated specifically to electric vehicles. We help you to increase your sales and develop your business to the next stage.
                      </p>
                      <p class=" mx-0 mt-4 mb-0 leading-10 text-xl	font-normal text-[black] " > Being in this small but growing niche allows us to curate a very special audience with a very unique interest in electric vehicles.
                      </p>
                      <p class=" mx-0 mt-4 mb-0 leading-10 text-xl	font-normal text-[black] " > Gain a unique advantage over your competitors with us on your side and take advantage of our extensive knowledge and EV-specific marketing abilities.
                      </p>
                     
                      <p class=" mx-0 mt-4 mb-0 leading-10 text-xl	font-normal text-[black] "><b>How Min-Zharge works?</b>
                      </p>

                      <p class=" mx-0 mt-4 mb-0 leading-10 text-xl	font-normal text-[black] " > We have our own platform where your products will be displayed for users’ viewing. You will receive the details of customers who are interested in the product, and we are going up ahead where our Min-Sales force will help in converting this enquiry into booking.
                      </p>
                     
                      <p class=" mx-0 mt-4 mb-0 leading-10 text-xl	font-normal text-[black] " > It can be manufacturers, distributors, dealers, retail sellers, etc.,
                      </p>
                      <p class=" mx-0 mt-4 mb-0 leading-10 text-xl	font-normal text-[black] "><b>Who all can be part of Min-Zharge?</b></p>
                      <p class=" mx-0 mt-4 mb-0 leading-10 text-xl	font-normal text-[black] " > Min-Zharge is purely focusing on Electric Mobility. If you are a manufacturer, distributor, dealer, or retail seller of the products like Electric Cycles, Two wheelers, Three wheelers, Four wheelers, Electric Loaders, Application-oriented Electric Vehicles, Charging station, batteries, Spares, accessories etc.,
                      </p>
                      <p class=" mx-0 mt-4 mb-0 leading-10 text-xl	font-normal text-[black] "><b>How to Join Min-Zharge?</b></p>
                      <p class=" mx-0 mt-4 mb-0 leading-10 text-xl	font-normal text-[black] " >Just click the “Be Min-Zhargers” button. Fill out the form and good to go. Our team will take care of the remaining procedure and we will add you as an honorable customer of Min-Zharge.
                      </p>
                       <p class=" mx-0 mt-4 mb-0 leading-10 text-xl	font-normal text-[black] "><b>How Safe is our platform?</b></p>
                      <p class=" mx-0 mt-4 mb-0 leading-10 text-xl	font-normal text-[black] " >We focus on safety and security as our main priority. We follow all government standards and safeguard our customer details without leaking outside. Our technical team is working day and night to manage all our user’s and customers’ data to not reach other hands. So, you can trust us when it comes to information safety.
                      </p>
                       <p class=" mx-0 mt-4 mb-0 leading-10 text-xl	font-normal text-[black] "><b>Let us worry about educating, so you can focus on selling.</b></p>
                  </div>
              </div>
          </div>

   
    </div>






    <div className="">
        <div className="">
          <div ><div className="text-3xl font-semibold leading-none pl-16 relative text-black mb-8 mt-24 before:left-0 before:top-4 before:inline-block before:w-16 before:h-px before:bg-gray-400 before:absolute ">CONTACT US </div> </div>
        </div>
      </div>



<section
  class="flex relative flex-col   mt-16 leading-6 text-black lg:flex-row  mb-20"
  
>
<div className="form-group col-md-6 relative px-4 pr-4 md:pl-8 lg:pl-12 min-[320px]:pl-4 leading-4  w-full">
                  {/* <select name="country" id className="select leading-4 border-b-2 block w-full pt-1 pr-3  bg-white rounded-none" type="drop-down" style={{}}>
                    <option value="I want to buy" className="form-control">I want to buy</option>
                    <option value="I have a general question" className="form-control">I have a general question</option>
                    <option value="I want to ask about chargers" className="form-control">I want to ask about chargers</option>
                    <option value="Other" className="form-control">Other</option>
                  </select> */}
                   <label htmlFor="inputName" class="leading-8 "/>
                  <input type="text" className=" w-full border-b-2 block w-full pt-1 pr-3 text-lg bg-white rounded-none leading-[4rem]  focus:border-b-2 " name="name" placeholder="*Dealers Page" id="inputName" />
                  <label htmlFor="inputName" class="leading-8 "/>
                  <input type="text" className=" w-full border-b-2 block w-full pt-1 pr-3 text-lg bg-white rounded-none leading-[4rem]  focus:border-b-2 " name="name" placeholder="*First name" id="inputName" />
                   <label htmlFor="inputName" class="leading-8 "/>
                  <input type="text" className=" w-full border-b-2 block w-full pt-1 pr-3 text-lg bg-white rounded-none leading-[4rem]  focus:border-b-2 " name="name" placeholder="*Last name" id="inputName" />
                  <label htmlFor="inputEmail" />
                  <input type="email" className="  w-full border-b-2 block w-full pt-1 pr-3 text-lg bg-white rounded-none leading-[4rem] focus:border-none" name="email" placeholder="*Email" id="inputEmail" />
                  <label htmlFor="inputNumber" />
                  <input type="text" className="mb-4 w-full border-b-2 block w-full pt-1 pr-3 text-lg bg-white rounded-none leading-[4rem] focus:border-none" name="phone" placeholder="*Phone" id="inputNumber" /> 
                  
                </div>
<div
  class="px-4 mb-8 w-full leading-6 text-black lg:mt-0 lg:pl-4 xl:pr-12 xl:pl-12 sm:mb-0"
>
<div className="form-group col-md-6 relative ">
                  
                  <textarea className="form-control1  w-full leading-[3.8rem] border-2 pt-1 pr-3 text-lg bg-white rounded-none  focus:border-none" rows={5} placeholder="*how can we help you?" id="inputMessage" defaultValue={""} />
                  <label htmlFor="inputNumber" />
                  <button type="submit" className="btn btn-primary button-contact text-center border border-green w-full leading-[2rem] text-[#56cb5b] border-[#56cb5b] rounded" ><div class="border-green-500 text-center">Submit</div></button>
                </div>
</div>

</section>


    </>
  )
}

export default Dealers