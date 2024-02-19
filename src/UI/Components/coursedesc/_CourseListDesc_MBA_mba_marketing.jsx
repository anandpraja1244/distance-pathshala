import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import market_manage from "../../../assets/images/MBA/market-manage.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import course from "../../../assets/images/MBA/Marketing/course.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MBA/Marketing/Career.svg";
import Accordion from "react-bootstrap/Accordion";
import Content from "../../../assets/images/process/content.png";
import Rankings from "../../../assets/images/process/rankings.png";
import Structure from "../../../assets/images/process/structure.png";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
      <title>
        Online & Distance MBA In  Marketing Management colleges in India | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in  Marketing Management distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA In  Marketing Management  colleges" />
      </Helmet>

      {/* <h1>MARKETMANAGE</h1> */}

      <Searchform />
      <img src={market_manage} alt="hr Management" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose MBA in Marketing Management? </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Online MBA in Marketing Management provides numerous opportunities to students opting it. The course will provide students with lessons on marketing concepts like sales, promotions, leadership skills, and other management aspects. The course will help individuals to attain high positions in top notch companies like amazon, flipkart, ITC, etc. Throughout the sessions the students will learn the latest and specialised techniques and marketing concepts. The course is in high demand and organisations are in need of skilled professionals.
            </p>
          </div>

          <div className="section">
            <h3>Career Options</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            The MBA in Marketing Management adds up more job opportunities for students. They can apply for jobs with high salary like finance analyst, business manager, public relations manager, marketing, analyst, brand manager and many more.
            </p>
          </div>

          <div className="section">
            <h3>Earn a High Salary </h3> 
        
            <p>
            The MBA in Marketing Management adds up more job opportunities for students. They can apply for jobs with high salary like finance analyst, business manager, public relations manager, marketing, analyst, brand manager and many more.
            </p>
          </div>

          <div className="section">
            {/* <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The minimum duration of EMBA in marketing course is 15 months and
              divided into 5 terms. Candidates with a bachelor’s degree and at
              least two years of work experience can apply for this programme.
              There is no age limit for applying for this course.
            </p> */}
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
                     <br></br>Marketing Management
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
            Advertising management, digital marketing, service marketing, consumer behaviour, business developing skills, etc are some of the main subjects students will get to know about and learn various concepts related to them. These subjects gives you every bit of knowledge regarding marketing management.
Please review the following subjects you will learn in your lessons in 1st and 2nd year of the course.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li> Principle and Practice of Management</li>
                    <li> Management Economics</li>
                    <li> Organizational Behaviour</li>
                    <li> Business Law</li>
                    <li> Management Accounting</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Production Management</li>
                    <li>Financial Management</li>
                    <li>Human Resource Management</li>
                    <li>Marketing Management</li>
                    <li>Management Information system</li>
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
                    <li>Brand Management</li>
                    <li>Consumer Behaviour</li>
                    <li>Sales Management</li>
                    <li>International Marketing</li>
                    {/* <li>Marketing in a digital world</li>
                    <li>Marketing Research</li>
                    <li>Sales Management</li>
                    <li> Strategic Brand Management</li> */}
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Services Marketing</li>
                    <li>Digital Marketing</li>
                    <li>Research Methodology</li>
                    <li>Projects</li>
                    {/* <li>HR Analytics (Elective)</li>
                    <li>----</li>
                    <li>-----</li>
                    <li>-----</li> */}
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
            One of the most difficult and important part of getting admission is choosing a right university. Please review followings before enrolment-
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
            <h3>Top online and distance MBA in Marketing Management Colleges in India</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Universities like NMIMS, Amity, Chandigarh, Manipal, Jain online can provide the best course of MBA in Marketing Management. These universities provide students with specialized skills and enable them to secure placements in companies.
            </p>

            {/* <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div> */}
          </div>
          <div className="section">
            <h3>Summing it up</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Online and Distance Hospitality Management provides you with ample of opportunities and develops individual’s skills. If you want to have a perfect job for yourself with good range of average salary you should definitely choose this course. It will surely help you to score good career growth.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Marketing Management FAQ</h1>
          <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
          <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
              What type of interview questions are asked in MBA in Marketing Management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Questions like what is marketing, most important thing about sale and promotion, tell us about PLC (Product Life Cycle), etc are asked in interview which can be answered easily if your concepts are clear and you really work hard.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>What does MBA in marketing need?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Any bachelor’s degree, with 3-5 years of experience, GMAT exam score is needed to be eligible for MBA in Marketing Management.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              Who is known as the father of Marketing Management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              According to the famous book on Marketing Management Philip Kotler is known as founding father of Marketing Management
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>What is the average cost of online and distance MBA in Marketing?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The cost of Marketing management ranges from 3 Lac to 10 Lac. However, there is good scope of scholarships provided by various universities.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
              Is doing MBA enough for a good lifestyle?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The fee structures are different in different universities. The
                approximate amount of fee is about INR 50,000 - 4,00,00 per
                year.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className="mt-2">
            <Accordion.Header>
              <h5>
              Are there entrance exams for the MBA in Marketing Management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The cost of Marketing management ranges from 3 Lac to 10 Lac. However, there is good scope of scholarships provided by various universities.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
