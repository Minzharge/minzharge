import React, { useState, useEffect, useRef } from "react";
// import $ from "jquery";
// import loopNext from "jquery";
// import loopPrev from "jquery";
// import stop from "jquery";
import Categories from "./Categories";
import Features from "./Features";
import scroll from './scroll.css';
import {Link} from 'react-router-dom'
import $ from "jquery";

const assetUrl = process.env.NODE_ENV === 'production' ? '/minzharge/assets/': '/minzharge/assets';

const featuredProducts = [
  {
    image: "/minzharge/assets/Banner/3.png",
    header1: "Front original",
    header2: "design cap",
    price: "$49",
    description: "As well as being game-changers when it comes to techinal innovation, Front has some of the best selling cap in its locker",
    link: "categories/Scooters"
  },
  {
    image: "/minzharge/assets/Banner/2.png",
    header1: "Front original2",
    header2: "design cap2",
    price: "$59",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat hic esse sapiente, nisi deserunt sit fugiat quis facilis cumque libero quae in fuga distinctio qui! Sint vitae est non corporis!",
    link: "/Chargers"
  },
  {
    image: "/minzharge/assets/Banner/1.png",
    header1: "Front original3",
    header2: "design cap3",
    price: "$69",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo eligendi ab quidem dolore corrupti? Libero, dicta sequi mollitia fugit beatae eos molestiae porro illo, iste corporis cumque assumenda dignissimos reprehenderit?",
    link: "categories/Loaders"
  },
  {
    image: "/minzharge/assets/Banner/4.png",
    header1: "Front original3",
    header2: "design cap3",
    price: "$69",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo eligendi ab quidem dolore corrupti? Libero, dicta sequi mollitia fugit beatae eos molestiae porro illo, iste corporis cumque assumenda dignissimos reprehenderit?",
    link: "categories/Cargo_Bikes"
  }
];

let count = 0;
let slideInterval;
export default function Home({data:open = false}) {
  console.log('home', open);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      // handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const scrollStyle = {
     
    left: "0px",
    width: "100%",
    whiteSpace: "nowrap ",
    height: "100%",
    position: "relative",
    background: "#f9f9fe",
   
   
};
const scrollNext = {
 
  height: "65%",
    position: "absolute",
    right: "0",
    background: "transparent",
    zIndex: "1"
   
};
const scrollPrev = {
 
     height: "65%",
    position: "absolute",
    left: "0",
    background: "transparent",
    zIndex: "1"
   
};
function loopNext() {
  $("#sliderWrapper")
    .stop()
    .animate(
      {
        scrollLeft: "+=20"
      },
      "fast",
      "linear",
      loopNext
    );
}

function loopPrev() {
  $("#sliderWrapper")
    .stop()
    .animate(
      {
        scrollLeft: "-=20"
      },
      "fast",
      "linear",
      loopPrev
    );
}

function stop() {
  $("#sliderWrapper").stop();
}

$("#next").hover(
  function() {
    loopNext();
  },
  function() {
    stop();
  }
);

