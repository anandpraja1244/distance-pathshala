import React from "react";
import Btech from "../../../assets/images/btech/b-4.png";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/btech/btechadmin.png";
import Rankings from "../../../assets/images/process/rankings.png";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";
import bCareer_Opportunities from "../../../assets/images/btech/civil.png";
import Searchform from "../../Pages/searchform";
import { Helmet } from "react-helmet";
import { Accordion } from "react-bootstrap";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
		Civil Engineering distance education in India | Distane
          Pathsala
        </title>
        <meta
          name="description"
          content="Be the first to apply for Civil Engineering distance education at Distance Pathsala to get an attractive career opportunity."
        />
        <meta
          name="keywords"
          content="Civil Engineering distance education"
        />
      </Helmet>
      <Searchform />
      <div className="container mt-3 hrm">
        <div className="row">
          <div className="col-md-4 hrm-img">
            <img src={Btech} className="img-fluid" alt="Hrm page image" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
              B. Tech for working professionals in
              <span> Civil Engineering </span>
            </h3>

            <p>
              B. Tech for working professionals in Civil Engineer is a three
              years course. This course includes construction engineering of
              bridges, roads, dams, highways, buildings and a lot more. Civil
              engineering is a study of various vast subjects including
              mechanics, design, hydraulics, geotechnics, material science and
              statistical analysis. Specialization in civil engineering helps
              you in coping with jobs and studies altogether. It is one of the
              best courses for those aspirants who are already working in any
              firm.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>
              Why study B. Tech for Working professionals in Civil engineering?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Students who are willing to upgrade their careers via higher
              studies in civil engineering can pursue this. It is a professional
              engineering course that is all about designing, constructing, and
              maintaining physical and natural creation. It has specific
              specialized courses which are building technology and construction
              management, environmental engineering, transportation engineering
              and a lot more.
            </p>
          </div>

          <div className="section">
            <h3>Wide job opportunities </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              This course opens many career opportunities and handles different
              types of construction projects like roadways, railways, urban
              establishments, and a lot more. Candidates from this course can
              work in the private sector and public service undertakings.
            </p>
          </div>
          <div className="section">
            <h3>A good salary</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Candidates from this course achieve great compensation for their
              service. Freshers from this field can begin getting compensation
              every month. B. Tech in civil engineering can get a good starting
              salary according to business norms.
            </p>
          </div>
          <div className="section">
            <h3>Admission Procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Working professionals in Civil Engineering is 3 years course and
              the program offers a comprehensive understating of the mechanics
              of structures, and other concepts of civil engineering. This
              course will offer knowledge of sound engineering and creative
              skills and supervisory skills to the students.
            </p>
            <div className="row mt-4">
              <div className="col-md-4">
                <ul className="stlye-none text-center">
                  <li className="eligibility">Eligibility</li>
                  <li className="eligibility-nd">10+2 Pass Out</li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="stlye-none text-center">
                  <li className="eligibility">Duration</li>
                  <li className="eligibility-nd">Min 3 – Max 6 years</li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className=" stlye-none text-center">
                  <li className="eligibility">Approvals</li>
                  <li className="eligibility-nd">UGC | DEB | NAAC</li>
                </ul>
              </div>
            </div>

            <section className="bg-white mt-5 pt-3">
              <div className="container text-center mt-3">
                <img src={Common} className="img-fluid" alt="Hrm page image" />
              </div>
            </section>
          </div>

          <div className="section">
            <h3>Course subjects</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              B. Tech in Civil Engineering course consists of various subjects
              that help you to develop your skills as construction professional.
              This course helps you gain both theoretical knowledge and industry
              exposure. Candidates will study various subjects to meet the
              industry requirement. Here are some lists of topics during the
              course.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <ul className="p-0 mt-1">
                    <li>• Mechanics of Structure</li>
                    <li>• Structural Analysis</li>
                    <li>• Quantity Surveying, Contracts, and Tenders</li>
                    <li>• Transportation Engineering</li>
                    <li>• Foundation Engineering</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="p-0 mt-1">
                    <li>• Geotechnical Engineering</li>
                    <li>• Structural Design</li>
                    <li>• Environmental Engineering</li>
                    <li>• Project Management and Engineering Economics</li>
                    <li>• Concrete Technology</li>
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
              Once you decide to pursue an executive B. Tech in Civil
              Engineering, it is essential to choose the right university. The
              following points are essential in selecting the right university.
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
              After completion of this course, there are hundreds of job
              prospects for the candidates. B. Tech in Civil Engineering course
              opens up abundant job opportunities in the field. After completion
              of this course, students can apply in both the government and
              private sectors. Here is a list of jobs that candidates with a B.
              Tech in Civil Engineering can apply for.
            </p>
            <div className="container text-center mt-4">
              <img
                src={bCareer_Opportunities}
                className="img-fluid"
                alt="Hrm page image"
              />
            </div>
          </div>
          <div className="section">
            <h3>Summing it up</h3>
            <p>
              In this course, aspirants will gain in-depth knowledge of various
              skills. Before you choose any course, it is essential to choose
              the right universities based on your requirements. Only by
              choosing the right university, an individual can lead a successful
              career.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Civil Engineering FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
			  What do Civil Engineers do?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
			  Civil Engineer is responsible to develop infrastructure for the proper functioning of society. Civil Engineers are the brains behind planning a town, roads, railways, airways metro etc. Also, Civil engineers design essential service for a society such as water infrastructure, sewage, and energy supplies.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
			  Is B.Tech for Working Professionals in Civil Engineering AICTE approved?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
			  Yes, B.Tech for Working Professionals in Civil Engineering AICTE approved.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>What is the qualification to pursue Civil Engineering?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
			  One has to be Diploma/Polytechnic holder in Civil Engineering.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
			  What are some software that Civil Engineers use?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>Some designing software that Civil Engineers use are: AUTOCAD, STAAD PRO, REVIT.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
