import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Mr_management from "../../../assets/images/MCA/reality.png";
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
            <h3>Why should you choose in Online and Distance MCA in Augmented Reality and Virtual Reality</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Augmented Reality and Virtual Reality opens up a modern world of opportunities for the students. The course will teach the students core concepts of AR and VR. The course will enable students to secure top positions in companies and enhance future work opportunities.
            </p>
          </div>

          <div className="section">
            <h3>Explore Advanced Career Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            The opportunities are numerous. The course prepares the students for managing top activities and functionalities of the business. One can become a Data Scientist, Machine Learning Engineer, Research Scientist, Business Intelligence Developer, AI Data Analyst, etc.  </p>
          </div>
          <div className="section">
            <h3>Earn a High Salary</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            VR and AR is one of the most important factors and business across the advanced digital world, students after graduation can easily bag a job with a high salary package. After finishing the degree, the students are prepared to provide various assistance and management in creating and learning Virtual and Augmented Reality using technology and systems. Students can have salary packages as high as 7LPA to 15 LPA. </p>
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
            Online and Distance MCA in Augmented Reality and Virtual Reality requires students to complete three years of 6-month semesters through an online/distance program. Please review the details to know before enrolling.
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
              Here is a common procedure to take admission in the distance MCA in <br/>Augmented Reality and Virtual Reality
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
            The Course prepares students for careers in computer related virtual and AI guided applications. The course also develops their analytical skills. The MCA online course is a 3-year, 4-semester postgraduate program. The Online and Distance MCA in Augmented Reality and Virtual Reality in Tourism Management syllabus covers the curriculum's subjects and topics.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li> Graph Theory and Combinatorics     </li>
                    <li>		 Advanced Database Management Systems  </li>
                    <li>	 Advanced Software Engineering Principles  </li>
                    <li>	 Professional Communication  </li>
                    <li>	 Core Java  </li>
                    <li>	----</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Network Security and Cryptography            </li>
                    <li>	 Cognitive Analytics and Social Skills for Professionals  </li>
                    <li>Machine Learning for Real World Application</li>
                    <li>  Augmented Reality Development and its Applications</li>
                    <li> Data Structures and Algorithm Design </li>
                    <li> Research Methodology </li>
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
                    <li> Cloud Infrastructure and Services    </li>
                    <li>Quantitative Aptitude                   </li>
                    <li> Professional Ethic  </li>
                    <li>	Seminar (Evaluation) </li>
                    {/* <li>Internet of Things</li>
                    <li>	 Open Elective Course</li> */}
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li> Elective Subjects  </li>
                    <li>  Projects</li>
                    <li> ----</li>
                    <li> ----</li>
                    {/* <li>  Computer Vision </li>
                    <li>  Cross-Functional Elective Course</li> */}

                    {/* <li> Project </li> */}
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
            The most important part is choosing the most suitable and appropriate university to continue pursuing the MCA in Augmented Reality. Consider the following key considerations when selecting the right university.
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
            MCA in AR And VR will provide students with a variety of career options. Students who complete this course are eligible to apply as follows
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
            You have numerous options to choose from the universities that offer this course. If you wish to receive quality education and polish your skills and develop yourself in becoming a Tour Manager then you should pursue this programme.  
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Augmented Reality and Virtual Reality FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Is Online MCA valuable?</h5>
            </Accordion.Header>
            <Accordion.Body>
         <p>Yes, online MCA is a value added program to your desired field of interest as it has been approved by the UGC.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the scope of online MCA in AR & VR?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
  <p>Students can apply for different designations across varied sectors.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What is an online MCA in AR & VR program?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              It is a postgraduate program that aids one to understand the concepts and functionality of Augmented Reality & Virtual Reality along with ML and its different aspects.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          
        </Accordion>
      </div>
    </>
  );
}
