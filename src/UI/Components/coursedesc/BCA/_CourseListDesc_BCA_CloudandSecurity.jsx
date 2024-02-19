import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../../Pages/searchform";
import BCA from "../../../../assets/images/BCA/CloudSecurity/CloudSecurity.svg";
import line_h from "../../../../assets/images/process/Line.png";
import Common from "../../../../assets/images/BCA/CloudSecurity/CareerOpp.svg";
import Rankings from "../../../../assets/images/process/rankings.png";
import Content from "../../../../assets/images/process/content.png";
import Structure from "../../../../assets/images/process/structure.png";
import Career_Opportunities from "../../../../assets/images/BCA/CloudSecurity/CommonProcedure.svg";
import Semester1 from "../../../../assets/images/BCA/CloudSecurity/Semester1.svg";
import Semester2 from "../../../../assets/images/BCA/CloudSecurity/Semester2.svg";
import Semester3 from "../../../../assets/images/BCA/CloudSecurity/Semester3.svg";
import Semester4 from "../../../../assets/images/BCA/CloudSecurity/Semester4.svg";
import Semester5 from "../../../../assets/images/BCA/CloudSecurity/Semester5.svg";
import Semester6 from "../../../../assets/images/BCA/CloudSecurity/Semester6.svg";
// import TopHiringFirms from "../../../../assets/images/BCA/CloudSecurity/TopHiringFirms.svg";
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
              Online and Distance BCA in
              <span> Cyber Security </span>
            </h3>

            <p>
              An online Bachelor of Computer Applications in Cloud and Security
              is an undergraduate degree programme focusing on Cloud Computing
              and Security. This business-oriented course will help you succeed
              in the Software Industry by training your mind to concentrate on
              learning everything there is to know about Cloud Computing.
              Learning about Development, Networking, and Hardware is the
              beginning of what you'll learn in an online BCA Cloud & Security
              programme.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why Choose BCA in Cloud & Security?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Students who pursue a Bachelor of Computer Application (BCA) with
              a concentration in Cloud and Security will learn about the Design,
              Development, and Security of Cloud Computing, as well as how to
              mine this data with Data Analytics. The Cloud Computing industry
              offers various career paths, such as Cloud Analyst, Cloud
              Architect, Mobile App Developer, Cyber Forensic Analyst, etc.
            </p>
          </div>
          <div className="section">
            <h3>Demand for Cloud and Security</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Any Cyber Security professional looking to further their career
              should choose a job in Cloud Security. As more businesses rely on
              these technologies, there will be a higher demand for trained
              professionals to ensure safety.
            </p>
          </div>

          <div className="section">
            <div className="section">
              <h3>It is a Very Promising Field</h3>
              <span className="m-0 p-0">
                <img src={line_h} className="img-fluid" alt="Hrm page image" />
              </span>
              <p>
                As more and more companies migrate to the Cloud, the need for
                Cloud-specific Cyber Security experts has grown. Shifting from
                the traditional server or on-premise models to Cloud models
                raises new security concerns and issues. Therefore, one of the
                hottest job markets is Cloud and Security. Aspirants will have a
                bright future because of the rising need for professionals with
                Data Analytics skills in many sectors of society, including
                Business, Education, and Government. Many prospective and
                well-known companies are actively employing people with Data
                Analytics skills, so the employment market is looking bright.
                Earning this certification will improve your employment
                prospects in the Data Analytics Industry.
              </p>
            </div>
            <div className="section">
              <h3>Admission Procedure</h3>
              <span className="m-0 p-0">
                <img src={line_h} className="img-fluid" alt="Hrm page image" />
              </span>
              <p>
                Students must have completed the equivalent of the 10+2
                curriculum from an accredited secondary school. Then apply to
                the official college website.
              </p>
            </div>
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
                <img
                  src={Career_Opportunities}
                  className="img-fluid"
                  alt="Hrm page image"
                />
              </div>
            </section>
          </div>

          <div className="section">
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              A BCA in Cloud and Security is an excellent option for you if you
              have decided. Choosing the right college is crucial. Consider such
              guidelines to ensure that you are in the best possible school.
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
            <h3>Course Subjects</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
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

          <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div>
          </div>

          <div className="section">
            <h3>Summing it up</h3>
            <p>
              One of BCA's well-known areas of expertise is Cloud and Security.
              This three-year course delves deeply into Cloud Computing and
              Security. Students in this curriculum will learn the Fundamentals
              of Programming in C and Data Structures in C, Software
              Engineering, Modelling, etc. After completing this course, you may
              expect to be better prepared for Entry-level and even Senior-level
              positions in the Software Industry. However, the key to a
              prosperous professional life is picking the proper college.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Cloud and Security FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
                How does one go about enrolling in a Bachelor of Cloud
                Architecture (BCA) degree programme with a concentration on
                Security?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The Software Engineering Program is a three-year (six-semester)
                concentration designed around a results-focused, demanding, and
                comprehensive curriculum that will set students up for success
                in the Software Industry. The curriculum covers topics including
                Application Development, Networking, and Hardware Research. To
                enroll in this field of study, you need to join best of the
                online colleges.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
                What are the eligibility criteria for BCA in Cloud and Security?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Aspiring candidates should have completed Class 12th from any
                recognized Education Board.
                <br></br>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                Will this degree be useful/recognized if I decide to go abroad?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Accreditations from the WASC (Western Association of Schools and
                Colleges) in the United States and the Quality Assurance Agency
                (QAA) in the United Kingdom ensuring that degrees from reputed
                institutions meet international standards. If you ever decide to
                travel the world or relocate, you won't have any trouble using
                an online degree everywhere you go.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              In what ways may this program help me further my career when I graduate?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Graduates of the Bachelor of Computer Applications (BCA) degree
                have extensive options for employment because it covers all the
                fundamentals of Computer Science and Programming. Students can
                also enter non-programming areas of IT, such as Testing, Quality
                Assurance, Technical Assistance, etc., in addition to
                Programming. A Bachelor of Computer Application graduate can
                find rewarding and varied employment in fields as diverse as
                teaching, media production, banking, and security and
                surveillance.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
