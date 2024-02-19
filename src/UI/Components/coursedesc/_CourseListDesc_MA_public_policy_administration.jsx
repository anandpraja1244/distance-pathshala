import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import administration from "../../../assets/images/MA/administration.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import course from "../../../assets/images/MBA/HR/course.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MBA/HR/Career.svg";
import Accordion from "react-bootstrap/Accordion";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          Online & Distance MBA In HR Management colleges in India | Distance
          Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in HR Management distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA In HR Management  colleges" />
      </Helmet>

      {/* <h1>Stragic HR</h1> */}

      <Searchform />
      <img src={administration} alt="hr Management" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>
            Why Should You Choose Online and Distance MA in Public Policy and Administration?    
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            MA in public policy and administration helps the students to know and understand the past, present and deal with the future with the great policies for their society. The course also imparts students to address the contemporary issues, which are related to political, economical and social disabilities in a coherent and comprehensive way. 
            </p>
            <li>
            By this course, you will gain technical communication and negotiation skills.
            </li>
            <li>
              
              In this course, you will learn how to conduct research and come up
              with sustainable solutions to global issues. 
            </li>

            <li>
              With this course, you will end up with a job that lets you travel
              around the world. 
            </li>
            <li>
              t is a very conventional course and increases your chances of
              cracking competitive exams for administrative jobs.
            </li>
          </div>
          <div className="section">
            <h3>Key Highlights- Online and Distance MA in Public Policy and Administration
</h3>
           
            <p>
            Following are some of the important factors about the online and distance MA in Public Policy and Administration course.    
            </p>
            <div className="section mt-1" id="Semester">
              <div className="container p-0">
                <div className="row my-0 g-0">
                  <ul className="mb-0">
                    <li className="text-center fw-bold">
                    Key Highlights for Online & Distance MA in Public Policy and Administration 
                    </li>
                  </ul>
                  <div className="col-md-6 col-6">
                    {/* <p className="Semester-left sam-back">Job Role </p> */}
                    <ul className="p-0 ">
                 
                      <li>Average Fee  </li>
                      <li>Duration </li>
                      <li>Eligibility  </li>
                      <li>Admission Procedure  </li>
                      <li>Average Salary   </li>
                      <li>Job Opportunities 
 </li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-6">
                    <ul className="p-0 ">
                    
                      <li> INR 60,000 - 1,00,000/- </li>
                      <li>2-4 years   </li>
                      <li>Graduation in any stream </li>
                      <li>Online </li>
                      <li>INR 4.5-7 LPA </li>
                      <li>Bureaucracy,Corporate Management,Economic Development,Indian Civil Services,Fire and Emergency Services,Public Works    </li>
                 
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
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
                Here is a common procedure to take admission in the distance MA
                in
                <br></br>public policy and administration.
              </p>
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
              After completion of an online MA in public policy and
              administration course, students can easily pursue government jobs
              or administrative jobs. The course is for two years and the
              curriculum is divided into 4 years. Here are some lists of
              subjects of online/ distance MA in public policy and
              administration.
            </p>
            <li> Administrative Theory </li>
            <li>Administrative Behaviour </li>
            <li> Fundamentals of Research</li>
            <li>Citizenship and Administration </li>
            <li> Administrative and Policy Laws</li>
            <li> Development of Public Policy </li>
            <li> Indian Administrative System </li>
            <li> Public Financial Administration </li>
            <li>Role of ICT Government </li>
            <li> India: Democracy and Development</li>
            <li>Research Methods and Designs  </li>
            <li>Research Writing/ Dissertation</li>
          </div>

          {/* <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>	 Principles and Practice of Management   </li>
                    <li>	 Management Economics</li>
                    <li> Organizational Behaviour</li>
                    <li>
                     Business Law
                    </li>
                    <li> 	 Management Accounting </li>
                    <li>  ----</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li> Production/Operation Management </li>
                    <li> Financial Management</li>
                    <li> Human Resource Management</li>
                    <li> Marketing Management</li>
                    <li> Marketing Management</li>
                  
                    <li>  Management Information system</li>
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
                    <li>Performance Management System</li>
                    <li>Industrial Relations and Labour Laws</li>
                    <li>Organizational Theory Structure and Design</li>
                    <li>Manpower Planning, Recruitment, and Selection</li>
                    <li>Organization Culture </li>
                    <li>Compensation & Benefits </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li> Employee Development & Talent Management</li>
                    <li> International HR Practices</li>
                    <li> Strategic HRM </li>
                    <li>  Business Ethics, Governance & Risk </li>
                    <li> Research Methodology </li>
                    <li>Project</li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="section">
            <h3>Other Online/distance MBA course specializations </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
              <span className="m-0 p-0">
              <img src={course} className="img-fluid" alt="Hrm page image" />
            </span>
              </div>
            </div>
          </div> */}

          <div className="section">
            <h3>Fees- Online and Distance MA in Public Policy and Administration</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            The exact total fee for the online and distance MA in Public Policy and Administration will vary for different online universities. The average total fee, however, lies within a range of INR 60,000 and 1,00,000 for the complete course.
            </p>
          </div>
          <div className="section">
            <h3>Duration- Online and Distance MA in Public Policy and Administration</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            The minimum duration for the online and distance MA in Public Policy and Administration is 2 years as it is a postgraduate course. And since this is an online and distance course, you have the flexibility to complete the course in a few extra years. So, the maximum duration for this course is 4 years.
            </p>
          </div>
          <div className="section">
            <h3>Eligibility- Online and Distance MA in Public Policy and Administration</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
          The eligibility criteria for the online and distance MA in Public Policy and Administration is as follows: 
            </p>
            <li>The applicant must have a bachelor’s degree in any stream with at least 45% marks. 
