import React, { useState } from 'react';

const assetUrl = process.env.NODE_ENV === 'production' ? '/minzharge/assets/' : '/minzharge/assets';

function AboutUs() {
  const [clamp, setClamp] = useState(false)

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
            <img src="https://ninetheme.com/themes/wavo/wp-content/uploads/elementor/thumbs/min-area-owy8otxjgt0vw1mdc45eb2zbwz7gwm0lnejf8rbhp0.jpg" alt="" />
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
            <img src="https://ninetheme.com/themes/wavo/wp-content/uploads/elementor/thumbs/min-area-owy8otxjgt0vw1mdc45eb2zbwz7gwm0lnejf8rbhp0.jpg" alt="" />
          </div>

        </div>

      </div>
      <div className='w-full p-5 mt-[50px]' >
        <div className='md:w-[80%] mx-auto grid md:grid-cols-2 gap-10 mt-5'>
          <div className="hello">
            <img src="https://ninetheme.com/themes/wavo/wp-content/uploads/elementor/thumbs/min-area-owy8otxjgt0vw1mdc45eb2zbwz7gwm0lnejf8rbhp0.jpg" alt="" />
          </div>
          <div className="md:w-[100%] p-5" >
            <h1 className='text-6xl text-justify font-bold leading-10	mb-10'>Who We Are</h1>
            <p className='leading-[2.5rem] text-xl	font-normal text-[#888]'>Minzharge is a groundbreaking technology company that delivers substance to a highly engaged audience with industry leading content, unmatched loyalty to our customers, and a great user experience. We are a team of passionate electric vehicle owners, enthusiasts, and advocates. We believe in power through education and leverage that philosophy to empower our users and arm them with the information they need in order to make informed decisions. We are dreamers,
              innovators, nerds, and have a common goal in mind – to drive electric vehicle adoption forward.</p>
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
            <img src="https://ninetheme.com/themes/wavo/wp-content/uploads/elementor/thumbs/min-area-owy8otxjgt0vw1mdc45eb2zbwz7gwm0lnejf8rbhp0.jpg" alt="" />
          </div>

        </div>

      </div>

      {/* <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 sm:w-full mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 lg:w-1/2 xs:w-full">
          <div className="relative">
            <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>
        </div>
        <div className="p-2 lg:w-1/2 xs:w-full">
          <div className="relative">
            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
             </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>

          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        </div>
   
      </div>
    </div>
  </div>
</section> */}
      <div className='my-4'>

        <h1 class=" w-full md:px-32 xs:px-12 xmpt-10	overflow-hidden before:h-[1px] after:h-[1px] after:bg-black 
           after:inline-block after:relative after:align-middle  font-bold text-3xl
           before:bg-black before:inline-block before:relative before:align-middle 
           before:w-1/12 before:right-2   p-4">CONTACT US
        </h1>
        <form action="">
          <div className=" w-full px-32 grid xs:grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
            <div className='p-4'>
              <div className="col-span-1 lg:col-span-2">
                <select name="" id="type" className='w-full py-2 text-lg text-gray-700 border-b-2 border-gray-300 outline-none my-4'>
                  <option value="austrailia" class="text-gray-700">I want to buy</option>
                  <option value="Malaysia" class="form-control text-gray-700">I have a general question</option>
                  <option value="Malaysia" class="form-control text-gray-700">I want to ask about chargers</option>
                  <option value="Malaysia" class="form-control text-gray-700">Other</option>
                </select>
              </div>
              <div className="col-span-1 lg:col-span-2">
                <input type="text" name="" id="" placeholder='*First Name' className='w-full my-6 text-lg bg-opacity-50 rounded border-b-2 border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 
  outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'/>
              </div>
              <div className="col-span-1 lg:col-span-2">
                <input type="text" name="" id="" placeholder='*Email' className='w-full my-6 text-lg bg-opacity-50 rounded border-b-2 border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 
   outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'/>
              </div>
              <div className="col-span-1 lg:col-span-2">
                <input type="text" name="" id="" placeholder='*Phone' className='w-full my-6  bg-opacity-50 rounded border-b-2 border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 
   text-lg outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'/>
              </div>
            </div>
            <div className='p-4'>
              <textarea id="message" name="message" placeholder="*how can we help you?" className="w-full my-6  bg-opacity-50
               rounded border-2 border-gray-300
   focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-60
   text-lg outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out">
              </textarea>
              
            <button class=" w-full text-[#56cb5b] bg-white-500 border-2 py-2 border-[#56cb5b] px-6 focus:outline-none rounded text-lg">Submit</button>
            </div>

          </div>
          <div class="grid place-items-center">
            <p>or</p>
          <button className="bg-[#56cb5b] text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded items-center">Call Us</button>
          </div>
         
       
        </form>
      </div>

    </>
  )


}

export default AboutUs