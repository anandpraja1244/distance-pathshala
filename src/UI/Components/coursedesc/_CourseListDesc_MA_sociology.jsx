import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import sociology from "../../../assets/images/MA/sociology.png";
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
        Online & Distance MBA In HR Management colleges in India | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in HR Management distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA In HR Management  colleges" />
      </Helmet>

      {/* <h1>Stragic HR</h1> */}

      <Searchform />
      <img src={sociology} alt="hr Management" className="w-100" />
   

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>
            Why should you choose MA in sociology?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            After this degree, students can pursue their careers in teaching, counselling, researching and a lot
more. There are good career opportunities for the individuals after completion of the course.
            </p>
            <li>It is the most beneficial course for students willing to work in social and government
agencies.    </li> 
<li>  The course offers a better understanding of many things like reasons for the social
difference, reasons for the differentials in group opportunities and outcomes, the
relevance of social hierarchies and social power in everyday life.   </li>
<li>MA in sociology helps the students better understand their own life.    </li> 
<li> In this course, you will understand the structure and fabric of human societies and the
mutually influential relationship between society and people.  </li> 
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
              Here is a common procedure to take admission in the distance MA in .

          <br></br>sociology.
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
            MA in sociology course opens many job opportunities for the students. The duration of this
course is 2 years, and it consists of 4 semesters of 6 months each. From this course, students will
get to understand the different aspects of the world.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
             <li>      Classical Sociological Tradition</li>
<li>Fundamentals of Sociology</li>
<li> Science, Technology and Society</li>
<li> Fundamental of Research</li>
<li> Fundamentals of Information Technology</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                 <li>  Globalization and Society</li>
<li> Methodology of Social Research</li>
<li> Criminal Justice and Correctional Management</li>
<li> Generic Elective I</li>
<li> Teaching Aptitude</li>
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
                 <li>  Gender and Society</li>
<li> Sociology of Kinship Family and Marriage</li>
<li> Sociology of Demography</li>
<li> Generic Elective II</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                 <li>  Sociology of Health</li>
<li> Generic Elective III</li>
<li> Generic Elective IV Dissertation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="section">
            <h3>Other Online/distance MBA course specializations </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
          </div> */}
          {/* <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
              <span className="m-0 p-0">
              <img src={course} className="img-fluid" alt="Hrm page image" />
            </span>
              </div>
            </div>
          </div> */}

          <div className="section">
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Once you decide to pursue MA in sociology it is essential to choose the right university. The
following points are essential in selecting the right university.
            </p>

            <div className="row mt-4">
            <span className="m-0 p-0">
              <img src={choose} className="img-fluid" alt="Hrm page image" />
            </span>
            </div>
          </div>
          <div className="section pt-4">
            <h3>Career Opportunities </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            After completion of this course, students can find many jobs with a handsome salary. This course
opens an ample opportunity where aspirants can apply after completing the course. Here is a list
of jobs where a master’s degree holder in sociology can apply for.
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
            In this course, individuals can get an in-depth knowledge of many skills that are required in the
industry. MA in sociology is a popular course, however, ensure to choose the right universities
based on your requirements. Only by choosing the right university, an individual can lead can a
successful career.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">HR Management FAQ</h1>
          <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Can any science graduate pursue an Online and Distance MBA in HR Management?</h5>
            </Accordion.Header>
            <Accordion.Body>
         <p>Yes, graduates with the stream will be eligible for an Online and Distance MBA in MBA General even non-commerce students also. </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5> Is the CAT score important for taking admission in Online and Distance MBA in HR Management?</h5>
            </Accordion.Header>
            <Accordion.Body>
           <p>May or may not as it totally varies from college to college as per their policy but you can read out the course prospectus from their official website</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the average fee for an Online and Distance MBA in HR Management? 
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The average fee for an online and Distance MBA in MBA General
can lie between 3 lacs to 10lacs 

              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              Is pursuing Online and Distance MBA in HR Management worthy for the future 
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, it is a good decision for those who intend to make a great career as Talent and people management
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div> */}
    </>
  );
}
