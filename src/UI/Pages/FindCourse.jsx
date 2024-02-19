import React, { useContext, useEffect, useState } from "react";
import CompareFindFilter from "../Components/_CompareFindFilter";
import Footer from "../Components/_Footer";
import Header from "../Components/_Header";
import HomeProcess from "../Components/_HomeProcess";

// images
import img_aboutUsBanner from "./../../assets/images/aboutus/aboutUs_banner.svg";
import img_aboutUsVision from "./../../assets/images/aboutus/vision.svg";
import img_aboutUsVisionBG from "./../../assets/images/aboutus/visionBG.svg";
import img_aboutUsMission from "./../../assets/images/aboutus/mission.svg";
import img_aboutUswhatWeDoBg from "./../../assets/images/aboutus/whatWeDoBG.svg";
import img_aboutUswhatWeDo from "./../../assets/images/aboutus/whatWeDo.svg";
import Mission from "./../../assets/images/process/mission.png";
import Objective from "./../../assets/images/process/objective.png";
import Vision from "./../../assets/images/process/vision.png";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import { Form, Nav } from "react-bootstrap";

export default function AboutUs( CourseListDesc) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Helmet>
        <meta charSet="utf-8" />
        <title></title>
      </Helmet>
      <CompareFindFilter />
      <div className="newfind courseListDesc">
        <div className=" compareFindFilter__title">
          <h2 class="f-700 pt-2 mt-2">Find Here</h2>
          <p>Colleges and Genuine Comparison, Absolutely Free!!</p>
          <div className="container">
            <div className="row p-3">
              <div className="col-md-6">
                <select className="form-select">
                  <option value="0">Qualification</option>
                  <option value="2">12th</option>
                  <option value="3">Graduation</option>
                </select>
              </div>
              <div className="col-md-6">
                <select className="form-select">
                  <option value="0">Course</option>
                  <option value="2">Commerce</option>
                  <option value="3">Arts</option>
                  <option value="4">Information Technology (IT)</option>
                  <option value="5">Management</option>
                  <option value="6">Computer Applications</option>
                  <option value="7">Diploma and Certificate</option>
                </select>
              </div>
              <div className="compareFindFilter__btn text-center mt-3 pt-2 mb-2">
                <button className="find-button">Search Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="newfind">
      <div className="container sorting mt-5 my-5" >
      <div className="row findcourse">
        <div className="col-md-2">
        <Nav.Link href="https://distancepathshala.com/ug-courses/online-distance-bba/marketing">  <button>MBA</button></Nav.Link>
        </div>
        <div className="col-md-2">
        <Nav.Link href="https://distancepathshala.com/pg-courses/online-distance-mca"><button>MCA</button></Nav.Link>
        </div>
        <div className="col-md-2">
        <Nav.Link href="https://distancepathshala.com/pg-courses/online-distance-mca"><button>M.Com</button></Nav.Link>
        </div>
        <div className="col-md-2">
         <Nav.Link href="https://distancepathshala.com/pg-courses/online-distance-ma/english"> <button>MA</button></Nav.Link>
        </div>
        <div className="col-md-2">
        <Nav.Link href="https://distancepathshala.com/pg-courses/online-distance-ma/english"><button>M.Tech</button></Nav.Link>
        </div>
        <div className="col-md-2">
          <Nav.Link href="https://distancepathshala.com/pg-courses/online-distance-msc/mathematics"><button>M.Sc</button></Nav.Link>
        </div>
      </div>
      <div className="row mt-5 findcourse">
      <div className="col"></div>
        <div className="col-md-2">
        <Nav.Link href="https://distancepathshala.com/pg-courses/online-distance-msc/mathematics"> <button>BBA</button></Nav.Link>
        </div>
        <div className="col-md-2">
          <Nav.Link href="https://distancepathshala.com/pg-courses/online-distance-mcom/account-finance"><button>B.Com</button></Nav.Link>
        </div>
        <div className="col-md-2">
         <Nav.Link href="https://distancepathshala.com/ug-courses/online-distance-bca"><button>BCA</button></Nav.Link> 
        </div>
        <div className="col-md-2">
          <Nav.Link href="https://distancepathshala.com/ug-courses/online-distance-ba"><button>BA</button></Nav.Link>
        </div>
        <div className="col-md-2">
         <Nav.Link href="https://distancepathshala.com/ug-courses/online-distance-btech/computer-science-engineering"><button>B.tech</button></Nav.Link> 
        </div>
      <div className="col"></div>
        
      </div>
    </div>
      </div>
      </div>
    
     
      <Footer />
    </>
  );
}