</li>
<li>The applicant must have pursued their bachelor’s degree from a university/institution that is recognized and approved. </li>
          </div>
          <div className="section">
            <h3>Syllabus- Online and Distance MA in Public Policy and Administration</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            After completion of an online MA in public policy and administration course, students can easily pursue government jobs or administrative jobs. The course is for two years and the curriculum is divided into 4 years. Here are some lists of subjects of online/ distance MA in public policy and administration.
            </p>
            <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row g-0">
              <ul className="mb-0">
                    <li className="text-center fw-bold">
                      Job Roles after Online & Distance MA in History
                    </li>
                  </ul>
                <div className="col-md-6">
                  {/* <p className="Semester-left"></p> */}
                  <ul className="p-0 mt-1">
                    <li>Administrative Theory </li>
                    <li>Fundamentals of Research</li>
                    <li> Administrative and Policy Laws </li>
                    <li>Role of ICT Government</li>
                    <li>Indian Administrative System</li>
                    <li> Research Methods and Designs </li>
           
                  </ul>
                </div>
                <div className="col-md-6">
                  {/* <p className="Semester-right">Semester 2</p> */}
                  <ul className="p-0 mt-1">
                    <li> Administrative Behaviour </li>
                    <li>Citizenship and Administration </li>
                    <li>Development of Public Policy</li>
                    <li>Public Financial Administration</li>
                    <li> Role of ICT Government</li>

                    <li> Research Writing/ Dissertation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

       
          </div>
          <div className="section">
            <h3>Career Scope- Online and Distance MA in Public Policy and Administration</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            After completion of this course, students can find many jobs with good pay. MA in public policy and administration course opens an ample opportunity where aspirants can apply after completing the course. This course also increases your chances of cracking competitive exams for administrative jobs. 
            </p>
<p>
Here is a list of jobs where a master’s degree holder in public policy and administration course can apply for. </p>
<div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row g-0">
              <ul className="mb-0">
                    <li className="text-center fw-bold">
                    Job Roles after Online & Distance MA in Public Policy and Administration 
                    </li>
                  </ul>
                <div className="col-md-6">
                  {/* <p className="Semester-left"></p> */}
                  <ul className="p-0 mt-1">
                    <li>Bureaucracy </li>
                    <li>Economic Development</li>
                    <li> Fire and Emergency Services </li>
                    <li>Land Revenue Systems</li>
                    <li>Tribal Administration</li>
                    <li>Police Department </li>
           
                  </ul>
                </div>
                <div className="col-md-6">
                  {/* <p className="Semester-right">Semester 2</p> */}
                  <ul className="p-0 mt-1">
                    <li> Corporate Management </li>
                    <li>Indian Civil Services </li>
                    <li>
Public Works

</li>
                    <li>Municipal Bodies</li>
                    <li> Education</li>

                    <li> Secretariat</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="section">
            <h3>Top Universities- Online and Distance MA in Public Policy and Administration</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            The Delhi University School of Open Learning (DU SOL) is one of the most popular universities for online and distance MA in Public Policy and Administration programs.     
            </p>
          </div>
          <div className="section">
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Once you decide to pursue MA in public policy and administration course it is essential to choose the right university. The following points are essential in selecting the right university.
            </p>
          <li>  Consult university rankings</li>
<li>Check the course content</li>
<li>Look what sports and societies are on offer</li>
<li>Look for student accommodation</li>


            <div className="row mt-4">
              <span className="m-0 p-0">
                <img src={choose} className="img-fluid" alt="Hrm page image" />
              </span>
            </div>
          </div>
       
          <div className="section">
            <h3>Summing it up</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            In this course, individuals can get an in-depth knowledge of many skills that are required in the industry. Before you choose any course, it is essential to choose the right universities based on your requirements. Only by choosing the right university, an individual can lead a successful career.      
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Public Policy and Administration
 FAQ</h1>
          <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Is the online MA in Public Policy and Administration course government-approved? 
</h5>
            </Accordion.Header>
            <Accordion.Body>
         <p>Yes, the online and distance MA in Public Policy and Administration is a course approved by the government but only if pursued from an online university that is recognized by UGC-DEB.    </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5> Can I get a job after completing an online MA in Public Policy and Administration course? 
</h5>
            </Accordion.Header>
            <Accordion.Body>
           <p>MA in public policy and administration course opens an ample opportunity where aspirants can apply after completing the course. Here is a list of jobs where a master’s degree holder in public policy and administration course can apply for.
</p>
<li>Bureaucracy</li>
<li>Corporate Management</li>
<li>Economic Development</li>
<li>Indian Civil Services</li>
<li>Fire and Emergency Services</li>
<li>Public Works</li>

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the fee for an online MA in Public Policy and Administration course? 
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The average total fee for the online and distance MA in Public Policy and Administration course is between the range of INR 60,000 to 1,00,000/- for the complete program.  


              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
            What is the eligibility for the online MA in Public Policy and Administration course? 

              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The minimum eligibility criteria for admission to an online and distance MA in Public Policy and Administration is that the applicant must have a bachelor’s degree in any stream with at least 45% marks and be pursued from a recognized university/institute.  

              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the duration of an online MA in Public Policy and Administration course? 

              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The minimum duration is 2 years and the maximum duration is 4 years for the online MA in Public Policy and Administration course.    


              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
