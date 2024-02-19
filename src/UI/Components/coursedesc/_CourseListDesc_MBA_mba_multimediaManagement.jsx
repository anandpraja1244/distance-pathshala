import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Mr_management from "../../../assets/images/MBA/power.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import course from "../../../assets/images/MBA/Power/course.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MBA/Power/Career.svg";
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
      {/* <h1>power managemnet</h1>
      <h1>multimedia not</h1> */}

      <Searchform />
      <img src={Mr_management} alt="hr Management" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why you should choose MBA in Power Management?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The course focuses on offering quality education and training
              related to efficient energy utilization. MBA in power management
              is one of the most demanding courses offered by top universities.
            </p>
            <ul>
              <li>
                Online and distance MBA in power management develops and grows
                the aspirant's inner skills and abilities.
              </li>
              <li>
                The course will lead to a rewarding career across power,
                automobiles, manufacturing organization, and related industries
                or firms.
              </li>
              <li>
                The course will lead you to the exceptional career route of
                opportunities as power management professionals.
              </li>
              <li>
                The course also advances your ability to manage people,
                products, processes, content, goods, and services.
              </li>
            </ul>
          </div>

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              To pursue this course, candidates should obtain their graduation
              from an recognized university. Candidates with a bachelor's in any
              stream or relevant degree can quickly take admissions in this
              online and distance course.
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
                Here is a common procedure to take admission in the distance M.
                Sc in Artificial <br></br>Intelligence and Machine Learning.
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
              The course subject leads you to the exceptional career route of
              opportunities as power management professionals. This rapidly
              growing, expanding power sector organization has abundant
              opportunities to complete and qualify for the MBA in power
              management course. MBA in Power management is a 2-years course
              divided into four semesters.GC.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Economics & Management Decisions</li>
                    <li> Financial Management</li>
                    <li> Financial Management</li>
                    <li>Quantitative Techniques for Management Applications</li>
                    <li> Operations & Material Management</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Human Resource Management</li>
                    <li>Customer Relationship Management</li>
                    <li> Project Management & Contract Administration </li>
                    <li>Strategic Management of Technology & Innovation</li>
                    <li> Research Methodology</li>
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
                    <li>Power Sector Economics & Planning</li>
                    <li>Financial Energy Sector Projects</li>
                    <li>Power Pricing and Power Purchase Agreements</li>
                    <li>Power Trading</li>
                    <li> Power Station Management</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Business Policy & Strategy</li>
                    <li>Energy Law & Policy</li>
                    <li>Health, Safety & Environmen</li>
                    <li> Dissertation</li>

                    <li>-----</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h3>Other Online/distance MBA course specializations </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
              <span className="m-0 p-0">
              <img src={course} className="img-fluid" alt="Hrm page image" />
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
              Once you decide to pursue MBA in power management, it is essential
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
              After completing this course, aspirants can apply in several areas
              like power transmission, power distribution, power generation,
              manufacturing basic tools, and more. Here are some positions in
              different firms that candidates can opt for after the degree.
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
              The course completely trains the aspirants to meet the industry
              requirements. If you prefer to choose this course, ensure to
              choose the right and reputed university to attain the full
              benefits of choosing this course.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Power Management FAQ</h1>
          <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
                What is the main objective of online and distance MBA in Power
                Management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The main goal that this course in online and distance MBA power
                management provides is to understudies a head start and know the
                flow in management force, financial matters, and administration.
                Through this course, the current supervisors in the power and
                related parts are set to evolve themselves in the big market
                scenario.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>When will the results of the examination be declared?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The results will be declared within 5-6 weeks after the
                examination.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                What are some of the reasons that may lead to rejection of an
                application in the online and distance MBA in power management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Firstly, applications must carry or attach all the basic
                documents starting from 10+2, graduation, or any professional
                degree. Applications need to be more careful and avoid these
                mistakes such as: - Submit an incomplete application form - Non-
                enclosure of proof of eligibility qualifications - Non-
                enclosure of employment proof (if needed) - Non- enclosure of
                demand draft or cheque.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
