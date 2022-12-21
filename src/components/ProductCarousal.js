import React, { useEffect, useState } from "react";
export default function ProductCarousal() {
  let temp = 0;
  const images = [
    "https://i.postimg.cc/vmDBSHnt/25k-W-DC-WALLBOX-Leaflet-Single-Gun-CCS2-1-page-0001-Edited.png",
    "https://i.postimg.cc/x8kqPqnB/30k-W-DC-Charger-Dual-GBT-Leaflet-V2-1-page-0001-Edited.png",
    "https://i.postimg.cc/vmDBSHnt/25k-W-DC-WALLBOX-Leaflet-Single-Gun-CCS2-1-page-0001-Edited.png",
    "https://i.postimg.cc/x8kqPqnB/30k-W-DC-Charger-Dual-GBT-Leaflet-V2-1-page-0001-Edited.png",
    "https://i.postimg.cc/vmDBSHnt/25k-W-DC-WALLBOX-Leaflet-Single-Gun-CCS2-1-page-0001-Edited.png",
  ];

  const [count, setCount] = useState(0);

  const nextHandler = () => {
    temp = (count + 1) % images.length;
    setCount(temp);
  };

  const prevHandler = () => {
    temp = (count + images.length - 1) % images.length;
    setCount(temp);
  };

  // useEffect(() => {
  //   console.log(count);

  //   setTimeout(() => {
  //     nextHandler();
  //   }, 3000);
  // }, [count]);

  return (
    <div className="w-full">
      <div className="relative mb-4">
        <img src={images[count]} alt="someimage" className="w-[100%] h-[350px]"/>
        <div className="">
          <div
            className="select-none text-8xl absolute top-[40%] left-10 text-gray-700 hover:text-black cursor-pointer"
            onClick={prevHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div
            className="select-none text-8xl absolute top-[40%] right-10 text-gray-700 hover:text-black cursor-pointer"
            onClick={nextHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex overflow-x-auto justify-center">
        <div className="flex">
          {/* flex-shrink-0 */}
          <img
            src={images[0]}
            width="100"
            alt=""
            onMouseOver={() => setCount(0)}
            className={
              count === 1
                ? "cursor-pointer border-2 border-black p-1 m-1 h-[100px]"
                : "p-1 mr-1 h-[100px]"
            }
          />
          <img
            src={images[1]}
            width="100"
            alt=""
            onMouseOver={() => setCount(1)}
            className={
              count === 1
                ? "cursor-pointer border-2 border-black p-1 m-1 h-[100px]"
                : "p-1 mr-1 h-[100px]"
            }
          />
          <img
            src={images[2]}
            width="100"
            alt=""
            onMouseOver={() => setCount(2)}
            className={
              count === 2
                ? "cursor-pointer border-2 border-black p-1 m-1 h-[100px]"
                : "p-1 mr-1 h-[100px]"
            }
          />
          <img
            src={images[3]}
            width="100"
            alt=""
            onMouseOver={() => setCount(3)}
            className={    
              count === 3
                ? "cursor-pointer border-2 border-black p-1 m-1 h-[100px]"
                : "p-1 mr-1 h-[100px]"
            }
          />
          <img
            src={images[4]}
            width="100"
            height="100"
            alt=""
            onMouseOver={() => setCount(4)}
            className={
              count === 4
                ? "cursor-pointer border-2 border-black p-1 m-1 h-[100px]"
                : "p-1 mr-1 h-[100px]"
            }
          />
        </div>
      </div>
    </div>
  );
}