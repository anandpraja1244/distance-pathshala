import React from "react";
import HRM from "../../../assets/images/BA/Hindi/Hindi.svg";
import Common from "../../../assets/images/BA/Hindi/Common.svg";
import Rankings from "../../../assets/images/process/rankings.png";
import Accordion from "react-bootstrap/Accordion";
import Content from "../../../assets/images/process/content.png";
import line_h from "../../../assets/images/process/Line.png";
import Structure from "../../../assets/images/process/structure.png";
// import career from "../../../assets/images/BBA/LOG/bbacourse.svg";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";

export default function CourseListDesc() {
  return (
    <>
      <Helmet
        title="BBA Human Resource Management Distance Education in India | Distane Pathshala"
        htmlAttributes={{ lang: "en" }}
        meta={[
          {
            property: "og:description",
            content:
              "Advance your career by applying for BBA Human Resource Management Distance Education at Distance Pathshala now",
          },
          {
            property: "og:keywords",
            content: "BBA Human Resource Management Distance Education",
          },
        ]}
      />
      <Searchform />
      <div className="container mt-3 hrm">
        <div className="row">
          <div className="col-md-4 hrm-img">
            <img src={HRM} className="img-fluid" alt="Hrm page image" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
              Online & Distance BA <span> Hindi</span>
            </h3>

            <p>
              B.A Hindi is a course designed with the aim of teaching
              fundamentals as well as the advanced essentials of the Hindi
              language. Starting from the history of language and literature and
              its prominent writers' works and theories, this course covers all
              the significant concepts which students need to understand Hindi
              literature. In India as well as the world Hindi is recognized as
              an essential language.
            </p>
            <p>
              This course of online & Distance BA Hindi is appropriate for those
              who are passionate about the Hindi language and literature and
              want to play with strings of words but can`t attend daily classes
              due to some unavoidable circumstances.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose online & distance BA in Hindi?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              By choosing online & distance B. A Hindi, you will be able to
              attain a broad understanding of language and its usage. In the
              flexible zone of home with study notes and recorded lectures, you
              can do your lessons at any place anytime. No need to attend
              classes regularly, just appear in exams.
            </p>
          </div>
          <div className="section">
            <h3>Explore Advanced Career Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              At the end of this course, you will be professionally trained in
              various fields and you can easily be hired as a Hindi content
              writer, translator, Screenwriter, and Hindi news editor. And many
              more doors will be open with this single course.
            </p>
          </div>
          <div className="section">
            <h3>Earn a high salary </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>With the degree of online and distance BA </p>
            <p>
              {" "}
              Hindi, you can crack a well-paid profile in both the private and
              public sectors. The average starting paycheck will be 2 Lacs p.a
              to 4 Lacs p.a. And you will be eligible for various government
              exams.
            </p>
          </div>
          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The process of admission online and distance BA in Hindi is smooth
              without any such restrictions. Students from any stream in the
              12th can enroll in it. This is a UG course of 3 years structured
              in 6 parts.
            </p>
            <div className="row mt-4">
              <div className="col-md-4">
                <ul className="stlye-none text-center d-flex">
                  <li className="eligibility">Eligibility</li>
                  <li className="eligibility-nd">10+2 Pass Out</li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="stlye-none text-center d-flex">
                  <li className="eligibility">Duration</li>
                  <li className="eligibility-nd">Min 3 – Max 6 years</li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className=" stlye-none text-center d-flex">
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
              This course will give you a brief of important works and
              linguistics of the Hindi language. Its dialects, history, and
              critical analysis of literature. Also teach you its applications
              in professional terms
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left"> Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li> Communication Skills</li>
                    <li> Critical reasoning, writing, and presentation</li>
                    <li> Communications skills in other languages</li>
                    <li> Prose and one-act plays</li>
                    <li> History of Hindi literature (Adikal and Madhyakal)</li>
                    <li> Hindi literature in state </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right"> Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li> Reading Literature</li>
                    <li>
                      Reading on Indian constitutions, secularism, and
                      sustainable environment
                    </li>
                    <li> Translation and communication in Hindi</li>
                    <li> Translation theory and practice</li>
                    <li> History of Hindi literature (Adhunik kal- Gadya)</li>
                    <li> Regional Literature ( Hindi translation)</li>
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
                    <li> Literature and contemporary issues</li>
                    <li> Literature in other languages</li>
                    <li>
                      {" "}
                      General informatics and computer application in Hindi.
                    </li>
                    <li> Applied grammar</li>
                    <li> History of Hindi literature (Adhunik kal- padya)</li>
                    <li> Comparative literature</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2"> Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li> History and philosophy of science</li>
                    <li> Culture and civilization</li>
                    <li> Drama and theatre in Hindi</li>
                    <li>
                      {" "}
                      Perspectives of humanities & languages & methodology
                    </li>
                    <li> Correspondence and secretarial practice in Hindi</li>
                    <li>Environmental studies</li>
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
                    <li> Linguistics</li>
                    <li> Contemporary Hindi literature</li>
                    <li> Indian Literary Thoughts</li>
                    <li> Poetry (Ancient and Medical); Prosody and Poetics</li>
                    <li> Open course spoken Hindi/ business/ Interpretation</li>
                    <li>Project - Literary Translation</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back"> Semester 6</p>
                  <ul className="p-0 mt-1">
                    <li> Modern Poetry in Hindi </li>
                    <li> History of Hindi Language</li>
                    <li> Novel and short stories in Hindi</li>
                    <li> Western literary thoughts</li>
                    <li>
                      Elective course Journalism and Mass communication/ Folk
                      literature/ Radio broadcasting
                    </li>
                    <li> Project - Literary Translation</li>
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
              Taking admission to the right college is tough but important. Few
              points you can consider while looking for college.
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
              This degree will train you in various job profiles such as
              teachers, authors, editor radio jockeys new anchor Book
              publishers, etc.
            </p>
          </div>
          <div className="section">
            <h3>Summing it up</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Demand for the Hindi language experts is rapidly increasing these
              days, so if you want to take up this opportunity and make a good
              career then an online and distance BA in Hindi will be a good
              choice.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Hindi FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
                Do the student without Hindi in the 12th class also eligible for
                this course?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, of course, they can also apply for online and distance BA
                in Hindi.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
                What is the average fee of the online and distance BA in Hindi?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The average fee for online and distance BA in Hindi is 7000 to
                30000.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                What about admission criteria? Is there any entrance for online&
                distance BA in Hindi?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                It is totally varied according to colleges and its policy as
                there can be merit-based or entrance based
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
                What is the process for the semester examination of
                Distance/Online BA in Hindi
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Some colleges like to conduct CBT on their student portals
                whereas some colleges have their examinations center for
                commencement of exams.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
