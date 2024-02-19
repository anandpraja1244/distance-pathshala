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
import AdmissionProcedure from '../../../assets/images/msc/AdmissionProcedure.svg';
import elegibilty from '../../../assets/images/msc/10th.svg';
import StepB from '../../../assets/images/msc/stepA.png';
import StepA from '../../../assets/images/msc/stepB.png';
import Hr_management from '../../../assets/images/mTech/civil.png';
import linepg from '../../../assets/images/msc/Linepg.png';
import Accordion from "react-bootstrap/Accordion";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
        MTech in Civil Engineering | Distance Pathshala
        </title>
        <meta
          name="description"
          content=" MTech in Civil Engineering degree online and distance by Distance Pathshala, The course curriculum includes programming languages"
        />
        <meta
          name="keywords"
          content="Civil Engineering Distance learning"
        />
      </Helmet>
      <Searchform />
      <img src={Hr_management} alt="MTech in Civil Engineering " className="w-100" /> 


      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>
            Why should you choose MTech in Civil Engineering?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            As there is an innumerable range of subjects that can be proposed MTech in Civil Engineering whose value is very skilled.
For a chance, if you are willing to take the regular degree then don&#39;t miss out on this opportunity you can attend a degree in
MTech in Civil Engineering in such a smooth possible manner. Countless universities are offering this course along with the
essential help and study materials. The students are free to pick their topics as per their interests and professional path.

            </p>
           
          </div>
          {/* <div className="section">
            <h3>Explore Advanced Career Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Students have numerous career opportunities after completing this course. The course can help mould the career of the graduates with top companies looking out for these professionals. Students who possess core knowledge of Artificial Intelligence and machine learning are guaranteed to benefit greatly with lucrative career setting jobs such as Machine Learning Engineer, Robotics engineer, Computer Vision Engineer, and Data Scientist awaiting them after graduation. 
            </p>
          </div> */}
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
          {/* <div className="section">
            <h3>Earn a High Salary</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            MCA in Machine Learning and Artificial Intelligence enables students to bag jobs with high salaries. With their profession in high demand, top companies recruit them and pay them high salaries. The average starting salary of a data analyst in India is INR 6LPA - 12 LPA. However, professionals with more years of experience can get a salary of up to INR 17LPA.
            </p>
          </div> */}

          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            You must follow several steps to get admission to M. Tech. The admission process to MTech MTech in civil engineering is
            </p>
          <img src={AdmissionProcedure} alt="admin" className="w-100 mt-5" />
          
          <img src={elegibilty} alt="admin" className="w-100 mt-5" />
           <div className="container py-3 text-center">
            <p>Here is a common procedure to take admission in the distance M.Tech in  <br></br>civil engineering</p>
          <img src={StepA} alt="admin" className="mw-100 mt-5" />
          <img src={StepB} alt="admin" className=" w-100 mt-5" />

           </div>
          </div>

          <div className="section">
            <h3>Course subjects</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            {/* <p>
            For 2 years, students will study and learn various relevant subjects of the course. Each semester will consist of distinct subjects. Some of the subjects the students will study are listed below:
            </p> */}
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>
                    Clay Mineralogy
                    </li>
                    <li> Design of Foundation Systems</li>
                    <li>
                    Environmental Impact Assessment
                    </li>
                    <li>
                    Earth Pressure, Earth Dams, and Slope Stability
                    </li>
                    <li>
                    Engineering Properties of Soils Foundation Engineering
                    </li>
                    <li>
                    Ground Improvement Engineering
                    </li>
                    <li>
                    Soil-Structure Interaction
                    </li>
                    <li>
                    Soil Dynamics and Machine Foundations
                    </li>
                    <li>
                  .....
                    </li>
                    <li>
                  .....
                    </li>
                    <li>
                  .....
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li> Advanced Rock Mechanics</li>
                    <li>
                    Computational and Statistical Methods
                    </li>
                    <li>Computer-Aided Design of Foundations</li>
                    <li>	 Case Histories in Geotechnical Engineering</li>
                    <li>Engineering Technology</li>
                    <li> Flow-through Porous Media</li>
                    <li> Geotechnical Exploration and Advanced Soil Testing</li>
                    <li> Modeling and Simulation</li>
                    <li>Neuro-Fuzzy Applications in Civil Engineering</li>
                    <li>Pavement Analysis and Design</li>
                    <li>Rock Mechanics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="section mt-1" id="Semester">
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
          </div> */}
      

          <div className="section">
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Choosing the right college for M.Tech in civil engineering is essential. The environment &amp; faculty in M.Tech in civil
engineering have a great influence on the quality of teaching you get. Some of the issues to hold in mind while making the
right pick are as follows:
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
          {/* <div className="section pt-4">
            <h3>Course Fee Structure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Students are required to pay a requisite amount of admission fee to pursue the course. Fees may vary according to university or more of education. However, the average fee for an online MCA in Machine Learning and Artificial Intelligence is 5,000-3,00,000 L.
            </p>

            <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div>
          </div> */}
          <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            As you qualify for M.Tech in civil engineering there are numerous doors opened for you for employment. Some of the job
possibilities are given below:
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
            The opportunities are piled up for you after completion of your MTech in civil engineering. You can choose from any
university as per your appeals and needs as they variably deliver the course. You have the option to follow the course &amp;
learn a lot more.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Civil Engineering FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Is M.Tech for Working Professionals in Civil Valid?</h5>
            </Accordion.Header>
            <Accordion.Body>
         <p>M.Tech for Working Professionals in Civil Engineering is an Invalid Course as It’s a Technical Course That Needs Practical
Knowledge and Faces to Face Classes with Theoretical Knowledge.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
              Can M Tech be done in correspondence?</h5>
            </Accordion.Header>
            <Accordion.Body>
  <p>No, the M Tech course cannot be done in correspondence or distance education as it is not approved by AICTE.</p>
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What Are the Eligibility Criteria for MTech In Civil?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              For Admission to MTech In Civil one has to complete their bachelor&#39;s degree in BE/BTech that too from a recognized
university with a minimum of 50-55% of marks as per the condition of various universities.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              Is MTech in civil engineering difficult?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              No, the difficulty of the course relies on the inquisitiveness of the student. If you are curious about this course then you will
find it easy.
              </p>
            </Accordion.Body>
          </Accordion.Item>
         
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the duration of the distance M.Tech in a civil engineering course?
</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The period of the distance M.Tech in civil engineering course is 2 years which is subdivided into 4 semesters.
              </p>
            </Accordion.Body>
          </Accordion.Item>
         
  
        </Accordion>
      </div>
    </>
  );
}
