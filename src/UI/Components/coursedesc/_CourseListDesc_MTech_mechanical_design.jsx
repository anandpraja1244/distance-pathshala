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
import mechanicald from '../../../assets/images/mTech/mechanicald.png';
import linepg from "../../../assets/images/msc/Linepg.png";
import Accordion from "react-bootstrap/Accordion";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
        M.Tech in Mechanical Engineering in design | Distance Pathshala
        </title>
        <meta
          name="description"
          content=" M.Tech in Mechanical Engineering in design degree online and distance by Distance Pathshala, The course curriculum includes programming languages"
        />
        <meta
          name="keywords"
          content="Mechanical Engineering in design"
        />
      </Helmet>
      <Searchform />
      <img src={mechanicald} alt="  M.Tech in Mechanical Engineering in design" className="w-100" /> 

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>
              Why should you choose M.Tech in Mechanical Engineering in design?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              As there is an innumerable range of subjects that can be proposed
              in M.Tech Mechanical Engineering in designing whose value is very
              skilled. For a chance, if you are ready to take the regular degree
              then dont miss out on this chance you can attend a degree in
              M.Tech in Mechanical Engineering in designing in such a smooth
              possible manner. Countless universities are proposing this course
              along with the essential help and study materials. The students
              are free to pick their topics as per their interests and
              professional path.
            </p>
          </div>
          <div className="section">
            <h3> Career Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Once you have been privileged with your master’s degree in M.Tech
              in Mechanical Engineering in design, there are multiple job
              options for you. Along with that multiple firms are recruiting M.
              Tech qualified students.
            </p>
          </div>
          <div className="section">
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
          </div>
          <div className="section">
            <h3>Earn a High Salary</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              MCA in Machine Learning and Artificial Intelligence enables
              students to bag jobs with high salaries. With their profession in
              high demand, top companies recruit them and pay them high
              salaries. The average starting salary of a data analyst in India
              is INR 6LPA - 12 LPA. However, professionals with more years of
              experience can get a salary of up to INR 17LPA.
            </p>
          </div>

          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              To be able to get admitted successfully to any university,
              students are required to follow the admission procedures and
              execute the following procedures carefully.
            </p>
            <img src={AdmissionProcedure} alt="admin" className="w-100 mt-5" />

            <img src={elegibilty} alt="admin" className="w-100 mt-5" />
            <div className="container py-3 text-center">
              <p>
                Here is a common procedure to take admission in the distance MCA
                in <br></br>Cyber Machine Learning in Artificial Intelligence
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
              For 2 years, students will study and learn various relevant
              subjects of the course. Each semester will consist of distinct
              subjects. Some of the subjects the students will study are listed
              below:
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Graph Theory and Combinatorics</li>
                    <li> Advanced Database Management Systems</li>
                    <li>Advanced Software Engineering Principles</li>
                    <li>Professional Communication</li>
                    <li>Core Java</li>
                    <li>.....</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li> Network Security and Cryptography</li>
                    <li>
                      Cognitive Analytics and Social Skills for Professionals
                    </li>
                    <li> Blockchain Technology and Management</li>
                    <li>
                      {" "}
                      Introduction to Ethereum, Enterprise Blockchain
                      Applications and Hyperledger
                    </li>
                    <li> Data Structures and Algorithm Design</li>
                    <li> Research Methodology</li>
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
                    <li>Cloud Infrastructure and Services</li>
                    <li> Quantitative Aptitude</li>
                    <li> Professional Ethic </li>
                    <li> Seminar (Evaluation)</li>
                    <li>Unix/Linux Programming</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li> Elective Subjects</li>
                    <li>Projects</li>
                    <li>----</li>
                    <li>----</li>
                    <li>----</li>
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
              Choosing the right university helps you be on the right track and
              bring you closer to your goals and ambition. Therefore, choose
              universities wisely and analyse carefully whether the university
              meets all the requirements.
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
            <h3>Course Fee Structure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Students are required to pay a requisite amount of admission fee
              to pursue the course. Fees may vary according to university or
              more of education. However, the average fee for an online MCA in
              Machine Learning and Artificial Intelligence is 5,000-3,00,000 L.
            </p>

            <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div>
          </div>
          <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Students pursuing this degree have a wide range of opportunities
              awaiting them. They can bag jobs of high salary and give their
              career a good boost. Data Scientist, Research Scientist, AI
              Engineer, Business Intelligence Developer, Robotics Scientist, and
              AI Data Analyst are just a handful of examples of the numerous top
              jobs available for students. The students can work in top Machine
              Learning and Artificial Intelligence companies such as Wipro, IBM,
              Accenture, Infosys, TCS etc., and earn a fortune in their salary.
              This course is a great option to kick-start your career.
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
              Online MCA in Machine Learning and Artificial Intelligence can
              help you polish your skills and develop you for utilising the
              skills in the actual workplace. Consider all the factors and other
              important aspects while choosing the university you want to study
              in. Make sure the university favours all your terms and
              conditions.
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
                Is MCA in Machine Learning and Artificial Intelligence suitable
                for the future?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Artificial Intelligence is taking over every aspect of
                businesses today, and students taking up this course can benefit
                greatly through the course. With the profession high in demand,
                students can get jobs in top companies in India and set their
                careers for good.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
                Are there entrance exams for the MCA in Machine Learning and
                Artificial Intelligence program?{" "}
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                JEE Main, JEE Advanced, GATE, CMAT, and MAT are some of the
                entrance exams. Some universities do not require entrance exams
                at all. These are examinations administered by individual
                institutes at the state and national levels. It depends on the
                institute whether an entrance exam is required.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                How much does MCA in Machine Learning and Artificial
                Intelligence cost?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The average starting salary of a data analyst in India is INR
                7,00,000 - INR 15,00,000.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
                What are the career options for graduates of the Online MCA in
                Machine Learning and Artificial Intelligence program?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Opportunities are abundant for the graduates. Graduates can
                apply for numerous jobs in top companies in India. Top companies
                in India such as Infosys, Infotech, IBM, WIPRO and many more
                await them.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
                Are graduates of the Online MCA in Machine Learning and
                Artificial Intelligence likely to make a good living?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, students graduating from this course have high potential to
                make a good living and set their careers. Career opportunities
                are wide for graduates and salaries are high in this industry.
                The salary of an MCA in Machine Learning and Artificial
                Intelligence graduate in India is around INR 6,00,000 - INR
                12,00,000 per annum.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
