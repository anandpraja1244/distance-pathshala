import { Form, InputGroup } from "react-bootstrap";
import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";

function BlogPost() {
  const editor = useRef(null);
  const config = {
    placeholder: "Start typings...",
  };
  const [videos, setVideos] = useState([]);
  const [content, setContent] = useState("");
// console.log('object :--------------------->> ', content);
  const [formAllData, setFormAllData] = useState({
    image: "",
    date: "",
    title: "",
    description: "",
    status: "1",
    // tags: "",
    textarea:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormAllData({
      ...formAllData,
      [name]: value,
    });
  };

  // const contentHandel = (e) => {
  
  //   setContent(e.target.value);
  //   console.log(e.target.value)
  // };
  // const handleChangeText =(e) => {
  //   setContent(e.target.value)
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
   const formdata = new FormData();
    formdata.append("image", formAllData.image);
    formdata.append("date", formAllData.date);
    formdata.append("title", formAllData.title);
    formdata.append("description", formAllData.description);
    formdata.append("status", formAllData.status);
    formdata.append("textarea",content);

 console.log('object :--------ffff------>> ', content);
    axios
      .post("http://localhost:5000/blog", formdata)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
   };
  // --------------------------------------------------?

  return (
    <div>
      <div className="row d-flex justify-content center">
        <div className="col-12 ">
          <section id="Apply-now">
            <div className="container-fluid">
              <div className="row d-flex justify-content-center">
                <div className="col-md-7 apply-now ">
                  <h1 className="py-2">Apply For Blog Post Page</h1>

                  <div className="applyNowForm__right">
                    <form
                      onSubmit={handleSubmit}
                      // action="/upload"
                      // method="post"
                      // enctype="multipart/form-data"
                    >
                      <div className="applyNowForm__right-formBox">
                        <div className="row">
                          <div className="col-12">
                            <Form.Group
                              className="mb-3"
                               controlId="exampleForm.ControlInput1"
                            >
                              {" "}
                              <span className="myinput">image *</span>
                              <Form.Control
                                className="py-3"
                                name="image"
                                onChange={(e) =>
                                  setFormAllData({
                                    ...formAllData,
                                    ["image"]: e.target.files[0],
                                  })
                                }
                                type="file"
                                placeholder="image"
                              />
                            </Form.Group>
                          </div>
                          <div className="col-12">
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.date2"
                            >
                              <span className="myinput">date* </span>
                              <Form.Control
                                className="py-3"
                                type="date"
                                name="date"
                                onChange={handleChange}
                                placeholder="date"
                              />
                            </Form.Group>
                          </div>
                          <div className="col-12">
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.title3"
                            >
                              <span className="myinput">Add Title*</span>
                              <Form.Control
                                className="py-3  fs-2"
                                type="text"
                                name="title"
                                onChange={handleChange}
                                placeholder="title"
                              />
                            </Form.Group>
                          </div>
                          {/* .....................................vedio/media.............................. */}
                          <div className="col-12">
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.tags4"
                            >
                              <span className="myinput">Tags Add*</span>
                              <Form.Control
                                className="py-3"
                                type="text"
                                name="tags"
                                onChange={handleChange}
                                placeholder="tags"
                              />
                            </Form.Group>
                          </div>
                          <div className="col-12">
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.Upload5"
                            >
                              <span htmlFor="videos">Upload Videos</span>
                              <Form.Control
                                type="file"
                                name="videos"
                                id="videos"
                                multiple
                                placeholder="vedio upload"
                                className=" py-3"
                                accept=".mp4, .mkv"
                                onChange={(e) => {
                                  setVideos(e.target.files);
                                }}
                              />
                            </Form.Group>
                          </div>

                          <div className="col-12">
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.content6"
                            >
                              <span className="myinput">TextArea*</span>
                              <JoditEditor
                                ref={editor}
                                value={content}
                                config={config}
                                tabIndex={7} // tabIndex of textarea
                                // onChange={contentHandel}
                               onBlur={(newContent) => setContent(newContent)}
                              />
                            </Form.Group>
                          </div>
                          {/* ................................................................... */}
                          <div className="col-12">
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.descriptions7"
                            >
                              <span className="myinput">
                                Meta descriptions*
                              </span>
                              <Form.Control
                                as="textarea"
                                name="description"
                                onChange={handleChange}
                                rows={3}
                                placeholder=" start typing"
                              />
                            </Form.Group>
                          </div>

                          <div className="col-12 btnBox text-center">
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
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
