import React from 'react';
import { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import axios from "axios";

function BlogAuthenticUserpage() {
    const [admin, setAdmin]=useState({
        email:'',
        password:''
    });


    const handleChangeUser = (e) => {
        const { name, value } = e.target;
        setAdmin({
          ...admin,
          [name]: value,
        });
      };
    const history = useHistory();
    useEffect(()=>{
        if(localStorage.getItem('user-data')){
          history.push("/BlogAuthenticUserpage")
        }
    },[]);


    const hendelButton=(e)=>{
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("image", admin.email);
        formdata.append("date", admin.password);
      axios
      .post("http://localhost:5000/login", formdata)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
   };
      // result= await result.json();
      // localStorage.setItem('user',JSON.stringify(result))
      // history.push("/BlogAuthenticUserpage")
    // }

  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-4">
            <div className="row mb-3 mt-3 d-flex justify-content-center">
              <div className="col-4">
                <img
                  src="https://www.shutterstock.com/shutterstock/photos/1153673752/display_1500/stock-vector-profile-placeholder-image-gray-silhouette-no-photo-1153673752.jpg"
                  class="rounded-circle"
                  alt="..."
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <form className="shadow p-3 mb-5 bg-white rounded ">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> Username or Email Address</Form.Label>
                <Form.Control type="email" onChange={handleChangeUser} name="email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={handleChangeUser} name="password" required />
              </Form.Group>
              <Form.Group className="" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button variant="primary" type="submit" size="sm" onClick={hendelButton}>
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogAuthenticUserpage;
