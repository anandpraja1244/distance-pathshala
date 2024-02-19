import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import research from "../../../assets/images/MBA/research.png";
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
        Online & Distance MBA In Investment Banking Equity Research Management colleges in India | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in Investment Banking Equity Research Management distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA In Investment Banking Equity Research Management colleges" />
      </Helmet>

      {/* <h1>Finance Management MARKET not</h1> */}

      <Searchform />
      <img src={research} alt="MBA in Investment Banking Equity Research Management Distance University" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose Online and Distance MBA in Investment Banking Equity Research Management?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Online and Distance MBA opens up a world of opportunities for the students. The course will teach the students the different concepts in investments banking and equity management. The course will enable students to secure top positions in companies. Online and Distance MBA teaches students the principles and techniques of how investment banking works and all about equities and shares.
            </p>
          </div>

          <div className="section">
            <h3>Explore Advanced Career Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            The opportunities are endless. The course prepares the students for managing top activities and functionalities of the business. Production, manufacturing, and e-commerce that require the movement of products, raw materials require graduates from Supply Chain Management.
            </p>
          </div>

          <div className="section">
            <h3>Earn a High Salary </h3>
            <p>
            Investment Banking and Equity management is one of the most important factors in the business and students after graduation can easily bag a job with a high salary package. After finishing the degree, the students are prepared to provide various professional investment consultation and equity research which can boost the career of the graduates. Students can have salary packages as high as 7LPA to 8 LPA.
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
            Online MBA in Investment Banking Equity Research Management requires students to complete three years of 6-month semesters through an online/distance program. Please review the details to know before enrolling.
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


                <br></br>Investment Banking Equity Research Management?
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
            The Online and Distance MBA in Investment Banking Equity Research Management prepares students for careers in business related. The course also develops their analytical skills. The MBA online course is a 2-year, 6-semester undergraduate program. The online MBA in Logistics and supply chain syllabus covers the curriculum's subjects and topics.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li> Principles of Economics and Markets </li>
                    <li> Managerial Effectiveness & Ethics </li>
                    <li> Accounting & Finance </li>
                    <li> Organizational Behaviour & HRM </li>
                    <li> Quantitative Techniques and Analytics </li>
                    {/* <li> Accounting & Finance </li> */}
                   {/* <li>Management Accounting</li>  */}
          
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Entrepreneurship </li>
                    <li> Marketing Management & Research    </li>
                    <li> Financial Analysis Landscape</li>
                    <li> Investment Banking & Financial System</li>
                    <li> Financial Statement Preparation </li>
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
                    <li> Business Environment & Strategy </li>
                    <li>	 Operations Management</li>

                    <li>Financial Statement Analysis</li>
                    <li>Introduction to Equity Research </li>
                    <li>Forecasting & Financial Modelling</li>
                    <li> Elective</li>
                    {/* <li>	 Open Elective Course</li> */}
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li> Equity & Firm Valuation</li>
                
                    <li>	 Asset Management </li>
                    <li>  Quantitative Research</li>
                    <li>  Stock Valuation </li>
                    <li>Elective </li>
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
            The most important part is choosing the most suitable and appropriate university to continue pursuing the MBA in Investment Banking Equity Research Management. Consider the following key considerations when selecting the right university.
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
            Online and Distance MBA in Investment Banking Equity Research Management will provide students with a variety of career options. Students who complete this course are eligible to apply in the field of investment banking and financial systems.
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
            <h3>Summing it up</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            You have numerous options to choose from the universities that offer this course. If you wish to receive quality education and polish your skills and develop yourself in becoming a future Investment Banking officer then you should pursue this online and distance MBA programme.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Investment Banking Equity Research Management FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
              For whom this online and distance programme is?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The online and distant MBA in investment banking and equity research management is apt for professionals who are working/ business owners (CEOs)/ entrepreneurs and for aspirants who are looking to work in firms and career in the banking field.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>What is the role of equity research in the part of investment banking?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Investment banking provides financial services to the companies willing to gather capital while equity research evaluates the assets and liabilities of firm that attracts the users/ customers of the financial reports to invest in the goods & services.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>What are the job opportunities after completing this online and distance MBA in investment banking equity research management programme?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              In order to enhance your Career, you get offers and jobs in these sectors of banking, financial services, insurance, fintech, startups, and much more. After completing the 2 year online programme you can get high salary package.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          {/* <Accordion.Item eventKey="3" className="mt-2">
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
          </Accordion.Item> */}
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
