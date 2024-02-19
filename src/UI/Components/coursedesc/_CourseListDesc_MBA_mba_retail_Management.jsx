import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import retailmanage from "../../../assets/images/MBA/retailmanage.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/msc/10th.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
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
      Best Online Retail and Sales Management in Distance Learning Colleges/University | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Best of Distance MBA in Retail Management program Distance Learning in India. Find and compare top colleges/universities, subjects, fees, approvals, eligibility, careers, more."
        />
        <meta name="keywords" content="MBA Retail Management program Distance Learning" />
      </Helmet>

      {/* <h1>Finance Management MARKET not</h1> */}

      <Searchform />
      <img src={retailmanage} alt="MBA Retail Management program Distance Learning" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose MBA in Retail Management?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Students should participate in this program if they want flexible
              scheduling, affordable standards, and global networking. It's a
              course with a lot of alternatives and a real degree. With the aid
              of the course's simple study plan and pre-recorded online
              sessions, you may study at your own pace. Successful program
              graduates could get employment at numerous prestigious companies.
            </p>
          </div>

          <div className="section">
            <h3>Examine Profession Opportunities </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              In this course, candidates can learn about a variety of
              fascinating business areas. The purpose of this course is to help
              you develop the necessary skill set. Bringing customers into the
              store and providing them with a pleasant experience are both
              covered in the study of retail management. It emphasizes honing
              students' managerial and business skills. This program assists
              students in obtaining employment in fields like retail.
            </p>
          </div>

          <div className="section">
            <h3>Earn a High Salary </h3>
            <p>
              Using the knowledge you acquire from this degree, you might
              increase your wage. Individuals will ultimately be capable of
              working as brand managers, product managers, sales executives,
              merchandisers, etc. The student would be able to land the best job
              with fantastic benefits after completing the program.
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
              For consideration for the MBA in Retail Management, candidates
              must complete a two-year distance learning program with semesters
              lasting up to four months. You must fulfill several conditions
              before you can register for enrollment. Eligibility:
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
                <br></br>Retail Management
              </p>
              <img src={StepA} alt="admin" className="mw-100 mt-5" />
              <img src={StepB} alt="admin" className=" w-100 mt-5" />
            </div>
          </div>

          <div className="section">
            <h3>Course Subjects</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              The abilities they currently possess, such as leadership,
              budgeting, accounting and finance, marketing, and customer focus,
              are thoroughly understood by the students. through the online and
              distance learning programs provided for the MBA in Retail
              Management. The undergraduate MBA program lasts for two years and
              four semesters.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Management Theory & Practice</li>
                    <li>Organizational Behaviour </li>
                    <li>Marketing Management </li>
                    <li>Business Economics</li>
                    <li>Financial Accounting & Analysis </li>
                    <li>Information Systems for Managers</li>
          
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li> Business Communication       </li>
                    <li>Essentials of HRM  </li>
                    <li>Business Law</li>
                    <li> Strategic Management</li>
                    <li>Operations Management </li>
                    <li>Decision Science </li>
                 
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
                    <li>Introduction to Retail                           </li>
                    <li>Consumer Behaviour  </li>

                    <li>Merchandising Management  </li>
                    <li>Sales Management                                     </li>
                    <li>Retail Store Operation and Inventory Management </li>
                    <li>----</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Global Retailing   </li>
                    <li>International Logistics and Supply Chain Management </li>
                    <li>Marketing Research </li>
                    <li>Business: Ethics, Governance & Risk </li>
                    <li>Research Methodology </li>
                    <li>Project</li>
                
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
                  Students who successfully finish this distance learning MBA in Retail Management degree program are qualified to apply for positions as Product Managers, Marketing Executives, Retail / Store Managers, Merchandisers, Sales Executives, Inventory Managers, and Market Researchers
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
            Various universities offer this subject. Candidates are encouraged to have a career objective in budgeting, accounting and finance, marketing, and customer focus before applying to such an online and distance learning MBA in retail management program.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Retail Management FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
              What is MBA Retail Management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              An MBA in Retail Management is a study of the retail marketing sector that includes topics like acting as middlemen and business analysis. 
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>What is the average salary of an MBA in Retail Management graduate?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Salary packages for graduates in retail management vary, with starting pay starting at 3 lakhs and going up to 6 lakhs. 
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>What are some of the good companies in the retail sector?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Future Retail Ltd., Reliance Retail Ltd., Future Lifestyle Fashions Ltd., and other well-known companies in the retail industry.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>What is the scope of doing an MBA in retail management?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Strong market position makes the retail industry one to consider for a career. It is safe to say that an MBA in Retail Management is worthwhile because retail is going to say. 
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
              Is retail management a good career in India?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              A profession in retail management is one of the fastest-growing in India in a field with a promising future. Graduates with a degree in retail management can find lucrative employment in the sector.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
