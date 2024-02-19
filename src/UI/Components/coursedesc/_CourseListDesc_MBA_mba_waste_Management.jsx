import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import waste from "../../../assets/images/MBA/waste.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/msc/10th.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import block_firem from "../../../assets/images/msc/block_firem.png";
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
        Online & Distance MBA In Waste Management colleges in India | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in Waste Management distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA In Waste Management colleges" />
      </Helmet>

      {/* <h1>Finance Management MARKET not</h1> */}

      <Searchform />
      <img src={waste} alt="MBA in Waste Management Distance University" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose an online and distance MBA in Waste Management?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            As there is a numerous range of subjects that can be proposed online and a distance MBA in Waste Management whose value is the same as a regular offline degree. For a chance, if you are unable to take the regular degree then this is the best way of attending an online & distance degree in MBA in Waste Management is such a wonderful opportunity. Countless universities are offering this course from a distance mode along with the fundamental help and study materials. The students are free to pick their subjects as per their interests and professional path.
            </p>
          </div>

          <div className="section">
            <h3>Explore Career Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            India is a large country and the issue of waste management is even more major. Hence, the government is a lot more concentrated on waste management which has led to the emergence of multiple jobs in the field. The scope of waste management is definitely bright in India and is a great job option.
 </p>
            <p>With the online and distance MBA in Waste Management degree, you are qualified for jobs in government organizations, environmental agencies, NGOs, Non-profit preservation projects, and industrial organizations. Since the laws regarding waste management are growing strict, industrial waste management is a big problem that big enterprises face, and hence they hire management students who can help them solve such situations. </p>
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
              The candidates must keep eligibility criteria regard before involving in admitted to the online & distance MBA in Waste Management. These are the subsequent eligibility criteria for admission to the online and distance MBA in Waste Management.
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
                 <br></br>Waste Management
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
 <p> The first two semesters of the online and distance MBA in Waste Management course will include subjects of general management while the last two semesters include subjects of waste management. The detailed syllabus is described in the table below:</p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Corporate Finance Essentials   </li>
                    <li>Economics for Decision makers  </li>
                    <li>Quantitative Techniques for Management </li>
                    <li>Strategic Human Resource Management </li>
                    <li>----</li>
                   {/* <li>	 Research Methodology</li> 
                   <li>	 ----</li>  */}
          
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Creativity & Entrepreneurship  </li>
                    <li> Market Research </li>
                    <li>Marketing Management</li>
                    <li>Professional Competency </li>
                    <li> Strategic Management </li>
                    {/* <li> Operations Management </li>
                    <li> Strategic Management & Business Policy    </li> */}
                 
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
                    <li> Environment Impact </li>
                    <li>	 Regulatory Framework </li>

                    <li> Waste Management Logistics </li>
                    <li> Export Procedures </li>
                    
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                  <li>  E-Waste Management  </li>
                    <li> Reclamation, Remediation, and Capping </li>
                    <li>Dissertation</li>
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
            Choosing the right college for an online and distance MBA in Waste Management is very vital. Everything depends upon your choice of university. Some of the issues to keep in the sense while making the right pick are as follows:
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
            {/* <p>
            Blockchain technology is like an electronic storage database of digital details. With the rapid rise of cryptocurrencies like Bitcoin, Stellar, Dogecoin, etc, Blockchain technologies have become even more significant to maintain safety and decentralized dealing records. 
</p>
<p>Blockchain is quite meaningful from a future point of view, hence, corporations are looking for professionals who can efficiently operate their external and internal resources while eradicating transaction expenditures. Therefore, a management degree in Blockchain is quite a good career option. 
</p>
<p>After finishing your online MBA in Blockchain Management, you can apply for the subsequent jobs: 
</p> */}

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
              <img src={block_firem} className="img-fluid" alt="Hrm page image" />
            </div>
          </div>
          <div className="section">
            <h3>Conclusion</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            The opportunities are lining up for you after completion of your online & distance MBA in Waste Management. You can choose from any university as per your appeals and needs as they are variably providing the course. You have the option to follow the course in comfort in your home and still balance your life duties.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Waste Management FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
              What is the eligibility requirement for an online/distance MBA in Banking and Insurance?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p> The minimum eligibility measure for an online/distance MBA in Banking and Insurance is a bachelor’s degree in any specialization from a recognized college with a minimum of 50% marks.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>What is the fee for the online MBA in Waste Management?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The average fee for the online MBA in Waste Management is around INR 1.8 lac for the complete course.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>What is the duration of an online MBA in Waste Management course?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The duration of the online MBA in Waste Management is 2 years, which is split equally into 4 semesters.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>What is the future scope after an online MBA in Waste Management?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The government of India is a lot more focused on waste management which has led to the emergence of countless jobs in the field. The scope of waste management is certainly bright in India and is a great employment option. </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
              Is there an entrance exam for admission in the online and distance MBA in Waste Management course?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              There is usually no access test for admission in the online and distance MBA in Waste Management. However, there might be few universities that operate their own entrance tests owing to their entrance policies.
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
