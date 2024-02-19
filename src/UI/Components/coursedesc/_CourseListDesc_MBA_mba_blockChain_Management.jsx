import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import blockchain from "../../../assets/images/MBA/blockchain.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/msc/10th.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import firem3 from "../../../assets/images/msc/firem3.png";
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
        Online & Distance MBA In Blockchain Management colleges in India | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in Blockchain Management distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA In Blockchain Management colleges" />
      </Helmet>

      {/* <h1>Finance Management MARKET not</h1> */}

      <Searchform />
      <img src={blockchain} alt="MBA in Blockchain Management Distance colleges" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose an online & distance MBA in Blockchain Management?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            As there is a numerous range of subjects that can be proposed online and a distance MBA in Blockchain Management whose value is the same as a regular offline degree. For a chance, if you are unable to take the normal degree then this is the best way of attending an online & distance degree in MBA in Blockchain Management is such a fantastic opportunity. Innumerable universities are offering this course from a distance online mode along with the essential help and study materials. The students are free to pick their subjects as per their interests and professional path.
            </p>
          </div>

          <div className="section">
            <h3>Explore Career Options </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            The opportunities are endless. The course prepares the students for managing top activities and functionalities of the business. Audit and assurance, corporate reporting, financial management, tax, governance, and ethical considerations, among others. On completing the course,career opportunities will be higher and the students will get wider areas to explore. 
            </p>
          </div>

          {/* <div className="section">
            <h3>Earn a High Salary </h3>
            <p>
            International Financial management is one of the most important factors in the business and students after graduation can easily bag a job with a high salary package.Students can have salary packages as high as 4LPA to 10 LPA.
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
                The candidates must keep eligibility criteria in regard to getting involved in admission to the online & distance MBA in Blockchain Management. These are the subsequent eligibility criteria for admission in the online and distance MBA in Blockchain Management:
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
              <br></br>Blockchain Management
              </p>
              <img src={StepA} alt="admin" className="mw-100 mt-5" />
              <img src={StepB} alt="admin" className=" w-100 mt-5" />
            </div>
          </div>

          <div className="section">
            <h3>Course Outline </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
            Allow us to give you details in semester-wise format for the subjects:
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>	 Business Communication  </li>
                    <li>Management Accounting </li>
                    <li>		 Managerial Economics  </li>
                    <li>	 Organizational Behavior </li>
                    <li>	 Principles & Practices of Management</li>
                   <li>	 Research Methodology</li> 
                   <li>	 ----</li> 
          
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li> Entrepreneurship Development  </li>
                    <li> Financial Management </li>
                    <li> Human Resource Management </li>
                    <li> Management Information System </li>
                    <li> Marketing Management  </li>
                    <li> Operations Management </li>
                    <li> Strategic Management & Business Policy    </li>
                 
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
                    <li>	 Basics of Blockchain Technology  </li>
                    <li>	 Blockchain and FinTech</li>

                    <li> 	 	 Blockchain Technology and Management </li>
                    <li>	 Cloud Infrastructure and Services </li>
                    <li> 	 	 Cryptography and Information Security  </li>
                    <li> Statistics & Quantitative Techniques</li>
                    <li>	 Elective Subject - I</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li> Design and Development of Blockchain Applications  </li>
                    <li>  Enterprise Blockchain Applications & Hyperledger </li>
                    <li>  Business Ethics & Corporate Governance  </li>
                    <li> 	  Elective Subject - II</li>
                    <li> Project </li>
                    <li>----</li>
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
            Choosing the right college for an online and distance MBA in Blockchain Management is very vital. The right MBA in Blockchain Management University has a great impact on the quality of education you get. Some of the issues to keep in the sense while making the right pick are as follows:
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
            Blockchain technology is like an electronic storage database of digital details. With the rapid rise of cryptocurrencies like Bitcoin, Stellar, Dogecoin, etc, Blockchain technologies have become even more significant to maintain safety and decentralized dealing records. 
</p>
<p>Blockchain is quite meaningful from a future point of view, hence, corporations are looking for professionals who can efficiently operate their external and internal resources while eradicating transaction expenditures. Therefore, a management degree in Blockchain is quite a good career option. 
</p>
<p>After finishing your online MBA in Blockchain Management, you can apply for the subsequent jobs: 
</p>

            <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div>
          </div>
          <div className="section pt-4">
            <h3>Best Hiring Firms</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            {/* <p>
            There is an overload of job opportunities available after the fulfillment of this program and Students can apply for job positions like: 
            </p> */}

            <div className="container text-center mt-4">
              <img src={firem3} className="img-fluid" alt="Hrm page image" />
            </div>
          </div>
          <div className="section">
            <h3>Conclusion</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            The opportunities are stacked up for you after completion of your online & distance MBA in Blockchain Management. You can choose from any university as per your requests and needs as they variably provide the course. You have the option to follow the course comfortably in your home while still balancing your life duties.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Blockchain Management FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
              Is Blockchain specialization open in online MBA degree programs?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, many universities are now considering this online MBA program in the Blockchain specialization. Presently, D.Y.Patil University is offering the online MBA in Blockchain Management program
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>What are the eligibility criteria for admission to an online MBA in Blockchain Management course?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              You must have finished your undergraduate degree in any domain with at least 50% marks from an acknowledged university. Experts working in relevant enterprises are also eligible to apply for this course.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>What is the duration of an online MBA in Blockchain Management course?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The period of the online/distance MBA in Blockchain Management course is 2 years (4 semesters) but the students have the flexibility to finish the course in a maximum of 4 years.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>Which jobs can I get after getting an online MBA in Blockchain Management degree?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              After seeking the online/distance MBA in Blockchain Management degree, you will be eligible for so many jobs like- Blockchain Solution Architect, Cryptocurrency Community Manager, Product Manager, Technology Architect, and Analyst Research Manager.       </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the fee for an online MBA in Blockchain Management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The average total fee for the MBA in Blockchain Management study is between INR 1.5 lac to INR 2.5 lac
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
