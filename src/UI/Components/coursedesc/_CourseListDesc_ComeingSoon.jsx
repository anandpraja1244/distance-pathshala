import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Hr_management from "../../../assets/images/MBA/hr-management.png";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          Distance learning Masters Programs in Applied Finance 2022
        </title>
        <meta
          name="description"
          content="Distance MSC Applied Finance course at Distance Pathshala is offered with numerous advantages and facilities to the students online."
        />
        <meta name="keywords" content="Applied Finance Distance Education" />
      </Helmet>
      <Searchform />
      <img src={Hr_management} alt="hr Management" className="w-100" />
      {/* <div className="Mba-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1 className="text-white">
                Online and distance MBA in Strategic Human Resource Management
              </h1>
              <p className="text-white">
                MBA in Strategic HR Management is a program suitable for
                professionals interested in working in the Human resource
                department. In this course, candidates will learn in-depth
                knowledge of concepts like HR strategies and more. In this
                course, individuals can develop a stronghold in principles HR
                strategies and other related stuff required to work in the
                industry. MBA in strategic human resource Management teaches the
                basics of HR roles in the organization.
              </p>
            </div>
            <div className="col-md-4">
      <img src={Hr_management} alt="hr Management" className="w-100" />
              
            </div>
          </div>
        </div>
      </div> */}
      <div className="container-fluid courseListDesc text-center">
        <h1>Comeing Soon</h1>
      </div>
    </>
  );
}
