import React from 'react'
import { Link} from 'react-router-dom';

const assetUrl = process.env.NODE_ENV === 'production' ? '/minzharge/assets/': '/minzharge/assets';

function Categories() {
  return (
    <section>
        <div className='p-6 md:p-12'>
        <h1 className='text-2xl font-bold text-center md:text-left'>CATEGORIES</h1>
            <hr />
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-16 md:ml-[50px] nopadding'>
                <Link to={'/features_category/Scooters'}  target="_blank" className=''>
                  <img src={assetUrl +"/Category/1.png"} alt=""/>
                </Link>
                <Link  to={'/features_category/Cycles'} target="_blank"  >
                  <img src={assetUrl +"/Category/3.png"} alt=""/>
                </Link>              
                <Link  to={'/features_category/Loaders'} target="_blank"  >
                  <img src={assetUrl +"/Category/4.png"} alt=""/>
                </Link>
                <Link  to={'/features_category/ThreeWheeler'} target="_blank"  >
                  <img src={assetUrl +"/Category/5.png"} alt=""/>
                </Link>
              
				<Link  to={'/features_category/Fork_Lifts'} target="_blank"  >
                  <img src={assetUrl +"/Category/2.png"} alt=""/>
                </Link>
            
            </div>
        </div>
       
    </section>
  )
}

export default Categories