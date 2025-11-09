import React from 'react';
import { useNavigate } from 'react-router';
import myaxios from '../utils/myaxios';

const PasswordResetOtp = () => {
const naviagte = useNavigate();

const handleSubmit = (e) =>{
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);

            myaxios.post(
            "verify-otp" ,data,
            ).then((response)=>{
                  if(response.data.status === "success"){
                        data.email = localStorage.getItem("email");
                        naviagte("/reset-password-otp");
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
                <div className="col-md-7 col-lg-6 center-screen">
                    <div className="card animated fadeIn w-90  p-4">
                        <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <h4>Give Your OTP</h4>
                            <br/>
                            <label>Your OTP</label>
                            <input id="email" placeholder="User Email" name="otp" className="form-control" type="email"/>
                            <br/>
                            <button type="submit"  className="btn w-100 float-end bg-gradient-primary">Next</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</div>
);
};

export default PasswordResetOtp;