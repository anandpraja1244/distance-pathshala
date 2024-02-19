import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Strategy from "../../../assets/images/MBA/Strategy.png";
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
      Online & Distance MBA InLeadership Strategy colleges in India | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in Leadership Strategy  distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA In  Leadership Strategy colleges" />
      </Helmet>

      {/* <h1>Finance Management MARKET not</h1> */}

      <Searchform />
      <img src={Strategy} alt="MBA In Leadership Strategy colleges" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose MBA in Leadership Strategy?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Students who desire career advancement, inexperience with a degree, global networking, management skills, and flexible schedules should enroll in this program. It's a course that offers a legitimate degree and many options. You may study at your speed with the help of the course's straightforward study plan and pre-recorded online classes. Successful program graduates could obtain jobs at many renowned corporations.
            </p>
          </div>

          <div className="section">
            <h3>Examine Profession Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Students who want to develop their careers, lack degree experience, have flexible schedules, and lack managerial abilities should participate in this program. It's a course with a lot of alternatives and a real degree. With the aid of the course's simple study plan and pre-recorded online sessions, you may study at your own pace. Successful program graduates might get employment at several prestigious companies.
            </p>
          </div>

          <div className="section">
            <h3>Earn a High Salary </h3>
            <p>
            Using the knowledge you acquire from this degree, you may increase your wage. Individuals will ultimately be capable of working as market analysts and marketing managers. The student will be able to land the best job with fantastic benefits after completing the program.
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
            For consideration for the MBA in Leadership strategy, candidates must complete a two-year distance learning program with semesters lasting up to four months. You must fulfill many conditions before you may register for enrollment.
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

                <br></br>Leadership Strategy
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
            Through the MBA in Leadership strategy program given through online and distance learning, students gain a thorough grasp of corporate ethics, business communication, human resource management, and other disciplines. The undergraduate MBA program lasts for two years and four semesters. The core topics are covered in the first two semesters, while the latter two are electives that the students can choose from.
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
                    <li> Quantitative Techniques & Analytics </li>
                    <li> Organizational Behavior & Human Resources Management </li>
                    <li> Accounting & Finance </li>
                   {/* <li>Management Accounting</li>  */}
          
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Strategic Problem Solving </li>
                    <li>Competitive Strategy</li>
                    <li>Marketing Management & Research</li>
                    <li>Digital Transformation</li>
                    <li> Operations Management </li>
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
                    <li>	 Entrepreneurship</li>

                    <li> Strategic Project Management</li>
                    <li>Strategic Project Management</li>
                    <li> Leadership, Strategy, and People Management</li>
                    <li> Negotiation</li>
                    <li>	 Open Elective Course</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Open Elective Course</li>
                    <li> Strategic Management </li>
                    <li> Cross-functional Elective Course </li>
                    <li> Change Management</li>
                    <li> 	 Executive Leadership</li>
                    <li> Master Thesis / Project </li>
                    <li>----</li>
                
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
            You must choose the right college if you want to pursue an MBA. General. When choosing the ideal college, keep the following factors in mind.
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
            Successful distance learners who achieve an MBA in Leadership Strategy are qualified to apply for positions as Marketing Managers, Management Consultants, Brand or Risk Managers, Digital Marketing Managers, Project Managers, HR Managers, Equity Research Analysts, and Sales Managers. You get analytical and problem-solving skills through this online degree program.
            </p>

            {/* <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div> */}
          </div>
          <div className="section pt-4">
            <h3>The favorable companies you can opt for are: </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            {/* <p>
            There is an overload of job opportunities available after the fulfillment of this program and Students can apply for job positions like: 
            </p> */}

            <div className="container text-center mt-4">
              <img src={new_firem} className="img-fluid" alt="Hrm page image" />
            </div>
          </div>
          <div className="section">
            <h3>Conclusion</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Various universities offer this subject. Candidates are recommended to have a career aim in business management and financial management if they plan to enroll in an online or distance learning MBA program in leadership strategy.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Leadership Strategy FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
              Is CAT required for taking admission in Distance/Online MBA?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Except for Manipal University, admission to online and distance MBA programs does not require a CAT score
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>Is distance/online MBA valuable?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              A distance/online MBA is comparable to a traditional MBA in accordance with UGC rules.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>Which is the best distance/online MBA?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              A variety of specializations are available in distance learning and online MBA programs. Some of the most sought-after specialties are financial management, marketing management, human resource management, supply chain management, and retail management.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>Do IIMs provide distance/online MBA?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              No IIM presently offers distance learning or online MBA degree programs. Universities like NMIMS, Jain, and Chandigarh offer MBA programs online and through distance learning.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
              What are the jobs after doing a distance/online MBA?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              After earning your distance learning or online MBA degree, you are eligible to apply for any managerial or executive position. With a distance/online MBA, you can get positions as managers, analysts, and executives as well as a market researchers, brand managers, digital media managers, financial analysts, human resource managers, and corporate executives.
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
