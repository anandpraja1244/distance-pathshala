import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import hr_Manage from "../../../assets/images/MBA/hr_Manage.png";
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
      <img src={hr_Manage} alt="hr Management" className="w-100" />
   

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose MA in Psychology?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            MA in psychology is the study of the mind and behaviour of a person. It is a study of
unconscious and conscious situations and the study of feelings and thought that comes into a
person’s mind according to the situation. MA in psychology opens many job opportunities for
the students. This course offers an understanding of human psychology and will develop
advanced counselling skills.
            </p>
          </div>

          <div className="section">
            <h3>A rewarding career paths </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            If you pursue this course to enter the field of psychology to help people, then one way to do this
is with a master’s degree. This course allows the individuals to register with the associations and
begin practising as certified psychologists.
            </p>
          </div>

          <div className="section">
            <h3>Variety of career options </h3>
            <p>
            People with master’s degrees in psychology are often able to apply for a broad range of positions
in the professional world. Based on your requirements you can become a sports psychologist,
work in rehabilitation centres and other fields. This variety of career options might be appealing
to individuals who enjoy the field.
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
              Here is a common procedure to take admission in the distance MA in 

          <br></br>psychology
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
             MA in psychology course opens many job opportunities for the students. The duration of this
course is 2 years, and the curriculum is divided into 4 semesters of 6 months each. This course
offers an understanding of human psychology and will develop advanced counselling skills.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                 <li> Systems and Theories</li>
<li>Experimental Psychology  </li>
<li>Psychological Bases of Behaviour</li>
<li>Social Psychology </li>
<li>Advanced Counseling Skills-1</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
               <li>   Life Span Development Psychology</li>
<li>Cognitive Psychology </li>
<li>Cognitive Psychology: Psycho Diagnostics </li>
<li>Advanced Counseling Skills-II</li>
<li>Research Methods and Statistics-I</li>
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
                 <li> Clinical Disorders-1 </li>
<li>Child Psychopathology-1</li>
<li>Psychotherapies</li>
<li>Organizational Psychology</li>
<li>Formulation of two case studies of different mental disorders</li>
<li>Elective</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
               <li>   Clinical Disorders 2 </li>
<li>Health Psychology</li>
<li>Child Psychopathology-II </li>
<li>Research Methods and Statistics-II </li>
<li>Dissertation</li>
<li>Elective</li>
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
            Once you decide to pursue MA in psychology, it is essential to choose the right university. The
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
of jobs where a master’s degree holder in psychology can apply for.
            </p>
            {/* <li> Psychologists in rehabilitation center’s </li> 
<li>  Clinical psychologists </li>
<li> Psychological Counsellor </li> 
<li>  case managers</li> 
<li>child psychologists  </li> 
<li> communication specialists </li>  */}

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
industry. MA in psychology is a popular course, however, ensure to choose the right universities
based on your requirements. Only by choosing the right university, an individual can lead can a
successful career as a psychologist.
            </p>
          </div>
        </div>
      </div>
   
    </>
  );
}
