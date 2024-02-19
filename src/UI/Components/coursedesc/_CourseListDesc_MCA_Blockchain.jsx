import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Finance from "../../../assets/images/B.Com/Finance3.svg";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/msc/CareerOppor.svg";
import Rankings from "../../../assets/images/process/rankings.png";
import Commons from "../../../assets/images/B.Com/Common.svg";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";
import AdmissionProcedure from '../../../assets/images/msc/AdmissionProcedure.svg';
import elegibilty from '../../../assets/images/msc/10th.svg';
import StepB from '../../../assets/images/msc/stepA.png';
import StepA from '../../../assets/images/msc/stepB.png';
import Hr_management from '../../../assets/images/msc/machinelearning.svg';
import linepg from '../../../assets/images/msc/Linepg.png';
import Accordion from "react-bootstrap/Accordion";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          MSC In Artificial Intelligence & Machine Learning | Distance Pathshala
        </title>
        <meta
          name="description"
          content="MSC Artificial Intelligence and Machine Learning degree online and distance by Distance Pathshala, The course curriculum includes programming languages"
        />
        <meta
          name="keywords"
          content="Artificial Intelligence Distance learning"
        />
      </Helmet>
      <Searchform />
       <div className="Artificial py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mt-3">
              <h1 className="text-white Artificialh1">
              Online and Distance MCA in Blockchain
                
              </h1>
              <span className="m-0 p-0">
              <img src={linepg} className="img-fluid" alt="Hrm page image" />
            </span>
              <p className="text-white Artificialp mb-2">
              Online and Distance MCA in Blockchain is a 2-year Master's course. Students who want to excel in the field of cryptocurrency, bitcoin, data mining, Ethereum, etc. For the two years, students will go through a series of 4 semesters with 2 semesters annually. This degree focuses on enhancing students' knowledge of the entire blockchain industry. This program includes subjects like Network Security and Cryptography, Introduction to Ethereum, Linux Programming, etc. Students who want to take up this course must have a minimum of 50% in their bachelor’s degree or related course. 
              </p>
            </div>
            <div className="col-md-4">
      <img src={Hr_management} alt="hr Management" className="w-100" />
              
            </div>
          </div>
        </div>
      </div> 


      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>
            Why should you choose Online MCA in Blockchain?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            In today’s era where digital currency has taken over, choosing this course will benefit the students in many ways. Understanding the concept of cryptocurrency will enable the students to get their hands on actual industry settings with opportunities opening up wide for them. The course is carefully curated to ensure students get adequate and quality knowledge and prepare them for the real world. With intensive knowledge input and quality teaching methods, students get the best of everything. 
            </p>
          </div>
          <div className="section">
            <h3>Explore Advanced Career Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Students have numerous career opportunities after completing this course. The course can help mould the career of the graduates with top companies looking out for these professionals. The profession is in high demand with cryptocurrency taking charge in the market. Top paying jobs like Blockchain Developer,  Blockchain Quality Engineer, Project Manager, Product Manager, Legal Consultant, and Data Minerare are within the grasp of the graduates. 
            </p>
          </div>
          <div className="section">
            <h3>Earn a High Salary</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            MCA in Blockchain enables students to bag jobs with high salaries. With their profession in high demand, top companies recruit them and pay them high salaries. The salary of an MCA in Blockchain graduate in India is around INR 7,00,000 - INR 11,00,000 per annum. 
            </p>
          </div>
          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            To be able to get admitted successfully to any university, students are required to follow the admission procedures and execute the following procedures carefully. 
            </p>
          </div>

          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            {/* <p>
              The minimum duration of M. Sc in artificial intelligence and
              machine learning is a 2 years course that is divided into 8
              quarters. The maximum duration of this course is 4 years and
              students will get additional 2 years to pass all the exams. To
              apply for this course, there is no age limit for the candidates.
            </p> */}
          <img src={AdmissionProcedure} alt="admin" className="w-100 mt-5" />
          
          <img src={elegibilty} alt="admin" className="w-100 mt-5" />
           <div className="container py-3 text-center">
            <p>Here is a common procedure to take admission in the distance MCA in  <br></br>Blockchain</p>
          <img src={StepA} alt="admin" className="mw-100 mt-5" />
          <img src={StepB} alt="admin" className=" w-100 mt-5" />

           </div>
          </div>

          <div className="section">
            <h3>Course subjects</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
            For 2 years, students will study and learn various relevant subjects of the course. Each semester will consist of distinct subjects. Some of the subjects the students will study are listed below:
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>
                    Graph Theory and Combinatorics
                    </li>
                    <li>Advanced Database Management Systems</li>
                    <li>
                    Core Java
                    </li>
                    <li>
                    Advanced Software Engineering Principles
                    </li>
                    <li>
                    Professional Communication
                    </li>
                    <li>
                    ----
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li> Research Methodology</li>
                    <li>
                      Data Structures and Algorithm Design
                    </li>
                    <li> Network Security and Cryptography</li>
                    <li> Cognitive Analytics & Social Skills for Professionals</li>
                    <li>Specialization I*</li>
                    <li>Specialization II*</li>
     
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
                    <li> Cloud Infrastructure and Services</li>
                    <li> UNIX / Linux Programming</li>
                    <li> Professional Ethics</li>
                    <li> Quantitative Aptitude</li>
                    <li> Seminar (Evaluation)</li>
                    <li> Specialization III* </li>
                    <li> Specialization IV* </li>
              
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Major Project</li>
                    <li>----</li>
                    <li>----</li>
                    <li>----</li>
                    <li>----</li>
                    <li>----</li>
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
            Choosing the right university helps you be on the right track and bring you closer to your goals and ambition. Therefore, choose universities wisely and analyse carefully whether the university meets all the requirements.
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
            <h3>Course Fee Structure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Students are required to pay a requisite amount of admission fee to pursue the course. Fees may vary according to university or more of education. However, the average fee for an online MCA in Blockchain is INR 50,000 - INR 3,00,000.
            </p>

            <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div>
          </div>
          <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The duration of M. Sc in artificial intelligence and machine
              learning is 2 years. In this course, students will get an in-depth
              understanding of subjects related to artificial intelligence and
              machine learning. Here is a list of jobs that candidates from M.
              Sc in artificial intelligence and machine learning can apply for.
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
            Online MCA in Blockchain can help you polish your skills and develop you for utilising the skills in the actual workplace. Consider all the factors and other important aspects while choosing the university you want to study in. Make sure the university favours all your terms and conditions.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Blockchain FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Is MCA in Blockchain suitable for the future?</h5>
            </Accordion.Header>
            <Accordion.Body>
         <p>Cryptocurrency is in a boom and with the industry taking over the market, it is only going to keep flourishing. Students graduating from this course have wide career opportunities and earn high salary packages. </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
              Are there entrance exams for the MCA in Blockchain program?    </h5>
            </Accordion.Header>
            <Accordion.Body>
  <p>Sharda has the SUAT exam. UPES has the UPES Engineering Aptitude Test. Some universities do not require entrance exams at all. These are examinations administered by individual institutes at the state and national levels. It depends on the institute whether an entrance exam is required.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              How much does MCA in Blockchain cost?  </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The average cost of an Online MCA in Blockchain ranges from INR 50,000 - INR 3,00,000 Lakhs. However, it may vary from university to university.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              What are the career options for graduates of the Online MCA in Blockchain program? </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Opportunities are abundant for the graduates. Graduates can apply for numerous jobs in top companies in India. They can seek jobs in Banking, Financial, Healthcare, Supply Chain, etc. Jobs like Business Analyst Associate, Blockchain Developer, Blockchain Business Analyst and Blockchain Consultant are just a few of the examples the graduates can grab after graduation.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
              Are graduates of the Online MCA in Blockchain likely to make a good living?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, students graduating from this course have high potential to make a good living and set their careers. Career opportunities are wide for graduates and salaries are high in this industry. The salary of an MCA in Blockchain graduate in India is around INR 7,00,000 - INR 11,00,000 per annum. 
              </p>
            </Accordion.Body>
          </Accordion.Item>
         
  
        </Accordion>
      </div>
    </>
  );
}
