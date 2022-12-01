import axios from 'axios';
import React, { useState } from 'react';
import image from './pic-web1.jpg'


const assetUrl = process.env.NODE_ENV === 'production' ? '/minzharge/assets/' : '/minzharge/assets';

function AboutUs() {
  const [clamp, setClamp] = useState(false)
  const [inputs, setInputs] = useState({
    select:'',
    first_name:'',
    email:'',
    phone:'',
    text_message:''
 })
 const printValues = (e) => {
  e.preventDefault();
  const content = {
     question: inputs.select,
     name: inputs.first_name,
     email:inputs.email,
     phone : inputs.phone,
     text_message : inputs.text_message

  }
  console.log(content)
  axios.post('http://localhost:5002/api/v1/mail/contact_mail/add' , content)
  .then( res =>{
    alert(res)
  })
};
 const updatedField = (e) =>{
  setInputs({
    ...inputs,
    [e.target.name] : e.target.value
  })
 }
  const myStyle = {
    background: 'linear-gradient(rgb(0 0 0 / 65%), #00000085)',
    // `url(${assetUrl + '/Banner/Banner2.jpg'})`,
    height: '70vh',
    // marginTop:'-70px',
    fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <>
      <div style={myStyle}>
        <h1 className='text-center pt-[120px]'>Who We Are</h1>
        <h3 className='text-3xl text-center py-5'>Minzharge.com is a marketplace made specifically for Electric Vehicles</h3>
      </div>

      <div className='w-full p-5 mt-[50px]' >
        <div className='md:w-[80%] mx-auto grid md:grid-cols-2 gap-10 mt-5'>
          <div className="hello">
            <img src={image} alt="" />
          </div>
          <div className="md:w-[100%] p-5" >
            <h1 className='text-5xl text-justify font-bold leading-10	mb-10'>The Vision</h1>
            <p className='leading-[2.5rem] text-xl	font-normal text-[#888]'>We believe an electric vehicle can be a perfect fit for anyone and any lifestyle. We need to do our part and help people understand why. Minzharge seeks to educate the world on the benefits of electric vehicle ownership by combatting
              common myths and misconceptions for a better, brighter, and more sustainable future.</p>
          </div>
        </div>

      </div>
      <div className='w-full p-5 mt-[50px]' >
        <div className='md:w-[80%] mx-auto grid md:grid-cols-2 gap-10 mt-5'>
          <div className="md:w-[100%] p-5" >
            <h1 className='text-6xl text-justify font-bold leading-10	mb-10'>The Misson</h1>
            <p className='leading-[2.5rem] text-xl	font-normal text-[#888]'>We created Minzharge to give the industry something it desperately needed: a dedicated electric vehicle platform and community that allows consumers to learn about, buy, and sell electric vehicles in the most simplistic and user friendly manner available.</p>
          </div>
          <div className="hello1">
            <img src={image} alt="" />
          </div>

        </div>

      </div>
      <div className='w-full p-5 mt-[50px]' >
        <div className='md:w-[80%] mx-auto grid md:grid-cols-2 gap-10 mt-5'>
          <div className="hello">
            <img src={image} alt="" />
          </div>
          <div className="md:w-[100%] p-3" >
            <h1 className='text-6xl  font-bold mb-10'>Who We Are</h1>
            <p className='leading-[2.5rem] text-xl	font-normal text-[#888]'>We believe an electric vehicle can be a perfect fit for anyone and any lifestyle. We need to do our part and help people understand why. Minzharge seeks to educate the world on the benefits of electric vehicle ownership by combatting
                            common myths and misconceptions for a better, brighter, and more sustainable future.</p>
          </div>
        </div>

      </div>
      <div className='w-full p-5 mt-[50px]' >
        <div className='md:w-[80%] mx-auto grid md:grid-cols-2 gap-10 mt-5'>
          <div className="md:w-[100%] p-5" >
            <h1 className='text-6xl text-justify font-bold leading-10	mb-10'>Our Story</h1>
            <p className={clamp ? "line-clamp-none leading-[2.5rem] text-xl	font-normal text-[#888] " : "line-clamp-6 leading-[2.5rem] text-xl	font-normal text-[#888] "}>Electric vehicles have been in our hearts for a long time. Do you remember when the first iPhone took the world by storm back in 2007? It wasn’t
              that long ago. A lot of tech publications dismissed the product as a gimmick stating that physical keyboards were a necessity for businesses and power users. Well, fast forward to today and look around you. We don’t need to speak to the iPhone’s popularity, sales and adoption speak for themselves. That’s kind of what
              happened with Tesla. Most people said delivering an electric car with 200+ miles of range was not only impossible,
              but impossible to scale due to the infrastructure already in place for gasoline vehicles. In 2008, Tesla released the
              Roadster which was the first road legal, lithium-ion powered EV with 200+ miles of range. The world went crazy.
              Us included. Minzharge Founder has been enamored with electric vehicles since that time. After researching them for
              years, he finally had the opportunity to purchase one and naturally, our office was curious – Minzharge core team
              today included. The idea for Minzharge.com clicked when its founder had countless questions thrown his way: · “How
              far can you go? · How long does it take to charge? · Do you have a charger at home? · How much did it cost? · What
              kind of maintenance does it need? · What happens if you want to go on a road trip? · What’s a supercharger? ·
              Can you tell me about the tax credit?” We talked to a million people and realized they all had the same questions. Thus, the idea for Minzharge was born. The world desperately needed it.</p>

            <button onClick={() => setClamp(!clamp)} className='border p-1	rounded-md border-green-400'>{clamp ? 'Read Less' : 'Read More'}</button>

          </div>
          <div className="hello">
            <img src={image} alt="" />
          </div>

        </div>

      </div>

     
      <div className='my-4'>

        <h1 class="w-full md:px-32  xmpt-10	overflow-hidden before:h-[1px] after:h-[1px] after:bg-black 
           after:inline-block after:relative after:align-middle  font-bold text-3xl
           before:bg-black before:inline-block before:relative before:align-middle 
           before:w-1/12 before:right-2   p-4">CONTACT US
        </h1>
        <form action="" onSubmit={printValues}>
          <div className=" w-full md:px-32 xs:px-12 grid xs:grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
          <div className='p-4'>
              <div className="col-span-1 lg:col-span-2">
                <select  id="type" name="select"value={inputs.select} onChange={updatedField} className='w-full py-2 text-lg text-gray-700 border-b-2 border-gray-300 outline-none my-4'>
                  <option value="austrailia" class="text-gray-700">I want to buy</option>
                  <option value="Malaysia" class="form-control text-gray-700">I have a general question</option>
                  <option value="Malaysia" class="form-control text-gray-700">I want to ask about chargers</option>
                  <option value="Malaysia" class="form-control text-gray-700">Other</option>
                </select>
              </div>
              <div className="col-span-1 lg:col-span-2">
                <input type="text" name="first_name" id="" placeholder='*First Name'
                value={inputs.first_name} onChange={updatedField} className='w-full my-6 text-lg bg-opacity-50 rounded border-b-2 border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 
  outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'/>
              </div>
              <div className="col-span-1 lg:col-span-2">
                <input type="text"  id="" placeholder='*Email' name="email" value={inputs.email} onChange={updatedField} className='w-full my-6 text-lg bg-opacity-50 rounded border-b-2 border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 
   outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'/>
              </div>
              <div className="col-span-1 lg:col-span-2">
                <input type="text"  name="phone" value={inputs.phone} onChange={updatedField} id="" placeholder='*Phone' className='w-full my-6  bg-opacity-50 rounded border-b-2 border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 
   text-lg outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'/>
              </div>
            </div>
            <div className='p-4'>
              <textarea id="message"  name="text_message"  value={inputs.text_message} onChange={updatedField}  placeholder="*how can we help you?" className="w-full my-6  bg-opacity-50
               rounded border-2 border-gray-300
   focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-60
   text-lg outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out">
              </textarea>
              
              <button class=" w-full text-[#56cb5b] bg-white-500 border-2 py-2 border-[#56cb5b] px-6 focus:outline-none rounded text-lg">Submit</button>
            </div>


          </div>
          <div
  class="flex flex-col mt-8 leading-6 text-black lg:flex-row sm:items-center md:text-center justify-center sm:mt-1 lg:ml-24 sm:ml-0"
>
  <a href="tel:+919150759997"
    data-hover={+919150759997} data-active="+91 9150759997" 
    class="flex justify-center items-center py-3 px-4 my-0 mx-4 text-base font-bold text-center text-white normal-case bg-green-500 bg-none rounded-lg duration-150 ease-in-out cursor-pointer shadow-xs   mt-4"
  >
   Call Us
  
  </a>
  <div class="mr-4 text-center">OR </div>

   <a href="https://wa.me/919150759997" target="_blank"
    class="flex justify-center items-center py-3 px-4 my-0 mx-4 text-base font-bold text-center text-white normal-case bg-green-500 bg-none rounded-lg duration-150 ease-in-out cursor-pointer shadow-xs   mt-4 "
   data-hover={+919150759997} data-active="+91 9150759997">
   <i className="fa fa-whatsapp " > Whatsapp Us
              </i>
  </a>
</div>
         
         
       
        </form>
      </div>

    </>
  )


}

export default AboutUs