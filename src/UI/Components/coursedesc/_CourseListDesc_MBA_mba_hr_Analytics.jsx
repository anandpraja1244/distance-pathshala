import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import hr_analytics from "../../../assets/images/MBA/hr_analytics.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/msc/10th.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import new_firem from "../../../assets/images/msc/new_firem.png";
import Common from "../../../assets/images/msc/CareerOppor.svg";
import Rankings from "../../../assets/images/process/rankings.png";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";
import Accordion from "react-bootstrap/Accordion";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          Online & Distance MBA In HR Analytics colleges in India | Distance
          Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in HR Analytics distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA In  HR Analytics colleges" />
      </Helmet>

      {/* <h1>Finance Management MARKET not</h1> */}

      <Searchform />
      <img
        src={hr_analytics}
        alt="MBA In  HR Analytics colleges"
        className="w-100"
      />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose a Stance MBA in HR Analytics?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              A distance learning MBA programme in HR Analytics is a top-tier
              professional degree. Management classes in this area of
              specialization will primarily concentrate on business and the
              efficient strategy of the management sector. HR Consultant,
              Payroll Manager, management, and various other positions are all
              included in the integrated management strategy.
            </p>
          </div>

          <div className="section">
            <h3>Explore Advanced Career Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Interested candidates can seek employment opportunities in public
              and private sectors after completing their degree programme.
              Graduates of this programme can work as administrators, project
              managers, HR Consultant, Payroll Manager and various other
              positions.
            </p>
          </div>

          <div className="section">
            <h3>Earn a High Salary </h3>
            <p>
              A potential employee will eventually be qualified to work in the
              management industry. After finishing the course, students can get
              amazing and mesmerizing benefits, including high-level employment.
            </p>
          </div>
          {/* <div className="section">
            <h3>Eligibility Criteria </h3>
      
           <li>Bachelor’s degree from a recognized university with at least 55% or more in their graduation.</li>
<li>There is no entrance exam needed for most of the universities providing MBA in Fintech Management course. However, if there is any entrance exam candidates must have to pass.</li>


          </div> */}

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Students are enrolled in an online/distance programme to earn a
              Stance MBA in HR Analytics, which will take them two years to
              complete. Before submitting an enrollment application, please read
              the important information.
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
                Here is a common procedure to take admission in the Distance MBA
                in
                <br></br>HR Analytics
              </p>
              <img src={StepA} alt="admin" className="mw-100 mt-5" />
              <img src={StepB} alt="admin" className=" w-100 mt-5" />
            </div>
          </div>

          <div className="section">
            <h3>Course Subjects </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              The Online and Stance MBA in HR Analytics is divided into four
              semesters. Candidates can review the syllabus in the table below.
              An online and distance MBA in HR Analytics is 2–4 years long.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li> Principles of Economics & Markets </li>
                    <li> Managerial Effectiveness & Ethics </li>
                    <li> Accounting & Finance</li>
                    <li> Organization Behavior & Human Resource Management </li>
                    <li> Quantitative Techniques and Analytics </li>
                    {/* <li>Management Accounting</li>  */}
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Entrepreneurship </li>
                    <li> Marketing Management & Research</li>
                    <li> Investment Analytics and Portfolio Management</li>
                    <li> Banking, Financial Services, and Insurance</li>
                    <li>Talent Acquisition and Management</li>
                    {/* <li>Decision Science </li> */}
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
                    <li>Operations Management</li>

                    <li> Direct Tax</li>
                    <li>Employee Reward Management</li>
                    <li>Performance Management System</li>
                    <li>Open Elective Course</li>
                    {/* <li>	 Open Elective Course</li> */}
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li> Strategic Human Resource Management</li>
                    <li> Organisation Development and Change Management</li>
                    <li> Fintech: Foundation and Application</li>
                    <li> Wealth Management and Behavioral Finance</li>
                    <li> Cross-Functional Elective Course</li>
                    <li> Master Thesis / Project </li>
                    {/* <li>----</li> */}
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
              Remember these things as you choose the best university for your
              career. Make an informed choice; many universities offer distance
              learning and online MBA in HR Analytics programmes.
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
              After completing this course, you will have a wide range of
              exciting career options. Among the available positions are payroll
              managers, analytics managers, and many more.
            </p>

            {/* <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div> */}
          </div>
          {/* <div className="section pt-4">
            <h3>The favorable companies you can opt for are: </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
           

            <div className="container text-center mt-4">
              <img src={new_firem} className="img-fluid" alt="Hrm page image" />
            </div>
          </div> */}
          <div className="section">
            <h3>Summing it up</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Many universities are offering this course. An online or Stance
              MBA in HR analytics is the best option for those who want to work
              in the management sector.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">HR Analytics FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Is this course acceptable for the job?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, the courses that have received approval from the UGC and
                DEB at our institute. These programmes are acceptable for both
                government jobs and government exams.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>How do I make the payment?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Students can pay their fees online and receive Paypal, NEFT,
                Visa Card, Cash, and other payment methods.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>How long does an online MBA in HR Analytics last?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The two-year online MBA in HR Analytics is divided into four
                semesters, each lasting six months.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>How do online MBA HR Analytics programs work?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                HR Analyst, HR Manager, Payroll Manager, HR Director, HR
                Consultant, and other positions can be obtained through an
                online MBA in HR Analytics.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
                How much does an online MBA in HR Analytics cost on average?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                An online MBA in HR Analytics costs, on average, between Rs.
                1,00,000 and Rs. 3,00,000.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          {/* <Accordion.Item eventKey="5" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the scope of an MBA in artificial intelligence?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              In MBA in Artificial Intelligence Course, learners will know and develop the skills and knowledge required to manage the complexness that comes from a more unnatural intelligence-driven world. They will also comprehend and explore how AI technology can be employed to create revenue and generate business possibilities.
              </p>
            </Accordion.Body>
          </Accordion.Item> */}
        </Accordion>
      </div>
    </>
  );
}
