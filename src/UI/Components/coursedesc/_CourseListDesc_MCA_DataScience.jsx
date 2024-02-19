import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Mr_management from "../../../assets/images/MCA/DS/DS.svg";
import Spacil from "../../../assets/images/MCA/DS/spacl.svg";

import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";

import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
// import course from "../../../assets/images/MBA/Leadership/course.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MCA/DS/Tech.svg";
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
            <h3>Why should you choose MCA in Data Science?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              MCA in Data science is the most popular course which is especially
              designed by industry experts and top academicians to this field.
              Data science is an emerging field which can lead to a lucrative
              career. It is the study of information which is a most important
              resource for industries to effective makes key decisions in
              solving problems. Here are some reasons to why you should choose
              MCA in data science.
            </p>
          </div>

          <div className="section">
            <h3>Demand for Data Scientists</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              It is one of the driving subject that is rapidly taking over most
              organizations. There is rise in demand for data scientists day by
              day. Additionally some experts in data science field making it a
              top priority for big companies to employ as many data scientists
              as possible. Research sates that demand for data scientists
              increase 28% which creates a job opportunities for over 11.8
              million data scientists.
            </p>
          </div>

          <div className="section">
            <h3>It is a Very Promising Field </h3>
            <p>
              Data science is considered to be one of the hottest career paths.
              As there is a increase in demand for skilled data science
              practitioners in industry, academia and governments, aspirants
              will have a great future. There is very positive job outlook for
              data scientist and there are many promising and reputed
              organizations hiring data scientist. With this degree, you can
              increase your odds of getting a job in the data science field.
            </p>
          </div>

          <div className="section">
            <h3>Use this Knowledge for Generating Side Income</h3>
            <p>
              With data science degree, aspirants will get enough knowledge in
              the field. Aspirants can also use their knowledge in data science
              for generating side income. They will get huge side income
              opportunities for people with a data science background like
              freelancing, teaching, blogging and a lot more.
            </p>
          </div>

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              MCA in data science is one of the best job-oriented programs in
              the industry that prepares students for various job prospects.
              Aspirants can apply for this career after graduating from a
              UGC-recognized institution. It is the 2-years programs which offer
              the high-quality data science aspects with dedicated faculties.
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
                Here is a common procedure to take admission in the distance MCA
                in Data Science
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
              It is two years and includes four semesters with programming
              languages and web technologies subjects. Some universities offer
              an MCA program of 3 years, so the duration varies as per the
              university. The cloud computing curriculum is divided into four
              semesters of 6 months each. Every subject in this course is
              specially designed to meet the industry requirements.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>• Mathematical Foundations For Computer Application</li>
                    <li>• Operating System and Unix Shell Programming </li>
                    <li>• Data Communication and Computer Networks</li>
                    <li>• Data Structures with Algorithms </li>
                    <li>• Computer Organization & amp; Architecture</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>• Relational Database Management System</li>
                    <li>• Relational Database Management System </li>
                    <li>• Java Programming</li>
                    <li>• Cloud Foundations</li>
                    <li>• Cloud Computing with AWS </li>
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
                    <li>• Application Development Using Python </li>
                    <li>• Advanced Web Technologies </li>
                    <li>• Cloud Managed Services</li>
                    <li>• Containers and Microservices </li>
                    <li>• Big Data Management and Analytics</li>
                    <li>• Open Elective Course</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>• CI/CD & DevOps</li>
                    <li>• Cloud Security & Migration</li>
                    <li>• Microsoft Azure Essentials</li>
                    <li>• Google Cloud Platform Essentials</li>
                    <li>• Cross-Functional Elective Course</li>

                    <li>• Project </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="container">
              <h3>Other Online/distance MCA course specializations </h3>
              <span className="m-0 p-0">
                <img src={line_h} className="img-fluid" alt="Hrm page image" />
              </span>
              <img src={Spacil} className="w-100" />
            </div>
          </div>

          <div className="section">
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Once you decide to pursue MCA in Cloud computing, it is essential
              to choose the right university. The following points are essential
              in selecting the right university.
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
              It is a professional degree course that helps students develop
              in-depth knowledge of data architecture and computer systems.
              After completing this course, there are plenty of options
              available.
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
              Many top companies are hiring students with good knowledge of
              cloud computing. The aspirants will close many open doors from the
              top companies with high pay. If you are interested in working in
              this field, you can pursue this course to have a bright career.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Cloud Computing FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
                What is the eligibility of an online MCA in cloud computing?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The candidates must have a graduation degree from a recognized
                university with a minimum percentile to be eligible for the
                course.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>Where can I apply after an online MCA in cloud computing?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                You can easily apply in the banking and finance sector after
                completing the degree.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>Is Online MCA in cloud computing course valid?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, the degree MCA in Cloud Computing is valid as it has been
                approved by the University Grants Commission (UGC).
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
                What is the average salary earned after the completion of MCA in
                cloud computing?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>The average salary earned after the Rs. 2LPA and 12 LPA.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>What are the top recruiters in the IT domain?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>The top recruiters are Google, Infosys, Accenture, etc.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
