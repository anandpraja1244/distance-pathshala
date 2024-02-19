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
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/msc/10th.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import structural from '../../../assets/images/mTech/structural.png';
import linepg from "../../../assets/images/msc/Linepg.png";
import Accordion from "react-bootstrap/Accordion";
export default function CourseListDesc() {
  return ( 
    <>
      <Helmet>
        <title>
          M.Tech In Civil
              Structural | Distance Pathshala
        </title>
        <meta
          name="description"
          content=" M.Tech In Civil
          Structural degree online and distance by Distance Pathshala, The course curriculum includes programming languages"
        />
        <meta
          name="keywords"
          content=" Professionals in Civil
          Structural Distance learning"
        />
      </Helmet>
      <Searchform />
      <img src={structural} alt="M.Tech In Civil
          Structural " className="w-100" /> 

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>
              Why should you choose M.Tech for working Professionals in Civil
              Structural?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Numerous positions are open to those with an MTech in Civil
              Structural. Students may pursue a Ph.D. in Civil Structure after
              receiving a Mtech degree. You can become an authority on civil
              structure with a Ph.D. It enables individuals to pursue careers in
              various fields, including bridges, flyovers, hospitals,
              structures, etc.
            </p>
          </div>
          <div className="section">
            <h3> Explore Advanced Career Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              B.Tech graduates can benefit from pay raises, promotions, and
              higher salaries thanks to the course. Students will learn in-depth
              knowledge, critical thinking, and analytical skills through the
              M.Tech for Working Professionals program, which has been
              painstakingly designed. The course gives students plenty of time
              and room to engage in extracurricular activities like jobs,
              competitive exam preparation, etc.
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
              Candidates must have earned a minimum percentile on their B.Tech.
              or BE degree to be eligible for the M.Tech. for Working
              Professionals in Civil Structural program. The project will take
              two years to complete. Before applying for enrollment, carefully
              read the important information.
            </p>
          </div>

          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Candidates for the M.Tech For Working Professionals in Civil
              Structural program must have completed their B.Tech. or BE degree
              with a minimum percentile. The completion period will be two
              years. Read the important information carefully before submitting
              an enrollment application.
            </p>
            <img src={AdmissionProcedure} alt="admin" className="w-100 mt-5" />

            <img src={elegibilty} alt="admin" className="w-100 mt-5" />
            <div className="container py-3 text-center">
              <p>
                Here is a common procedure to take admission in the distance the
                M.Tech In <br></br> Civil Structural
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
              The M.Tech. in Civil Structural Engineering syllabus imparts
              knowledge of a variety of advanced subjects related to the study
              of structures and the materials used in their creation for the
              construction of buildings.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Applied Mathematics</li>
                    <li> Theory of Elasticity and Plasticity</li>
                    <li>Matrix Methods of Structural Analysis</li>
                    <li>Structural Dynamics</li>
                    <li>Advance Concrete Technology</li>
                    <li>Analysis of Deep Foundation</li>
                    <li>Safety in Construction</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Stability of Structures</li>
                    <li>Finite Element methods</li>
                    <li>Theory of Plates and Shells</li>
                    <li> CAD in Structural Engineering</li>
                    <li> Maintenance and Rehabilitation of Structures</li>
                    <li> Design of Steel and Composite Structures</li>
                    <li> Seismic Design of Structures</li>
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
                    <li>Project Work</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li> Project Work</li>
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
              Remember these things as you choose the best university for your
              career. Many universities offer distance learning and online
              M.Tech programs in Civil Structural.
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
          {/* <div className="section pt-4"> */}
          {/* <h3>Course Fee Structure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span> */}
          {/* <p>
            Students are required to pay a requisite amount of admission fee to pursue the course. Fees may vary according to university or more of education. However, the average fee for an online MCA in Machine Learning and Artificial Intelligence is 5,000-3,00,000 L.
            </p> */}

          {/* <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div> */}
          {/* </div> */}
          <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              After completing this course, you will have various fascinating
              career options. Civil Engineer, Construction engineering, Site
              Engineer, and numerous other positions are available.
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
              Numerous universities provide this course. An M.Tech in Civil
              Structural from an on-campus or traditional program is the best
              choice for those seeking employment in the construction industry.
              Students who complete this outstanding course may also look for
              government jobs.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">
            Machine Learning and Artificial Intelligence FAQ
          </h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
                Can I pursue a career as a civil engineer after completing my
                M.Tech?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, once you have earned your M.Tech., you are qualified to
                apply for the civil engineer position.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
                Do structural engineers who have an M.Tech. Degree benefit?{" "}
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                JEE Yes, the M.Tech program in civil and structural engineering
                is one of the best programs in the engineering field for helping
                students improve their employment prospects and pay scales.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>What is the average salary for a civil engineer?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                A civil engineer&#39;s annual salary ranges from Rs. 3 lakh to
                Rs. 10 lakh, depending on their experience and career.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
                What does it mean to have a &quot;M.Tech for Working
                Professionals in Civil Structural&quot;?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                A master&#39;s degree in Civil Structural, known as the M.Tech
                for Working Professionals in structural studies, determines the
                structure&#39;s design, quality, consistency, and durability.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>How long is the M Tech in Structural course?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The M tech in Structural course has two years of postgraduate
                training and four semesters.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
