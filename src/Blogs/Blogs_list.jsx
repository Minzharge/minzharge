import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import image1 from '../image/photo-1588580000645-4562a6d2c839.jpeg';


import { BlogContext } from '../context/BlogContext'
import hello from '../image/8314929977_28fd740070_b.jpg'

function Blogs_list() {
    const { handleblogview } = useContext(BlogContext);

    const location = useLocation()
    const initialState = JSON.parse(localStorage.getItem('Brands',)) || []
  
    const [Brands, setBrands] = useState(initialState)
  
    useEffect(() => {
      fetch('http://localhost:5001/api/v1/admin/blogs/list').then(
        res => res.json()
      ).then(
        data => {
          const ListData = data.data
          console.log(ListData)
          setBrands(ListData)
        }
      )
      localStorage.setItem('Brands', JSON.stringify(Brands))
    }, [location.key])
      return (
        <div class="">
         
            <div class="relative h-[38rem] overflow-hidden bg-indigo-500 z-[-1]">
  <div class="absolute z-30 flex w-full h-full">
    <div class="relative z-30 w-full pl-6 py-8 text-white md:py-10  text-center">
      <h2 class="md:text-7xl sm:text-5xl xs:text-5xl text-4xl mt-[15rem]">MIN-ZHARGE BLOGS</h2>
     
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
         
            
            <div class="flex bg-[#f9f9fe]">
             {Brands.length ? (
              <div class="flex flex-wrap mt-4">
               {Brands.map((nws) => {
                 if (nws.is_active === true) {
                  return (
<div class="w-full sm:w-1/2 md:w-4/12 xl:w-1/3 p-4 mt-4">  
      
   <div class="max-w-[27rem] bg-white border-2  p-6 rounded-md tracking-wide shadow-lg ">
      <div id="header" class="flex items-center mb-4"> 
         <img alt="avatar" class="w-20 h-20  border-2 border-gray-300" src= {nws.blog_image_url} />
         <div id="header-text" class="leading-5 ml-6 sm">
            <a id="name" class="text-xl font-bold text-zinc-700" target="_blank" onClick={() => handleblogview(nws._id,)}>{nws.title}</a>
            
         </div>
      </div>
      <div class="text-center text-[#888] flex mt-4 justify-center text-sm">
        <div class="text-center">March 2, 2021</div>
        <div class="before:content-['_-'] before:inline-block before:w-4  before:h-4 before:text-red-500  before:mr-0  before:font-bold mr-4"> 3 min read</div> 
       
      </div> 
      <div id="quote">
         <p class="mt-4 text-[#888] font-normal overflow-hidden line-clamp-3 "style={{}}>{nws.short_description}</p>
      </div>
     
      <div class="flex justify-end mt-4 mr-4">
                      <img src={hello} alt="" className='flex h-[2rem] rounded-full w-8 mr-2' />
                      <span class="mt-1">Stephen</span>
                    </div>
  </div>    
    
</div> 
);
 }
})} 
</div>
) : (
          <div className="no-tasks">No Tasks</div>
        )} 
   </div>
        </div>
    )
}

export default Blogs_list