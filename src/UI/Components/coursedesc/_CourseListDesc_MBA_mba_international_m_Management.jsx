import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import inter_marketing from "../../../assets/images/MBA/inter_marketing.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/msc/10th.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import new_firem from "../../../assets/images/msc/firem2.png";
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
        Distance/Correspondence MBA in  International Marketing Management Education in India | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Advance your career by applying for Online & Distance MBA in  International Marketing Management correspondence College/universities in India at Distance Pathshala now!!!"
        />
        <meta name="keywords" content="Online & Distance MBA in  International Marketing Management Education Learning" />
      </Helmet>

      {/* <h1>Finance Management MARKET not</h1> */}

      <Searchform />
      <img src={inter_marketing} alt="Online & Distance MBA in  International Marketing Management Education Learning" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose this course?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            The online course of MBA in International Marketing lays multiple opportunities for students. The course is best suited for the individuals who are interested to have skills and knowledge of marketing field and are willing to develop a creative career in future. The course is designed in such a way that throughout the lessons students will get to learn about the different topics associated with marketing such as planning, development, promoting goods and services internationally, relations with consumers and distribution. This course will introduce students with effective set of skills related to global marketing, money flow at national as well as international level, tax imposed by government, import and export duties and many more. Students should opt. this course if they want to have in-depth as wells wish to develop creative skills. The programme will help students to learn advanced marketing language, international marketing strategies, and multicultural brand management. This is one of the best and popular course which is in great demand due to large expansion of trade over world. Students should opt. this course if they want to grow at multinational level through marketing.
            </p>
          </div>

          <div className="section">
            <h3>Eligibility Criteria</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
           <li> Bachelor’s degree from a recognized university with 50% or more.</li>
           <li> It will be good if you have bachelor’s degree in international marketing or finance. </li>
           <li>  Generally no entrance exam is required in distance education. </li>
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
         <br></br>International Marketing
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
            The following are the few major subjects you will get to learn in this MBA in International Marketing programme. It is a course in which students will develop not only financial knowledge but also creative skills which enable candidates to achieve a creative career.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">1st Year</p>
                  <ul className="p-0 mt-1">
                    <li> Entrepreneurship </li>
                    <li> Principles of Economics</li>
                    <li>  Digital Marketing Strategy and Management </li>
                    <li>Accounting </li>
                    <li> Organizational Behaviour </li>
                     <li>  Quantitative Techniques </li> 
                     <li> Innovation in Global Trade</li> 
          
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li> Business Environment  </li>
                    <li>  Brand Management </li>
                    <li> Resource Management</li>
                    <li>  Digital Marketing and Communication</li>
                    <li>  Finance Analytics </li>
                    <li>	 Consumer’s Relation</li>
                    <li>	 Entrepreneurial Change </li>
                 
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="section mt-1" id="Semester">
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
          </div> */}

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

        
          <div className="section pt-4">
            <h3>Career Advancements in International Marketing </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Online and distance learning in International Marketing Management offers great career opportunities in private as well as government companies. For students who are MBA (International Marketing) graduates there are ample career advancements in different areas like
            </p>

            <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div>
            <p>Under proper guidance and complete support of senior educationalist, students can do better in this field in the upcoming years and will secure good position in the companies with a good pay range.</p>
          </div>
          <div className="section pt-4">
            <h3>Top Hiring Firms </h3>
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
          <div className="section pt-4">
            <h3>Earn High Salary</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            MBA in International Marketing Management is going to be one of the fantastic course to pursue. Many Multinational Companies also known as MNC’s need more professionals in this field so that they can help them to grow and they themselves can grow simultaneously. An MBA (International Marketing/ Management) graduate student can earn a good pay range. Entry-level salary starts from more than 7,00,000 per year. On an average individual can earn 8-10LPA depending upon their work. And in fact, most experienced workers sometimes make upto 20 Lac Per year.
            </p>

            {/* <div className="container text-center mt-4">
              <img src={new_firem} className="img-fluid" alt="Hrm page image" />
            </div> */}
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
          <div className="section">
            <h3>Conclusion</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            MBA in International Marketing Management presents great options that will lead you to secure good position in an international marketing companies at multinational level. This management programme is full of entrepreneurship and global marketing trends. The course provides a great path to students who want to have in-depth knowledge of marketing world. Students will not regret after choosing this course as their career. 
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">International Marketing Management FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
              Is experience needed for this course?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              No, generally no experience is required. However sometimes universities ask for a preferred experience of 1-2 years. Otherwise no such thing is mandatory for enrolling yourself in this course.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>Can I do MBA in International Marketing Management?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes you can do, but only after graduation. It is a course of 2 years in which you will get to know about global marketing management at national as well as international level and also their impacts on financial domains of a country.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>Is MBA in International Marketing Management valuable?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, pursuing MBA in International Marketing Management is worth doing only if you really work hard and studied throughout the course.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>Is online and regular learning of Master’s of Business Administration in International Marketing is of equal value?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, there is no difference between them. In fact, in today’s world full of competition online education is more preferable by students because they can pursue it even while doing any other job.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          {/* <Accordion.Item eventKey="4" className="mt-2">
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
