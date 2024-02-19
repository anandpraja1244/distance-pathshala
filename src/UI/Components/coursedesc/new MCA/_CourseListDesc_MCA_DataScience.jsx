import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Mr_management from "../../../assets/images/MBA/mcadatas.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import course from "../../../assets/images/MCA/DS/course.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MCA/DS/Career.svg";
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
              million data scientists
            </p>
          </div>

          <div className="section">
            <h3>It is a Very Promising Field</h3>
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
              Industry experts and top academicians specially design MCA in Data
              science subjects to the field. The course helps students strike a
              flexible balance between theory and practical subjects. The course
              is a three-year degree program with six semesters.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>• Mathematical Foundation For Computer Applications</li>
                    <li>• Operating System & amp; Unix Shell Programming </li>
                    <li>• Data Communication & amp; Computer Networks</li>
                    <li>• Data Structures with Algorithms </li>
                    <li>• Computer Organization & amp; Architecture</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>• Relational Database Management System</li>
                    <li>• Design & amp; Analysis of Algorithms </li>
                    <li>• Java Programming</li>
                    <li>• Python For Data Science</li>
                    <li>• Statistical Methods in Decision Making </li>
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
                    <li>• Application Development using Python </li>
                    <li>• Advanced Web Technologies </li>
                    <li>• Data Visualisation </li>
                    <li>• SQL for Data Science </li>
                    <li>• Data Mining </li>
                    <li>• Open Elective Course</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>• Predictive Analytics Using Machine learning </li>
                    <li>• Time Series Analytics</li>
                    <li>• Text Mining </li>
                    <li> • Applied Analytics-Marketing, Web, Social Media </li>
                    <li>• Cross-Functional Elective Course</li>

                    <li>• Project </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h3>Other Online/distance MCA course specializations </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <span className="m-0 p-0">
                  <img
                    src={course}
                    className="img-fluid"
                    alt="Hrm page image"
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="section">
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Once you decide to pursue MCA in Data science, it is essential to
              choose the right university. The following points are essential in
              selecting the right university
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
              There are various job opportunities for the aspirants who pass the
              MCA degree in Data science online and distance MCA. Students with
              the course and relevant skills can easily get their seats in
              organizations at higher positions. After completing this course,
              students can go through the below-mentioned job opportunities to
              lead a successful life.
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
              After completing this course, candidates can expect high pay as
              their starting salary. They will be paid based on the candidate's
              knowledge, skill, experience, and academic records. Before
              choosing the universities, ensure to do your research to step into
              the right one.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Data Science FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>What are the job profiles to choose from after Online and Distance MCA in Data Science?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              You can easily choose the job profile as per your desire as after the degree program of MCA in Data Science, you can choose from the provided options: - Data Analyst - Software Engineer - IT Executive
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the Minimum Eligibility Criteria for Taking Admission to Online and Distance MCA Data Science program?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The minimum eligibility criteria for taking admission to online and distance MCA in Data Science is a BCA degree in either Computer Science or IT with a minimum of 50% marks.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              How many semesters are there in the Online MCA degree program?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              There are a total of four semesters in the MCA degree program as it's a master degree course.
              </p>
            </Accordion.Body>
          </Accordion.Item>
  
        </Accordion>
      </div>
    </>
  );
}
