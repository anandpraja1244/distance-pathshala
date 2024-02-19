import React from "react";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Councling from "../../assets/images/process/councling.png";
// components
import CompareFindFilter from "../Components/_CompareFindFilter";
import CompareTalkExpert from "../Components/_CompareTalkExpert";
import Footer from "../Components/_Footer";
import Header from "../Components/_Header";
import HomeNewsBlog from "../Components/_HomeNewsBlog";

// images
import img_bookAppointment_bg from "../../assets/images/bookAppointment/right_bg.png";
import Helmet from "react-helmet";

export default function BookAppointment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await Request.postOne({
      name: fullName,
      email: email,
      phone: mobile,
      course: course,
      message: message,
    });
    if (response.status === 200) {
      alert(`We've received your query. Our Counslor will contact you soon.`);
    }
  }

  return (
    <>
      <Header />
      <CompareFindFilter />

      <section className="bg-white" id="bookAppoiment">
        <div className="container mt-2 mb-2">
          <h1 className="pt-2 pb-2" >Career Counselling</h1>
		  <span></span>
          <p>
            Are you confused between selected options of distance education
            colleges? No need to worry! Distance Pathshala brings you
            experienced education consultants that are just a click away! Book
            an appointment with the top verified experts to find out which
            colleges perfectly align with your goals. Our experts are highly
            experienced in the education industry and have hands-on experience
            in career counseling. Distance Pathshala has a wide variety of
            experts which have helped a number of students finding their dream
            colleges. What are you waiting for? Book an appointment now!
          </p>
        </div>
      </section>
      <section>
        <div className="container bookAppoiment mt-3 mb-3">
          <h1 className="mb-3">
            Want to get expert consultation to find your right distance{" "}
            <br></br> education college?
          </h1>
          <div className="row">
            <div className="col-md-5">
              <img src={Councling} alt="Councling" className="img-fluid" />
            </div>

            <div className="col-md-7">
              <div className="bookAppointment-form">
                <form onSubmit={handleSubmit}></form>
                <div className="row">
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
                  <div className="col-6">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput2"
                    >
                      <span className="myinput">Email Id* </span>
                      <Form.Control
                        className="py-3"
                        type="Enter your email address "
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email*"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-6">
                    <Form.Group controlId="exampleForm.ControlInput3">
                      <span className="myinput">Mobile No*</span>
                      <Form.Control
                        className="py-3"
                        required
                        type="text"
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="Enter your Mobile No."
                      />
                    </Form.Group>
                  </div>
                  <div className="col-12">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <span className="myinput">Select Course*</span>
                      <Form.Control
                        className="py-4"
                        type="text"
                        onChange={(e) => setCourse(e.target.value)}
                        placeholder="Select the course you are interested in"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-12 d-none">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Control
                        className="py-3"
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
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="bookAppointment">
        <div className="container-fluid">
          <div className="container">
            <div className="bookAppointment-title">
              <h3>
                Want to get expert consultation to find your right distance
                education college? <br /> Drop in your details and our experts
                will ring you ASAP!
              </h3>
            </div>
            <div className="bookAppointment-body">
              <div className="row">
                <div className="col-5">
                  <div className="bookAppointment-form">
                    <form onSubmit={handleSubmit}></form>
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
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="bookAppointment-text">
                    <p>
                      Are you confused between selected options of distance
                      education colleges? No need to worry! Distance Pathshala
                      brings you experienced education consultants that are just
                      a click away! Book an appointment with the top verified
                      experts to find out which colleges perfectly align with
                      your goals. Our experts are highly experienced in the
                      education industry and have hands-on experience in career
                      counseling. Distance Pathshala has a wide variety of
                      experts which have helped a number of students finding
                      their dream colleges. What are you waiting for? Book an
                      appointment now!
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="bookAppointment-img">
                    <img
                      src={img_bookAppointment_bg}
                      className="img-fluid"
                      alt=""
                    />
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
