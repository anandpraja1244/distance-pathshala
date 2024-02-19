import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Mr_management from "../../../assets/images/MCA/dataAnalytics.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";

import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
// import course from "../../../assets/images/MBA/Leadership/course.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MCA/CC/Career.svg";
import Accordion from "react-bootstrap/Accordion";
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
      <img src={Mr_management} alt="hr Management" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose Online Distance MCA in Data Analytics? </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Master of Computer Applications in Data Analytics is a 2-year degree programme that targets to provide quality education in analyzing and handling data transfer as per the needs of the organization and individual career prospects. Candidates should have a BCA degree to enroll in data analytics. You can visit the official webpage of the university to enroll.
            </p>
          </div>

          <div className="section">
            <h3>Earn a High Salar </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Data is one of the most important factors in the business and students after graduation can easily bag a job with a high salary package. After finishing the degree, the students are prepared to provide various banking and insurance services which can boost the career of the graduates. Students can bag salary packages as high as 2.5LPA to 7.8LPA.            </p>
          </div>

          <div className="section">
            <h3>Raise your Value as an It Professional </h3>
            <p>
            If you already have experience and a positions in the IT field then it would be easier for you to adapt and learn cloud computing. If you are looking to work in cloud computing you can transfer your current skill set in automation, development or networking in the cloud. By pursing this course you can raise your professional status by updating your skills for a chance of increasing your salary
            </p>
          </div>
       

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Online and Distance Online and Distance MCA in Data Analytics requires students to complete two years of 6-month semesters through an online/distance program. Please review the details to know before enrolling.
            </p>
            <div className="text-center">
              <h3>ADMISSION PROCEDURE </h3>
              <span className="m-0 p-0">
                <img src={line_h} className="img-fluid" alt="Hrm page image" />
              </span>
            </div>
            <img src={AdmissionProcedure} alt="admin" className="w-100 mt-5" />
            <img src={elegibilty} alt="admin" className="w-100 mt-5" />
            <div className="container py-3 text-center">
              <p>
              Here is a common procedure to take admission in the distance MCA in Data Analytics
              </p>
              <img src={StepA} alt="admin" className="mw-100 mt-5" />
              <img src={StepB} alt="admin" className=" w-100 mt-5" />
            </div>
          </div>

          <div className="section">
            <h3>Course subjects</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
            The Online and Distance Online and Distance MCA in Data Analytics prepares students for careers in IT sector and Computer Applications. The course also develops their computer and IT skills. The Online and Distance Online and Distance MCA in Data Analytics  is a 3-year, 6-semester undergraduate program. The  syllabus covers the curriculum's subjects and topics.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>	 Mathematical Foundation For Computer Application      </li>
                    <li>		 Operating System and Unix Shell Programming  </li>
                    <li>	 	 Data Communication and Computer Networks </li>
                    <li>	 Data Structures with Algorithms </li>
                    <li>	 Computer Organization and Architecture </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>	 Relational Database Management System              </li>
                    <li>Design and Analysis of Algorithms </li>
                    <li> R Programming </li>
                    <li> Python Programming</li>
                    <li> Structured Query Language </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left sam-back">Semester 3</p>
                  <ul className="p-0 mt-1">
                    <li>Application Development Using Python   </li>
                    <li> Advanced Web Technologies                        </li>
                    <li> Machine Learning </li>
                    <li>	 Natural Language Processing  </li>
                    <li>Internet of Things</li>
                    <li>	 Open Elective Course</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li> Big Data-Hadoop                                          </li>
                    <li>  Artificial Intelligence </li>
                    <li>  Deep Learning</li>
                    <li>  Computer Vision </li>
                    <li>  Cross-Functional Elective Course</li>

                    <li> Project </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>



          <div className="section">
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Once you decide to pursue MCA in Cloud computing, it is essential to choose the right university. The following points are essential in selecting the right university.
            </p>

            <div className="row mt-4">
              <span className="m-0 p-0">
                <img src={choose} className="img-fluid" alt="Hrm page image" />
              </span>
            </div>
          </div>
          <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Online and Distance MCA in Data Analytics will provide students with a variety of career options. Students who complete this course are eligible to apply as
            </p>

            <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div>
          </div>
          <div className="section">
            <h3>Summing it up</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            You have numerous options to choose from the universities that offer this course. If you wish to receive quality education and polish your skills and develop yourself in becoming a future Data Analyst, then you can pursue this online and distance MCA programme.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Data Analytics FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Is Online and Distance MCA in Data Analytics course valid?</h5>
            </Accordion.Header>
            <Accordion.Body>
         <p>Yes, the course MCA in Data Analytics is valid as it has been approved by the UGC.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the eligibility of an online MCA in Data Analytics?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
  <p>The Applicants should have a BCA degree in hand with a minimum percentage of 50 to get admitted to an Online MCA course.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              Where can I apply after an online MCA in Data Analytics?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              You can apply in the banking and finance field after finishing the course.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the average salary earned after the completion of MCA in Data Analytics?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The average pay package is between Rs. 2 LPA and 12 LPA.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
              What are the top recruiters in the IT domain?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The top recruiters are Google, Infosys, Accenture, etc.
              </p>
            </Accordion.Body>
          </Accordion.Item>
  
        </Accordion>
      </div>
    </>
  );
}
