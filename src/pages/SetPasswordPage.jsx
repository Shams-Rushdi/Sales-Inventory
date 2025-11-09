import React from 'react';
import myaxios from '../utils/myaxios';
import { useNavigate } from 'react-router';

const SetPasswordPage = () => {
       const navigate = useNavigate();
      const handleSubmit = (e) =>{
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);

            myaxios.post(
            "user-registration" ,data,
            ).then((response)=>{
                  if(response.data.status === "success"){
                        //localStorage.setItem("token",response.data.token)
                        navigate("/login");
                  }
                  else{
                        alert(response.data.message);
                  }
            }).catch((error)=>{

            });
            
      }


     return (
        <div>
           <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10 animated fadeIn col-lg-10 center-screen">
                    <div className="card">
                        <div className="card-body">
                            <h4>New Password</h4>
                            <br/>
                            <form onSubmit={handleSubmit}>
                              <div className="container-fluid m-0 p-0">
                                 <div className="row m-0 p-0">
                                       <div className="col-md-4 p-2">
                                          <label>Password</label>
                                          <input id="password" placeholder="User Password" name="password" className="form-control" type="password"/>
                                       </div>
                                 </div>
                                 <div className="row m-0 p-0">
                                       <div className="col-md-4 p-2">
                                          <button type="submit" className="btn mt-3 w-100  bg-gradient-primary">Complete</button>
                                       </div>
                                 </div>
                              </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>                       
        </div>
     );
};

export default SetPasswordPage;