import React from "react";
import HRM from "../../../assets/images/BBA/ISM/ism.svg";
import Common from "../../../assets/images/BBA/admission.svg";
import line_h from "../../../assets/images/process/Line.png";
import Rankings from "../../../assets/images/process/rankings.png";
import Accordion from "react-bootstrap/Accordion";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";
import Career_Opportunities from "../../../assets/images/process/Career-Opportunities.png";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";

export default function CourseListDesc() {
  return (
    <>
      <Helmet title = "BBA in IT and Systems management distance learning course in India| Distane Pathshala"
          htmlAttributes={{ lang: "en" }}
          meta={[
        {
          property: 'og:description',
          content: 'Best Online & Distance BBA in IT and Systems management Distance Learning in India. Find and compare top colleges/universities, subjects, fees, approvals, eligibility, careers, more.',
        },
        {
          property: 'og:keywords',
          content: 'BBA in IT and Systems management distance Education',
        }
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
              Online and distance BBA in <span> IT and Systems Management </span>
            </h3>

            <p>
            Online BBA in IT and Systems management is a distance learning course for 3 years. It is an Undergraduate Program for students who aspire to excel in the field of information technology and management. Over the course of 3 years, students proceed through a total of 6 semesters, each semester with their distinctive syllabus that prepares the students for the actual world. The course comprises two highly job-oriented sectors, IT and Management making it highly preferable. Millions apply for this course every year around the world to gain both practical and theoretical experience and excel in this field hence making it one of the most preferred courses and professions. 

            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose Online BBA in IT and Systems Management?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            BBA in IT and Systems management has gained popularity in recent years due to their practicality and prospect in the actual world. The course has provided employment to millions of professionals who have chosen this course. Both the information technology and management sectors are highly practical in an industry setting therefore making them one of the most chosen courses. With employment close to the radar and high salary packages, students can take up the course if their interest lies in IT and management.
            </p>
          </div>
          <div className="section">
            <h3>Explore advanced career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            In today’s era of digitalisation, IT and systems management play a vital role in business operations. Online BBA in IT and Systems Management can help students get their dream job and cement their career by working in top IT companies. 
            </p>
          </div>
          <div className="section">
            <h3>Earn a high salary </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            With the profession being in high demand, choosing online BBA in IT and Systems management can bag students jobs of salary as high as ranging 3LPA to 8LPA. So take the right step today and enroll yourself in a university that suits you best. 
            </p>
          </div>
          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            To be able to get admitted successfully in any university, students are required to follow the admission procedures and execute the following procedures carefully. 
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
            Over the course of 3 years, students will study and learn various relevant subjects. Each semester will consist of distinct subjects. Some of the subjects the students will study are listed below:
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left"> Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li> Business accounting</li>
                    <li> Computational training</li>
                    <li> Business studies </li>
                    <li> Introduction to operation system </li>
                    <li> Concept of economics</li>
                   </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right"> Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li> Introduction to python</li>
                    <li> IT tools and statistics I</li>
                    <li>Web development using CMS</li>
                    <li> Integrated disaster management</li>
                    <li>----</li>
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
                    <li> Human resource management</li>
                    <li>Object oriented programming</li>
                    <li> Banking operations</li>
                    <li>Information security</li>
              
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2"> Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li> Introduction to IT business processes</li>
                    <li> Introduction to IT business processes management</li>
                    <li>Core environment studies</li>
                <li>-----</li>
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
                    <li>E-business technology</li>
                    <li> Information technology and regulatory </li>
                    <li> Compliance</li>
                    <li>Verification and validation techniques</li>
                    <li> Electives</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back"> Semester 6</p>
                  <ul className="p-0 mt-1">
                    <li>Dissertation</li>
                    <li>Big data</li>
                    <li> Software project practices </li>
                    <li> Electives</li>
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
            Choosing the right university helps you be on the right track and bring you closer to your goals and ambition. Therefore, choicely universities wisely and analyse carefully whether the university meets all the requirements
            </p>

            <div className="row mt-4">
              <div className="col-md-4">
                <img src={Rankings} className="img-fluid" alt="Hrm page image" />
              </div>
              <div className="col-md-4">
                <img src={Content} className="img-fluid" alt="Hrm page image" />
              </div>

              <div className="col-md-4">
                <img src={Structure} className="img-fluid" alt="Hrm page image" />
              </div>
            </div>
          </div>
          <div className="section">
            <h3>Course Fee Structure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>Students are required to pay a requisite amount of admission fee to pursue the course. Fees may vary according to universities or more of education. However, the average fees for online BBA in Logistics is 5,000- 4Lacs. </p>
          </div>
          <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Students with this course have a wide range of opportunities and can apply for numerous job roles with high Salary packages. Jobs like IT Systems Designer,IT Manager, Network Security Analyst, Information Systems Manager, Application Programmer are just a few examples of the jobs available after graduation. 
            </p>
     
          </div>
         
          <div className="section">
            <h3>Summing it up</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Online BBA in IT and Systems management can help you polish your skills and develop you for utilising the skills in the actual workplace. Choose which university suits you right and which will help you become a successful professional in the field.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">IT and Systems Management  FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
              Is BBA in IT and Systems Management suitable for the future?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The IT and Management sector is flourishing and individuals choosing this career path will highly benefit from it. Jobs with high salary packages and working in top IT companies in India.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
              Are there entrance exams for the BBA in IT and Systems Management program?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              AIMA UGAT, SET, and IPU CET are among the admission tests possible. These are examinations administered by individual institutes at the state and national levels. It depends on the institute whether an entrance exam is required.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              How much does the Online BBA in IT and Systems Management cost?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The average cost of an Online BBA in IT and Systems Management ranges from 5,000 - 4 lacs. 
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              What are the career options for graduates of the Online BBA in IT and Systems Management program?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Opportunities are abundant for the graduates. Numerous jobs with high Salary packages await them. Jobs like IT Systems Designer,IT Manager, Network Security Analyst are just a few of the examples.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
              Are graduates of the Online BBA in IT and Systems Management likely to make a good living?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              IT and Systems Management graduates earn between 3LPA - 8LPA after graduating from the program. The program has a great scope, go for it!
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
