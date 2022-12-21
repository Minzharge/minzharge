import React, { useState } from 'react';
import { Link} from 'react-router-dom';

const assetUrl = process.env.NODE_ENV === 'production' ? './minzharge/assets/': './minzharge/assets';

function Features() {
    const[show,setShow] =useState(true)
  return (
    <section>
        <div className='p-5 md:p-10'>
            <h1 className='text-2xl font-bold text-center md:text-left'>VEHICLE BRANDS</h1>
            <hr />
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 mt-16 md:ml-[50px]'>
            
                <Link  to={'/features_brand/Dexpress'} target="_blank" className='border-2 border-slate-300 rounded-lg flex justify-center'>
                    <img src={assetUrl+"/Brands_Logos/DeXpress-Logo-s.png"}  alt="" className='w-[200px] h-[150px] object-cover rounded-2xl'/>
                </Link>
                <Link  to={'/features_brand/Semzy'} target="_blank" className='border-2 border-slate-300 rounded-lg flex justify-center'>
                    <img src={assetUrl+"/Brands_Logos/Semzy.png"}  alt="" className='w-[200px] h-[150px] object-cover rounded-2xl'/>
                </Link>
				<Link to={'/features_brand/Battre'} target="_blank"  className='border-2 border-slate-300 rounded-lg flex justify-center'>
                    <img src={assetUrl+"/Brands_Logos/BattRE.png"}  alt="" className='w-[200px] h-[150px] object-cover rounded-2xl'/>
                </Link>
                <Link  to={'/features_brand/Taark'} target="_blank" className='border-2 border-slate-300 rounded-lg flex justify-center'>
                    <img src={assetUrl+"/Brands_Logos/Taark_Logo.png"}  alt="" className='w-[200px] h-[150px] object-cover rounded-2xl'/>
                </Link>
                <Link  to={'/features_brand/Nexzu'} target="_blank" className='border-2 border-slate-300 rounded-lg flex justify-center'>
                    <img src={assetUrl+"/Brands_Logos/Nexzu.png"}  alt="" className='w-[230px] h-[150px] object-cover rounded-2xl'/>
                </Link>
                
				<Link  to={'/features_brand/Gemopai'} target="_blank" className='border-2 border-slate-300 rounded-lg flex justify-center'>
                    <img src={assetUrl+"/Brands_Logos/gemopai.png"}  alt="" className='w-[210px] h-[150px] object-cover rounded-2xl'/>
                </Link>
              </div>
        </div>
    
        <div className='p-5 md:p-10'>
            <h1 className='text-2xl font-bold text-center md:text-left'> CHARGER BRANDS</h1>
            <hr />
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 mt-16 md:ml-[50px]'>
            
                <Link  to={'/feature_chargers/Delta'} target="_blank" className='border-2 border-slate-300 rounded-lg flex justify-center'>
                    <img src={assetUrl+"//Brands_Logos/logo.svg"}  alt="" className='w-[200px] h-[100px]  p-2 mt-3 justify-center '/>
                </Link>
                <Link  to={'/feature_chargers/AmpVConnect'} target="_blank" className='border-2 border-slate-300 rounded-lg flex justify-center'>
                    <img src="https://i.postimg.cc/8CLX2tQg/Ampvconnect-Logo.jpg"  alt="" className='w-[200px] h-[150px] object-cover rounded-2xl'/>
                </Link>
				
              </div>
        </div>
    </section>
  )
}

export default Features