import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Mr_management from "../../../assets/images/MSC(PG)/M.svg";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/mSC1/msc/M/Career.svg";
import choose from "../../../assets/images/mSC1/msc/M/choose.svg";
import AdmissionProcedure from '../../../assets/images/msc/AdmissionProcedure.svg';
import elegibilty from '../../../assets/images/msc/10th.svg';
import StepB from '../../../assets/images/msc/stepA.png';
import StepA from '../../../assets/images/msc/stepB.png';
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          M.Sc Mathematics in distance education in India - Distance Pathshala
        </title>
        <meta
          name="description"
          content="M.sc Mathematics Masters Degree Distance Education learning Admission – Join the best Master of Mathematics through Distance Pathshala."
        />
        <meta name="keywords" content="MSC Mathematics Distance Education" />
      </Helmet>
      <Searchform />
   
      <img src={Mr_management} alt="hr Management" className="w-100" />
      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why study M. Sc in Mathematics?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              M. Sc in Mathematics course helps the students in gaining
              knowledge of advanced mathematical concepts and tools. This course
              is designed for working professionals who want to continue both
              their jobs and studies together. Mathematics is one of the most
              popular courses that opens up a huge career opportunity for
              aspirants.
            </p>
          </div>
          <div className="section">
            <h3>Helps almost every career</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The knowledge that you gain in this course help in almost every
              career. Many research says that a career centred on mathematics
              offers many opportunities. Education in mathematics is at the
              heart of some careers, while other careers utilize mathematics and
              its application to build. Many careers and jobs benefit from a
              degree in mathematics including engineers, computer programmers,
              statisticians and even business managers.
            </p>
          </div>
          <div className="section">
            <h3>Real-world applications</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Things that are learned in mathematics will be applied immediately
              to solving real-world problems. From purchasing a house to
              navigating percentages is directly related to understanding
              mathematics basics. This course is required for almost every
              single profession in the world.
            </p>
          </div>

          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Candidates who are willing to pursue mathematical courses should
              fulfil some criteria required by the university. Aspirants should
              have a bachelor’s degree in any discipline with mathematics as one
              of the subjects. The degree they obtain should be from a
              recognized university. Even aspirants can have B. Tech, B. E, B.
              Sc degree or equivalent to pursue this course.
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
            <p>Here is a common procedure to take admission in the distance M. Sc in Mathematics.</p>
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
              The syllabus of this course helps you in delving deep into the
              concepts. M. Sc in Mathematics courses are distributed in 4
              different semesters of 6 months each. Every course in M. Sc in
              Mathematics program is designed by professionals to meet the
              requirement of the industry. Here are some lists of courses that
              candidates will learn in this program.
            </p>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Real Analysis-I</li>
                    <li>Advanced Abstract Algebra-I</li>
                    <li>Theory of Differential Equations</li>
                    <li>Fundamentals of Research</li>
                    <li>Fundamentals of Information Technology</li>
                    <li>----</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Real Analysis-II</li>
                    <li>Advanced Abstract Algebra-II</li>
                    <li>Research Methods and Design</li>
                    <li>Complex Analysis-I</li>
                    <li>Calculus of Variation and Integral Equation</li>
                    <li>Generic Elective I</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 3</p>
                  <ul className="p-0 mt-1">
                    <li>Partial Differential Equations</li>
                    <li>Complex Analysis-II</li>
                    <li>Topology</li>
                    <li>Generic Elective II</li>
                    <li>Generic Elective III</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Mechanics</li>
                    <li>Functional Analysis</li>
                    <li>Generic Elective IV</li>
                    <li>-----</li>
                    <li>-----</li>
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
              Once you decide to pursue an M. Sc in Mathematics it is essential
              to choose the right university. The following points are essential
              in selecting the right university.
            </p>

            <div className="row mt-4">
            <span className="m-0 p-0">
                <img src={choose} className="img-fluid" alt="Hrm page image" />
              </span>
            </div>
          </div>
          <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The duration of M. Sc in Mathematics is 2-4 years. In this course,
              students will get an in-depth understanding of subjects. Here is a
              list of jobs which candidates from M. Sc in Mathematics can apply
              for
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
              In this course, aspirants will gain in-depth knowledge about math
              and other related kinds of stuff. Many universities are offering
              M. Sc in mathematics so before you choose any course, it is
              essential to choose the right universities based on your
              requirements. Only by choosing the right university, an individual
              can lead a successful career.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
