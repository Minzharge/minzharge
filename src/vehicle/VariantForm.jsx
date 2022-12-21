import { data } from "autoprefixer";
import React, { useContext,  useState } from 'react';
import axios from 'axios';
import { useLocation,useEffect } from "react-router-dom";

function VariantForm ({ visible, onClose,props,state,tit,data,variabletit,value1,firstSelectValue,value,res,label,tit1}) {
   const [Vehicle, setVehicle] = useState([''])
  
     const [inputs, setInputs] = useState({
    // select:'',
    first_name:'',
    vehicle_name:tit,
    city:'',
    zipcode:'',
    phone:'',
    text_message:''
 })
 const areAllFieldsFilled = (inputs != "")
 const printValues = (e) => {
  alert(e)
  const content = {
    //  question: inputs.select,
     name: inputs.first_name,
     vehiclename: inputs.vehicle_name,
     city:inputs.city,
     zipcode:inputs.zipcode,
     phone : inputs.phone,
     text_message : inputs.text_message

  }
  console.log(content)
  axios.post('http://localhost:5001/api/v1/mail/variant_mail/add' , content)
  .then( res =>{
    alert("successfully sent mail",res)
  })
  e.preventDefault();

};
 const updatedField = (e) =>{
  setInputs({
    ...inputs,
    [e.target.name] : e.target.value
    
  })
  

 }
  const handleOnClose = (e) => {
  if (e.target.id === "container") onclose();
  onclose();
};
const isFormValid = () => {
  const {first_name, vehicle_name, city, zipcode, phone} = inputs
  return first_name && vehicle_name && city && zipcode && phone
}

const  handleChange=(e)=> {
    this.setState({inputs: e.target.value})
  }
// const location = useLocation();
// console.log(data,tit,value,"val",tit1,label,"1props",variabletit,"variabletit");
// console.log(location,"uselocation hook");

// console.log(location.state?.data);
// const data = location.state;


  if (!visible) return null;
  
  return (
    <div>
      <form action="" onSubmit={printValues}>
    <div
    id="container"
    onclick={handleOnClose}  className="fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-2 rounded w-72 sm:w-96">
        <button onClick={onClose} class="ml-[16rem] sm:ml-[22rem] text-black text-xl ">z\</button>
        <h1 className="font-semibold text-center text-xl text-gray-700">
          {/* Vehicle details of {data ? data.title : "Batter:ONE"}{data} */}
          
        </h1>
        {/* <p className="text-center text-gray-700 mb-5"></p> */}

        <div className="flex flex-col mt-4">
            
          <input
            type="text"
            name="first_name"
            className="border-b border-gray-700 outline-none p-2  mb-5 text-black"
            placeholder="Name"
            value={inputs.first_name} onChange={updatedField}
          />
          <div 
          name="vehicle_name"
          value={inputs.vehicle_name} onChange={updatedField}>
            {/* {tit.title} - {label} - */}
            <select className="border-b border-black outline-none w-full text-black mb-5 mt-5 text-black" name="vehicle_name">
            {/* <option className="mt-[20%] text-black">
            Batt:RE LO EV (48V / 26 AH)
             </option> */}
               {/* <option className=" ">
                see-{tit1}- */}
             {/* {tit1}-{res}s-{variabletit} */}
             {/* /* Batt:RE LO EV (60V / 28AH) */}
             {/* </option> */}
               <option className="">
             Select Type 
             </option> 
             {
             tit.map((res, i) => (
                <option 
                  key={res.name}                
                  id={res.name}
                  name="vehicle_name"
                  value={res.name}
                  onChange={updatedField}
                > 
                  {res.name}
               </option>
    ))}
             </select>
            {/* {value} */}
          </div>
          {/* <div className="border border-gray-700 p-2 rounded mb-5" value={inputs.first_name} onChange={updatedField} >
            {tit.name}
          </div> */}
          <input
            type="text"
            name="city"
            className="border-b border-gray-700 outline-none p-2  mb-5 text-black"
            placeholder="City"
            value={inputs.city} onChange={updatedField}  id="inputNumber" 
          />
          <input
            type="text"
            name="zipcode"
            className="border-b border-gray-700 outline-none p-2  mb-5 text-black"
            placeholder="Zip-Code"
            value={inputs.zipcode} onChange={updatedField}  id="inputNumber" 
          />
          <input
            type="tel"
            name="phone"
            className="border-b  outline-none border-gray-700 p-2  mb-5 text-black"
            placeholder="Mobile Number"
            value={inputs.phone} onChange={updatedField}  id="inputNumber" 
          />
          
        </div>
        
        <div className="text-center">
          <button type="submit" 
          disabled={!inputs.first_name || !inputs.vehicle_name || !inputs.city || !inputs.zipcode || !inputs.phone }
          onClick={() => window.location.reload(false)}
          className="px-5 py-2 border text-black border-gray-700 rounded hover:bg-green-600 hover:border-white hover:text-white">
            submit
          </button>
         
        </div>
      </div>
    </div>
    </form>
    </div>
  );
 }
export default VariantForm