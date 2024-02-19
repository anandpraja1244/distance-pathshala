import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Finance from "../../../assets/images/B.Com/Finance3.svg";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/msc/CareerOppor.svg";
import Rankings from "../../../assets/images/process/rankings.png";
import Commons from "../../../assets/images/B.Com/Common.svg";
import Mr_management from "../../../assets/images/MCA/intelligence1.jpg"; 
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";
import AdmissionProcedure from '../../../assets/images/msc/AdmissionProcedure.svg';
import elegibilty from '../../../assets/images/msc/10th.svg';
import StepB from '../../../assets/images/msc/stepA.png';
import StepA from '../../../assets/images/msc/stepB.png';

import machinelearning from "../../../assets/images/MCA/machinelearning.png";
import linepg from '../../../assets/images/msc/Linepg.png';
import Accordion from "react-bootstrap/Accordion";
export default function CourseListDesc() {
  return (
    <>
      <Helmet> 
        <title>
          MSC In Artificial Intelligence & Machine Learning | Distance Pathshala
        </title>
        <meta
          name="description"
          content="MSC Artificial Intelligence and Machine Learning degree online and distance by Distance Pathshala, The course curriculum includes programming languages"
        />
        <meta
          name="keywords"
          content="Artificial Intelligence Distance learning"
        />
      </Helmet>
      <Searchform />
   
      <img src={Mr_management} alt="hr Management" className="w-100" />


      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>
            Why should you choose Online and Distance?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Online and Distance MCA in Machine Learning opens up a world of opportunities for the students. The course will teach the students the concepts and methods of Machine Learning. The course will enable students to secure top positions in compa    C A in Machine Learning teaches students the principles and techniques of Machine Learning.
            </p>
          </div>
          <div className="section">
            <h3>Explore advanced Career Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            The opportunities are endless. The course prepares the students for managing top activities and functionalities of the business. On completing the course, career opportunities will be higher and the students will get wider areas to explore & learn.
            </p>
          </div>
          <div className="section">
            <h3>Earn a High Salary</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Machine Learning is one of the most important factors in the business and students after graduation can easily bag a job with a high salary package. Students can have salary packages as high as 7LPA to 15 LPA.
            </p>
          </div>
          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Online and Distance MCA in Machine Learning in International Finance Management requires students to complete three years of 6-month semesters through an online/distance program. Please review the details to know before enrolling.
            </p>
          </div>

          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The minimum duration of M. Sc in artificial intelligence and
              machine learning is a 2 years course that is divided into 8
              quarters. The maximum duration of this course is 4 years and
              students will get additional 2 years to pass all the exams. To
              apply for this course, there is no age limit for the candidates.
            </p>
          <img src={AdmissionProcedure} alt="admin" className="w-100 mt-5" />
          
          <img src={elegibilty} alt="admin" className="w-100 mt-5" />
           <div className="container py-3 text-center">
            <p>Here is a common procedure to take admission in the distance MCA in <br></br>Computer Machine Learning in International Finance Management</p>
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
            The Online and Distance MCA prepares students for careers in computer business related fields . The course also develops their financial management skills. The MCA online course is a 3 year, 4-semester graduate program. The online MCA in  syllabus covers the curriculum's subjects and topics.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester  1</p>
                  <ul className="p-0 mt-1">
                    <li>
                    Graph Theory and Combinatorics      
                    </li>
                    <li> Advanced Database Management Systems </li>
                    <li>
                    Advanced Software Engineering Principles 
                    </li>
                    <li>
                    Professional Communication 
                    </li>
                    <li>
                    Core Java 
                    </li>
                    <li>
                    ----
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester  2</p>
                  <ul className="p-0 mt-1">
                    <li> Network Security and Cryptography    </li>
                    <li>
                     Cognitive Analytics and Social Skills for Professionals 
                    </li>
                    <li> Machine Learning for Real World Application</li>
                    <li> Artificial Intelligence for Real World Application</li>
                    <li>Data Structures and Algorithm Design</li>
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
                  <p className="Semester-left sam-back">Semester  3</p>
                  <ul className="p-0 mt-1">
                    <li> Cloud Infrastructure and Services </li>
                    <li> Quantitative Aptitude </li>
                    <li> Professional Ethic</li>
                    <li> Seminar (Evaluation)</li>
                    <li> Unix/Linux Programming</li>
                    <li> Deep Learning & Neural Network</li>
                    <li> Social Media & Text Analytics </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester  4</p>
                  <ul className="p-0 mt-1">
                    <li>Elective Subjects</li>
                    <li>Projects</li>
                    <li>----</li>
                    <li>----</li>
                    <li>----</li>
                    <li>----</li>
                    <li>----</li>

                 
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
            Choosing the right university helps you be on the right track and bring you closer to your goals and ambition. Therefore, choose universities wisely and analyse carefully whether the university meets all the requirements.
            </p>

            <div className="row mt-4">
              <div className="col-md-4">
                <img
                  src={Rankings}
                  className="img-fluid"
                  alt="Hrm page image"
                />
              </div>
              <div className="col-md-4">
                <img src={Content} className="img-fluid" alt="Hrm page image" />
              </div>

              <div className="col-md-4">
                <img
                  src={Structure}
                  className="img-fluid"
                  alt="Hrm page image"
                />
              </div>
            </div>
          </div>
          <div className="section pt-4">
            <h3>Course Fee Structure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            The most important part is choosing the most suitable and appropriate university to continue pursuing the course. Consider the following key considerations when selecting the right university.
            </p>

            <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div>
          </div>
          <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Online and Distance  will provide students with a variety of career options. Students who complete this course are eligible to work in IT, Banking, Financial, Healthcare, Supply Chain field.
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
            You have numerous options to choose from the universities that offer this course. If you wish to receive quality education and polish your skills and develop yourself in becoming a machine learning Engineer then you should pursue this Online and Distance MCA in Machine Learning programme.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Machine Learning in International Finance Management FAQ</h1>
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
         <p>The course length is 2 years, which is 4 semesters.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the scope of online MCA in ML?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
  <p>The scope of online MCA in Machine Learning is so wide and students can apply for different designations across different sectors.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What is an online MCA in ML program?   </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The online MCA in Machine Learning is a postgrad course that aids you understand the insights of Machine Learning and its varied concepts.
              </p>
            </Accordion.Body>
          </Accordion.Item>
         
  
        </Accordion>
      </div>
    </>
  );
}
