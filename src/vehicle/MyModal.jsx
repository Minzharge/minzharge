import axios from 'axios';
import React, { useContext,  useState } from 'react';


function MyModal ({ visible, onClose,props,state,tit,data,value1,firstSelectValue,value,label,tit1}) {
   const [Vehicle, setVehicle] = useState([''])
     const [inputs, setInputs] = useState({
    // select:'',
    first_name:'',
    vehicle_name:tit,
    km:{label},
    city:'',
    zipcode:'',
    phone:'',
    // text_message:''
 })
 
 const printValues = (e) => {
  alert(e)
  e.preventDefault();
  const content = {
   
     name: inputs.first_name,
     vehiclename: inputs.vehicle_name,
     km:{label},     
     city:inputs.city,
     zipcode:inputs.zipcode,
     phone : inputs.phone,
   
  }
  console.log(content)
  axios.post('http://localhost:5001/api/v1/mail/vehicle_mail/add' , content)
  .then( res =>{
    alert("successfully sent mail",res)
  })
};
 const updatedField = (e,tit,label) =>{
  
  setInputs({ 
    ...inputs,
    [e.target.name] : e.target.value})
 }
  const handleOnClose = (e) => {
  if (e.target.id === "container") onclose();
  onclose();
};
  function refreshPage() {
    window.location.reload(false);
  }

// console.log(data,tit,tit.title,tit.name,value,label,"1props");

  if (!visible) return null;
  
  return (
    <div>
      <form action="" onSubmit={printValues}>
    <div
    id="container"
    onclick={handleOnClose}  className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-2 rounded w-72 sm:w-96">
        <button onClick={onClose} class="ml-[16rem] sm:ml-[22rem] text-black text-xl ">z</button>
        <h1 className="font-semibold text-center text-xl text-gray-700">
         
          
        </h1>
       

        <div className="flex flex-col mt-4">
            
          <input
            type="text"
            name="first_name"
            className="border-b border-gray-700 outline-none p-2  mb-5"
            placeholder="Name"
            value={inputs.first_name} onChange={updatedField}
          />
          <div className="border-b border-gray-700 outline-none p-2  mb-5" 
          type="text"
          name="vehicle_name"
          value={tit.title} 
          onChange={updatedField}>
            {tit.title} - {label} 
            {/* - {tit1} */}
            {/* {value} */}
          </div>
          <div 
          type="text"
          name="km"
          value={label} 
          onChange={updatedField}>
       
          </div>
        
          <input
            type="text"
            name="city"
            className="border-b border-gray-700 outline-none p-2  mb-5"
            placeholder="City"
            value={inputs.city} onChange={updatedField}  id="inputNumber" 
          />
          <input
            type="text"
            name="zipcode"
            className="border-b border-gray-700 outline-none p-2  mb-5"
            placeholder="Zip-Code"
            value={inputs.zipcode} onChange={updatedField}  id="inputNumber" 
          />
          <input
            type="tel"
            name="phone"
            className="border-b border-gray-700 outline-none p-2  mb-5"
            placeholder="Mobile Number"
            value={inputs.phone} onChange={updatedField}  id="inputNumber" 
          />
          
        </div>
        
        <div className="text-center">
          {/* <button type="submit" className="px-5 py-2 border text-black border-gray-700 rounded hover:bg-green-600 hover:border-white hover:text-white" 
          disabled={!inputs.first_name || !inputs.vehicle_name || !label || !inputs.city || !inputs.zipcode || !inputs.phone }
          onClick={() => window.location.reload(false)}>
          submit
          </button> */}
          <button type="submit" className="px-5 py-2 border text-black border-gray-700 rounded hover:bg-green-600 hover:border-white hover:text-white" 
          disabled={!inputs.first_name || !inputs.vehicle_name || !label || !inputs.city || !inputs.zipcode || !inputs.phone }
          onClick={() => window.location.reload(false)} 
          >
          submit
          </button>
                    
         
        </div>
      </div>
    </div>
    </form>
    </div>
  );
 }
export default MyModal