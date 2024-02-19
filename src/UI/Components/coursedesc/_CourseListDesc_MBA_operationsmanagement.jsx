import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Operationmanage from "../../../assets/images/MBA/Operationmanage.png";
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
        Online & Distance MBA In Operations Management colleges in India | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in Operations Management distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA In Operations Management colleges" />
      </Helmet>
      {/* <h1>power managemnet</h1>
      <h1>multimedia not</h1> */}

      <Searchform />
      <img src={Operationmanage} alt="hr Management" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose MBA in Operations Management?  </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The course focuses on offering quality education and training
              Students should enroll in this program if they want flexible
              scheduling, affordable standards, and worldwide networking. It's a
              course with various alternatives and a degree that is authentic.
              With the aid of the course's simple study plan and pre-recorded
              online sessions, you may study at your own pace. Successful
              program graduates may be able to get employment at a variety of
              prestigious companies.
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
            <h3>Examine Profession Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              In this course, candidates may learn about a variety of
              fascinating business areas. The purpose of this course is to help
              you develop the necessary skill set. Planning, organizing,
              managing, and overseeing the operational components of the many
              sections of the industry are all included in this.
            </p>
          </div>
          <div className="section">
            <h3>Earn a High Salary </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Using the knowledge you acquire from this degree, you may increase
              your wage. Upon completion, candidates will be qualified to hold
              positions such as consultant, inventory control manager,
              operations manager, technical operations manager, plant manager,
              and area operations manager. The student will be able to land the
              best job with fantastic benefits after completing the program.
            </p>
          </div>
          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            For consideration for the MBA in Operation management, candidates must complete a two-year distance learning program with semesters lasting up to four months. You must fulfill a number of conditions before you may register for enrollment.
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
              Here is a common procedure to take admission in the Distance MBA in

          <br></br>Operation Management.
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
            The planning, organizing, overseeing, and managing of the working units of the many sections of the industry are concepts that students get a strong grasp of. The undergraduate MBA program lasts for two years and four semesters.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Economics & Management Decisions</li>
                    <li>Financial Management </li>
                    <li>Marketing Management</li>
                    <li>Quantitative Techniques for Management Applications</li>
                    <li> Operations & Material Management</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Project Management & Contract Administration</li>
                    <li>Customer Relationship Management</li>
                    <li>Human resource management </li>
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
                    <li>Production Planning & Inventory Control</li>
                    <li>Product Lifecycle Management</li>
                    <li>Lean Manufacturing</li>
                    <li>Operations Analytics</li>
                    <li>Service Operations</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Innovation & Information Technology Management</li>
                    <li>Dissertations</li>
                    <li>Total Quality management</li>
                    <li>Data Visualization</li>

                    <li>Business Policy & Strategy</li>
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
            You must pick the right college if you want to pursue an MBA. General. When choosing the ideal college, keep the following factors in mind.
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
            Students who successfully finish this distance learning MBA in Operation Management degree are qualified to apply for positions as Business Process Managers, Consultants, Inventory Control Managers, Operations Managers, Technical Operations Managers, Plant Managers, and Area Operations Managers.
            </p>

            <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div>
          </div>
          <div className="section">
            <h3>Summing  up</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Various universities offer this subject. Candidates for this type of distance learning and online MBA in Operations Management are suggested to have a career aim in supply chain management, operations management, data analysis, logistics, plant design, and layout.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Operation Management FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
              Is MBA in Operation Management through distance education valid?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The UGC-DEB and AIU have recognized and approved the MBA in Operation Management.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>What is the scope after pursuing MBA in Operations Management?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Both production and e-commerce industries can benefit from an MBA in operation management. There are several positions available, including operation manager, plant manager, and area operation manager.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the course structure for an MBA in Operations Management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              There are 4 semesters in the MBA in Operation Management program. The entire program may be completed in 5 years.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What are some top distance MBA colleges in India? 
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, it is a good decision for those who intend to make a great career in management and the business world and want to explore a number of projects.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What are the subjects in MBA Operations Management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Supply chain design, supply chain management, operations management, data analysis, logistics, plant design and layout, and manufacturing processes are some of the top topics you'll master in an MBA in operation management.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
