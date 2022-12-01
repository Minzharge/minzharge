import Navbar from "./components/Navbar"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Works from './pages/Works'
import Contact from './pages/Contact'
import Dealers from './pages/Dealers'
import AboutUs from "./AboutUs/AboutUs"
import NotFound from './pages/NotFound'
import ProductsSubNav from "./pages/ProductsSubNav"
import ProductBrands from "./pages/ProductBrands"
import CategorySubNav from "./pages/CategorySubNav"
import ChargerSubNav from "./pages/ChargerSubNav"
import ProductCategory from "./pages/ProductCategory"
import ProductView from "./pages/ProductView"
import { useEffect, useState } from "react"
import ProductViewnex from "./vehicle/Nexzu_Rompus_Plus"
import Nexzu_Rompus_Plus from "./vehicle/Nexzu_Rompus_Plus"
import Nexzu_Roadlark from "./vehicle/Nexzu_Roadlark"
import Nexzu_Roadlark_Cargo from "./vehicle/Nexzu_Roadlark_Cargo"
import Nexzu_Bazinga from "./vehicle/Nexzu_Bazinga"
import Nexzu_Bazinga_Cargo from "./vehicle/Nexzu_Bazinga_Cargo"
import Semzy_Kasa_Smart from "./vehicle/Semzy_Kasa_Smart"
import Semzy_Kasa from "./vehicle/Semzy_Kasa"
import Taark_HTV from "./vehicle/Taark_HTV"
import Rithul_Fork_Lift_500 from "./vehicle/Rithul_Fork_Lift_500"
import Taark_LTV from "./vehicle/Taark_LTV"
import Taark_City from "./vehicle/Taark_City"
import Rithul_Fork_Lift_1T from "./vehicle/Rithul_Fork_Lift_1T"
import BattReLoEv from "./vehicle/BattReLoEv"
import BattReOne from "./vehicle/BattReOne"
import Gemopai_astrid_lite from "./vehicle/Gemopai_astrid_lite"
import Gemopai_ryder from "./vehicle/Gemopai_ryder"
import Dexpress_Elite from "./vehicle/Dexpress_Elite"
import Dexpress_Mettle from "./vehicle/Dexpress_Mettle"

import ProductNexzuBrands from "./brands/Nexzu"
import ProductTaarkBrands from "./brands/Taark"
import ProductRithulforkBrands from "./brands/Rithul"
import ProductGemopaiBrands from "./brands/Gemopai"
import ProductDexpressBrands from "./brands/Dexpress"
import ProductSemzyBrands from "./brands/Semzy"
import ProductBattreBrands from "./brands/Battre"

import Cargo_Bikes from "./categories/Cargo_Bikes"
import Cycles from "./categories/Cycles"
import Fork_Lifts from "./categories/Fork_Lifts"
import Loaders from "./categories/Loaders"
import Scooters from "./categories/Scooters"
import ReactGA from 'react-ga';

//chargers
import Chargers from "./pages/Chargers";
import AmpVConnect from "./Chargers/AmpVConnect";
import Delta from "./Chargers/Delta";
import DCcharges from './Chargers/DC_charges';
import EVportableCharges from './Chargers/portable_charges';
import AmpVConnect_AC from "./Chargers/AmpVConnect_AC";


// import ProductView from "./categories/Scooters_Brand"
// import ProductView from "./categories/Loaders_Brand"
// import ProductView from "./categories/Lifters_Brand"
// import ProductView from "./categories/Cycles_Brand"
// import ProductView from "./categories/Cargo_Cycles_Brand"
// import ProductView from "./categories/Cargo_Bikes_Brand"

import Footer from "./components/Footer"
import { NavbarContext } from './context/NavbarStatus';
import Investors from './investors/Investors'
import BlogsList from './Blogs/Blogs_list'
import BlogContextProvider from './context/BlogContext'
 
//details
import Privacy from "./details/privacyandpolicy"; 
import Cookies from "./details/cookiesandpolicy";
import Terms from "./details/termsandconditions";
import Refund from "./details/refundandcancellationpolicy";

