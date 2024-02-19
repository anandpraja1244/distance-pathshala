import React from "react";
import Btech from "../../../assets/images/btech/b-3.png";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/btech/btechadmin.png";
import Rankings from "../../../assets/images/process/rankings.png";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";
import bCareer_Opportunities from "../../../assets/images/btech/electrical.png";
import Searchform from "../../Pages/searchform";

import { Helmet } from "react-helmet";
import { Accordion } from "react-bootstrap";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          Distance/Correspondence B Tech Electrical Engineerng Course India |
          Distane Pathshala
        </title>
        <meta
          name="description"
          content="Make use of Distance Pathshala Electrical engineering distance education course for personal and professional advancement in your career."
        />
        <meta
          name="keywords"
          content="electrical engineering distance education,"
        />
      </Helmet>
      <Searchform />
      <div className="container mt-3 hrm">
        <div className="row">
          <div className="col-md-4 hrm-img">
            <img src={Btech} className="img-fluid" alt="Btech page image" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
              B. Tech for working professionals in
              <span> Electrical Engineering </span>
            </h3>

            <p>
              Electrical Engineering is a undergraduate program that imparts
              knowledge of electricity and its various other aspects. Electrical
              Engineering course specially designed for working professionals
              who are looking forward to expanding their horizons and learning
              new skills along with their jobs. It is a work-integrated learning
              program that helps working students in coping up with their work
              and studies altogether. B. Tech for working professionals in
              Electrical Engineering is a work-integrated learning program and
              candidates must have work experience to apply for the same.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>
              Why study B. Tech for Working professionals in Electrical
              engineering?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Btech page image" />
            </span>
            <p>
              This course helps working students in coping with their work and
              studies altogether. Electrical engineering programs deal with
              concepts like power, lighting, cooling, refrigeration, home
              appliances and a lot more. This course includes concepts like
              electricity, electromagnetism, electronics and a lot more.
            </p>
          </div>
          <div className="section">
            <h3>Global career opportunities </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Btech page image" />
            </span>
            <p>
              It is a versatile career that you can literally work anywhere in
              the world after acquiring a B. Tech in Electrical engineering.
              Your degree will be accepted by most top global companies because
              the guiding principles of electrical applications, mathematics and
              physics are constant.
            </p>
          </div>
          <div className="section">
            <h3>Lucrative Starting salaries</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Btech page image" />
            </span>
            <p>
              Engineers will be paid handsomely not just in the later stages of
              their careers. Candidates as fresher can be paid handsomely with
              limited work experience in the initial stages. Mechanical and
              automobile engineering is hands-on-filed, there is a scope for
              freshers to be recruited by multinational companies and be trained
              on the job as per their needs and specifications. You will get a
              job as a fresher with a well-paying job and also add to your set
              of skills which will help you gain a higher salary later in your
              career.
            </p>
          </div>
          <div className="section">
            <h3>Admission Procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Btech page image" />
            </span>
            <p>
              Working professionals in Electrical Engineering is 4 years course
              and the program offers a comprehensive understating of many
              concepts of electrical engineering.Here are some eligibility
              criteria that student should meet to have admission in the
              institution.
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
              <img src={line_h} className="img-fluid" alt="Btech page image" />
            </span>

            <p>
              B. Tech in ElectricalEngineering course consists of various
              subjects which enlighten you with the all the required knowledge.
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
                  <p className="Semester-left"> Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>• Communicative English I</li>
                    <li>• Calculus, Matrix Algebra</li>
                    <li>• Physics/Chemistry</li>
                    <li>• Electrical Engineering</li>
                    <li>
                      • Engineering Mechanics / Introduction to Thermodynamics
                    </li>
                    <li>• Computer Programming</li>
                    <li>• Engineering Drawing I</li>
                    <li>• Workshop A / Workshop B</li>
                    <li>• Physics Lab / Chemistry Lab</li>
                    <li>• Cultural Education</li>
                    <li>• Computer Programming Lab</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right"> Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>• Humanities Elective I</li>
                    <li>
                      • Vector Calculus and Ordinary Differential Equations
                    </li>
                    <li>• Chemistry/Physics</li>
                    <li>• Electronics Engineering</li>
                    <li>
                      • Engineering Mechanics / Introduction to Thermodynamics
                    </li>
                    <li>• Object-Oriented Programming</li>
                    <li>• Engineering Drawing II</li>
                    <li>• Workshop B / Workshop A</li>
                    <li>• Chemistry Lab. / Physics Lab</li>
                    <li>• Cultural Education</li>
                    <li>• Object Oriented Programming Lab</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left sam-back"> Semester 3</p>
                  <ul className="p-0 mt-1">
                    <li>• Integral Transforms and Complex Analysis</li>
                    <li>• Digital Systems</li>
                    <li>• Electric Circuits</li>
                    <li>• Mechanical Engineering</li>
                    <li>• Humanities Elective I</li>
                    <li> • Science Elective I</li>
                    <li>• Electric Circuits Lab</li>
                    <li>• Simulation Lab and Electrical Workshop</li>
                    <li>---------------------------------------</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2"> Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>• Mathematical Statistics and Numerical Methods </li>
                    <li>• Electrical Machines I</li>
                    <li>• Electrical Measurements and Instrumentation</li>
                    <li>• Electromagnetic Theory</li>
                    <li>• Humanities Elective II</li>
                    <li>• Science Elective II </li>
                    <li>• Measurements and Digital Circuits Lab</li>
                    <li>• Electrical Machines Lab I</li>
                    <li>• SOFT SKILLS I</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left"> Semester 5</p>
                  <ul className="p-0 mt-1">
                    <li>• Introduction to Microcontrollers and Applications</li>
                    <li>• Microprocessors</li>
                    <li>• Electronic Circuits II</li>
                    <li>• Analog Communication</li>
                    <li>• Control Engineering</li>
                    <li>• Electronic Circuits Lab II</li>

                    <li>• Microcontroller Lab</li>
                    <li>• Soft skills II</li>
                    <li>• --------------</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back"> Semester 6</p>
                  <ul className="p-0 mt-1">
                    <li>• VLSI Design</li>
                    <li>• Transmission Lines & Radiating Systems Management</li>
                    <li>• Digital Communication </li>
                    <li>• Elective I</li>
                    <li>• Environmental Studies</li>
                    <li>• Digital Communication Lab </li>
                    <li>• Seminar</li>
                    <li>• VLSI Design Lab</li>
                    <li>• SOFT SKILLS III</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left"> Semester 7</p>
                  <ul className="p-0 mt-1">
                    <li>• Power System Protection and Switchgear</li>
                    <li>• Environmental Studies</li>
                    <li>• Electrical Drives and Control</li>
                    <li>• Elective II</li>
                    <li>• Elective III</li>
                    <li>• Power System Simulation Lab</li>

                    <li>• Principles of Management</li>
                    <li>• Power Electronics Lab</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back"> Semester 8</p>
                  <ul className="p-0 mt-1">
                    <li>• Elective IV</li>
                    <li>• Project</li>
                    <li>• Management Elective</li>
                    <li>• ----</li>
                    <li>• ----</li>
                    <li>• ----</li>
                    <li>• ----</li>
                    <li>• ----</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Btech page image" />
            </span>
            <p>
              Once you decide to pursue an executive B. Tech in Electrical
              Engineering, it is essential to choose the right university. The
              following points are essential in selecting the right university.
            </p>

            <div className="row mt-4">
              <div className="col-md-4">
                <img
                  src={Rankings}
                  className="img-fluid"
                  alt="Btech page image"
                />
              </div>
              <div className="col-md-4">
                <img
                  src={Content}
                  className="img-fluid"
                  alt="Btech page image"
                />
              </div>

              <div className="col-md-4">
                <img
                  src={Structure}
                  className="img-fluid"
                  alt="Btech page image"
                />
              </div>
            </div>
          </div>
          <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Btech page image" />
            </span>
            <p>
              After completion of this course, there are hundreds of job
              prospects for the candidates. B. Tech in Electrical Engineering
              course opens up abundant job opportunities in the field. After
              completion of this course, students can apply in both the
              government and private sectors. Here is a list of jobs that
              candidates with a B. Tech in Electrical Engineering can apply for.
            </p>
            <div className="container text-center mt-4">
              <img
                src={bCareer_Opportunities}
                className="img-fluid"
                alt="Btech page image"
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
          <h1 className="Accordi">Electrical Engineering FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>What is the scope of B.Tech In Electrical Engineering?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The scope of this program is so vast and students will
                definitely land lucrative job positions after completing the
                course. Some of the popular job positions are telecommunication
                engineer, electrical engineer, instrumentation engineer,
                electrical design engineer, etc.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>What can I do after B.Tech In Electrical Engineering?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                After B.Tech in Electrical Engineering, you can get jobs in the
                electrical and electronics department.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                Can working professionals pursue the B.Tech in Electrical
                Engineering program?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, working professionals can pursue this degree program as it
                is a B.Tech for working professionals program. The classes of
                this course are held in evenings and weekends.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
                What are some of the software that Computer engineers use?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>MATLAB, CATIA, BRICS CAD, ZW3D, SOLID EDGE, PTC Creo.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
