import React from "react";
import HRM from "../../../assets/images/BBA/IBM/ibm.svg";
import Common from "../../../assets/images/BBA/admission.svg";
import line_h from "../../../assets/images/process/Line.png";
import Rankings from "../../../assets/images/process/rankings.png";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";
// import Career_Opportunities from "../../../assets/images/process/Career-Opportunities.png";
import { Helmet } from "react-helmet";
import Accordion from "react-bootstrap/Accordion";
import Searchform from "../../Pages/searchform";

export default function CourseListDesc() {
  return (
    <>
      <Helmet
        title="Best Online & Distance BBA in International Business Management in India| Distance Pathshala"
        htmlAttributes={{ lang: "en" }}
        meta={[
          {
            property: "og:description",
            content:
              "Find here Best Online and Distance BBA in International Business Management courses and colleges/ Universities in India with Distance Pathshala.",
          },
          {
            property: "og:keywords",
            content: "BBA in International Business Management Distance University",
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
              Online & Distance BBA in{" "}
              <span> International Business Management </span>
            </h3>

            <p>
              BBA in International Business is a three-year undergraduate degree
              program offered online. Business management fundamentals at an
              international level are covered in this course. Students who
              completed their 12 classes can go for this amazing course. In
              addition, this course is the best opportunity to work with
              professionals and for working with professionals.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>
              Why should you choose Distance BBA in International Business
              Management?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The International Business Management career path is lucrative
              because, in addition to a good salary, you will have the
              opportunity to work and live around the world. MBAs in
              International Business open doors for higher-level jobs at top
              global firms after a BBA in International Business online.
            </p>
          </div>
          <div className="section">
            <h3>Explore advanced career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              International Business is one of the trendy courses nowadays. Jobs
              in this field offer high pay as well as outstanding exposure on a
              global scale. Due to your involvement with multinational
              corporations, export businesses, logistics companies, and
              marketing companies abroad.
            </p>
          </div>
          <div className="section">
            <h3>Earn a high salary </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              This programme will teach you skills that will allow you to boost
              your income. Candidates will ultimately be eligible for
              high-paying jobs in the international business industry. Following
              course completion, the student will be able to find the highest
              level of employment with amazing and riveting benefits.
            </p>
          </div>
          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Students are pursuing a Distance BBA in international business
              management and complete three years via an online/distance
              program. Please review the important information before applying
              for enrollment
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
              The online BBA program in International Business Management takes
              three years to complete and is divided into six equal semesters.
              In the first two years (four semesters), the syllabus follows a
              similar pattern to other BBA specializations. During the last two
              semesters of the program, specialization-specific topics are
              taught.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left"> Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>	 Basics of Accounting </li>
                    <li>Basics of Marketing </li>
                    <li> Business English </li>
                    <li> Fundamentals of Management  </li>
                    <li>Introduction to Economics </li>
                    <li>-----</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right"> Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Business Environment </li>
                    <li>Indian Banking System </li>
                    <li> Indian Economy </li>
                    <li> Marketing Management</li>
                    <li> Organisational Behaviour </li>
                    <li>Soft Skills </li>
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
                    <li> Banking Operations </li>
                    <li>Business Law </li>
                    <li> Human Resource Management </li>
                    <li>Introduction to Psychology </li>
                    <li>Research Methodology </li>
                    <li>----</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2"> Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Basics of Financial Management  </li>
                    <li> Entrepreneurship Development </li>
                    <li> Entrepreneurship Development </li>
                    <li>Introduction to International Business </li>
                    <li>Management Information System </li>
                    <li>Quantitative Techniques </li>
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
                    <li>Fundamentals of International Business  </li>
                    <li>Business Ethics and Corporate Governance </li>
                    <li> Introduction to Production Management </li>
                    <li>International Institutions and Trade Implications  </li>
                    <li>Introduction to SMEs </li>
                    <li>Marketing of Financial Services </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back"> Semester 6</p>
                  <ul className="p-0 mt-1">
                    <li>Export Import Documentation and Logistics  </li>
                    <li> Event Management </li>
                    <li>Fundamentals of E-Commerce  </li>
                    <li> International Strategic Management</li>
                    <li>Project Management </li>
                    <li> Project Work </li>
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
              It is very important to select the best university to pursue your
              studies. There are some important factors to remember before
              taking university admission
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
              Career opportunities are diverse because the potential of
              International Business is not limited to India. You can study
              business administration worldwide, broadening your career options.
              You can work in positions such as Brand Manager, International
              Logistics Manager, International Export Manager, and many others.
            </p>
          </div>
          <div className="section">
            <h3>Summing it up</h3>
            <p>
              Several universities offer this course. This online and distance
              BBA program is perfect for those interested in careers in
              International Business.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">International Business Management FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
                How long will the online BBA in International Business
                Management programme last?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The three-year online BBA in International Business Management
                programme is divided into six semesters.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
                With a Science background, am I eligible for admission to the
                BBA in International Business Management programme?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, you are eligible for admission to the BBA in International
                Business Management programme if you received at least 50% in
                12th grade in any subject, including Science, Arts, and
                Commerce.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>Is a BBA degree beneficial for international business?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Bachelor of Business Administration has grown in popularity over
                the years. This degree provides a solid foundation for those
                wishing to enter the sector of business admin and is an
                excellent way to gain international experience.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>Is there any value in the distance BBA?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>It is almost as valuable as a full-time graduate degree.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>Is there a future for BBA?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Beyond education, the BBA degree has many career options. It is
                one of the few degrees that can lead to high-paying employment
                in administration and management immediately after graduation.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