///Testing page
import Testing from "./pages/Testing"
const App = () => {
    const [expand, setExpand] = useState(false)
    const homePath = process.env.NODE_ENV === 'production' ? '/minzharge': '/';
    const tracking_id = 'UA-250178798-1'
    ReactGA.initialize(tracking_id)

    return (
        <Router>
            <NavbarContext.Provider value={{expand, setExpand}}>
            <Navbar />
                <Routes>
                    <Route path={homePath} exact element={<Home />} />
                    <Route path='works' element={<Works />} />
                    <Route path='products' element={<ProductsSubNav />}>
                        <Route path=':brand' element={<ProductBrands />} />
                    </Route>
                    <Route path='products-cat' element={<CategorySubNav />}>
                        <Route path=':category' element={<ProductCategory />} />
                    </Route>
					<Route path='AboutUs' element={<AboutUs />} />
					<Route path='Contact' element={<Contact />} />
					<Route path='Dealers' element={<Dealers />} />
                    <Route path='*' element={<NotFound />} />
                    <Route path='product/:id' element={<ProductView />} />
					

                    {/* SHOW ALL VEHICLES/ SHOW ALL PRODUCTS */}

                     <Route path='vehicle/Nexzu_Rompus_Plus' element={<Nexzu_Rompus_Plus />} />
                     <Route path='vehicle/Nexzu_Roadlark' element={<Nexzu_Roadlark />} />
                     <Route path='vehicle/Nexzu_Roadlark_Cargo' element={<Nexzu_Roadlark_Cargo />} />					 
                     <Route path='vehicle/Nexzu_Bazinga' element={<Nexzu_Bazinga />} />
                     <Route path='vehicle/Nexzu_Bazinga_Cargo' element={<Nexzu_Bazinga_Cargo />} />
                     <Route path='vehicle/Taark_HTV' element={<Taark_HTV />} />                   
                     <Route path='vehicle/Taark_LTV' element={<Taark_LTV />} />                     
                     <Route path='vehicle/Taark_City' element={<Taark_City />} />                    
                     <Route path='vehicle/Rithul_Fork_Lift_500' element={<Rithul_Fork_Lift_500 />} />
                     <Route path='vehicle/Rithul_Fork_Lift_1T' element={<Rithul_Fork_Lift_1T />} />  
					 <Route path='vehicle/BattReLoEv' element={<BattReLoEv />} />  
					  <Route path='vehicle/BattReOne' element={<BattReOne />} />
					  <Route path='vehicle/Semzy_Kasa' element={<Semzy_Kasa />} />
					  <Route path='vehicle/Semzy_Kasa_Smart' element={<Semzy_Kasa_Smart />} />
					   <Route path='vehicle/Gemopai_astrid_lite' element={<Gemopai_astrid_lite />} />
					   <Route path='vehicle/Gemopai_ryder' element={<Gemopai_ryder />} />
					    <Route path='vehicle/Dexpress_Elite' element={<Dexpress_Elite />} />
						<Route path='vehicle/Dexpress_Mettle' element={<Dexpress_Mettle />} />
					
                           
                      {/* PRODUCTS BRANDS */}

                      {/* <Route path='brands/allbrands' element={<ProductNexzuBrands/>}  /> */}
                     <Route path='brands/Nexzu' element={<ProductNexzuBrands/>}  />
                     <Route path='brands/Rithul' element={<ProductRithulforkBrands />} />
                     <Route path='brands/Dexpress' element={<ProductDexpressBrands />} />
                     <Route path='brands/Taark' element={<ProductTaarkBrands />} />
                     <Route path='brands/Gemopai' element={<ProductGemopaiBrands />} />
                     <Route path='brands/Semzy' element={<ProductSemzyBrands />} />
                     <Route path='brands/Battre' element={<ProductBattreBrands />} /> 


                     <Route path='features_brand/Nexzu' element={<ProductNexzuBrands/>}  />
                     <Route path='features_brand/Rithul' element={<ProductRithulforkBrands />} />
                     <Route path='features_brand/Dexpress' element={<ProductDexpressBrands />} />
                     <Route path='features_brand/Taark' element={<ProductTaarkBrands />} />
                     <Route path='features_brand/Gemopai' element={<ProductGemopaiBrands />} />
                     <Route path='features_brand/Semzy' element={<ProductSemzyBrands />} />
                     <Route path='features_brand/Battre' element={<ProductBattreBrands />} />  

                     <Route path='categories/Cargo_Bikes' element={<Cargo_Bikes />} /> 
                     <Route path='categories/Cycles' element={<Cycles />} />  
                     <Route path='categories/Fork_Lifts' element={<Fork_Lifts />} />  
                     <Route path='categories/Loaders' element={<Loaders />} />  
                     <Route path='categories/Scooters' element={<Scooters />} />  
                      
					 
					 {/* chargers */}
                     <Route path="Chargers" element={<Chargers/>}></Route>
					 <Route path="Chargers/AmpVConnect_AC" element={<AmpVConnect_AC/>}></Route>
					 <Route path="Chargers/AmpVConnect" element={<AmpVConnect/>}></Route>
					 <Route path="Chargers/Delta" element={<Delta/>}></Route>
                     <Route path="Chargers/DC_charges" element={<DCcharges/>}></Route>
                     <Route path="Chargers/portable_charges" element={<EVportableCharges/>}></Route>
                       {/* PRODUCTS BRANDS */}

                      {/* <Route path='brands/allbrands' element={<ProductNexzuBrands/>}  /> */}
                   

                     {/* SCOOTERS,LOADERS,CYCLES,CARGO BIKES,CARGO CYCLES,LIFTERS  */}
					 <Route path='about-us' element={<AboutUs />} />
					 <Route path='investors' element={<Investors />} />
					 <Route path="details/privacyandpolicy" element={<Privacy/>}></Route>
                     <Route path="details/cookiesandpolicy" element={<Cookies/>}></Route>
                     <Route path="details/termsandconditions" element={<Terms/>}></Route>
                     <Route path="details/refundandcancellationpolicy" element={<Refund/>}> </Route>

                     {/* testing router */}
                     <Route path="testing" element={<Testing/>}></Route>
				    </Routes>
				
				<BlogContextProvider>
         <Routes>
          <Route exact path="/min-blogs" element={<BlogsList />} />
         </Routes>
       </BlogContextProvider>	               
                <Footer />   
                </NavbarContext.Provider>
        </Router>
    )
}

export default App