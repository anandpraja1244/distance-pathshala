import React, { useContext } from "react";
// images
//banner
import bannerImg from "../../assets/images/home/banner-image.png";
import img_homeBanner_find from "../../assets/images/home/homeBannerFind.svg";
import img_homeBanner_compare from "../../assets/images/home/homeCompare.svg";
import img_homeBanner_consult from "../../assets/images/home/homeConsult.svg";
import img_homeBanner_apply from "../../assets/images/home/homeApply.svg";
import Carousel from "react-bootstrap/Carousel";
// react bootstrap
import { Button, Form, InputGroup, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Common from "../../assets/scripts/API/Common";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import URLMapping from "../../Context/URLs";
import Search from "../../assets/images/process/search.svg";
import TextInput from "react-autocomplete-input";
import "react-autocomplete-input/dist/bundle.css";
import { DATA_LAYER } from "../../App";
import { DropDownCoursesData } from "../../data/dropdownData";
// import BannerForm from "../wizardform/bannerform";

import icon_comparison from "../../assets/images/header/comparison.svg";


export default function HomeBanner({
  label,
  pholder,
  data,
  onSelected,
  onChange,
}) {
  
  const {
    setActiveFilter,
    addFilter,
    seolist,
    majorlist,
    statustypelist,
    eligibilitytypelist,
    coursetypelist,
    compareCollegeArr,
    statetypelist,
  } = useContext(DATA_LAYER);
  // const { compareCollegeArr, seolist, addFilter } = useContext(DATA_LAYER);
  const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      // const res = await Common.getFilters();
      // addFilter(res);
    };
  }, []);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [activeCourseId, setActiveCourseId] = useState("");
  const [activeQualId, setActiveQualId] = useState("");
  const [filteredMajorArr, setFilteredMajorArr] = useState([]);
  const [activeMajorId, setActiveMajorId] = useState("");
  const [activeStateId, setActiveStateId] = useState("");

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

  useEffect(() => {
    const filteredArr = majorlist.filter(
      (arrItem) =>
        arrItem.elid === Number(activeQualId) &&
        arrItem.clid === Number(activeCourseId)
    );
    setFilteredMajorArr(filteredArr);
  }, [activeCourseId, activeQualId]);

  function handleSearch() {
    setActiveFilter({
      clid: activeCourseId,
      elid: activeQualId,
      mlid: activeMajorId,
      slid: activeStateId,
    });
    history.push(`${URLMapping.findCourse.label}`);
  }

  //
  {
    const [suggestions, setSugesstions] = useState([]);
    const [isHideSuggs, setIsHideSuggs] = useState(false);
    const [selectedVal, setSelectedVal] = useState("");

    const handler = (e) => {
      setSugesstions(data.filter((i) => i.startsWith(e.target.value)));
    };

    const handleChange = (e) => {
      const input = e.target.value;
      setIsHideSuggs(false);
      setSelectedVal(input);
      onChange(input);
    };

    const hideSuggs = (value) => {
      onSelected(value);
      setSelectedVal(value);
      setIsHideSuggs(true);
    };
  }
  const router = useHistory()
  const [subCourse, setSubCourse] = useState([]);
  const [special, setSpecial] = useState([]);
  const [redUrl, setUrl] = useState('');
  const handleSubcourse =(val) =>{
    const sub = DropDownCoursesData.find(x => x.value === val);
    if(sub){
      setSubCourse(sub.subCourses)
    }
  }
  const handleSpecial =(val) =>{
    const sub = subCourse.length?subCourse.find(x => x.value === val): undefined;
    // console.log('first---------------->', sub)
    if(sub){
      setSpecial(sub.specialization)
    }
  }

  const redirectHandler = () => router.push(redUrl)
  return (
    <>
      <div className="banner-image">
        <div className="container text-center py-5">
        <div className="text-end">
         <div className="header__compareWrapper">
                      <Link
                        to={URLMapping.compare.label}
                        className="compareBtn"
                      >
                        <span className="compareBtn__text">
                          {/* <img
                            src={icon_comparison}
                            className="img-fluid"
                            alt=""
                          /> */}
                          <span className="compareBtn__text">Compare</span>
                        </span>
                        <span className="compareBtn__count">
                          {compareCollegeArr ? compareCollegeArr.length : 0}
                        </span>
                      </Link>
                    </div>
         </div>
          {/* <h1 className="mt-2">Empower</h1> */}
          <p className="py-2">
           <span className="search"> Search Over 50+ Universities in India </span>
          </p>
          <p className="genuine_univer">Genuine University Comparison & Free Expert Counselling</p>
        
          <div class="row p-3">
            <div class="col-md-6 my-2">
              <select class="form-select rounded" onChange={(e) => handleSubcourse(e.target.value)}>
              <option >Level</option>
              {DropDownCoursesData.map(x => <option key={x.value} value={x.value}>{x.name}</option>)}
                
              </select>
            </div>
            <div class="col-md-6 my-2">
            
              <select class="form-select rounded" onChange={(e) => handleSpecial(e.target.value)}>
              <option >Course</option>
              {subCourse.map(x => <option key={x.value} value={x.value}>{x.name}</option>)}
              </select>
            </div>
          </div>
          <div class="row p-3">
            <div class="col-md-9 my-2">
              <select class="form-select rounded"  onChange={(e) => setUrl(e.target.value)}>
              <option >Specealization </option>
                  {special.map(x => <option key={x.value} value={x.url}>{x.name}</option>)}
              </select>
            </div>
            <div class="col-md-3 my-2">
              <div class="compareFindFilter__btn ">
                <button class="find-button height" onClick={redirectHandler}>Search Now</button>
              </div>
            </div>
          </div>
         <div className="row d-flex justify-content-center ">
          <div className="col-md-10 col-12 ">
          <div className="row text-white collagenamewidth" id="collage_section">
          {/* <div className="col-md-1 col-6"> MCA   <span className="collegeCourse">   &nbsp; |</span></div> */}
          <div className="col-md-1 "> MCA  </div>|
            <div className="col-md-1 ">  MBA  </div>|
            <div className="col-md-1 "> M.Com  </div>|
            <div className="col-md-1 "> MA </div>|
            <div className="col-md-1  mx-2">  M.Tech   </div>|
            <div className="col-md-1 ">  M.Sc </div>|
            <div className="col-md-1 ">  B.Com   </div>|
            <div className="col-md-1 ">  BA   </div>|
            <div className="col-md-1 ">  B.Tech </div>|
            <div className="col-md-1 ">  BBA  </div>|
            <div className="col-md-1 ">  BCA </div>
            
          </div>
          </div>
         </div>
        </div>
      </div>
    </>
  );
}
