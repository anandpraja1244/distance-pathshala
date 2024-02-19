import React from "react";
import CompareFindFilter from "../Components/_CompareFindFilter";
import CompareTalkExpert from "../Components/_CompareTalkExpert";
import Footer from "../Components/_Footer";
import Header from "../Components/_Header";
import HomeNewsBlog from "../Components/_HomeNewsBlog";
import Apply from "../../assets/images/process/apply.png";
import Male from "../../assets/images/process/male.png";
import Female from "../../assets/images/process/woman.png";
import Businessadministration from "../Components/coursedesc/Businessadministration";

// icons
import img_applyNow from "../../assets/images/applyNow/applyNow.svg";
import img_applyNowForm_left from "../../assets/images/applyNow/applyNow_bgLeft.png";
import { Form, InputGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import Request from "../../assets/scripts/API/Request";
import Helmet from "react-helmet";

// react bootstrap

export default function Blog() {
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
      <CompareFindFilter />
   
<Businessadministration/>
      <CompareTalkExpert />
      <HomeNewsBlog />
      <Footer />
    </>
  );
}
