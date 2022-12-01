import React, { useState } from "react";
import axios from 'axios'
 
const Testing = () => {
          const [email, setEmail] = useState('')
          const [sub, setSub] = useState('')
          const [desc, setDesc] = useState('')

 
 
 
  const onSubmit =  async (e) => {
    const user = {
       to: email,
       sub: sub,
       desc:desc
    }
    e.preventDefault();
   axios.post("http://localhost:5002/api/v1/mail/investors_mail/add",user)
   .then(response => 
    alert(response)
    );
  };
  return ( 
    <div className="container">
     <form action="" onSubmit={onSubmit}>
<div class="form-group">
                            <input type="text" class="form-control"
                                id="exampleInputEmail1" aria-describedby="emailHelp" required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Title" />
                        </div>
<div class="form-group">
                            <input type="text" class="form-control"
                                id="exampleInputEmail1" aria-describedby="emailHelp" required
                                value={sub}
                                onChange={(e) => setSub(e.target.value)}
                                placeholder="Title" />
                        </div>
<div class="form-group">
                            <input type="text" class="form-control"
                                id="exampleInputEmail1" aria-describedby="emailHelp" required
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                placeholder="Title" />
                        </div>
                        <button type="submit" className="btn add-task-btn" style={{ backgroundColor: '#007bff', color: 'white' }}>
                            send
                        </button>
</form>
  </div>  
  );
};
 
export default Testing;