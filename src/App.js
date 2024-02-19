import React, { useState } from "react";
// dependency
// import { useEffect } from "react";
import { createContext, useEffect, useReducer } from "react";
import { Switch, Route, Redirect, useLocation ,useHistory} from "react-router-dom";

// react bootstrap
// import { Container } from "react-bootstrap";

// styles
import "./assets/styles/scss/global.css";
import "./assets/styles/scss/style.css";


// pages
import Home from "./UI/Pages/Home";
import Compare from "./UI/Pages/Compare";
import CollegeRowList from "./UI/Pages/CollegeRowList";
import CollegeDetail from "./UI/Pages/CollegeDetail";
import AboutUs from "./UI/Pages/AboutUs";
import CourseDetail from "./UI/Pages/CourseDetail";
import ContactUs from "./UI/Pages/ContactUs";
import ApplyNow from "./UI/Pages/ApplyNow";
import BookAppointment from "./UI/Pages/BookAppointment";
import Blog from "./UI/Pages/Blog";
import FindCourse from "./UI/Pages/FindCourse";
import FoundationPage from "./UI/Components/_FoundationPage";
import PopupPage from "./UI/Components/PopupPage";
import BlogPage from "./UI/Components/coursedesc/BlogPage";
import BlogPost from "./UI/Components/coursedesc/BlogPost";
import Textarea from "./UI/Components/coursedesc/TextArea";
import BlogAuthenticUserpage from "./UI/Components/coursedesc/BlogAuthenticUserpage";
// import CorporateCommunications from "./UI/Components/certificate/CorporatecCommunications";
import ProjectManagement from "./UI/Components/coursedesc/_CourseListDesc_CERT_project_management.jsx";

// Context
import { reducer } from "./Context/Reducer";
import { initialState } from "./Context/InitialState";
import URLMapping from "./Context/URLs";
import ViewAllpage from "./UI/Pages/ViewAllpage";
import ViewAllPgpage from "./UI/Pages/viewallpgpage";

//  Context
export const DATA_LAYER = createContext();

function App() {
	// context
	const [state, dispatch] = useReducer(reducer, initialState);
	const [changeUrl,setChangeUrl]=useState(false);
	const location=useLocation()

	function addCompare(data) {
		return dispatch({
			type: "ADD_COMPARE",
			payload: data,
		});
	}

	function removeCompare(data) {
		return dispatch({
			type: "REMOVE_COMPARE",
			payload: data,
		});
	}

	function addAllCollege(data) {
		return dispatch({
			type: "ADD_ALL_COLLEGE",
			payload: data,
		});
	}

	function addFilter(data) {
		return dispatch({
			type: "ADD_FILTER_LIST",
			payload: data,
		});
	}

	function setActiveFilter(data) {
		return dispatch({
			type: "SET_ACTIVE_FILTER",
			payload: data,
		});
	}

	function reInitState() {
		return dispatch({
			type: "REINIT_STATE",
		});
	}

	function triggerSearch() {
		return dispatch({
			type: "TRIGGER_SEARCH",
		});
	}

	useEffect(() => {
		reInitState();
	}, []);

	//for open popup
	useEffect(() => {
		setTimeout(()=>{
			setChangeUrl(true)
		},3000)

		// setTimeout(()=>{
		// 	setChangeUrl(true)
		// },5000)
	
	}, [location.pathname]);
	return (
		<>

			{/* <PopupPage setChangeUrl={setChangeUrl} changeUrl={changeUrl} /> */}
			{state.isStateInitiated && (
				<DATA_LAYER.Provider value={{ ...state, addCompare, removeCompare, addAllCollege, addFilter, setActiveFilter, triggerSearch }}>
					<Switch>
						<Route path={URLMapping.home.label} component={Home} exact />
						<Route path={URLMapping.compare.label} component={Compare} exact />
						<Route path={URLMapping.collegeDetail.label} component={CollegeDetail} />
						<Route path={URLMapping.courseDetail.label} component={CourseDetail} />
						<Route path={URLMapping.aboutUs.label} component={AboutUs} />
						<Route path={URLMapping.contactUs.label} component={ContactUs} />
						<Route path={URLMapping.courseList.label} component={CollegeRowList} />
						<Route path={URLMapping.applyNow.label} component={ApplyNow} />
						<Route path={URLMapping.coursesPG.label} component={CollegeRowList} />
						<Route path={URLMapping.coursesUG.label} component={CollegeRowList} />
						<Route path={URLMapping.bookAppointment.label} component={BookAppointment} />



						<Route path={URLMapping.certificate.project_management} component={ProjectManagement} />
						<Route path={URLMapping.certificate.corporatecommunication} component={BookAppointment} />
						<Route path={URLMapping.certificate.about} component={BookAppointment} />


						{/* <Route path={URLMapping.Certificate.Corporatecommunication} component={CorporateCommunications} />
						<Route path={URLMapping.Certificate.Projectmanagement} component={Project_management} /> 
						<Route path={"/blog"} component={Blog} />
						<Route path={"/findCourse"} component={FindCourse} />
						<Route path={"/ViewAllpage"} component={ViewAllpage} />
						<Route path={"/viewallpgpage"} component={ViewAllPgpage} />

						{/* new Page Add................. */}
						<Route path={"/FoundationPage"} component={FoundationPage} />
						<Route path={"/blogpage"} component={BlogPage} />
						<Route path={"/BlogPost"} component={BlogPost} />
						<Route path={"/BlogAuthenticUserpage"} component={BlogAuthenticUserpage} />
						{/* <Route path={"/Textarea"} component={Textarea} /> */}
                        <Route path={"/"} component={Home} />
						<Route path="*" component={Home} />
						
					</Switch>
				</DATA_LAYER.Provider>
			)}
		
		</>
	);
}

export default App;
