import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../../Pages/searchform";
import BCA from "../../../../assets/images/BCA/BCAGeneral/BCAGeneral.svg";
import line_h from "../../../../assets/images/process/Line.png";
import Common from "../../../../assets/images/BCA/BCAGeneral/CommonProceduretotakeadmissiointhe.svg";
import Rankings from "../../../../assets/images/process/rankings.png";
import Content from "../../../../assets/images/process/content.png";
import Structure from "../../../../assets/images/process/structure.png";
import Career_Opportunities from "../../../../assets/images/BCA/BCAGeneral/CareerOpp.svg";
import Semester1 from "../../../../assets/images/BCA/BCAGeneral/Semester1.svg";
import Semester2 from "../../../../assets/images/BCA/BCAGeneral/Semester2.svg";
import Semester3 from "../../../../assets/images/BCA/BCAGeneral/Semester3.svg";
import Semester4 from "../../../../assets/images/BCA/BCAGeneral/Semester4.svg";
import Semester5 from "../../../../assets/images/BCA/BCAGeneral/Semester5.svg";
import Semester6 from "../../../../assets/images/BCA/BCAGeneral/Semester6.svg";
import { Accordion } from "react-bootstrap";

export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Best BCA Distance Learning Education University in india</title>
        <meta
          name="description"
          content="Obtain your degree from the best BCA Distance learning Education University by learning at your own convenience from the most reputed faculty. Apply now and study anytime, anywhere.
"
        />
        <meta
          name="keywords"
          content="BCA Distance Learning Education University"
        />
      </Helmet>
      <Searchform />
      <div className="container mt-3 hrm">
        <div className="row">
          <div className="col-md-4 hrm-img">
            <img src={BCA} className="img-fluid" alt="Hrm page image" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
              Online and Distance BCA <span> General </span>
            </h3>

            <p>
              A course for a bachelor's degree in Computer Applications is
              called a BCA. The demand for computer specialists is rising daily
              due to India's rapidly expanding IT sector. Thanks to the IT
              sector's rapid expansion, computer graduates have made many
              opportunities available. For those who prefer to pursue a BCA
              degree while holding down a full-time job or on their schedule,
              BCA courses are also known as BCA Online and BCA Distance
              Education. Here we discuss all of the BCA General's specifics.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why Choose a BCA General?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              A 3-year undergraduate programme leads to the Bachelor of Computer
              Applications (BCA). The BCA degree programme aids in helping you
              plan the optimal route for a career in Computer Applications.
              Compared to other programmes like B.Tech. and B.E., BCA is thought
              to be the finest choice, and employers frequently favour BCA
              graduates. This course from a new era provides a thorough
              understanding of the professional Computer Application courses.
              In-depth knowledge of fundamental computer principles and software
              applications is provided in this course. The BCA programme may be
              one of the best options for students vying for top positions in
              the field of Computer Science. Many work opportunities are now
              available worldwide because of the booming IT sector.
            </p>
          </div>
          <div className="section">
            <h3>Demand for BCA General Course</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              BCA professionals are in great demand nowadays. Following course
              completion, one may pursue employment or further education. It's
              also possible to work for yourself. You may freelance or create
              your software if you have that much skill. BCA graduates can find
              employment with various software MNCs (Multinational Companies)
              with all the relevant abilities.
            </p>
          </div>

          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Merit and entrance exams both play a role in the BCA admissions
              process. You have passed 10+2, or an equivalent exam with Computer
              Science or application as a Core or Supplementary subject and
              secured marks required for eligibility is required for admission
              to BCA programme.
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
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Once you've made a decision, a BCA General is a fantastic choice.
              It's critical to select the right college. Please consider these
              recommendations below to guarantee that you attend the best school
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

            <div className="container text-center mt-4">
              <img
                src={Career_Opportunities}
                className="img-fluid"
                alt="Hrm page image"
              />
            </div>
          </div>

          <div className="section pt-4">
            <h3>Course Subjects</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="BCA page image" />
            </span>

            <div className="container text-center mt-4">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={Semester1}
                    className="img-fluid"
                    alt="Hrm page image"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src={Semester2}
                    className="img-fluid"
                    alt="Hrm page image"
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <img
                    src={Semester3}
                    className="img-fluid"
                    alt="Hrm page image"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src={Semester4}
                    className="img-fluid"
                    alt="Hrm page image"
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <img
                    src={Semester5}
                    className="img-fluid"
                    alt="Hrm page image"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src={Semester6}
                    className="img-fluid"
                    alt="Hrm page image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <h3>Summing it up</h3>
            <p>
              Since BCA general programme covers more technical issues than any
              other computer degree, it is highly recommended that you choose
              the BCA course. If you are genuinely interested in coding and
              programming, you should go for it. The syllabus covers various
              programming languages to expand students' expertise.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">BCA General FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>What is a BCA General course?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Undergraduate students enrolling in the BCA or Bachelor of
                Computer Applications programme will increase their proficiency
                with computer terminology. By finishing this three-year degree,
                students can advance their careers in Information Technology and
                Computer Applications.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>What is the Scope of BCA General Programme?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The need for BCA degrees is developing quickly due to the
                constantly expanding demands of technology professionals. BCA
                graduates can work for prestigious IT firms or the government
                after graduation.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>After 12th grade, is BCA a worthwhile course?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                If a student is interested in Computer Applications after high
                school, one can choose the BCA General programme. A course is an
                option for students because there is an increasing need for BCA
                graduates.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>Following a BCA, what choices are available?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Students who graduate with a BCA degree can enter the IT sector
                or continue their studies by choosing an MCA, MBA, MSc, or
                another degree.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>BCA: Is it simple?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The curriculum might be simple for students interested in this
                subject. But you have to allot a lot of time and effort to
                understand the ideas behind Computer Applications.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
