import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../../Pages/searchform";
import BCA from "../../../../assets/images/BCA/AIandMachineLearning/ai.svg";
import line_h from "../../../../assets/images/process/Line.png";
import Common from "../../../../assets/images/BCA/AIandMachineLearning/CareerOpp.svg";
import Rankings from "../../../../assets/images/process/rankings.png";
import Content from "../../../../assets/images/process/content.png";
import Structure from "../../../../assets/images/process/structure.png";
import Career_Opportunities from "../../../../assets/images/BCA/AIandMachineLearning/CommonProcedure.svg";
import Semester1 from "../../../../assets/images/BCA/AIandMachineLearning/Semester1.svg";
import Semester2 from "../../../../assets/images/BCA/AIandMachineLearning/Semester2.svg";
import Semester3 from "../../../../assets/images/BCA/AIandMachineLearning/Semester3.svg";
import Semester4 from "../../../../assets/images/BCA/AIandMachineLearning/Semester4.svg";
import Semester5 from "../../../../assets/images/BCA/AIandMachineLearning/Semester5.svg";
import Semester6 from "../../../../assets/images/BCA/AIandMachineLearning/Semester6.svg";

// import TopHiringFirms from "../../../../assets/images/BCA/AIandMachineLearning/TopHiringFirms.svg";
import S1 from "../../../../assets/images/BCA/AIandMachineLearning/1.svg";
import S2 from "../../../../assets/images/BCA/AIandMachineLearning/2.svg";
import S3 from "../../../../assets/images/BCA/AIandMachineLearning/3.svg";
import S4 from "../../../../assets/images/BCA/AIandMachineLearning/4.svg";

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
              <span>
                {" "}
                Artificial Intelligence (AI) and Machine Learning (ML){" "}
              </span>
            </h3>

            <p>
              To help students better understand the composite concepts covered
              in an Artificial Intelligence (AI) course, schools typically give
              them a combination of symbolic and classical approaches. About
              re-creating and improving technology, several coding languages and
              philosophies are taught. Additionally, the coursework for an
              academic program in AI is a perfect synthesis of different
              Computer Science and Machine Learning (ML) components. Examine
              every bit of information about the online and distance BCA in
              Artificial Intelligence (AI) and Machine Learning (ML) course.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why Choose AI and Machine Learning?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Natural language processing, Machine Learning, Python, and other
              similar coding languages and related areas must all be thoroughly
              understood to grasp Artificial Intelligence (AI). <br></br> There
              are several Artificial Intelligence (AI)courses available,
              including BTech Artificial Intelligence and BTech in Computer
              Science-Artificial Intelligence & Machine Learning. Artificial
              Intelligence (AI) offers a rewarding professional path for those
              enrolling in these courses.<br></br> Students who can be patient
              and appreciate problem-solving should take the Artificial
              Intelligence (AI) course. Students must have patience as this
              field is still evolving, and breakthroughs are uncommon. <br></br>
              Having a solid grasp of mathematics is required for this course.
              Students that are strong in math should study Artificial
              Intelligence.
            </p>
          </div>
          <div className="section">
            <h3>
              Demand for Artificial Intelligence (AI) and Machine Learning
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The most sought-after skills in the world are Artificial
              Intelligence (AI) and Machine Learning (ML). Employers are
              clamouring to recruit AI and ML, but why is that? A few crucial
              causes include:
            </p>
            <li>
              To begin with, AI and ML are adaptable. Finance to Healthcare is
              just a few sectors where it can be applied.{" "}
            </li>
            <li>
              The second is that AI and ML are constantly changing. Artificial
              Intelligence (AI) always finds new uses for itself and
              opportunities.{" "}
            </li>
            <li>
              Third, the cost of AI and ML is decreasing. Businesses of all
              stripes are embracing AI technology thanks to Cloud Computing and
              open-source AI software growth.
            </li>
          </div>
          {/* working... */}

          <div className="section">
            <div className="section">
              <h3>Admission Procedure</h3>
              <span className="m-0 p-0">
                <img src={line_h} className="img-fluid" alt="Hrm page image" />
              </span>
              <p>
                Students in India can choose from various AI and ML courses,
                ranging from certificate programs to diploma, bachelors and
                master's degrees. Each class will have a different set of
                requirements for admission. But obtaining a higher secondary
                diploma from a reputable board is the standard requirement for
                enrolling in a BCA in Artificial Intelligence (AI) and Machine
                Learning (ML) course in India.
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
              Once you've made your decision, Artificial Intelligence (AI) and
              Machine Learning (ML) are fantastic choices. It's critical to
              select the right college. Please examine these recommendations to
              guarantee that you attend the best school available.
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
            <h3>
              Artificial Intelligence (AI) Course Syllabus for the Bachelor's
              Degree
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              You can pursue a Bachelor's degree in either a 6-semester course
              in Computer Science or an 8-semester practice in Engineering or
              Technology with a focus on Artificial Intelligence (AI).
            </p>

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
          <p>
            Human Computer Interaction, Pattern Recognition, and Augmented
            Reality are possible electives if you're enrolled in an
            eight-semester programme.
          </p>

          <div className="section pt-4">
            <h3>Machine Learning Course Syllabus for Undergraduates</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <div className="container text-center mt-4">
              <img src={S1} className="img-fluid" alt="Hrm page image" />
            </div>
            <div className="container text-center mt-4">
              <img src={S2} className="img-fluid" alt="Hrm page image" />
            </div>
            <div className="container text-center mt-4">
              <img src={S3} className="img-fluid" alt="Hrm page image" />
            </div>
            <div className="container text-center mt-4">
              <img src={S4} className="img-fluid" alt="Hrm page image" />
            </div>
          </div>
          <div className="section">
            <h3>Summing it up</h3>
            <p>
              You should now have a sound understanding of Artificial
              Intelligence (AI) and Machine Learning (ML) and be considering
              pursuing it after reading about these emerging trends to choose a
              course that cover in their curricula.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">
            Artificial Intelligence and Machine Learning FAQ
          </h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
                What are the main fields of specialization for Artificial
                Intelligence (AI)?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Among the most popular specialities in Artificial Intelligence
                (AI) are Machine Learning, Deep Learning, Python, Data Analysis,
                Language Processing, and other fields.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>How lucrative is a job in AI and ML?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                AI and ML have become a significant part of our life, from
                automated driving to computerized virtual assistants. If you're
                interested, enrol in an introductory Artificial Intelligence
                course online to get a good sense of what it's all about.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                Do you provide courses in Machine Learning and Artificial
                Intelligence online?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes. Online Artificial Intelligence (AI) and Machine Learning
                (ML) courses of the highest calibre are available from numerous
                institutions. AI and ML can be studied at home.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>Is programming required for Artificial Intelligence?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes. Programming languages like C++, Java, Python, LISP, and
                Prolog will be necessary for you to be prepared. To create AI
                algorithms, you should also be able to perform specific
                mathematical operations.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
