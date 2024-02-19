import React from "react";
import CompareFindFilter from "../Components/_CompareFindFilter";
import CompareTalkExpert from "../Components/_CompareTalkExpert";
import Footer from "../Components/_Footer";
import Header from "../Components/_Header";
import HomeNewsBlog from "../Components/_HomeNewsBlog";
import Apply from "../../assets/images/process/apply.png";
import Male from "../../assets/images/process/male.png";
import Female from "../../assets/images/process/woman.png";

// icons
import img_applyNow from "../../assets/images/applyNow/applyNow.svg";
import img_applyNowForm_left from "../../assets/images/applyNow/applyNow_bgLeft.png";
import { Form, InputGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import Request from "../../assets/scripts/API/Request";
import Helmet from "react-helmet";
import Searchform from "./searchform";

// react bootstrap

export default function ApplyNow() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [course, setCourse] = useState("");
  const [college, setCollege] = useState("");
  const [message, setMessage] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await Request.postOne({
      name: fullName,
      email: email,
      phone: mobile,
      course: course,
      college: college,
      message: message,
    });
    if (response.status === 200) {
      alert(`We've received your query. Our Counslor will contact you soon.`);
    }
  }
  return (
    <>
      <Header />
      <Helmet title = "Apply For Distance learning Education in India | Distance Pathsala"
          htmlAttributes={{ lang: "en" }}
          meta={[
        {
          property: 'og:description',
          content: 'One-stop solution for pursuing your dream profession in your own space. Reach out to us to have all your course-related queries answered!',
        },
        {
          property: 'og:keywords',
          content: 'Apply For Distance learning Education in India',
        }
      ]}
   />
   
      <Searchform />
      <CompareFindFilter />
      <section id="Apply-now">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 p-0">
              <img src={Apply} className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 apply-now ">
              <h1 className="py-2">
                Fill in Your Details to find out the next step!
              </h1>
              <p className="pb-4 apply-text">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check2-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                  </svg>
                </span>{" "}
                &nbsp; Get Approved University &nbsp;{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check2-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                  </svg>
                </span>{" "}
                &nbsp; 100% Placement Assistance
              </p>
              <div className="applyNowForm__right">
                <form onSubmit={handleSubmit}>
                  <div className="applyNowForm__right-formBox">
                    <div className="row">
                      <div className="col-6">
                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon1">
                            <img src={Male} className="img-fluid" alt="male" />
                          </InputGroup.Text>
                          <Form.Control
                            placeholder="Male"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </InputGroup>
                      </div>
                      <div className="col-6">
                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon1">
                            <img
                              src={Female}
                              className="img-fluid"
                              alt="male"
                            />
                          </InputGroup.Text>
                          <Form.Control
                            placeholder="Female"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </InputGroup>
                      </div>
                      <div className="col-12">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          {" "}
                          <span className="myinput">Full Name *</span>
                          <Form.Control
                            className="py-3"
                            required
                            onChange={(e) => setFullName(e.target.value)}
                            type="text"
                            placeholder="Name*"
                          />
                        </Form.Group>
                      </div>
                      <div className="col-12">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput2"
                        >
                          <span className="myinput">Email Id* </span>
                          <Form.Control
                            className="py-3"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email*"
                          />
                        </Form.Group>
                      </div>
                      <div className="col-6">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput3"
                        >
                          <span className="myinput">Mobile No*</span>
                          <Form.Control
                            className="py-3"
                            required
                            type="number"
                            pattern="[0-9]"
                            onChange={(e) => setMobile(e.target.value)}
                            placeholder="Mobile*"
                          />
                        </Form.Group>
                      </div>

                      <div className="col-6">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput3"
                        >
                          {" "}
                          <span className="myinput">Date of Birth*</span>
                          <Form.Control
                            className="py-3"
                            required
                            type="date"
                            onChange={(e) => setMobile(e.target.value)}
                            placeholder="Mobile*"
                          />
                        </Form.Group>
                      </div>
                      <div className="col-12">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <span className="myinput">State*</span>
                          <Form.Select>
                            <option value="AN">Select State</option>
                            <option value="AP">Andhra Pradesh</option>
                            <option value="AR">Arunachal Pradesh</option>
                            <option value="AS">Assam</option>
                            <option value="BR">Bihar</option>
                            <option value="CH">Chandigarh</option>
                            <option value="CT">Chhattisgarh</option>
                            <option value="DN">Dadra and Nagar Haveli</option>
                            <option value="DD">Daman and Diu</option>
                            <option value="DL">Delhi</option>
                            <option value="GA">Goa</option>
                            <option value="GJ">Gujarat</option>
                            <option value="HR">Haryana</option>
                            <option value="HP">Himachal Pradesh</option>
                            <option value="JK">Jammu and Kashmir</option>
                            <option value="JH">Jharkhand</option>
                            <option value="KA">Karnataka</option>
                            <option value="KL">Kerala</option>
                            <option value="LA">Ladakh</option>
                            <option value="LD">Lakshadweep</option>
                            <option value="MP">Madhya Pradesh</option>
                            <option value="MH">Maharashtra</option>
                            <option value="MN">Manipur</option>
                            <option value="ML">Meghalaya</option>
                            <option value="MZ">Mizoram</option>
                            <option value="NL">Nagaland</option>
                            <option value="OR">Odisha</option>
                            <option value="PY">Puducherry</option>
                            <option value="PB">Punjab</option>
                            <option value="RJ">Rajasthan</option>
                            <option value="SK">Sikkim</option>
                            <option value="TN">Tamil Nadu</option>
                            <option value="TG">Telangana</option>
                            <option value="TR">Tripura</option>
                            <option value="UP">Uttar Pradesh</option>
                            <option value="UT">Uttarakhand</option>
                            <option value="WB">West Bengal</option>
                          </Form.Select>
                        </Form.Group>
                      </div>
                      <div className="col-12">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <span className="myinput">Select Course*</span>
                          <Form.Control
                            className="py-3"
                            type="text"
                            onChange={(e) => setCourse(e.target.value)}
                            placeholder="Select the course you are interested in"
                          />
                        </Form.Group>
                      </div>

                      <div className="col-12">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <span className="myinput">Select College*</span>
                          <Form.Control
                            className="py-3"
                            type="text"
                            onChange={(e) => setCollege(e.target.value)}
                            placeholder="Select the College/University you are interested in"
                          />
                        </Form.Group>
                      </div>
                      <div className="col-12">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Control
                            as="textarea"
                            onChange={(e) => setMessage(e.target.value)}
                            rows={7}
                            placeholder="Your Message is valuable for us. Please leave your message/comment here"
                          />
                        </Form.Group>
                      </div>
                      <div className="col-12 btnBox text-center">
                        <p className="pt-2 pb-3">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-lock"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                            </svg>
                          </span>
                          Your personal information is secure with us
                        </p>
                        <button className="btn applyBtn" type="submit">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br></br>

      {/* <div className="applyNow">
        <div className="applyNowForm">
          <div className="container-fluid">
            <div className="container">
              <div className="applyNow-title">
                <h3>
                  You are one-step closer to your dream distance college search
                  ! <br />
                  <span>Fill in your details to find out the next step !</span>
                </h3>
              </div>
              <div className="row">
                <div className="col-lg-7">
                  <div className="applyNowForm__left row">
                    <div className="col-6">
                      <img
                        src={img_applyNowForm_left}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-6">
                      <div className="content">
                        <p>
                          Have you finalized the distance education institutions
                          that will bring you one step closer to your dreams? If
                          yes, fill the form and let's get you started on a
                          journey of a lifetime towards your goal! Distance
                          Pathshala delivers you a strategic approach to find
                          the top approved distance education colleges in India.
                          Our expert education consultants possess diverse
                          experience that helps them in providing you with best
                          career advice to judge better. Take your next step
                          towards a better future with Distance pathshala!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="applyNowForm__right">
                    <form onSubmit={handleSubmit}>
                      <div className="applyNowForm__right-formBox">
                        <div className="row">
                          <div className="col-12">
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                required
                                onChange={(e) => setFullName(e.target.value)}
                                type="text"
                                placeholder="Name*"
                              />
                            </Form.Group>
                          </div>
                          <div className="col-6">
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput2"
                            >
                              <Form.Control
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email*"
                              />
                            </Form.Group>
                          </div>
                          <div className="col-6">
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput3"
                            >
                              <Form.Control
                                required
                                type="text"
                                onChange={(e) => setMobile(e.target.value)}
                                placeholder="Mobile*"
                              />
                            </Form.Group>
                          </div>
                          <div className="col-12">
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                type="text"
                                onChange={(e) => setCourse(e.target.value)}
                                placeholder="Select the course you are interested in"
                              />
                            </Form.Group>
                          </div>
                          <div className="col-12">
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                type="text"
                                onChange={(e) => setCollege(e.target.value)}
                                placeholder="Select the College/University you are interested in"
                              />
                            </Form.Group>
                          </div>
                          <div className="col-12">
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Control
                                as="textarea"
                                onChange={(e) => setMessage(e.target.value)}
                                rows={7}
                                placeholder="Your Message is valuable for us. Please leave your message/comment here"
                              />
                            </Form.Group>
                          </div>
                          <div className="col-12 btnBox">
                            <button className="btn applyBtn" type="submit">
                              Apply Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <CompareTalkExpert />
      <HomeNewsBlog />
      <Footer />
    </>
  );
}
