import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Finance from "../../../assets/images/B.Com/Finance3.svg";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/B.Com/Career.svg";
import Rankings from "../../../assets/images/process/rankings.png";
import Commons from "../../../assets/images/B.Com/Common.svg";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";
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
      <div className="container mt-3 hrm">
        <div className="row">
          <div className="col-md-4 hrm-img">
            <img src={Finance} className="img-fluid" alt="Hrm page image" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
              Online and Distance M. Sc in <span>Mathematics </span>
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              It is a 2-years postgraduate program for students who have a deep
              in learning advanced knowledge of mathematical principles and
              methods. This program includes subjects like theory of
              differential equations, fundamentals of IT and Research etc. This
              course comprehends the basic scientific principles, mathematical
              aptitude, and theories. M. Sc in Mathematics is a program that
              helps students in gaining both job experience and a valuable.
            </p>
          </div>
        </div>
      </div>

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
            <div className="row mt-4">
              <div className="col-md-4">
                <ul className="stlye-none text-center">
                  <li className="eligibility">Eligibility</li>
                  <li className="eligibility-nd">
                    B.Tech / B. Sc / B. Sc pass out
                  </li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="stlye-none text-center">
                  <li className="eligibility">Duration</li>
                  <li className="eligibility-nd"> 2 -4 years</li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className=" stlye-none text-center">
                  <li className="eligibility">Approvals</li>
                  <li className="eligibility-nd">UGC, AICTE, NAAC</li>
                </ul>
              </div>
            </div>
            <section className="bg-white mt-5 pt-3">
              <div className="container text-center mt-3">
                <img src={Commons} className="img-fluid" alt="Hrm page image" />
              </div>
            </section>
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
