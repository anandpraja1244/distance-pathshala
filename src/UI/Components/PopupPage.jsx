import React, { useEffect, useState } from "react";
import { Modal, Form } from "react-bootstrap";
import Request from "../../assets/scripts/API/Request";

function PopupPage({ setChangeUrl, changeUrl }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await Request.postOne({
      name: fullName,
      email: email,
      phone: mobile,
      course: course,
    
    });
    if (response.status === 200) {
      alert(`We've received your query. Our Counslor will contact you soon.`);
    }
  }
  return (
    <div>
      <Modal
        show={changeUrl}
        onHide={() => setChangeUrl(false)}
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="applyNowForm__right-formBox">
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
                <div className="col-12">
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
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PopupPage;
