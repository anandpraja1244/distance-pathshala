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
import Computers from '../../../assets/images/mTech/Computers.png';
import linepg from '../../../assets/images/msc/Linepg.png';
import Accordion from "react-bootstrap/Accordion";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
        M.Tech For Working Professionals In Computer Science | Distance Pathshala
        </title>
        <meta
          name="description"
          content="M.Tech For Working Professionals In Computer Science degree online and distance by Distance Pathshala, The course curriculum includes programming languages"
        />
        <meta
          name="keywords"
          content=" Professionals In Computer Science"
        />
      </Helmet>
      <Searchform />
      <img src={Computers} alt=" M.Tech  In Computer Science  " className="w-100" /> 


      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>
            Why should you choose M.Tech For Working Professionals In Computer Science?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            There are numerous opportunities for people with an M.Tech in Computer Science and Engineering to run for office. Both
public and private companies offer job opportunities to candidates. There are numerous openings for candidates in the
software industry. Candidates may have experience in a variety of areas of the software industry.</p>
          </div>
          <div className="section">
            <h3>Explore Advanced Career Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            After completing their degree program, interested candidates can search for jobs in both the public and private sectors. This
program prepares students for careers as web developers, computer science engineers, technical analysts, and various other
occupations.
            </p>
          </div>
          {/* <div className="section">
            <h3>This course helps you make a good living</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              It is one of the fastest-growing technologies in the job market.
              Nowadays, these courses are in high demand and the average annual
              wage for an entry-level AI engineer will be high. AI and Machine
              learning engineer salaries will be considerably greater than the
              average salary for any other engineering graduate.
            </p>
          </div> */}
          <div className="section">
            <h3>Earn a High Salary</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            A time will come when a potential worker is qualified for employment in the computer science sector. As a result of
completing the course, students can take advantage of wonderful and fascinating opportunities, including high-level
employment. Students experience extraordinary growth after receiving their M.Tech.
            </p>
          </div>

          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Candidates for the M.Tech. for Working Professionals in Computer Science program must have earned a minimum
percentile on their B.Tech. or BE degree. It will take two years to finish the project. Before applying for enrollment, carefully
read the important information.
            </p>
          <img src={AdmissionProcedure} alt="admin" className="w-100 mt-5" />
          
          <img src={elegibilty} alt="admin" className="w-100 mt-5" />
           <div className="container py-3 text-center">
            <p>Here is a common procedure to take admission in the distance M.Tech In  <br></br>Computer Science </p>
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
            Each institute has its requirements for the M Tech in Computer Science program. Additionally, a wide range of electives is
offered. The common and general subjects are covered in the first three semesters, while the electives and project work the
candidate has chosen are covered in the fourth semester. The following are the most common subjects taught in most
colleges.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>
                    Design and Analysis of Algorithms
                    </li>
                    <li> Advanced Computer Architecture</li>
                    <li>
                    Object-Oriented Data Structures
                    </li>
                    <li>
                    Discrete Mathematics Structure
                    </li>
                    <li>
                    Elective 1
                    </li>
                   
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Computer Network</li>
                    <li>
                    Operating System and System Programming
                    </li>
                    <li> Advanced Database Systems</li>
                    <li>	Elective 2</li>
                 
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
                    <li>VLSI Design</li>
                    <li> Object-Oriented Systems  </li>
                    <li>Principles of Programming Language</li>
                    <li> Embedded Systems</li>
                    <li>Computer Graphics</li>
                    <li>Mobile Computing</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Computational Number Theory</li>
                    <li>Theoretical Computer Science and Automation</li>
                    <li>Data Warehousing and Data Mining</li>
                    <li>Specialisation Subjects</li>
                    <li>Project work</li>
                    <li>Dissertation and Viva Voce</li>
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
            Keep these things in mind when selecting the best university for your career. Online M Tech in Computer Science programs
are widely available through many universities.
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
            After completing this course, students will have various fascinating career options. There are positions available in various
fields, including databases, operating systems, cloud computing, algorithms, and networking.
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
            Many universities are offering this course. M Tech in Computer Science from an on-campus or online program is the best
choice for those seeking employment in the construction industry. Students can apply for government jobs after completing
this excellent course.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">M Tech in Computer Science Frequently Asked Questions (FAQs)</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Can I get a job after getting my M Tech for Working Professionals?</h5>
            </Accordion.Header>
            <Accordion.Body>
         <p>Yes, a wide range of career options is available to work with engineers after receiving an M.Tech.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
              Is an M Tech for Working Professionals degree genuine?</h5>
            </Accordion.Header>
            <Accordion.Body>
  <p>The UGC-DEB has given its approval to the M Tech for Working Professionals program.</p>
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the typical cost of a computer science M Tech course?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              One should prepare to spend between INR 1 lakh and INR 3 lakhs.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the age requirement to pursue an M Tech in computer science?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The minimum age requirement to pursue an M Tech is 20, but there is no upper age limit. 
              </p>
            </Accordion.Body>
          </Accordion.Item>
         
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
              What are the available job opportunities?
</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              There are many private and public sector organizations where you can work. You can find employment in numerous
software-related industries, including artificial intelligence, data analysis, cloud computing, image processing, and many
more.
              </p>
            </Accordion.Body>
          </Accordion.Item>
         
  
        </Accordion>
      </div>
    </>
  );
}
