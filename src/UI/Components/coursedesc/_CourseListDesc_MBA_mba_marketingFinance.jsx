import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import finance_marketing from "../../../assets/images/MBA/finance_marketing.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/msc/10th.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import Common from "../../../assets/images/msc/CareerOppor.svg";
import wipro from "../../../assets/images/msc/wipro.png";
import Rankings from "../../../assets/images/process/rankings.png";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";
import Accordion from "react-bootstrap/Accordion";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          Online & Distance MBA In Marketing & Finance colleges in India |
          Distance Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in  Marketing & Finance distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA In Marketing & Finance colleges" />
      </Helmet>

      {/* <h1>Finance Management MARKET not</h1> */}

      <Searchform />
      <img src={finance_marketing} alt="hr Management" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <p>
              Online and Distance MBA in Marketing and Finance Management
              program is supposed to be very popular because it helps pupils in
              learning both Marketing and Finance Management skills. This course
              imparts acquaintance of marketing financial aspects amongst
              students so that they can start their own company in future or
              will get executive posts in reputed firms. This program provides a
              comprehensive understanding of courses like Finance Analytics,
              FinTech, and others. The major subjects of this program are:{" "}
            </p>
            <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-4">
               
                  <ul className="p-0 mt-1">
                    <li> Business Environment & Strategy</li>
                    <li>  Financial Services Marketing </li>
                    <li> Wealth Management and Behavioral Finance </li>
                 
                  </ul>
                </div>
                <div className="col-md-4">
              
                  <ul className="p-0 mt-1">
                    <li>	 B2B Marketing</li>
                    <li>	 Retail Marketing and Brand Management </li>
                    <li>......</li>
              
                  </ul>
                </div>
                <div className="col-md-4">
               
                  <ul className="p-0 mt-1">
                    <li> Financial Analytics</li>
                    <li> Marketing Management and Research </li>
                    <li>........ </li>
                  
                  </ul>
                </div>
              </div>
            </div>
          </div>
            <h3>
              Why should you choose an online and distance MBA in Marketing &
              Finance?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              As there is a countless range of issues that can be proposed
              online and a distance MBA in Marketing & Finance Management whose
              value is the exact as a normal offline degree. If you may have
              been in between something from where regular college is basically
              impossible then this is the best way of attending a regular degree
              in an online and distance MBA in Marketing & Finance Management is
              such a great possibility. Multiple universities are offering this
              course from a distance mode along with the necessary help and
              study materials. The students are free to pick their subjects as
              per their interests and professional path.
            </p>
          </div>

          <div className="section">
            <h3>Explore Advance Career Options </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              After finishing a two-year professional MBA degree in the domain
              of marketing and finance management you can be proposed for a good
              and honorable role in auspicious positions.
            </p>
          </div>

          {/* <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <p>
         
            </p>
          </div> */}

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Online and distance MBAs equip graduates with a 360-degree view of
              marketing and finance skills. This level of understanding is
              highly valuable and crucial to companies looking to recruit
              executives & leaders with a deep understanding of business,
              finance, and management in the real world. You must have a
              bachelor's degree in any domain from any sanctioned and recognized
              university or equivalent degree with a minimum of 50 percent marks
              at your Graduation level. The minimum period of the online and
              distance MBA in Banking & Finance is 2 years and the maximum span
              is 4 years.
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
                <br></br>Marketing & Finance Management
              </p>
              <img src={StepA} alt="admin" className="mw-100 mt-5" />
              <img src={StepB} alt="admin" className=" w-100 mt-5" />
            </div>
          </div>

          <div className="section">
            <h3>Course Outline</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              <li>
                {" "}
                The program contains subjects like Marketing Management,
                Financial Analytics, etc.{" "}
              </li>
              <li>
                The minimum duration of the course is 2 years and the maximum
                span is 4 years. The students get an extra 2 years to qualify
                for all the exams for distance MBA in Marketing and Finance.{" "}
              </li>
              <li>
                The universities do not execute entrance exams for online MBA in
                Marketing & Finance{" "}
              </li>
              <li>
                The students of the program can seek jobs like Brand Managers,
                Channel heads, Marketing executives, Financial analysts, etc.{" "}
              </li>
              <li>
                The average fee of an online and distance MBA in Marketing &
                Finance varies between Rs. 50,000 and Rs. 1,00,000.
              </li>
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li> Principles and Practice of Management </li>
                    <li> Management Economics </li>
                    <li>Organizational Behaviour </li>
                    <li>Business Law</li>
                    <li> Marketing Management</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li> Production/Operation Management </li>
                    <li> Financial Management</li>
                    <li> Human Resource Management </li>
                    <li> Marketing Management</li>
                    <li> Management Information systemEquity derivatives</li>
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
                    <li>Business Environment & Strategy </li>
                    <li>Operations Management</li>
                    <li>Integrated Marketing Communications</li>
                    <li>Financial Services Marketing </li>
                    <li>Financial Analytics </li>
                    <li>----</li>
                    {/* <li>Elective</li> */}
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li> B2B Marketing</li>
                    <li>Retail Marketing & Brand Management</li>
                    <li>Retail Marketing & Brand Management</li>
                    <li>Wealth Management & Behavioral Finance</li>
                    <li>Research Methodology </li>
                    <li>Project</li>
                    {/* <li>-----</li> */}
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
              Choosing the right college for an online and distance MBA in
              Marketing & Finance Management is very essential. The right
              community has a great influence on the quality of teaching you
              get. Some of the issues to keep in mind while making the right
              preference are as follows:
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
              MBA in Financial market management helps students get managerial
              positions in the fiancé sector. When you pursue this course, you
              are limited to banks since you will get an edge over others in
              getting reputed jobs in financial markets. Here are some career
              opportunities that you can refer to after completing this course.
            </p>

            <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div>
          </div>
          <div className="section pt-4">
            <h3>Top Hiring Firms For Online and Distance MBA in Marketing and Finance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            

            <div className="container text-center mt-4">
              <img src={wipro} className="img-fluid" alt="Hrm page image" />
            </div>
          </div>
          <div className="section">
            <h3>Conclusion</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The opportunities are piled up for you after completion of an
              online & distance MBA in Marketing & Finance Management. You can
              choose from any university as per your interests and needs as
              there are countless providing the course. You can follow the
              course with comfort in your home and still while balancing your
              life duties.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Marketing & Finance Management FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
                What is the eligibility of an online/distance MBA in Marketing
                and Finance?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The prospects must have a graduation degree from a recognized
                university with a minimum percentile to stand qualified for the
                course.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
                Where can I apply after an online/distance MBA in Marketing and
                Finance?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                You can smoothly be involved in the marketing and finance
                sectors after finishing the degree. You can apply for jobs like
                financial analyst, marketing executive, sales manager, etc.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                Is the Online/distance MBA in Marketing and Finance course
                valid?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, the online/distance degree of MBA in Marketing and Finance
                course is good as it has been authorized by UGC.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>What is the average salary of a Brand Manager?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The average earnings of a Brand Manager in India are 14 lakhs
                per annum.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>What are the benefits of an MBA in marketing?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Benefits of MBA in Marketing:
                <li>
                  Immense career refinement possibilities: An MBA in Marketing
                  helps you get a job advertisement and qualifies you for
                  management and supervisor positions.{" "}
                </li>
                <li> Higher salary package</li>
                <li> Better knowledge opportunities</li>
                <li> Opportunities for Skill Development.</li>
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
