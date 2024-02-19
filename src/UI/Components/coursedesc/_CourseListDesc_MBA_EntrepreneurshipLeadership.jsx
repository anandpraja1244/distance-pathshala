import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Hosptality from "../../../assets/images/MBA/enterpreneurship.jpg";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import course from "../../../assets/images/MBA/Datascience/M4.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MBA/FinancialMarkets/Career.svg";
import Accordion from "react-bootstrap/Accordion";

import Content from "../../../assets/images/process/content.png";
import Rankings from "../../../assets/images/process/rankings.png";
import Structure from "../../../assets/images/process/structure.png";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
      <title>
        Online & Distance MBA In Hospitality Management colleges in India | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in Hospitality Management distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA In Hospitality Management  colleges" />
      </Helmet>

      {/* <h1>international finance not</h1> */}

      <Searchform />
      <img src={Hosptality} alt="hr Management" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why Should You Choose Online and Distance MBA in Entrepreneurship & Leadership   
</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Entrepreneurship and Leadership Management is one of the most prestigious specializations of an MBA program. This course lets you understand the key concepts of running your own business. If you are someone who is not made for a 9-5 corporate job, but someone who wishes to start their own venture, then you must definitely go with an MBA in Entrepreneurship and Leadership Management. An online and distance MBA in entrepreneurship and leadership management is a boon for all budding entrepreneurs as they can practice while studying at the same time. However, this does not mean that you will not be able to get jobs after this course. In fact, this course helps you get amazing high-paying jobs of high managerial level positions in several sectors. 

            </p>
          </div>

          {/* <div className="section">
            <h3>Multiple Career Choices </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Some degrees will let you go for only a few set careers, but with
              MBA in Financial markets management, you have many career options.
              Customers can opt for a career that most suits their abilities
              based on specialization. Aspirants can work in the industry based
              on their choice, from analysts to bankers. Individuals can also
              switch industries as the basics of finance and accounting.
            </p>
          </div> */}

          {/* <div className="section">
            <h3>High Salary and Benefits</h3>
            <p>
              MBA in strategic human resource management course opens the door,
              People working in this field are some of the highest-paid
              professionals. With financial markets managements, aspirants can
              land a job that pays high. This course will get you a high salary
              and benefits package. Students will also learn how to negotiate
              for high salaries in this course. Due to this, aspirants will get
              a substantial hike from their previous salary.
            </p>
          </div> */}
          <div className="section">
            <h3>Earn a High Salary </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              In India, the average pay year differs from INR 1,50,000 to INR 20,00,000. Students after completing this course can easily grasp a perfect job with high pay for themselves.
            </p>
          </div>

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span> 
           <p>
           Following are some of the important facts about the online and distance MBA in Entrepreneurship and Leadership course which are elaborated in detail later in this article. 
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

                Here is a common procedure to take admission in the Distance MBA in <br></br> Entrepreneurship and Leadership
              </p>
              <img src={StepA} alt="admin" className="mw-100 mt-5" />
              <img src={StepB} alt="admin" className=" w-100 mt-5" />
            </div>
          </div>

          

       

          <div className="section mt-1" id="Semester">
            <div className="section">
              <h3>Course Subjects </h3>
              <span className="m-0 p-0">
                <img src={line_h} className="img-fluid" alt="Hrm page image" />
              </span>
              <p>The syllabus for the online and distance MBA in Entrepreneurship and Leadership might vary a little for different universities. However, the basic syllabus for the course is as follows: </p>
            </div>
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left sam-back">First Year</p>
                  <ul className="p-0 mt-1">
                    <li> Principles of Economics & Markets </li>
                    <li> Managerial Effectiveness & Ethics </li>
                    <li>Organizational Behavior & Human Resources Management </li>
                    <li>Entrepreneurship </li>
                    <li>Spreadsheet Modeling </li>
                    <li>Business Environment & Strategy </li>
                    <li>Entrepreneurial Innovation </li>
                    <li> Operations Management </li>
                    <li> Business Plans & Lean Start-up Practices  </li>
                    <li> Platforms & Ecosystems  </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Second Year</p>
                  <ul className="p-0 mt-1">
                    <li>
                    Accounting & Finance 
                    </li>
                    <li> Quantitative Techniques & Analytics </li>
                    <li> Marketing Management & Research </li>
                    <li>Entrepreneurial Finance</li>
                    <li> Business Communication Strategies</li>
                    <li>Corporate Strategy </li>

                    <li>    Strategic Marketing </li>
                    <li>Cross-functional Elective </li>
                    <li>Effective Leadership  </li>
                    <li>Organizational Change Management  </li>
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
              <p>Once you have shortlisted some of the universities in your mind, it is really crucial select the right one for you, the one that suits your individual needs the best. Keep in mind the following points before you choose an online and distance university for yourself:  </p>
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
            The online and distance MBA in entrepreneurship and leadership course is one of the most sought-after MBA specializations as it leads you to high-paying jobs in the corporate sector. Also, this is the ideal course if you wish to start your own business venture. The course will develop you in a way that you will be able to put into practice business, analytical, and critical skills for your business growth. 
            </p>
            <p>Following are some of the popular job roles that you can get after completing your online and distance MBA in Entrepreneurship and Leadership course: </p>

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
            If you are looking for a good jump in your career to some high-level managerial positions or if you are someone who wishes to start your own entrepreneurial journey through a business venture, then this is the most ideal course for you. The online and distance mode is extremely beneficial as you have the benefit of practicing along with studying at the same time and that too at a very pocket-friendly fee structure. 
            </p>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="text-center">
          <h1 className="Accordi">FAQs- Online and Distance MBA in Entrepreneurship & Leadership  </h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Is online MBA in entrepreneurship and leadership government approved? 
</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>Yes, the online and distance MBA in entrepreneurship and leadership is completely valid and has been approved by the government body UGC-DEB. 

</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>What is the fee for online MBA in entrepreneurship and leadership? 
</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>The average fee for the online and distance MBA in entrepreneurship and leadership lies in the range of INR 1,50,000 to 2,50,000/- for the entire course. </p>
              
      
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the duration of the online MBA in entrepreneurship and leadership? 
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>The minimum duration of the online and distance MBA in entrepreneurship and leadership is 2 years and the maximum duration is 4 years. Most online universities allow their online students these extra two years to pass any exams that are remaining to gain their degrees.  
</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              Is an online MBA in entrepreneurship and leadership valid for jobs? 

              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Absolutely, the online and distance MBA in entrepreneurship and leadership when pursued from a UGC-DEB recognized university is totally valid for jobs across all sectors. 

              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
              Which is the best college for an online MBA in entrepreneurship and leadership?  

              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Some of the top online universities in India that offer the online MBA in entrepreneurship and leadership are Amity Online University, Jain Online University, and Online Chandigarh University. 


              </p>
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </div>
      {/* <div className="container mt-2">
        <div className="text-center">
          <p className="text-dark mb-2">By clicking, you agree to our Privacy Policy, & Our Trust </p>

          <p>Distance Pathshala's mission is to provide accurate information and comparative assistance on universities and academic programs. The Distance Pathshala Site's content, which includes the words, graphics, photos, blogs, videos, university logos, and other items within (collectively, "Content"), is solely for informational purposes. The content is not meant to be a replacement for its Academia Partner's products in any way. It is not intended or intentional to infringe on intellectual property rights or related rights. Only general informational purposes are served by the information provided by Distance Pathshala on www.distancepathshala.com or any of its mobile or other applications. All content on the website and in our mobile application is accurate and presented in good faith.</p>
        </div>

      </div> */}
    </>
  );
}
