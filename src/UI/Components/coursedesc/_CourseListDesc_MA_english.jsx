import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import english from "../../../assets/images/MA/english.png";
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
      <img src={english} alt="hr Management" className="w-100" />
   

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>
            Why should you choose MA in English?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            It is a two years master degree course that offers you specialization in literature. This course is
completely planned for the students to develop their professional skills in the language
concerned and enhance their capabilities in exploring literature. After completing of this course,
aspirants can apply for various job profiles like writer, professor, editor, translator, freelancer,
and a lot more.
            </p>
          </div>

          <div className="section">
            <h3>A scope of career development </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Getting a MA in English degree can make it easier for one to move into the higher designations.
There are many organizations that recognize the benefits of a master’s degree. Students with
master’s degree in English are most preferred employees in many top organizations. Industries
like MNC’s, the education, healthcare sector and many other industries prefers postgraduates for
certain jobs or promotions.
            </p>
          </div>

          <div className="section">
            <h3>Increased earing potential </h3>
            <p>
            As you all know that postgraduate person is always paid more as compared to an undergraduate.
With this course, individuals will be better equipped with skills and the ability to handle tough
and complicated situations. After completion of MA in English, aspirants will get increased
earning potential.
            </p>
          </div>
          <div className="section">
            <h3>Improved professional network </h3>
            <p>
            Many students come from various industries and backgrounds to purse this master degree in
English. This will offer a chance to build and expand one’s network with professors and
prominent industry leaders. With all these things, individuals can get a practical world
knowledge.
            </p>
          </div>

          <div className="section">
            {/* <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            It is 2 years postgraduate degree that can be done by anyone who completed an undergraduate degree from any recognized college or university. Getting admission is a smooth process just you need to choose a college. Individuals with 55% aggregate marks in bachelor's can apply for it. 
            </p> */}
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
              Here is a common procedure to take admission in the distance MA in <br></br>English
              </p>
              <img src={StepA} alt="admin" className="mw-100 mt-5" />
              <img src={StepB} alt="admin" className=" w-100 mt-5" />
            </div>
          </div>

          <div className="section">
            {/* <h3>Course Outline</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span> */}

            {/* <p>
              MBA in strategic human resource management course deals with the
              concepts related to human resource departments. This course
              imparts the knowledge of concepts like people management, team
              building, organizational leadership and a lot more. The duration
              of this course is two years, and the curriculum is divided into
              four different semesters.
            </p> */}
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
          </div> */}

          {/* <div className="section mt-1" id="Semester">
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
            Once you decide to pursue MA in English, it is essential to choose the right university. The
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
opens an ample opportunity for the aspirants. After completing this course individuals can go
and search for a job in the field of language and literature. Here is a list of job options available
in the online and distance MA in English program.
            </p>
 {/* <li> Translator  </li> 
<li> English Reporter  </li> 
<li> English Editor  </li> 
<li>  Writer  </li>
<li>Translator/Interpreter   </li> 
<li>English Teacher   </li> 
<li> Content Writer/Trainer   </li>
<li>Customer Support Executive   </li> 
<li> English Language Specialist  </li> 
<li>  Media Analyst  </li> */}
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
industry. Aspirants who have a keen interest in language studies along with English literature
and novels can pursue this course. MA in English is a popular course, however, ensure to choose
the right universities based on your requirements.
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
