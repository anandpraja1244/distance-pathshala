// react components
import React, { useContext, useEffect, useState } from "react";
import { Form, Nav } from "react-bootstrap";
import { DATA_LAYER } from "../../App";

// api
import Common from "../../assets/scripts/API/Common";
import Helmet from "react-helmet";

export default function CompareFindFilter() {

  const location = window.location.pathname
  const isCourseList = location === '/courses/list'
  // context
  const {
    statetypelist,
    coursetypelist,
    activeFilter,
    eligibilitytypelist,
    majorlist,
    setActiveFilter,
    triggerSearch,
  } = useContext(DATA_LAYER);

  // getting filter list

  const [filteredMajorArr, setFilteredMajorArr] = useState([]);

  // filter based by clid , elid
  useEffect(() => {
    const filteredArr = majorlist.filter(
      (arrItem) =>
        arrItem.elid === Number(activeFilter.elid) &&
        arrItem.clid === Number(activeFilter.clid)
    );
    setFilteredMajorArr(filteredArr);
  }, [activeFilter.elid, activeFilter.clid]);

  // change filter after selection
  function changeFilter(filterObj) {
    setActiveFilter({ ...activeFilter, ...filterObj });
  }

  const styles = {
    compareFindFilter:{
      display: "block",
    }
  };

  return (
    <>

{isCourseList?<div className="">
      <div className="find-yours compareFindFilter py-4" style={styles.compareFindFilter} >
        <div className="container">
          <div className="compareFindFilter__title pt-2">
            <h2 className="f-700 pt-3">Find Here </h2>
            <p>Colleges and Genuine Comparison, Absolutely Free!!</p>
          </div>
          <div className="row p-3">
  <div className="col-md-6">
    <select className="form-select rounded">
      <option value="0">Qualification</option>
      <option value="2">12th</option>
      <option value="3">Graduation</option>
    </select>
  </div>
  <div className="col-md-6">
    <select className="form-select rounded">
      <option value="0">Course</option>
      <option value="2">Commerce</option>
      <option value="3">Arts</option>
      <option value="4">Information Technology (IT)</option>
      <option value="5">Management</option>
      <option value="6">Computer Applications</option>
      <option value="7">Diploma and Certificate</option>
    </select>
  </div>
  </div>
  <div className="row p-3">
    <div className="col-md-9">
      <select className="form-select rounded" >
        <option value="0">Specialization</option>
        <option value="2">Commerce</option>
        <option value="3">Arts</option>
        <option value="4">Information Technology (IT)</option>
        <option value="5">Management</option>
        <option value="6">Computer Applications</option>
        <option value="7">Diploma and Certificate</option>
      </select>
    </div>
    <div className="col-md-3">
      <div className="compareFindFilter__btn text-center ">
        <button className="find-button height">Search Now</button>
      </div>
    </div><br></br>
  </div>
        </div>
    
      </div>
      </div>:null}

    </>
  );
}