$("#prev").hover(
  function() {
    loopPrev();
  },
  function() {
    stop();
  }
);



  return (
 
    <><><>
    
      <script
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
      integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer">
    </script>
    <div ref={slideRef} className="w-full">
      <div className="flex-row bg-slate-100  p-3.5  z-[-1]">
        {/* extra div for space consuption in responsiveness */}
        <div className="md:w-1/2 sm:w-2/12 w-0"></div>

        <div className="relative">
          <a href={featuredProducts[currentIndex].link} target="_blank">
            <img src={featuredProducts[currentIndex].image} className='w-full h-full object-cover' alt="" />
          </a>
          {/* slidebar change button */}
          <div className={open ? 'hidden' : 'absolute w-full top-[40%] right-[50%] translate-x-1/2 px-5 flex justify-between items-center'}>
            <button
              className="bg-white text-slate-500 p-0 sm:p-1 md:p-2 rounded-full cursor-pointer z-0 opacity-60 hover:opacity-90"
              onClick={handleOnPrevClick}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              className="bg-white text-slate-500 p-0 sm:p-1 md:p-2 rounded-full cursor-pointer z-0 opacity-60 hover:opacity-90"
              onClick={handleOnNextClick}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>


        {/* extra div for space consuption in responsiveness */}
        <div className="md:w-1/3 sm:w-2/12 w-0"></div>
      </div>


      <Features />
      {/* Header 3 column layout */}
      <div className="sm:flex justify-center gap-16 items-start p-12 bg-blue-100">
        <div className="flex w-64 mb-8">
          <div className="pr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
            </svg>

          </div>
          <div className="">
            <h1 className="font-medium">Login free</h1>
            <span className="text-xs text-slate-500 break-words">Guaranted safe checkout</span>
          </div>
        </div>

        <div className="flex w-64 mb-8 md:mb-1">
          <div className="pr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>

          </div>
          <div className="">
            <h1 className="font-medium">One marketplace for EVs</h1>
            <span className="text-xs text-slate-500 break-words">We offer you a full refund within 30 days of purchase</span>
          </div>
        </div>

        <div className="flex w-64 mb-8 md:mb-1">
          <div className="pr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>

          </div>
          <div className="">
            <h1 className="font-medium">Tension free booking and delivery</h1>
            <span className="text-xs text-slate-500 break-words">Automatically receive free standard shipping on every order.</span>
          </div>
        </div>
      </div>
      <Categories />
    </div><div class="mt-0 mr-auto mb-8 md:mr-[200px] xs:mr-0">
        <div class="pl-10 pr-10 w-full relative mb-2 lg:pl-52">
          <div class="mt-0 mb-6 font-semibold text-4xl mb-2 font-[Larsseit-Bold] text-[#1f3ca6]">
            <div class="before:absolute  before:h-1 before:w-12 before:bg-[#1f3ca6] before:lg:mt-16 before:sm:mt-16 before:mt-24 ">
              Current Blogs to Know
            </div>
          </div>
          <div class="ml-8 text-base mt-16 mr-0 mb-2">
            <p> Lorem Ipsum is simply dummy text of the printing and type </p>
            <p> Lorem Ipsum is simply dummy text of the printing and type </p>
          </div>
        </div>
      </div></><div className={scroll.style} id="" class="flex flex-wrap">

        <div id="prev" style={scrollPrev}><img src="" width="40px" /></div>
        <div id="next" style={scrollNext}><img src="" width="40px" /></div>
        <div id="sliderWrapper" style={scrollStyle} className="overflow-auto flex flex-wrap left-0 w-full whitespace-no-wrap h-full relative">
          <div class="flex bg-[#f9f9fe]">

            <div class="w-[345px]  p-4 mt-4  ">
              <div class="max-w-[345px] bg-white   p-4 rounded-xl tracking-wide shadow-lg h-[130px] hover:shadow-2xl focus:border-dotted focus:border-2  ">
                <div id="header" class="flex items-center mb-4">

                  <div id="header-text" class="leading-5  sm">
                    <a id="name" class="text-xl font-bold text-zinc-700 whitespace-normal line-clamp-2 text-xs" target="_blank">Lorem Ipsum is simply dummy text of the printing and typesetting industry </a>

                  </div>
                </div>

                <div id="quote">
                  <p class="mt-4 text-[#888] font-normal overflow-hidden line-clamp-2 whitespace-normal text-sm	" style={{}}>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>

            </div>
            <div class="w-[345px]  p-4 mt-4  ">
              <div class="max-w-[345px] bg-white   p-4 rounded-xl tracking-wide shadow-lg h-[130px] hover:shadow-2xl focus:border-dotted focus:border-2  ">
                <div id="header" class="flex items-center mb-4">

                  <div id="header-text" class="leading-5  sm">
                    <a id="name" class="text-xl font-bold text-zinc-700 whitespace-normal line-clamp-2 text-xs" target="_blank">Lorem Ipsum is simply dummy text of the printing and typesetting industry </a>

                  </div>
                </div>

                <div id="quote">
                  <p class="mt-4 text-[#888] font-normal overflow-hidden line-clamp-2 whitespace-normal text-sm	" style={{}}>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>

            </div>
            <div class="w-[345px]  p-4 mt-4  ">
              <div class="max-w-[345px] bg-white   p-4 rounded-xl tracking-wide shadow-lg h-[130px] hover:shadow-2xl focus:border-dotted focus:border-2  ">
                <div id="header" class="flex items-center mb-4">

                  <div id="header-text" class="leading-5  sm">
                    <a id="name" class="text-xl font-bold text-zinc-700 whitespace-normal line-clamp-2 text-xs" target="_blank">Lorem Ipsum is simply dummy text of the printing and typesetting industry </a>

                  </div>
                </div>

                <div id="quote">
                  <p class="mt-4 text-[#888] font-normal overflow-hidden line-clamp-2 whitespace-normal text-sm	" style={{}}>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>

            </div>
            <div class="w-[345px]  p-4 mt-4  ">
              <div class="max-w-[345px] bg-white   p-4 rounded-xl tracking-wide shadow-lg h-[130px] hover:shadow-2xl focus:border-dotted focus:border-2  ">
                <div id="header" class="flex items-center mb-4">

                  <div id="header-text" class="leading-5  sm">
                    <a id="name" class="text-xl font-bold text-zinc-700 whitespace-normal line-clamp-2 text-xs" target="_blank">Lorem Ipsum is simply dummy text of the printing and typesetting industry </a>

                  </div>
                </div>

                <div id="quote">
                  <p class="mt-4 text-[#888] font-normal overflow-hidden line-clamp-2 whitespace-normal text-sm	" style={{}}>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>

            </div>
            <div class="w-[345px]  p-4 mt-4  ">
              <div class="max-w-[345px] bg-white   p-4 rounded-xl tracking-wide shadow-lg h-[130px] hover:shadow-2xl focus:border-dotted focus:border-2  ">
                <div id="header" class="flex items-center mb-4">

                  <div id="header-text" class="leading-5  sm">
                    <a id="name" class="text-xl font-bold text-zinc-700 whitespace-normal line-clamp-2 text-xs" target="_blank">Lorem Ipsum is simply dummy text of the printing and typesetting industry </a>

                  </div>
                </div>

                <div id="quote">
                  <p class="mt-4 text-[#888] font-normal overflow-hidden line-clamp-2 whitespace-normal text-sm	" style={{}}>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>

            </div>
            <div class="w-[345px]  p-4 mt-4  ">
              <div class="max-w-[345px] bg-white   p-4 rounded-xl tracking-wide shadow-lg h-[130px] hover:shadow-2xl focus:border-dotted focus:border-2  ">
                <div id="header" class="flex items-center mb-4">

                  <div id="header-text" class="leading-5  sm">
                    <a id="name" class="text-xl font-bold text-zinc-700 whitespace-normal line-clamp-2 text-xs" target="_blank">Lorem Ipsum is simply dummy text of the printing and typesetting industry </a>

                  </div>
                </div>

                <div id="quote">
                  <p class="mt-4 text-[#888] font-normal overflow-hidden line-clamp-2 whitespace-normal text-sm	" style={{}}>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>

            </div>
            <div class="w-[345px]  p-4 mt-4  ">
              <div class="max-w-[345px] bg-white   p-4 rounded-xl tracking-wide shadow-lg h-[130px] hover:shadow-2xl focus:border-dotted focus:border-2  ">
                <div id="header" class="flex items-center mb-4">

                  <div id="header-text" class="leading-5  sm">
                    <a id="name" class="text-xl font-bold text-zinc-700 whitespace-normal line-clamp-2 text-xs" target="_blank">Lorem Ipsum is simply dummy text of the printing and typesetting industry </a>

                  </div>
                </div>

                <div id="quote">
                  <p class="mt-4 text-[#888] font-normal overflow-hidden line-clamp-2 whitespace-normal text-sm	" style={{}}>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>

            </div>
            <div class="w-[345px]  p-4 mt-4  ">
              <div class="max-w-[345px] bg-white   p-4 rounded-xl tracking-wide shadow-lg h-[130px] hover:shadow-2xl focus:border-dotted focus:border-2  ">
                <div id="header" class="flex items-center mb-4">

                  <div id="header-text" class="leading-5  sm">
                    <a id="name" class="text-xl font-bold text-zinc-700 whitespace-normal line-clamp-2 text-xs" target="_blank">Lorem Ipsum is simply dummy text of the printing and typesetting industry </a>

                  </div>
                </div>

                <div id="quote">
                  <p class="mt-4 text-[#888] font-normal overflow-hidden line-clamp-2 whitespace-normal text-sm	" style={{}}>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>

            </div>
            <div class="w-[345px]  p-4 mt-4  ">
              <div class="max-w-[345px] bg-white   p-4 rounded-xl tracking-wide shadow-lg h-[130px] hover:shadow-2xl focus:border-dotted focus:border-2  ">
                <div id="header" class="flex items-center mb-4">

                  <div id="header-text" class="leading-5  sm">
                    <a id="name" class="text-xl font-bold text-zinc-700 whitespace-normal line-clamp-2 text-xs" target="_blank">Lorem Ipsum is simply dummy text of the printing and typesetting industry </a>

                  </div>
                </div>

                <div id="quote">
                  <p class="mt-4 text-[#888] font-normal overflow-hidden line-clamp-2 whitespace-normal text-sm	" style={{}}>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>

            </div>
            <div class="w-[345px]  p-4 mt-4  ">
              <div class="max-w-[345px] bg-white   p-4 rounded-xl tracking-wide shadow-lg h-[130px] hover:shadow-2xl focus:border-dotted focus:border-2  ">
                <div id="header" class="flex items-center mb-4">

                  <div id="header-text" class="leading-5  sm">
                    <a id="name" class="text-xl font-bold text-zinc-700 whitespace-normal line-clamp-2 text-xs" target="_blank">Lorem Ipsum is simply dummy text of the printing and typesetting industry </a>

                  </div>
                </div>

                <div id="quote">
                  <p class="mt-4 text-[#888] font-normal overflow-hidden line-clamp-2 whitespace-normal text-sm	" style={{}}>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>

            </div>
            <div class="w-[345px]  p-4 mt-4  ">
              <div class="max-w-[345px] bg-white   p-4 rounded-xl tracking-wide shadow-lg h-[130px] hover:shadow-2xl focus:border-dotted focus:border-2  ">
                <div id="header" class="flex items-center mb-4">

                  <div id="header-text" class="leading-5  sm">
                    <a id="name" class="text-xl font-bold text-zinc-700 whitespace-normal line-clamp-2 text-xs" target="_blank">Lorem Ipsum is simply dummy text of the printing and typesetting industry </a>

                  </div>
                </div>

                <div id="quote">
                  <p class="mt-4 text-[#888] font-normal overflow-hidden line-clamp-2 whitespace-normal text-sm	" style={{}}>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>

            </div>


            <a class="">
              <div class="w-[345px]  p-4 mt-4  ">
                <div class="max-w-[345px] bg-white   p-4 rounded-xl tracking-wide shadow-lg h-[130px] hover:shadow-2xl focus:border-dotted focus:border-2  ">
                  <div id="header" class="flex items-center mb-4">

                    <div id="header-text" class="leading-5  sm">
                      <a id="name" class="text-xl font-bold text-zinc-700 whitespace-normal line-clamp-2 text-xs" target="_blank">Lorem Ipsum is simply dummy text of the printing and typesetting industry </a>

                    </div>
                  </div>

                  <div id="quote">
                    <p class="mt-4 text-[#888] font-normal overflow-hidden line-clamp-2 whitespace-normal text-sm	" style={{}}>Lorem Ipsum is simply dummy text </p>
                  </div>
                </div>

              </div>
            </a>

          </div>
          <div class="flex bg-[#f9f9fe]">

            <div class="w-[345px]  p-4 mt-0 ml-32 ">
              <div class="max-w-[345px] bg-white   p-4 rounded-xl tracking-wide shadow-lg h-[130px] hover:shadow-2xl focus:border-dotted focus:border-2  ">
                <div id="header" class="flex items-center mb-4">

                  <div id="header-text" class="leading-5  sm">
                    <a id="name" class="text-xl font-bold text-zinc-700 whitespace-normal line-clamp-2 text-xs" target="_blank">Lorem Ipsum is simply dummy text of the printing and typesetting industry </a>

                  </div>
                </div>

                <div id="quote">
                  <p class="mt-4 text-[#888] font-normal overflow-hidden line-clamp-2 whitespace-normal text-sm	" style={{}}>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>

            </div>
            <div class="w-[345px]  p-4 mt-0  ">
              <div class="max-w-[345px] bg-white   p-4 rounded-xl tracking-wide shadow-lg h-[130px] hover:shadow-2xl focus:border-dotted focus:border-2  ">
                <div id="header" class="flex items-center mb-4">

                  <div id="header-text" class="leading-5  sm">
                    <a id="name" class="text-xl font-bold text-zinc-700 whitespace-normal line-clamp-2 text-xs" target="_blank">Lorem Ipsum is simply dummy text of the printing and typesetting industry </a>

                  </div>
                </div>

                <div id="quote">
                  <p class="mt-4 text-[#888] font-normal overflow-hidden line-clamp-2 whitespace-normal text-sm	" style={{}}>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>

            </div>
            <div class="w-[345px]  p-4 mt-0  ">
              <div class="max-w-[345px] bg-white   p-4 rounded-xl tracking-wide shadow-lg h-[130px] hover:shadow-2xl focus:border-dotted focus:border-2  ">
                <div id="header" class="flex items-center mb-4">

                  <div id="header-text" class="leading-5  sm">
                    <a id="name" class="text-xl font-bold text-zinc-700 whitespace-normal line-clamp-2 text-xs" target="_blank">Lorem Ipsum is simply dummy text of the printing and typesetting industry </a>

                  </div>
                </div>

                <div id="quote">
                  <p class="mt-4 text-[#888] font-normal overflow-hidden line-clamp-2 whitespace-normal text-sm	" style={{}}>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>

            </div>
            <div class="w-[345px]  p-4 mt-0  ">
              <div class="max-w-[345px] bg-white   p-4 rounded-xl tracking-wide shadow-lg h-[130px] hover:shadow-2xl focus:border-dotted focus:border-2  ">
                <div id="header" class="flex items-center mb-4">

                  <div id="header-text" class="leading-5  sm">
                    <a id="name" class="text-xl font-bold text-zinc-700 whitespace-normal line-clamp-2 text-xs" target="_blank">Lorem Ipsum is simply dummy text of the printing and typesetting industry </a>

                  </div>
                </div>

                <div id="quote">
                  <p class="mt-4 text-[#888] font-normal overflow-hidden line-clamp-2 whitespace-normal text-sm	" style={{}}>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>

            </div>
            <div class="w-[345px]  p-4 mt-0  ">
              <div class="max-w-[345px] bg-white   p-4 rounded-xl tracking-wide shadow-lg h-[130px] hover:shadow-2xl focus:border-dotted focus:border-2  ">
                <div id="header" class="flex items-center mb-4">

                  <div id="header-text" class="leading-5  sm">
                    <a id="name" class="text-xl font-bold text-zinc-700 whitespace-normal line-clamp-2 text-xs" target="_blank">Lorem Ipsum is simply dummy text of the printing and typesetting industry </a>

                  </div>
                </div>

                <div id="quote">
                  <p class="mt-4 text-[#888] font-normal overflow-hidden line-clamp-2 whitespace-normal text-sm	" style={{}}>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>

            </div>
            <div class="w-[345px]  p-4 mt-0  ">
              <div class="max-w-[345px] bg-white   p-4 rounded-xl tracking-wide shadow-lg h-[130px] hover:shadow-2xl focus:border-dotted focus:border-2  ">
                <div id="header" class="flex items-center mb-4">

                  <div id="header-text" class="leading-5  sm">
                    <a id="name" class="text-xl font-bold text-zinc-700 whitespace-normal line-clamp-2 text-xs" target="_blank">Lorem Ipsum is simply dummy text of the printing and typesetting industry </a>

                  </div>
                </div>

                <div id="quote">
                  <p class="mt-4 text-[#888] font-normal overflow-hidden line-clamp-2 whitespace-normal text-sm	" style={{}}>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>

            </div>
            <div class="w-[345px]  p-4 mt-0  ">
              <div class="max-w-[345px] bg-white   p-4 rounded-xl tracking-wide shadow-lg h-[130px] hover:shadow-2xl focus:border-dotted focus:border-2  ">
                <div id="header" class="flex items-center mb-4">

                  <div id="header-text" class="leading-5  sm">
                    <a id="name" class="text-xl font-bold text-zinc-700 whitespace-normal line-clamp-2 text-xs" target="_blank">Lorem Ipsum is simply dummy text of the printing and typesetting industry </a>

                  </div>
                </div>

                <div id="quote">
                  <p class="mt-4 text-[#888] font-normal overflow-hidden line-clamp-2 whitespace-normal text-sm	" style={{}}>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>

            </div>
            <div class="w-[345px]  p-4 mt-0  ">
              <div class="max-w-[345px] bg-white   p-4 rounded-xl tracking-wide shadow-lg h-[130px] hover:shadow-2xl focus:border-dotted focus:border-2  ">
                <div id="header" class="flex items-center mb-4">

                  <div id="header-text" class="leading-5  sm">
                    <a id="name" class="text-xl font-bold text-zinc-700 whitespace-normal line-clamp-2 text-xs" target="_blank">Lorem Ipsum is simply dummy text of the printing and typesetting industry </a>

                  </div>
                </div>

                <div id="quote">
                  <p class="mt-4 text-[#888] font-normal overflow-hidden line-clamp-2 whitespace-normal text-sm	" style={{}}>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>

            </div>
            <div class="w-[345px]  p-4 mt-0  ">
              <div class="max-w-[345px] bg-white   p-4 rounded-xl tracking-wide shadow-lg h-[130px] hover:shadow-2xl focus:border-dotted focus:border-2  ">
                <div id="header" class="flex items-center mb-4">

                  <div id="header-text" class="leading-5  sm">
                    <a id="name" class="text-xl font-bold text-zinc-700 whitespace-normal line-clamp-2 text-xs" target="_blank">Lorem Ipsum is simply dummy text of the printing and typesetting industry </a>

                  </div>
                </div>

                <div id="quote">
                  <p class="mt-4 text-[#888] font-normal overflow-hidden line-clamp-2 whitespace-normal text-sm	" style={{}}>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>

            </div>
            <div class="w-[345px]  p-4 mt-0  ">
              <div class="max-w-[345px] bg-white   p-4 rounded-xl tracking-wide shadow-lg h-[130px] hover:shadow-2xl focus:border-dotted focus:border-2  ">
                <div id="header" class="flex items-center mb-4">

                  <div id="header-text" class="leading-5  sm">
                    <a id="name" class="text-xl font-bold text-zinc-700 whitespace-normal line-clamp-2 text-xs" target="_blank">Lorem Ipsum is simply dummy text of the printing and typesetting industry </a>

                  </div>
                </div>

                <div id="quote">
                  <p class="mt-4 text-[#888] font-normal overflow-hidden line-clamp-2 whitespace-normal text-sm	" style={{}}>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>

            </div>
            <div class="w-[345px]  p-4 mt-0  ">
              <div class="max-w-[345px] bg-white   p-4 rounded-xl tracking-wide shadow-lg h-[130px] hover:shadow-2xl focus:border-dotted focus:border-2  ">
                <div id="header" class="flex items-center mb-4">

                  <div id="header-text" class="leading-5  sm">
                    <a id="name" class="text-xl font-bold text-zinc-700 whitespace-normal line-clamp-2 text-xs" target="_blank">Lorem Ipsum is simply dummy text of the printing and typesetting industry </a>

                  </div>
                </div>

                <div id="quote">
                  <p class="mt-4 text-[#888] font-normal overflow-hidden line-clamp-1 whitespace-normal text-sm	" style={{}}>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>

            </div>


            <a class="">
              <div class="w-[345px]  p-4 mt-0  ">
                <div class="max-w-[345px] bg-white   p-4 rounded-xl tracking-wide shadow-lg h-[130px] hover:shadow-2xl focus:border-dotted focus:border-2  ">
                  <div id="header" class="flex items-center mb-4">

                    <div id="header-text" class="leading-5  sm">
                      <a id="name" class="text-xl font-bold text-zinc-700 whitespace-normal line-clamp-2 text-xs" target="_blank">Lorem Ipsum is simply dummy text of the printing  </a>

                    </div>
                  </div>

                  <div id="quote">
                    <p class="mt-4 text-[#888] font-normal overflow-hidden line-clamp-1 whitespace-normal text-sm	" style={{}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry  </p>
                  </div>
                </div>

              </div>
            </a>


          </div>
        </div>
      </div></><div class="relative   justify-items-end">
        <div class="ml-32 text-right">
          <div class="inline-block align-middle mb-4 font-bold text-xl text-[#1f3ca6] after:content-['_→'] after:mr-8 after:font-bold after:text-4xl">
            <Link to='/min-blogs' target="blank">
              view more
            </Link>
          </div>

        </div>
      </div></>
	  );
}