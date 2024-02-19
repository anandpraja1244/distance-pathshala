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
import security from "../../../assets/images/MCA/security.png";
import Mr_management from "../../../assets/images/MCA/cyber.jpg"; 
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
       {/* <div className="Artificial py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mt-3">
              <h1 className="text-white Artificialh1">
              Why should you choose MCA in Cyber Security?
                
              </h1>
              <span className="m-0 p-0">
              <img src={linepg} className="img-fluid" alt="Hrm page image" />
            </span>
              <p className="text-white Artificialp mb-2">
              If students desire a flexible schedule, inexpensive standards, and global networking, they should apply to this program. It's a course with many options and an actual degree. You may study at your speed with the help of the course's straightforward study plan and pre-recorded online lessons. Graduates of a program who are successful may be able to get jobs at some famous businesses.
              </p>
            </div>
            <div className="col-md-4">
      <img src={security} alt="hr Management" className="w-100" />
              
            </div>
          </div>
        </div>
      </div>  */}
        <img src={Mr_management} alt="hr Management" className="w-100" />



      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>
            Examine Profession Opportunities
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Candidates may learn about a range of exciting business topics in this course. This course's goal is to assist you in acquiring the required skill set. Opportunities exist in fields including network and database management, electronics, mobile and system technologies, statistics, law, cloud computing, hacking, and java programming, among others. 
            </p>
          </div>
          <div className="section">
            <h3>Earn a High Salary</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            You might raise your salary by using the information you gain from this degree. Candidates will be qualified to hold jobs as cyber security technicians, administrators, information security analysts, etc. after completion.
After finishing the program, the student would be able to obtain the greatest job with excellent perks.
            </p>
          </div>
          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Learning curriculum with up to four-month semesters. Before you may register for enrollment, you must meet several requirements. The following stages must be completed to be admitted to the MCA in Cyber Security program:
            </p>
          </div>

          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The minimum duration of M. Sc in artificial intelligence and
              machine learning is a 2 years course that is divided into 8
              quarters. The maximum duration of this course is 4 years and
              students will get additional 2 years to pass all the exams. To
              apply for this course, there is no age limit for the candidates.
            </p>
          <img src={AdmissionProcedure} alt="admin" className="w-100 mt-5" />
          
          <img src={elegibilty} alt="admin" className="w-100 mt-5" />
           <div className="container py-3 text-center">
            <p>Here is a common procedure to take admission in the distance MCA in <br></br>Cyber Security.</p>
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
            The Online and Distance MCA in Cyber Security will also provide instruction in the study of the following subjects at the Postgraduate Level: Network and Database, Electronics, Mobile and System Technologies, Statistics, Laws, Cloud Computing, Hacking, Java Programming, and Mathematics. 
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>
                	 Mathematical Foundation for Computer Application
                    </li>
                    <li>	 Data Communication and Computer Networks</li>
                    <li>
                 Data Structures with Algorithms	
                    </li>
                    <li>
                 Operating System and Unix Shell Programming
                    </li>
                    <li>
                Computer Organization and Architecture
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li> Cyber Laws and Ethics</li>
                    <li>
                     Fundamentals of Cloud Computing
                    </li>
                    <li> Design  and Analysis in Algorithm</li>
                    <li> Cyber Security: Concepts and Practices</li>
                    <li>  Relational Database</li>
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
                    <li>	 Open Electives Course</li>
                    <li>	 Application Development Using Python</li>
                    <li> 	 Fundamentals of Cloud Security</li>
                    <li>	 Network and System Security</li>
                    <li>	 Advanced Web Technologies</li>
                    <li>	 Cryptography</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>	 Penetration Testing</li>
                    <li>	 Vulnerability Analysis</li>
                    <li>	 Cross-Functional Electives</li>
                    <li>	 Defensive Cyber Security Technologies</li>
                    <li> 	 Cyber Threat Intelligence</li>
                    <li> Project</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 5</p>
                  <ul className="p-0 mt-1">
                    <li>Mathematical Analysis for Data Science</li>
                    <li>Advanced Mathematical Analysis for Data Science</li>
                    <li>
                      Computer Vision Fundamentals and Deep Learning
                      Applications -1
                    </li>
                    <li>Business Law and Ethics</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back">Semester 6</p>
                  <ul className="p-0 mt-1">
                    <li>
                      Computer Vision Fundamentals and deep learning
                      fundamentals - 2
                    </li>
                    <li>
                      Text Mining and Natural Language Processing using Deep
                      Learning
                    </li>
                    <li>Quantitative Research Methods</li>
                    <li>Data Engineering-2</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Quarter 7</p>
                  <ul className="p-0 mt-1">
                    <li>ML Algorithm Development Bootcamp</li>
                    <li>Masters Dissertation</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back">Quarter 8</p>
                  <ul className="p-0 mt-1">
                    <li>Masters Dissertation</li>
                    <li>Statistics and Probability in Decision Modeling-2</li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}

          <div className="section">
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            If you wish to pursue an MCA, you must choose the correct college. Keep the following things in mind when selecting the best institution
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
            Graduates of this online MCA in Cyber Security program are qualified to apply for positions as chief information security officers (CISO), computer network architects, computer information systems managers, cyber security directors, and cyber security analysts.
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
            This discipline is offered by several universities. Candidates for this kind of online MCA in Cyber Security through distance learning are advised to have a professional goal in abilities related to networking, operating systems, management systems, and programming languages.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Cyber Security FAQ                    </h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>What is the course duration of Online and Distance MCA in Cyber Security?</h5>
            </Accordion.Header>
            <Accordion.Body>
         <p>The Online and Distance MCA in Cyber Security program lasts two years and consists of four semesters.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
       What is MCA or Master of Computer Application known as?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
  <p>A professional degree in computer science is known as a master of computer applications, or MCA. It is a professional post-graduate degree program that lasts two years. students who have a strong desire to study computer expertise, knowledge (both theoretical and practical), and various tools. all designed to create computer software and apps that are more effective and quick.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What career opportunities are associated with online and distance MCA?   </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Online and distant MCA courses will teach students how to create better software and computer applications. With MCA, there are several job alternatives, and students may find excellent work chances in prestigious IT organizations, multinational corporations, and consulting firms
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              Is Cyber Security a good career?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Of course, it is! This line of work is in the national and international security's crime and cyber division. It controls, defends against cyberattacks, and secures the whole digital universe. An MCA in Cyber Security can apply for several employment chances in various private as well as governmental sectors.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the passing percentage for this Online and Distance MCA in Cyber Security?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              To pass the whole MCA course, a student must get a 5.5 SGPA (more than 50%) in aggregate marks.
              </p>
            </Accordion.Body>
          </Accordion.Item>
  
        </Accordion>
      </div>
    </>
  );
}
