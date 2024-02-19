// react components
import { useContext, useEffect, useRef, useState } from "react";
import React from "react";

//  images
import img_ignou from "../../assets/images/university/ignouIcon.png";
import pune from "../../assets/images/UniversityLogo/77.svg";

// icons
import icon_univCap from "../../assets/images/icons/graduation-cap.svg";
import icon_location from "../../assets/images/icons/your-location.svg";
import icon_clock from "../../assets/images/icons/clock.svg";
import icon_check from "../../assets/images/icons/checkIcon.svg";
import icon_close from "../../assets/images/icons/closeIcon.svg";
import icon_compare from "../../assets/images/icons/comparison.svg";
import icon_info from "../../assets/images/course/infoIcon.png";
import { DATA_LAYER } from "../../App";
import { Link } from "react-router-dom";
import URLMapping from "../../Context/URLs";
import {
  Overlay,
  Button,
  Tooltip,
  Popover,
  Table,
  Div,
  Modal,
} from "react-bootstrap";
import Outlook from "../../assets/images/process/outlook.png";
import ReadMore from "../../assets/images/process/ReadMore.png";
import Addbutton from "../../assets/images/process/addcompaise.png";
import Veryfy from "../../assets/images/process/veryfy.svg";
import Location from "../../assets/images/process/location.svg";
import Info from "../../assets/images/modal/know.svg";
import ApplynowButton from "../../assets/images/process/ApplynowButton.svg";
import modall from "../../assets/images/BA/modal.svg";
import AddToCompare from "../../assets/images/modal/addToCompare.svg";
import Viewmore from "../../assets/images/modal/viewmore.svg";
import Aplynow from "../../assets/images/modal/aplynow.svg";
import Salebus from "../../assets/images/modal/salabus.svg";

