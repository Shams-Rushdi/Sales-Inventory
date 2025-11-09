import axios from 'axios';
import React from 'react';
import { Link } from 'react-router';
import myaxios from '../utils/myaxios';

const LoginPage = () => {

      const handleSubmit = (e) =>{
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);

            myaxios.post(
            "user-login" ,data,
            ).then((response)=>{
                  if(response.data.status === "success"){
                        localStorage.setItem("token",response.data.token)
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
                <div className="col-md-7 animated fadeIn col-lg-6 center-screen">
                    <div className="card w-90  p-4">
                        <div className="card-body">
                            <h4>SIGN IN</h4>
                            <br/>
                            <form onSubmit={handleSubmit}>
                            <input id="email" placeholder="User Email" name="email" className="form-control" type="email"/>
                            <br/>
                            <input id="password" placeholder="User Password" name="password" className="form-control" type="password"/>
                            <br/>
                            <button type="submit" className="btn w-100 bg-gradient-primary">Next</button>
                            <hr/>
                            </form>
                            <div className="float-end mt-3">
                                <span>
                                    <Link className="text-center ms-3 h6" to="/register">Sign Up </Link>
                                    <span className="ms-1">|</span>
                                    <Link className="text-center ms-3 h6" to="/reset-password">Forget Password</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>                     
     </div>
);
};

export default LoginPage;