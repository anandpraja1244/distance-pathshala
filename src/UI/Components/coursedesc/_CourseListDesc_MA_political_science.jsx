import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import political from "../../../assets/images/MA/political.png";
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
      <img src={political} alt="hr Management" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose MA in political science?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              MA in political science offers online lectures to students and a
              degree that offers a value equal to the regular degree. So,
              aspirants can easily pursue this course along with their jobs.
              Also, students can prepare for government administrative jobs
              altogether.
            </p>
            <li>
              This course will prepare you to think critically and
              independently. It helps you appreciate differing points of view,
              and broaden your knowledge of current affairs.{" "}
            </li>
            <li>
              The course serves as excellent preparation for graduate schools or
              law school.{" "}
            </li>
            <li>
              It prepares aspirants for a variety of careers including law,
              journalism, international affairs, elementary and secondary
              education and positions in government agencies and political
              offices.{" "}
            </li>
            <li>
              With this, you will hone the writing, communication, analytical
              and data skills that are fundamental to a liberal arts education.{" "}
            </li>
          </div>

          <div className="section">
            {/* <h3>Explore Advanced Career Opportunities </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            With the degree, online and distance in MBA in HR Management you will be there to the firm to right and productive workforce which can help it to grow in the competitive world. You can apply for the post of HR manager, talent acquisition manager, etc
            </p> */}
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
                Here is a common procedure to take admission in the distance
                <br></br>MA in political science
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
              MA in political science course opens many job opportunities for
              the students. The duration of this course is 2 years, and it
              consists of 4 semesters of 6 months each. From this course,
              students will get to understand the different aspects of the
              world.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li> International Relations-Theory and Practice</li>
                    <li> Political Theory</li>
                    <li> Political Institutions in India</li>
                    <li> Fundamentals of Research</li>
                    <li> Fundamentals of Information Technology</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li> Indian Political Thought</li>
                    <li> Public Policy and Governance in India</li>
                    <li> Diplomacy in Modern World</li>
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
                <li>  Comparative Political Analysis</li>
<li> India’s Foreign Policy</li>
<li> Peace and Conflict Resolution</li>
<li> Generic Elective II</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                 <li> Political Processes in India</li>
<li>Generic Elective III</li>
<li>Generic Elective IV</li>
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
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <span className="m-0 p-0">
                  <img
                    src={course}
                    className="img-fluid"
                    alt="Hrm page image"
                  />
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
            Once you decide to pursue MA in political science it is essential to choose the right university.
The following points are essential in selecting the right university.
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
            After completion of this course, students can find many jobs with good pay. This course opens
an ample opportunity where aspirants can apply after completing the course. Here is a list of jobs
where a master’s degree holder in political science can apply for.
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
            In this course, individuals can get many things and acquire various skills that are required in the
industry. MA in political science is a popular course, however, ensure to choose the right
universities based on your requirements. Only by choosing the right university, an individual can
lead can a successful career.
            </p>
          </div>
        </div>
      </div>
     
    </>
  );
}
