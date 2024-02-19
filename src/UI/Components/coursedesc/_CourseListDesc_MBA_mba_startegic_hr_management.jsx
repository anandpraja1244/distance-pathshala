import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import hr_management from "../../../assets/images/MBA/hr-management.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import course from "../../../assets/images/MBA/Power/course.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MBA/Power/Career.svg";
import Accordion from "react-bootstrap/Accordion";


import Content from "../../../assets/images/process/content.png";
import Rankings from "../../../assets/images/process/rankings.png";
import Structure from "../../../assets/images/process/structure.png";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
      <title>
        Online & Distance MBA In Strategic HR Management colleges in India | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in Strategic HR Management distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA In Strategic HR Management colleges" />
      </Helmet>
      {/* <h1>power managemnet</h1>
      <h1>multimedia not</h1> */}

      <Searchform />
      <img src={hr_management} alt="MBA in Strategic HR Management Distance University" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose MBA in Strategic Human Resource Management?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            The MBA in strategic human resource Management course imparts the knowledge of concepts like people management, organizational leadership, team building, and other required concepts. The HR department is the organization's backbone and is required to hire, train and manage the company's workforce. 
            </p>
            {/* <ul>
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
            </ul> */}
          </div>
          <div className="section">
            <h3>A chance to Make a Difference </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
            Making a difference in people's lives is the driving factor for many aspirants' careers, from surgeons to scientists. HR professionals can achieve significant fulfilment by offering constant support to employees and facilitating open communication. People who pursue strategic HRM also can shift the dynamic of an organization for the better.
            </p>
          </div>
          <div className="section">
            <h3>Job Diversity </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
            MBA in strategic human resource management course opens the door, not just in the field itself. Managing people and client relationships is the essential skill required for every business, which is a part of what you will learn in this course. Aspirants will learn other useful skills, including administration, multitasking, presentations, reporting and communications. With this course, you can have a variety of career paths and job positions in human resource management and beyond. 
            </p>
          </div>
          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            MBA in strategic human resource management is a two years management degree program. To pursue this course, aspirants must have a bachelor's degree. Candidates do not even need any work experience online to apply for this course.
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
              Here is a common procedure to take admission in the distance MBA in<br></br> Strategic Human Resource Management
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
            MBA in strategic human resource management course deals with the concepts related to human resource departments. This course imparts the knowledge of concepts like people management, team building, organizational leadership and a lot more. The duration of this course is two years, and the curriculum is divided into four different semesters.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li> Principles of Economics & Markets</li>
                    <li>  Principles of Economics & Markets</li>
                    <li>  Accounting & Finance</li>
                    <li> Organizational Behaviour & Human Resources Management</li>
                    <li> Quantitative Techniques & Analytics</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li> Entrepreneurship</li>
                    <li> Marketing Management & Research</li>
                    <li>  Marketing Management & Research </li>
                    <li> ADDIE Model for Learning and Development</li>
                    <li>  Employee Experience</li>
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
                    <li> Business Environment & Strategy</li>
                    <li> Operations Management</li>
                    <li> Employee & Labour Relations</li>
                    <li> Talent Analytics</li>
                    <li>  Digital HR Transformation</li>
                    <li>  Open Elective</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>	 Employee-centric Performance Management</li>
                    <li>	 Strategic HR Management</li>
                    <li>	 Reinventing HR</li>
                    <li>	 Diversity & Inclusion</li>
                    <li>	 Cross-functional Elective</li>

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
                <div className="col-md-4">
                  <ul className="p-0 mt-1 text-center">
                    <li className="px-5">MBA in Marketing and HR management</li>
                    <li className="px-5">
                      MBA in Marketing and Finance management
                    </li>
                    <li className="px-5">MBA in System and operations</li>
                    <li className="px-5">
                      MBA in Banking and finance management
                    </li>
                    <li className="px-5">MBA in International Marketing</li>
                    <li className="px-5">
                      MBA in Investment Banking Equity research
                    </li>
                    <li className="px-5">MBA in Supply chain Management</li>
                    <li className="px-5">
                      MBA Data Science and Analytics Management
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="p-0 mt-1 text-center">
                    <li className="px-5">
                      MBA in Strategic finance Management
                    </li>
                    <li className="px-5">MBA in HR Management</li>
                    <li className="px-5">MBA in Oil and gas Management</li>
                    <li className="px-5">MBA in General Management</li>
                    <li className="px-5">MBA in Finance Management</li>
                    <li className="px-5">
                      MBA in International finance management
                    </li>
                    <li className="px-5">MBA in Marketing management</li>
                    <li className="px-5">
                      MBA in Finance and Leadership Management
                    </li>
                    <li>.....</li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="p-0 mt-1 text-center">
                    <li className="px-5">
                      MBA in Finance and Leadership Management
                    </li>
                    <li className="px-5">MBA in Power Management</li>
                    <li className="px-5">MBA in Aviation Management</li>
                    <li className="px-5">MBA in digital Marketing Ecommerce</li>
                    <li className="px-5">MBA in Fintech Management</li>
                    <li className="px-5">MBA in Finance and HR Management</li>
                    <li className="px-5">
                      MBA in Business Intelligence and analytics{" "}
                    </li>
                    <li className="px-5">MBA in IT Management</li>
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
            Once you decide to pursue MBA in Strategic Human Resource Management, it is essential to choose the right university. The following points are essential in selecting the right university.
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
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            After completing an online MBA course in strategic human resource management, there are many career opportunities for an individual. After completing the course, aspirants can apply for the following roles to make a bright future.
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
            The aspirants can even get the high package as the minimum salary in this field. Before choosing the course, you have to choose the right university to step up in your career. Based on your convenience, you can choose the mode of learning.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Strategic HR Management FAQ</h1>
          <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
              Do I need the experience to pursue an online MBA in Strategic HR management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Candidates do not need any work experience but they must have a bachelor’s degree from a recognized university with a minimum of 50% marks for admission.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>What is the duration of an online MBA in Strategic HR Management?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The duration of an Online and distance MBA in Strategic HR Management is 2 years and is divided into 4 equal semesters.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What jobs can I get after the completion of an online MBA in Strategic HR Management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              A student will get jobs like HR Manager, Staffing Director, HR Generalist, and so forth.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              Do online MBA courses provide online lectures?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, you will get online lectures for your online MBA programs.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
