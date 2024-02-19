import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import HRM from "../../../assets/images/process/hrm.png";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/process/common.png";
import Rankings from "../../../assets/images/process/rankings.png";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";
import Career_Opportunities from "../../../assets/images/process/Career-Opportunities.png";
export default function CourseListDesc() {
	return (
		<>
			<Helmet>
                <meta charSet="utf-8" />
                <title>Best ba distance Learning education University in india | Distane Pathshala</title>
				<meta name="description" content="Distance Pathshala provides the best BA distance education in India which focuses on offering quality education to aspirants. Ready to learn from an expert.

Obtain your degree from the best BCA Distance learning Education University by learning at your own convenience from the most reputed faculty. Apply now and study anytime, anywhere.
" />
				<meta name="keywords" content="ba distance education in india" />
            </Helmet>

			<Searchform />
      <div className="container mt-3 hrm">
        <div className="row">
          <div className="col-md-4 hrm-img">
            <img src={HRM} className="img-fluid" alt="Hrm page image" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
              Online and distance BBA in <span> HRM </span>
            </h3>

            <p>
              HRM is one of the most preferred specializations in the bachelor's
              degree program of management provided in three years of duration.
              Online and distance BBA in HRM course combines several techniques
              of career-oriented knowledge, skill and training with the aim of
              handling human resource administration for an organization. HRM is
              one of the most popular programs out there. With this online and
              distance education, candidates can easily enter various marketing
              opportunities.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose BBA in HRM?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              This course offers a detailed overview to the students of
              managerial and communication skills. After completion of this
              course, students can easily hold various posts in the top
              organizations in HR departments. This course offers you the
              benefits of flexible study hours with the availability of online
              pre-recorded lectures. After completion of this course, candidates
              can end up with high paying jobs in various industries.
            </p>
          </div>
          <div className="section">
            <h3>Explore advanced career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              HR helps an organization in myriad ways. With this course,
              candidates can get a chance to explore different kinds of
              leadership roles. This course is designed in a way that will help
              you acquire the necessary skill set.
            </p>
          </div>
          <div className="section">
            <h3>Earn a high salary </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              This degree will help you gain the skills required to earn a
              better salary. Candidates will eventually be eligible to grab
              managerial roles that offer an attractive salary. Almost every
              company require an HR especially one with considerable experience
              and credible educational background.
            </p>
          </div>
          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The minimum duration of this course is three years with a total of
              six semesters. Since universities offer distance and online
              education an upper time limit for working professionals,
              candidates can complete the course in 5 years.
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
              BBA in marketing course is 3 years and consists of 6 semesters of
              6 months each. Every subject in this course is designed to prepare
              the students to meet the industry requirement. The course syllabus
              offers a comprehensive understanding of marketing and its
              strategies. Here is a list of syllabuses of the courses that
              candidates will learn.{" "}
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left"> Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>English</li>
                    <li>Business management</li>
                    <li>Accounting for business</li>
                    <li>Modern business environment </li>
                    <li>Business regulatory framework</li>
                    <li>Quantitative techniques for management</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right"> Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Marketing Management</li>
                    <li>Organization Behavior and HRM</li>
                    <li>Cost and management accounting</li>
                    <li>Corporate Finance </li>
                    <li>Introduction to Business Analytics</li>
                    <li>Communicative English</li>
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
                    <li>Managerial Economics</li>
                    <li>Organizational Change and Development</li>
                    <li>Workforce Planning</li>
                    <li>Technology for Business</li>
                    <li>Environmental Science</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2"> Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Macroeconomics </li>
                    <li>Financial Markets and Instruments</li>
                    <li>Training & Development</li>
                    <li>Compensation Management</li>
                    <li>Entrepreneurship</li>
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
                    <li>Strategic Leadership</li>
                    <li>Performance Management System</li>
                    <li>Fundamentals of HR Analytics</li>
                    <li>Research Methodology</li>
                    <li>Personal and Managerial Effectiveness</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back"> Semester 6</p>
                  <ul className="p-0 mt-1">
                    <li>Operations Management</li>
                    <li>Strategic Management</li>
                    <li>International HRM </li>
                    <li>Information Systems For Business</li>
                    <li>Ethics and Values</li>
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
              Once you decide to pursue an executive BBA in HRM it is essential
              to choose the right university. The following points are essential
              in selecting the right university.
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
          <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              After completion of the BBA in HRM course, candidates can get
              various opportunities. Candidates can apply for many posts after
              completing their bachelor’s degree program in BBA courses. Here is
              a list of jobs that candidates from BBA in HRM can apply for.
            </p>
            <div className="container text-center mt-4">
              <img src={Career_Opportunities} className="img-fluid" alt="Hrm page image" />
            </div>
          </div>
          <div className="section">
            <h3>Summing it up</h3>
            <p>
              There are many universities offering this course so ensure to
              choose the right university. Pursuing this online and distance BBA
              is an ideal course for students who want to pursue their
              management along with their jobs.
            </p>
          </div>
        </div>
      </div>
			{/* <div className="container-fluid courseListDesc">
				<div className="container">
					<div className="section">
						<h3>Online and distance BA Hindi</h3>
						<p>
                        Hindi is a language that is designed to give leverage for students to choose to pursue BA in the Hindi language. BA in Hindi is a three-year bachelor’s degree. During the study, aspirants will study a variety of topics linked to the course. BA Hindi is a bachelor’s degree that teaches students about what they encounter in their daily lives. The course also teaches how it influences their way of life. 
						</p>
					</div>
					<div className="section">
						<h3>Why you should choose BA in Hindi?</h3>
						<p>
						BA in Hindi course offers a wealth of information about general business and an in-depth understanding of finance and accounting. This course is available to those who have completed their 10 +2 in the commerce stream. Aspirants' professional options are not limited by the BA programme. 
						</p>

						<ul>
							<li>This course offers you the benefits of flexible study hours with the availability of online pre-recorded lectures.</li>
							<li>After completion of this course candidates will have top job opportunities in various fields. </li>
							<li>It is the most beneficial course for students willing to learn the language.</li>
							<li>In this course, students will get a deep understanding of language and related stuff effectively. </li>
						</ul>
                    </div>

					
				
					<div className="section">
						<h3>Admission procedure </h3>
						<p>
						The duration of this course is three years which consists of six semesters of 6 months each. Students should pass the class 10 and 12th examination with at least 50% marks from a valid and recognized board. Candidates should ensure that they completed their 12th with a minimum percentile required by the university. To take admission for online and distance BA Hindi, candidates should meet the minimum eligibility criteria.
						</p>
					</div>
					<table className="section-table section table">
							<thead>
								<tr>
									<th>Duration</th>
									<th>Approvals</th>
									<th>Eligibility</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>3 – 6 years</td>
									<td>UGC, AICTE, NAAC</td>
									<td>12th pass out</td>
								</tr>
							</tbody>
						</table>
					<div className="section">
						<h3>Here is a common procedure to take admission in the distance BA in Hindi.</h3>
						<ul>
							<li>Initially, you have to visit the particular university’s official website to take admitted.</li>
							<li>Fill out the application form with the required details and register yourself.</li>
							<li>Upload the required documents in the form and apply. Any registration fee ensures to pay via the mode of payment mentioned on the website.</li>
							<li>Once you are done with your registration, you will receive the confirmation mail along with the enrolment number.</li>
						</ul>
					</div>
					
					<div className="section">
						<h3>How to choose the right university?</h3>
						<p>Once you decide to pursue an executive BA in Hindi. It is essential to choose the right university. The following points are essential in selecting the right university.
                        </p>
						<ul>
							<li>Consult university rankings</li>
							<li>Check the course content</li>
							<li>Look what sports and societies are on offer</li>
							<li>Look for student accommodation</li>
						</ul>
					</div>
					
					<div className="section">
						<h3>Career opportunities </h3>
						<p>BA in Hindi is an undergraduate course that helps students to get a good position in their life. After completion of this course, candidates will get various job opportunities in the industries. Here are some major job positions that are available after the completion of a distance BA in Hindi.</p>
						<ul>
							<li>Journalism</li>
							<li>Translator</li>
							<li>Social Media Manager</li>
							<li>Content Writer/ Editor</li>
							<li>Teaching</li>

						</ul>
					</div>

					<div className="section">
						<h3>Top hiring firms for an online BA in Hindi</h3>
						<p>Candidates from BA Hindi graduates can apply for multiple positions in top organizations. Here is a list of top hiring firms for an online BA in Hindi.</p>
						<ul>
							<li>HT Media</li>
							<li>Inc42</li>
							<li>Times of India</li>
							<li>Times Internet</li>
							<li>Network 18</li>
						</ul>
					</div>
					
					<div className="section">
						<h3>Summing it up</h3>
						<p>In this course, aspirants will gain in-depth knowledge of Hindi and related stuff. Candidates can find this course in many universities but not everyone is in an online format. So, before you choose any course, it is essential to choose the right universities based on your requirements. Only by choosing the right university, an individual can lead a successful career.
                        </p>
					</div>
				</div>
			</div> */}
		</>
	);
}
