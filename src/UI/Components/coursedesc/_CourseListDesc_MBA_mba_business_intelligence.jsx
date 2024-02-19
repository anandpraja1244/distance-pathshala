import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import intelligence from "../../../assets/images/MBA/intelligence.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/msc/10th.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import firem from "../../../assets/images/msc/firem.png";
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
        Online & Distance MBA In Business Intelligence & AI colleges in India | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in Business Intelligence & AI distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA In Business Intelligence & AI colleges" />
      </Helmet>

      {/* <h1>Finance Management MARKET not</h1> */}

      <Searchform />
      <img src={intelligence} alt="MBA in Business Intelligence & AI Distance University" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <p>This particular specialization of Online MBA Degree Programs aims to provide a thorough examination of the previous domains. Visual analytics, raw language processing, machine learning, deep education, business applications of AI, and other artificial intelligence and industry intelligence components are covered in the program. To analyze raw data, recognize hidden patterns, and visually report the details, master strong AI tools, and languages. This 2-year program helps pupils in gaining in-depth knowledge of AI skills via various subjects in 4 different semesters.</p>
            <h3>Why should you choose an online and distance MBA in Business Intelligence & AI?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            As there is an innumerous range of subjects that can be proposed online and a distance MBA in Business Intelligence & AI whose value is the same as a regular offline degree. For a chance, if you are unable to take the regular degree then this is the best way of attending an online & distance degree in MBA in Business Intelligence & AI is such a wonderful opportunity. Countless universities are offering this course from a distance mode along with the fundamental help and study materials. The students are free to pick their subjects as per their interests and professional path
            </p>
          </div>

          <div className="section">
            <h3>Explore Career Options in Online & Distance MBA in Business Intelligence & AI </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Online and Distance MBA in Business Intelligence and AI is a professional degree course that helps students in getting used to business & artificial intelligence managerial-level skills. Students with an online MBA in Business Intelligence & AI can apply for multiple job positions.
            </p>
          </div>

          {/* <div className="section">
            <h3>Earn a High Salary </h3>
            <p>
              Using the knowledge you acquire from this degree, you might
              increase your wage. Individuals will ultimately be capable of
              working as brand managers, product managers, sales executives,
              merchandisers, etc. The student would be able to land the best job
              with fantastic benefits after completing the program.
            </p>
          </div> */}
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
            The candidates must keep eligibility criteria in regard before involving in admission to the online & distance MBA in Business Intelligence & AI. These are the subsequent eligibility criteria for admission in the online and distance MBA in Business <br/> Intelligence & AI :
            </p>
            <li>The candidates must have a bachelor's degree from a recognized university.

</li>
            <li>Also, the aggregate ratio in graduation must be at least 50%. </li>
            <li>The duration of this online MBA in Business Intelligence & AI is 2 years and the curriculum of the program is bifurcated into 4 equal semesters with a duration of 6 months each.  </li>
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

                <br></br>Business Intelligence & AI
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
            Allow us to give you details in semester-wise format for the subjects
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Principles of Economics & Markets</li>
                    <li>Managerial Effectiveness & Ethics </li>
                    <li>Accounting & Finance </li>
                    <li>Organizational Behavior & Human Resources Management</li>
                    <li>Quantitative Techniques & Analytics </li>
                    {/* <li>Information Systems for Managers</li> */}
          
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li> Entrepreneurship    </li>
                    <li> Marketing Management & Research </li>
                    <li> Analytics Language for Managers</li>
                    <li> DBMS for Managers</li>
                    <li>Mathematical Foundation for Machine Learning </li>
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
                    <li>Business Environment & Strategy </li>
                    <li>Operations Management </li>

                    <li>Data Analytics and Storytelling using Tableau and Excel</li>
                    <li>Machine Learning & AI</li>
                    <li>Introduction to Deep Learning</li>
                    <li>Open Elective</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>NLP Fundamentals for AI  </li>
                    <li>Artificial Intelligence and Deep Learning</li>
                    <li>Analytics in Industry- Ecommerce, Healthcare and BFSI</li>
                    <li>Application of AI-Speech, Text and Image Processing </li>
                    <li>Cross-functional Elective</li>
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
            Choosing the right college for an online and distance MBA in Business Intelligence and AI is very vital. The right Business Intelligence and AI university have a great impact on the quality of education you get. Some of the issues to keep in the sense while making the right pick are as follows:
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
            There is an overload of job opportunities available after the fulfillment of this program and Students can apply for job positions like: 
            </p>

            <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div>
             {/* <div className="section mt-1" id="Semester">
              <div className="container p-0">
                <div className="row">
                  <div className="col-md-4">
                    <ul className="p-0 ">
                      <li > Business Application Developer </li>
                      <li className="mt-2">  Business & Engineer Manager</li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="p-0 ">
                      <li >	 Project Manager </li>
                      <li className="mt-2">......</li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="p-0 ">
                      <li> Business Consultant </li>
                      <li className="mt-2"> .......</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="section pt-4">
            <h3>Top Hiring Firms</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            {/* <p>
            There is an overload of job opportunities available after the fulfillment of this program and Students can apply for job positions like: 
            </p> */}

            <div className="container text-center mt-4">
              <img src={firem} className="img-fluid" alt="Hrm page image" />
            </div>
          </div>
          <div className="section">
            <h3>Conclusion</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            The opportunities are piled up for you after completion of your online & distance MBA in Business Intelligence and AI. You can choose from any university as per your appeals and needs as there are variably providing the course. You have the option to follow the course with comfort in your home and still while balancing your life duties.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Business Intelligence & AI FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
              What is the time of an online MBA in Business Intelligence and AI?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The span of an online and distance MBA in Business Intelligence and AI is 2 years syllabus is divided into 4 semesters.
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
              <h5>What are the eligibility measures to apply for an online MBA in Business Intelligence and AI?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The candidate is required to have a bachelor's degree from an acknowledged university.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>What is the scope of an online MBA in Business Intelligence and AI?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Students can advance to managerial-level positions in the IT sector after finishing this program.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
              Is MBA in artificial intelligence good?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              An MBA in Artificial Intelligence is one of the most widespread courses among students after completing their graduation. It is a special course that instructs business management with Artificial Intelligence. After completion of an MBA in Artificial Intelligence, graduates will have better career options and growth.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className="mt-2">
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
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
