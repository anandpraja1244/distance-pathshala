import React from "react";
import Header from "../Components/_Header";
import HomeBanner from "../Components/_HomeBanner";
import HomeProcess from "../Components/_HomeProcess";
import HomeCompare from "../Components/_HomeCompare";
import HomeExpert from "../Components/_HomeExpert";
import HomeQuickInterest from "../Components/_HomeQuickInterest";
import HomeKnowExpert from "../Components/_HomeKnowExpert";
import HomeStartEdu from "../Components/_HomeStartEdu";
import HomeStuSpeak from "../Components/_HomeStuSpeak";
import HomeNewsBlog from "../Components/_HomeNewsBlog";
import Footer from "../Components/_Footer";

// image
import icon_homeProcessBannerCover from "../../assets/images/home/blue-vector.png";
import { useEffect } from "react";
import HomeCourses from "../Components/_HomeCourses";
import HomeFilterComparison from "../Components/_HomeFilterComparison";
import HomeMobileApp from "../Components/_HomeMobileApp";

// helmet
import { Helmet } from "react-helmet";


export default function Home() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Header />
			
			<Helmet>
              
                <title>Best Online Distance Learning education University in India</title>
				<meta name="description" content="Distance Pathshala - India's Best Distance Learning Education University providing Under Graduate and Post Graduate courses" />
				<meta name="keywords" content="distance education university" />
            </Helmet>
			<div className="bannerProcessBack">
				
				<HomeBanner />
				<HomeProcess />
			</div>
			{/* <HomeCourses /> */}
			<HomeFilterComparison />
			{/* <HomeCompare /> */}
			{/* <HomeMobileApp /> */}
			<HomeExpert />
			<HomeQuickInterest />
			{/* <HomeKnowExpert /> */}
			{/* <HomeStartEdu /> */}
			{/* <HomeStuSpeak /> */}
			{/* <HomeNewsBlog /> */}
			<Footer />
		</>
	);
}