export default function CollegeCardRow({ ...args }) {
  // context
  const { addCompare, removeCompare, compareCollegeArr, compareLimit } =
    useContext(DATA_LAYER);
  const [isInCompare, setIsInCompare] = useState(false);

  const [collegeId, setCollegeId] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [estd, setESTD] = useState("-");
  const [location, setLocation] = useState("location");
  const [currentSession, setCurrentSession] = useState("_");
  const [nextSession, setnextSession] = useState("-");
  const [policy, setPolicy] = useState("-");
  const [intCollab, setIntCollab] = useState("No");
  const [rank_outlook, setRank_outlook] = useState("");
  const [rank_indiaToday, setRank_indiaToday] = useState("");
  const [minFee, setMinFee] = useState("0");
  const [maxFee, setMaxFee] = useState("0");
  const [totalFee, setTotalFee] = useState("-");
  const [approved, setApproved] = useState({});
  const [naacRating, setNAACRating] = useState("");
  const [NAACCGPA, setNAACCGPA] = useState("");
  const [name, setName] = useState("");
  const [courseArr, setCourseArr] = useState(["NA"]);
  useEffect(() => {
    setCollegeId((_id) => args.uid);
    setCollegeName(args.name);
    setESTD(args.estb);
    setLocation(args.city);
    setCurrentSession(args.currentadmissionsession);
    setnextSession(args.nextadmissionsession);
    setPolicy(args.policytype);
    setIntCollab(args.hasintcollaboration);
    if (args.ranking && args.ranking.length > 0) {
      for (const rankItem of args.ranking) {
        if (rankItem.authority === "outlook") {
          setRank_outlook({
            rank: rankItem.ranking ? rankItem.ranking : 0,
            year: rankItem.rankingyear,
          });
          continue;
        }
        if (rankItem.authority === "India Today Group") {
          setRank_indiaToday({
            rank: rankItem.ranking ? rankItem.ranking : 0,
            year: rankItem.rankingyear,
          });
        }
      }
    }
    setMinFee(Number(args.minfees).toLocaleString("en-IN"));
    setMaxFee(Number(args.maxfees).toLocaleString("en-IN"));
    setApproved({
      aiu: args.aiuapproved,
      aict: args.aicteapproved,
      deb: args.debapproved,
      dec: args.decapproved,
      ugc: args.ugcapproved,
    });
    setNAACRating(args.naacrating);
    setNAACCGPA(args.naaccgpa);

    // course
    if (args.courses && args.courses.length > 0) {
      let courses = [];
      setTotalFee(args.courses[0].totalfee);
      for (const arrObj of args.courses) {
        courses.push(arrObj.name);
        if (courses.length >= 5) break;
      }
      setCourseArr(courses);
    }
    
    // collaborations

    if (args.collaborations && args.collaborations.length > 0) {
      let collaborations = [];
      setName(args.collaborations[0].name);
    }

    // check in compare
    setIsInCompare(compareCollegeArr.includes(args.uid));
  }, []);

  function addToCompare() {
    if (isInCompare) {
      removeCompare(args.uid);
      return;
    }
    if (compareCollegeArr.length >= compareLimit) {
      alert("Compare Limit is 4");
      return;
    }
    addCompare(args.uid);
  }

  //

  return (
    <>
      <hr></hr>
      <Table responsive>
        <thead>
          <tr
            className="find"
            style={{ display: args.isHeadShow ? "contents" : "none" }}
          >
            <th className="">UNIVERSITY</th>
            <th>
              <Example />
              APPROVED BY
            </th>
            <th>FEE</th>
            <th>INT. COLLABORATION</th>
            <th>RANKING</th>
            <th>Action Button</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center " id="Fee">
            <td id="shado">
              <div className="collegeCardRow__sectionBody mt-2 pt-2">
                <div className="collegeCardRow__university">
                  <div className="collegeCardRow__universityTitle">
                    <img
                      src={`${process.env.PUBLIC_URL}/static/media/${collegeId}.svg`}
                      className="img-fluid w-100"
                      alt=""
                    />

                    <span>
                      <Link to={"/college/detail/" + collegeId}>
                        {collegeName}
                      </Link>
                    </span>
                  </div>
                  <div className="collegeCardRow__universityRow">
                    <div className="collegeCardRow__universityCol6">
                      <img src={Veryfy} className="img-fluid" alt="" />
                      &nbsp;
                      <span className="pt-2 pb-2">ESTD. {estd}</span>
                    </div>
                    <div className="collegeCardRow__universityCol6">
                      <img src={Location} className="img-fluid" alt="" />
                      &nbsp;
                      <span>{location}</span>
                    </div>
                  </div>
                  <div className="collegeCardRow__universityMode">
                    <span>
                      <span className="label">Mode</span> : Online & Distance
                    </span>
                  </div>
                  <div className="">
                    <button
                      className=" mt-4
                  style-none"
                    >
                      {" "}
                      <img src={ApplynowButton} className="img-fluid" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="collegeCardRow__sectionBody mt-3">
                <div className="collegeCardRow__approved">
                  <div className="collegeCardRow__approvedList">
                    <div className="collegeCardRow__approvedListItem">
                      <span>AIU</span>
                      {/* <img
                        src={approved.aiu === 1 ? icon_check : icon_close}
                        className="img-fluid"
                        alt=""
                      /> */}
                    </div>
                    <div className="collegeCardRow__approvedListItem">
                      <span>DEB</span>
                      {/* <img
                        src={approved.deb === 1 ? icon_check : icon_close}
                        className="img-fluid"
                        alt=""
                      /> */}
                    </div>
                    <div className="collegeCardRow__approvedListItem d-none">
                      <span>DEC</span>
                      {/* <img
                        src={approved.dec === 1 ? icon_check : icon_close}
                        className="img-fluid"
                        alt=""
                      /> */}
                    </div>
                    <div className="collegeCardRow__approvedListItem">
                      <span>UGC</span>
                      {/* <img
                        src={approved.ugc === 1 ? icon_check : icon_close}
                        className="img-fluid"
                        alt=""
                      /> */}
                    </div>
                  </div>
                  <div className="collegeCardRow__naac">
                    <h4>NAAC ACCREDITATION</h4>
                    <div>
                      <p>
                        {naacRating}
                        {NAACCGPA}(CGPA)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  {/* <Link
                    to={"/college/detail/" + collegeId}
                    className="btn collegeCardRow__sectionBtn collegeCardRow__sectionBtnDetail me-1"
                  >
                    <img src={ReadMore} className="img-fluid" alt="" />
                  </Link> */}
                </div>
              </div>
            </td>
            <td className="f-500">
              <p className="mt-5">{totalFee ? totalFee + " INR" : "-"} </p>
          <p>{}</p>
              
            
            </td>
            <td className="f-500">
              <p className="mt-5">{name ? name + " " : "-"} </p>
            </td>
            <td className="Approved">
              <div className="collegeCardRow__section">
                <div className="collegeCardRow__sectionBody">
                  <div className="collegeCardRow__rank">
                    <div className="collegeCardRow__rankItem d-flex">
                      <div className="collegeCardRow__rankCircle">
                        <span>{rank_outlook.rank}</span>
                      </div>
                      <div className="collegeCardRow__rankText">
                        <p className="pt-1 mt-2">
                          Outlook &nbsp; {rank_outlook.year}
                        </p>
                      </div>
                    </div>
                    <div className="collegeCardRow__rankItem d-flex mt-2">
                      <div className="collegeCardRow__rankCircle">
                        <span>{rank_indiaToday.rank}</span>
                      </div>
                      <div className="collegeCardRow__rankText">
                        <p className="pt-1 mt-2">
                          India Today &nbsp; {rank_indiaToday.year}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td id="course" className="pt-4">
              {/* <div style={{ width: "100%" }}>
                {courseArr.map((arrObj) => {
                  return <p key={Math.random()}>{arrObj}</p>;
                })}
              </div> */}

              {/* apply now */}

              {/* close */}
              <div className="my-2 border-0">
                <button
                  className={
                    "collegeCardRow__sectionBtn collegeCardRow__sectionBnCompare " +
                    (isInCompare
                      ? "collegeCardRow__sectionBnCompare--active"
                      : "")
                  }
                  onClick={addToCompare}
                >
                  <img src={AddToCompare} className="img-fluid" alt="" />
                </button>

                <Link to={"/apply-now"}>
                  <button className="my-2 border-0">
                    <img src={Aplynow} className="img-fluid" alt="" />
                  </button>
                </Link>

                <Link
                  to={"/college/detail/" + collegeId}
                  className="collegeCardRow__sectionBtn collegeCardRow__sectionBtnDetail me-1"
                >
                  {" "}
                  <button className="my-2 border-0">
                    <img src={Viewmore} className="img-fluid" alt="" />
                  </button>
                </Link>

                <button className="my-2 border-0">
                  <img src={Salebus} className="img-fluid" alt="" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

function Example() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const handleClose = () => setShow(false);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref} className="infoBtn">
      <button onClick={handleClick} className="knowbutton">
        <img src={Info} />
      </button>

      <Modal
        show={show}
        target={target}
        placement="top"
        container={ref}
        containerPadding={20}
        id="popover-contained"
        {...ref}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <img src={modall} className="w-100" />
          </Modal.Body>
        </Modal>
      </Modal>
    </div>
  );
}
