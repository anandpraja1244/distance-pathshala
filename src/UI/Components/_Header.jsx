import React, { Children, useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import { Helmet } from "react-helmet";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Offcanvas from "react-bootstrap/Offcanvas";
// React Bootstrap
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

// icons
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

// icon images
import icon_univ from "../../assets/images/header/university.svg";
import icon_student from "../../assets/images/header/student.svg";
import icon_download from "../../assets/images/header/download.svg";
import icon_search from "../../assets/images/header/search.svg";
import icon_comparison from "../../assets/images/header/comparison.svg";
import icon_brand from "../../assets/images/brand/Option4.png";

// Context
import { DATA_LAYER } from "../../App";
import URLMapping from "../../Context/URLs";
import Common from "../../assets/scripts/API/Common";

export default function Header() {
  // const activeClassName = "navLink--active";
  const { compareCollegeArr, seolist, addFilter } = useContext(DATA_LAYER);

  const location = useLocation();

  // Meta data
  // const [metadata, setMetadata] = useState({
  //   pageTitle: "",
  //   metaTitle: "",
  //   metaKeywords: "",
  //   metaDescription: "",
  // });

  // meta data change
  // useEffect(() => {
  //   const adjustMetadata = () => {
  //     const filteredMetadataArr = seolist.filter(
  //       (obj) => obj.uri.toLowerCase() == location.pathname.toLowerCase()
  //     );
  //     if (filteredMetadataArr.length === 0) return;
  //     const metadataObj = filteredMetadataArr[0];
  //     setMetadata({
  //       pageTitle: metadataObj.pagetitle,
  //       metaTitle: metadataObj.metatitle,
  //       metaKeywords: metadataObj.metakeywords,
  //       metaDescription: metadataObj.metadescription,
  //     });
  //   };
  //   adjustMetadata();
  // }, [location, seolist]);

  useEffect(() => {
    const getData = async () => {
      const res = await Common.getFilters();
      addFilter(res);
    };
    if (seolist.length == 0) getData();
  }, []);

  return (
    seolist != null && (
      <>
        {/* <Helmet>
          <title>{metadata.metaTitle}</title>
          <meta name="keywords" content={metadata.metaKeywords} />
          <meta name="title" content={metadata.metaTitle} />
          <meta name="description" content={metadata.metaDescription} />
        </Helmet> */}
        <header className="header">
          <div className="header__top">
            <Navbar expand="lg" className="container mobile-d-none">
              <Container>
                <Navbar.Brand href="#home">
                  <div className="header__socials">
                    <ul role="list">
                      <Nav.Link
                        className="logoicon"
                        href="https://www.linkedin.com/company/distance-pathshala/"
                      >
                        <li>
                          <FaLinkedinIn color="#fff" />
                        </li>
                      </Nav.Link>
                      <Nav.Link
                        className="logoicon"
                        href="https://www.facebook.com/distancepathshala"
                      >
                        <li>
                          <FaFacebookF color="#fff" />
                        </li>
                      </Nav.Link>
                      <Nav.Link
                        className="logoicon"
                        href="https://www.instagram.com/distance_pathshala/"
                      >
                        <li>
                          <FaInstagram color="#fff" />
                        </li>
                      </Nav.Link>
                      <Nav.Link
                        className="logoicon"
                        href="https://www.youtube.com/channel/UC2t4rMv4o5O6T2YOYGK94YQ"
                      >
                        <li>
                          <FaYoutube color="#fff" />
                        </li>
                      </Nav.Link>
                    </ul>
                  </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav activeKey={location.pathname} className="ms-auto">
                    <Nav.Link href={URLMapping.home.label}>Home</Nav.Link>
                    <MultilevelDropdownC
                      title={"UG Courses"}
                      data={[
                        {
                          label: "Online & Distance BBA",
                          // URL: URLMapping.UG.BBA.label,
                          subItems: [
                            {
                              label: "BBA General",
                              URL: URLMapping.UG.BBA.bba_general,
                            },
                            {
                              label: "Engineering and Project Management",
                              URL: URLMapping.UG.BBA
                                .bba_engineeringandProjectManagement,
                            },
                            {
                              label: "Strategy and Leadership",
                              URL: URLMapping.UG.BBA.bba_strategyandLeadership,
                            },
                            {
                              label: "Travel and Tourism Management",
                              URL: URLMapping.UG.BBA
                                .bba_travelandTourismManagement,
                            },
                            {
                              label: "Logistics",
                              URL: URLMapping.UG.BBA.bba_logistics,
                            },
                            {
                              label: "Buisness Analytics",
                              URL: URLMapping.UG.BBA.bba_buisnessanalytics,
                            },

                            {
                              //   label: "Advertising and Branding",
                              //   URL: URLMapping.UG.BBA.bba_advertisingandBranding,
                              // }, {
                              label: "Retail and Sales Management",
                              URL: URLMapping.UG.BBA
                                .bba_retailandSalesManagement,
                            },
                            {
                              label: "International Business Management",
                              URL: URLMapping.UG.BBA
                                .bba_internationalBusinessManagement,
                            },
                            {
                              label: "international Marketing",
                              URL: URLMapping.UG.BBA.bba_internationalMarketing,
                            },
                            {
                              label: "IT and Systems Management",
                              URL: URLMapping.UG.BBA.bba_ITandSystemsManagement,
                            },
                            {
                              label: "Finance and Leadership",
                              URL: URLMapping.UG.BBA.bba_FinanceandLeadership,
                            },
                            {
                              label: "International Finance",
                              URL: URLMapping.UG.BBA.bba_InternationalFinance,
                            },
                            // {
                            //   label: "Aviation",
                            //   URL: URLMapping.UG.BBA.bba_aviation,
                            // },
                            {
                              label: "HRM",
                              URL: URLMapping.UG.BBA.bba_hrm,
                            },
                            {
                              label: "Finance",
                              URL: URLMapping.UG.BBA.bba_finance,
                            },
                            {
                              label: "Marketing",
                              URL: URLMapping.UG.BBA.bba_marketing,
                            },
                            {
                              label: "Banking & Finance",
                              URL: URLMapping.UG.BBA.bba_bankingFinance,
                            },
                            {
                              label: "Digital Marketing",
                              URL: URLMapping.UG.BBA.bba_digitalMarketing,
                            },
                            {
                              label: "Data Science and Analytics",
                              URL: URLMapping.UG.BBA.bba_dataScienceAnalytics,
                            },
                            {
                              label: "Multimedia Management",
                              URL: URLMapping.UG.BBA.bba_multimediaManagement,
                            },
                            {
                              label: "Advertising and Branding ",
                              URL: URLMapping.UG.BBA.bba_advertisingandBranding,
                            },
                            {
                              label: " Advertisement and Marketing",
                              URL: URLMapping.UG.BBA.bba_advertisementBranding,
                            },
                          ],
                        },
                        {
                          label: "Online & Distance B.Com",
                          // URL: URLMapping.UG.BCom.label,
                          subItems: [
                            {
                              label: "B.Com General",
                              URL: URLMapping.UG.BCom.bcom_general,
                            },
                            {
                              label: "Accouting and Finance",
                              URL: URLMapping.UG.BCom.bcom_AccountFinance,
                            },
                            {
                              label: "International Finance",
                              URL: URLMapping.UG.BCom.bcom_internationalFinance,
                            },
                            {
                              label: "Professional Accounting and Finance",
                              URL: URLMapping.UG.BCom
                                .bcom_professionalAccountingFinance,
                            },
                            {
                              label: "Banking Fincance",
                              URL: URLMapping.UG.BCom.bcom_bankingFinance,
                            },
                            {
                              label: "FinTech",
                              URL: URLMapping.UG.BCom.bcom_finTech,
                            },
                            {
                              label: "Hindi",
                              URL: URLMapping.UG.BCom.bcom_hindi,
                            },
                            {
                              label: "Auditing",
                              URL: URLMapping.UG.BCom.bcom_auditing,
                            },
                            {
                              label: "Stock Market Operations",
                              URL: URLMapping.UG.BCom.bcom_stockMarket,
                            },
                            {
                              label: "Law",
                              URL: URLMapping.UG.BCom.bcom_law,
                            },
                            {
                              label: "International Business",
                              URL: URLMapping.UG.BCom
                                .bcom_internationalBusiness,
                            },
                            {
                              label: "Behavioural Finance",
                              URL: URLMapping.UG.BCom.bcom_behaviouralFinance,
                            },
                            {
                              label: "Banking and Insurance",
                              URL: URLMapping.UG.BCom.bcom_banking,
                            },
                            // •	Stock Market Operations /complete
                            // •	Law                     /complete
                            // •	Business Analytics      /complete
                            // •	International Business  /complete
                            // •	Behavioural Finance     /complete
                            // •	Banking and Insurance   /complete
                          ],
                        },
                        {
                          label: "Online & Distance BA",
                          URL: URLMapping.UG.BA.label,
                          subItems: [
                            {
                              label: "BA General",
                              URL: URLMapping.UG.BA.ba_general,
                            },
                            {
                              label: "Journalism and Mass Communication",
                              URL: URLMapping.UG.BA
                                .ba_JournalismandMassCommunication,
                            },
                            {
                              label: "Hindi",
                              URL: URLMapping.UG.BA.ba_hindi,
                            },
                            {
                              label: "Economics",
                              URL: URLMapping.UG.BA.ba_economics,
                            },
                            {
                              label: "Tourism Administrator",
                              URL: URLMapping.UG.BA.ba_TourismAdministrator,
                            },
                          ],
                        },

                        {
                          label: "Online & Distance BCA",
                          // URL: URLMapping.UG.BCA.label,
                          subItems: [
                            {
                              label: "BCA General",
                              URL: URLMapping.UG.BCA.bca_General,
                            },
                            {
                              label: "Database Management System",
                              URL: URLMapping.UG.BCA
                                .bca_DatabaseManagementSystem,
                            },
                            {
                              label: "Data Science and Big Data Analytics",
                              URL: URLMapping.UG.BCA
                                .bca_DataScienceandBigDataAnalytics,
                            },
                            {
                              label: "Multimedia and Animation",
                              URL: URLMapping.UG.BCA.bca_MultimediaandAnimation,
                            },
                            {
                              label: "Data Analytics",
                              URL: URLMapping.UG.BCA.bca_DataAnalytics,
                            },
                            {
                              label:
                                "Artificial Intelligence and Machine Learning",
                              URL: URLMapping.UG.BCA.bca_AIandMachineLearning,
                            },
                            {
                              label: "Cloud and Security",
                              URL: URLMapping.UG.BCA.bca_CloudandSecurity,
                            },
                            {
                              label: "Cyber Security",
                              URL: URLMapping.UG.BCA.bca_CyberSecurity,
                            },
                          ],
                        },

                        {
                          label: "B Tech for Working Professionals",

                          subItems: [
                            {
                              label: "B Tech General",
                              URL: URLMapping.UG.BTECH.btech_General,
                            },
                            {
                              label: "Mechanical Engineering",
                              URL: URLMapping.UG.BTECH
                                .btech_mechincalEngineering,
                            },
                            {
                              label: "Computer Science Engineering",
                              URL: URLMapping.UG.BTECH
                                .btech_computerScienceEngineering,
                            },
                            {
                              label: "Electrical Engineering",
                              URL: URLMapping.UG.BTECH
                                .btech_electricalEngineering,
                            },
                            {
                              label: "Civil Engineering",
                              URL: URLMapping.UG.BTECH.btech_civilEngineering,
                            },
                            {
                              label: "Electronics Communication Engineering",
                              URL: URLMapping.UG.BTECH
                                .btech_electronicsCommunicationEngineering,
                            },
                            {
                              label: "Machanical automobile Engineering",
                              URL: URLMapping.UG.BTECH
                                .btech_machanicalAutomobileEngineering,
                            },
                          ],
                        },
                        // {
                        //   label: "Suggest me a University",
                        //   URL: "#",
                        // },
                        {
                          label: "View all",
                          URL: "/ViewAllpage",
                        },
                      ]}
                    />
                    <MultilevelDropdownC
                      title={"PG Courses"}
                      data={[
                        {
                          label: "Online & Distance MBA",
                          URL: URLMapping.PG.MBA.label,
                          //new task
                          subItems: [
                            {
                              label: "MBA General",
                              URL: URLMapping.PG.MBA.mba_generals,
                            },
                            {
                              label: "Finance Management",
                              URL: URLMapping.PG.MBA.mba_finance,
                            },
                            {
                              label: "HR Management",
                              URL: URLMapping.PG.MBA.hr_management,
                            },
                            {
                              label: "Hospitality Management",
                              URL: URLMapping.PG.MBA.hospitalitymanagement,
                            },
                            {
                              label: "Marketing Management",
                              URL: URLMapping.PG.MBA.mba_marketing,
                            },
                            {
                              label: "Banking & Finance Management",
                              URL: URLMapping.PG.MBA.mba_bankingFinance,
                            },
                            {
                              label: "Marketing and Finance Management",
                              URL: URLMapping.PG.MBA.mba_marketingFinance,
                            },
                            {
                              label: "Information Technology Management",
                              URL: URLMapping.PG.MBA.mba_informationTechnology,
                            },
                            {
                              label: "Logistics and Supply Chain Management",
                              URL: URLMapping.PG.MBA.mba_logisticSupplyChain,
                            },
                            {
                              label: "Marketing and HR Management",
                              URL: URLMapping.PG.MBA.mba_marketingHR,
                            },
                            {
                              label: "Operations Management",
                              URL: URLMapping.PG.MBA.operationsmanagement,
                            },
                            // {
                            //   label: "Data Science and Analytics Management",
                            //   URL: URLMapping.PG.MBA.mba_advertisementBranding,
                            // },
                            {
                              label: "Data Science and Analytics Management",
                              URL: URLMapping.PG.MBA.mba_dataScienceAnalytics,
                            },
                            {
                              label: "Business Analytics",
                              URL: URLMapping.PG.MBA.buisnessanalytics,
                            },
                            {
                              label: "HRM and Finance Management",
                              URL: URLMapping.PG.MBA.hrm_financeManagement,
                            },
                            {
                              label: "Healthcare  Management",
                              URL: URLMapping.PG.MBA.healthcareManagement,
                            },
                            {
                              label: "Digital  Marketing E Commerce Management",
                              URL: URLMapping.PG.MBA.digitalMarketingManagement,
                            },
                            {
                              label: "Buisness Management",
                              URL: URLMapping.PG.MBA.mba_buisnessmanagement,
                            },
                            {
                              label: "International Business Management",
                              URL: URLMapping.PG.MBA
                                .internationalBussinessManagement,
                            },
                            {
                              label: "Project Management",
                              URL: URLMapping.PG.MBA.mba_project_Management,
                            },
                            {
                              label: "Finance And Leadership Management",
                              URL: URLMapping.PG.MBA.mba_financeLeadership,
                            },
                            {
                              label: "Financial Markets Management",
                              URL: URLMapping.PG.MBA
                                .mba_financial_markets_Management,
                            },
                            {
                              label: "General Management",
                              URL: URLMapping.PG.MBA.mba_general,
                            },
                            {
                              label: "Banking Financial Service Insurence",
                              URL: URLMapping.PG.MBA
                                .mba_banking_financial_service_Insurence,
                            },
                            {
                              label: "Entrepreneurship and Leadership",
                              URL: URLMapping.PG.MBA.EntrepreneurshipLeadership,
                            },

                            {
                              label: " Business Intelligence and Analytics",
                              URL: URLMapping.PG.MBA
                                .business_Intelligence_Analytics,
                            },
                            {
                              label: "Advertising And branding",
                              URL: URLMapping.PG.MBA.mba_advertising_branding,
                            },
                            {
                              label: "System and Operations Management",
                              URL: URLMapping.PG.MBA
                                .mba_systemOperationManagement,
                            },
                            {
                              label: "Hospital Administration",
                              URL: URLMapping.PG.MBA
                                .mba_hospital_administration,
                            },
                            {
                              label: "Business Intelligence & AI",
                              URL: URLMapping.PG.MBA.mba_business_intelligence,
                            },
                            {
                              label: "Oil and Gas Management",
                              URL: URLMapping.PG.MBA.mba_oil_and_gas_management,
                            },

                            {
                              label: "International Trade Manangement",
                              URL: URLMapping.PG.MBA
                                .mba_international_trade_management,
                            },
                            {
                              label: "Finteach Manangement",
                              URL: URLMapping.PG.MBA.mba_fintech_Management,
                            },
                            {
                              label: "Retail Manangement",
                              URL: URLMapping.PG.MBA.mba_retail_Management,
                            },

                            {
                              label: "Tourism Manangement",
                              URL: URLMapping.PG.MBA.mba_tourismManagement,
                            },
                            {
                              label:
                                "Investment Banking Equity Research Management",
                              URL: URLMapping.PG.MBA
                                .mba_investment_banking_equity_research_management,
                            },

                            {
                              label: "International Finance Management",
                              URL: URLMapping.PG.MBA.mba_internationalFinance,
                            },

                            {
                              label: "Power Managemnet",
                              URL: URLMapping.PG.MBA.mba_powermanagemnet,
                            },

                            {
                              label: "Sports Manangement",
                              URL: URLMapping.PG.MBA.mba_sportsManagement,
                            },

                            {
                              label: "HR Analytics",
                              URL: URLMapping.PG.MBA.mba_hr_analytics,
                            },
                            {
                              label: "Digital Entrepreneurship ",
                              URL: URLMapping.PG.MBA
                                .mba_digital_Entrepreneurship,
                            },
                            {
                              label: "Leadership and Strategey",
                              URL: URLMapping.PG.MBA.mba_leadershipandstragey,
                            },

                            {
                              label: "Strategic HR Management",
                              URL: URLMapping.PG.MBA
                                .mba_startegic_hr_management,
                            },
                            {
                              label: "Banking And Insurance",
                              URL: URLMapping.PG.MBA.mba_banking_insurance,
                            },
                            {
                              label: "Strategic Markeing",
                              URL: URLMapping.PG.MBA.mba_strategic_Marketing,
                            },

                            {
                              label: "Strategic Finance Management",
                              URL: URLMapping.PG.MBA
                                .mba_strategic_finance_Management,
                            },
                            {
                              label: "International Marketing Management",
                              URL: URLMapping.PG.MBA
                                .mba_international_m_Management,
                            },
                            {
                              label:
                                "Artificial Intelligence and Machine Learning ",
                              URL: URLMapping.PG.MBA.mba_Ai_machine_learning,
                            },
                            {
                              label: "BlockChain Management ",
                              URL: URLMapping.PG.MBA.mba_blockChain_Management,
                            },
                            {
                              label: "waste Management ",
                              URL: URLMapping.PG.MBA.mba_waste_Management,
                            },
                            {
                              label: "IT and FineTech ",
                              URL: URLMapping.PG.MBA.mba_it_and_finTech,
                            },

                            //new task

                            // {
                            //   label: "Aviation Management",
                            //   URL: URLMapping.PG.MBA.mba_aviation,
                            // },

                            // {
                            //   label: "Digital Marketing",
                            //   URL: URLMapping.PG.MBA.mba_digitalMarketing,
                            // },
                            // {
                            //   label: "Banking Marketing",
                            //   URL: URLMapping.PG.MBA.mba_bankingMarketing,
                            // },
                            // {
                            //   label: "Multimedia Management",
                            //   URL: URLMapping.PG.MBA.mba_multimediaManagement,
                            // },

                            // {
                            //   label: "Information Technology",
                            //   URL: URLMapping.PG.MBA.mba_informationTechnology,
                            // },
                          ],
                        },
                        // ............................................./
                        {
                          label: "Online & Distance MCA",
                          URL: URLMapping.PG.MCA.label,
                          subItems: [
                            {
                              label: "Syber Security",
                              URL: URLMapping.PG.MCA.mca_CyberSecurity,
                            },
                            {
                              label: "Data Science",
                              URL: URLMapping.PG.MCA.mca_DataScience,
                            },

                            {
                              label: "Cloud Computing",
                              URL: URLMapping.PG.MCA.mca_CloudComputing,
                            },
                            {
                              label: "Artificial Intelligence",
                              URL: URLMapping.PG.MCA.mca_ArtificialIntelligence,
                            },
                            {
                              label: "Game Development",
                              URL: URLMapping.PG.MCA.mca_GameDevelopment,
                            },
                            {
                              label:
                                "Artificial Intelligence and Machine Learning",
                              URL: URLMapping.PG.MCA
                                .mca_ArtificialIntelligenceandMachineLearning,
                            },

                            {
                              label: "Data Analytics",
                              URL: URLMapping.PG.MCA.mca_DataAnalytics,
                            },

                            {
                              label: "Computer Science And IT",
                              URL: URLMapping.PG.MCA.mca_ComputerScienceAndIT,
                            },

                            {
                              label: "Reality and Virtual Reality",
                              URL: URLMapping.PG.MCA.mca_Reality_and_virtual,
                            },

                            {
                              label: "Machine Learning",
                              URL: URLMapping.PG.MCA.mba_MachineLearning,
                            },

                            {
                              label: "Block chain",
                              URL: URLMapping.PG.MCA.mca_Blockchain,
                            },

                            {
                              label: "Data Science and BigData Analytics",
                              URL: URLMapping.PG.MCA
                                .mba_DataScienceandBigDataAnalytics,
                            },

                            {
                              label: "ML and AI",
                              URL: URLMapping.PG.MCA.mca_MLandAI,
                            },
                          ],
                        },
                        {
                          label: "Online & Distance M.Com",
                          URL: URLMapping.PG.MCom.label,
                          subItems: [
                            {
                              label: "M.Com Genaral",
                              URL: URLMapping.PG.MCom.mcom_genaral,
                            },
                            {
                              label: "Financial Management",
                              URL: URLMapping.PG.MCom.mcom_finance_management,
                            },
                            {
                              label: "Accounting and Finance",
                              URL: URLMapping.PG.MCom.mcom_AccountFinance,
                            },
                            {
                              label: "International Finance",
                              URL: URLMapping.PG.MCom.mcom_internationalFinance,
                            },
                            {
                              label: "Professional Accounting and Finance",
                              URL: URLMapping.PG.MCom
                                .mcom_professionalAccountingFinance,
                            },
                            {
                              label: "Fintech",
                              URL: URLMapping.PG.MCom.mcom_fintech,
                            },
                          ],
                        },
                        {
                          label: "Online & Distance MA",
                          URL: URLMapping.PG.MA.label,
                          subItems: [
                            {
                              label: "Economics",
                              URL: URLMapping.PG.MA.ma_economics,
                            },
                            {
                              label: "Journalism and Mass Communication",
                              URL: URLMapping.PG.MA
                                .ma_journalismMassCommunication,
                            },
                            {
                              label: "English",
                              URL: URLMapping.PG.MA.ma_english,
                            },
                            {
                              label: "Psychology",
                              URL: URLMapping.PG.MA.ma_psychology,
                            },
                            {
                              label: "Public Policy and Administration",
                              URL: URLMapping.PG.MA
                                .ma_publicPolicyAdministration,
                            },
                            {
                              label: "Liberal Arts",
                              URL: URLMapping.PG.MA.ma_liberalArts,
                            },
                            {
                              label: "Sociology",
                              URL: URLMapping.PG.MA.ma_sociology,
                            },
                            {
                              label: "History",
                              URL: URLMapping.PG.MA.ma_history,
                            },
                            {
                              label: "Political Science",
                              URL: URLMapping.PG.MA.ma_politicalScience,
                            },
                          ],
                        },
                        {
                          label: "M tech for Working Professionals",
                          URL: URLMapping.PG.MTECH.label,
                          subItems: [
                            {
                              label: "Mechanical Production",
                              URL: URLMapping.PG.MTECH
                                .mtech_mechincalproduction,
                            },
                            {
                              label: "Computer Science Engineering",
                              URL: URLMapping.PG.MTECH
                                .mtech_computerScienceEngineering,
                            },
                            {
                              label: "Civil Engineering",
                              URL: URLMapping.PG.MTECH.mtech_civilEngineering,
                            },
                            // {
                            //   label: "mechincal Engineering",
                            //   URL: URLMapping.PG.MTECH
                            //     .mtech_mechincalEngineering,
                            // },
                            {
                              label: "Electrical Power System",
                              URL: URLMapping.PG.MTECH
                                .mtech_electricalpowersystem,
                            },
                            {
                              label: "Civil Structural",
                              URL: URLMapping.PG.MTECH.mtech_civil_structural,
                            },
                            {
                              label: "Mechanical Design",
                              URL: URLMapping.PG.MTECH.mtech_mechanical_design,
                            },
                          ],
                        },
                        {
                          label: "Online & Distance M.Sc",
                          URL: URLMapping.PG.MSc.label,
                          subItems: [
                            {
                              label: "Genaral",
                              URL: URLMapping.PG.MSc.msc_genaral,
                            },
                            {
                              label: "Business Analytics",
                              URL: URLMapping.PG.MSc.msc_business_analytics,
                            },
                            {
                              label: "AI and Machine Learning",
                              URL: URLMapping.PG.MSc.msc_aimachinelearning,
                            },
                            {
                              label: "Applied Finance",
                              URL: URLMapping.PG.MSc.msc_appliedfinance,
                            },
                            {
                              label: "Data Science",
                              URL: URLMapping.PG.MSc.msc_datascience,
                            },
                            {
                              label: "Mathematics",
                              URL: URLMapping.PG.MSc.msc_mathematics,
                            },
                          ],
                        },
                        // {
                        //   label: "Suggest me a University",
                        //   URL: "#",
                        // },
                        {
                          label: "View all",
                          URL: "/viewallpgpage",
                        },
                      ]}
                    />

                    {/* for certfcate start */}
                    <MultilevelDropdownC
                      title={"Certificate"}
                      data={[
                        {
                          label: "Project Management",
                          URL: URLMapping.certificate.project_management,
                          //new task
                        
                        },
                        {
                          label: "Project Management",
                          URL: URLMapping.certificate.project_management,
                          //new task
                        
                        },
                       
                       
                      ]}
                    />
                    {/* for certfcate end */}

                    {/* ------------------------------------------------Diploma nav------------------------------- */}
                    {/* <MultilevelDropdownC
                      title={"Diploma"}
                      data={[
                        {
                          label: "BBA General",
                          URL: URLMapping.UG.BBA.bba_general,
                        },
                        {
                          label: "Engineering and Project Management",
                          URL: URLMapping.UG.BBA
                            .bba_engineeringandProjectManagement,
                        },
                        {
                          label: "Strategy and Leadership",
                          URL: URLMapping.UG.BBA.bba_strategyandLeadership,
                        },
                        {
                          label: "Travel and Tourism Management",
                          URL: URLMapping.UG.BBA.bba_travelandTourismManagement,
                        },
                        {
                          label: "Logistics",
                          URL: URLMapping.UG.BBA.bba_logistics,
                        },
                        {
                          label: "Buisness Analytics",
                          URL: URLMapping.UG.BBA.bba_buisnessanalytics,
                        },
                      ]}
                    /> */}

                    {/* <MultilevelDropdownC
                      title={"Certificate"}
                      data={[
                        {
                          label: "Project Management",
                          URL: URLMapping.CERT.cert_project_management,
                        },
                      ]}
                    />  */}
                    {/* <NavDropdownC title="Diploma ">
                      <NavDropdown.Item
                        href={URLMapping.CERT.project_management}
                      >
                        Diploma Course1
                      </NavDropdown.Item>
                      <NavDropdown.Item href={URLMapping.coursesDEP.label}>
                        Diploma Course1
                      </NavDropdown.Item>
                      <NavDropdown.Item href={URLMapping.aboutUs.label}>
                        Diploma Course1
                      </NavDropdown.Item>
                    </NavDropdownC> */}

                    {/* <NavDropdownC title="Certificate">
                      <NavDropdown.Item
                        href={URLMapping.certificate.project_management}
                      >
                        Project Management
                      </NavDropdown.Item>
                      <NavDropdown.Item href={URLMapping.certificate.corporatecommunication}>
                        Diploma Course1
                      </NavDropdown.Item>
                      <NavDropdown.Item href={URLMapping.certificate.about}>
                        Diploma Course1
                      </NavDropdown.Item>
                    </NavDropdownC> */}

                    <Nav.Link href={URLMapping.findCourse.label}>
                      Top Universities
                    </Nav.Link>
                    {/* <Nav.Link href={URLMapping.aboutUs.label}>
                      About Us
                    </Nav.Link> */}
                    {/* <Nav.Link href={URLMapping.aboutUs.label}>
                  <span className="ideal_university">Find ideal Universities</span>
                    </Nav.Link> */}
                    {/* <Nav.Link href="#link" className="d-none">
                      Why Us?
                    </Nav.Link> */}
                    {/* <Nav.Link href={URLMapping.applyNow.label}>
                      Apply Now
                    </Nav.Link> */}
                    <Nav.Link href={URLMapping.applyNow.label}>
                      <span className="sign_in_home_banner"> Sign in</span>
                    </Nav.Link>
                    {/* <Nav.Link href={URLMapping.bookAppointment.label}>
                      Counselling
                    </Nav.Link> */}
                    <Link to="/blog" >
                      Blog
                    </Link> 
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <div className="header__navbar">
            <Navbar expand="lg" className="container mobile-d-none">
              <Container>
                {/* <Navbar.Brand href={URLMapping.home.label}>
                  <img src={icon_brand} alt="" className="brand" />
                </Navbar.Brand> */}
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                    {/* <Nav.Link href="#home">
                      <span className="nav-link-image">
                        <img src={icon_univ} className="img-fluid" alt="" />
                      </span>
                      <span className="nav-link-text">
                        Top <br /> University
                      </span>
                    </Nav.Link>
                    <Nav.Link href="#link">
                      <span className="nav-link-image">
                        <img src={icon_search} className="img-fluid" alt="" />
                      </span>
                      <span className="nav-link-text">
                        Top <br /> Searches
                      </span>
                    </Nav.Link>
                    <Nav.Link href="#link">
                      <span className="nav-link-image">
                        <img
                          src={icon_comparison}
                          className="img-fluid"
                          alt=""
                        />
                      </span>
                      <span className="nav-link-text">
                        Top <br /> Comparison
                      </span>
                    </Nav.Link>
                    <div className="header__divider">
                      <span></span>
                    </div> */}

                    {/* <Nav.Link href="#link" className="d-none">
                      <span className="nav-link-image">
                        <img src={icon_download} className="img-fluid" alt="" />
                      </span>
                      <span className="nav-link-text">
                        Brochure <br /> Download
                      </span>
                    </Nav.Link> */}
                    {/* <Nav.Link href="#link" className="d-none">
                      <span className="nav-link-image">
                        <img src={icon_student} className="img-fluid" alt="" />
                      </span>
                      <span className="nav-link-text">
                        Student <br /> Sign in / Sign Up
                      </span>
                    </Nav.Link> */}
                    {/* <div className="header__compareWrapper">
                      <Link
                        to={URLMapping.compare.label}
                        className="compareBtn"
                      >
                        <span className="compareBtn__text">
                          <img
                            src={icon_comparison}
                            className="img-fluid"
                            alt=""
                          />
                          <span>Compare</span>
                        </span>
                        <span className="compareBtn__count">
                          {compareCollegeArr ? compareCollegeArr.length : 0}
                        </span>
                      </Link>
                    </div> */}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          {[false].map((expand) => (
            <Navbar
              activeKey={location.pathname}
              key={expand}
              bg="light"
              expand={expand}
              className="mb-3 disktop-none"
            >
              <Container fluid>
                <Navbar.Brand href="/">
                  <img src={icon_brand} alt="" className="brandsidenav" />
                </Navbar.Brand>

                <Nav.Link
                  href={URLMapping.aboutUs.label}
                  className="find_ideal_22"
                >
                  <div className="ideal_university_main">
                    <span className="ideal_university text-light">
                      Find ideal Universities
                    </span>
                  </div>
                </Nav.Link>
                <div className="header__compareWrapper">
                  <Link to={URLMapping.compare.label} className="compareBtn ">
                    <span className="compareBtn__text">
                      <img src={icon_comparison} className="img-fluid" alt="" />
                      <span>Compare</span>
                    </span>
                    <span className="compareBtn__count">
                      {compareCollegeArr ? compareCollegeArr.length : 0}
                    </span>
                  </Link>
                </div>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="start"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      <img src={icon_brand} alt="" className="brandsidenav" />
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="https://www.distancepathshala.com/">
                        Home
                      </Nav.Link>

                      <NavDropdown
                        title="UG Courses"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                      >
                        <NavDropdown
                          title="Online & Distance BBA"
                          id={`offcanvasNavbarDropdown-expand-${expand}`}
                        >
                          <NavDropdown.Item href="ug-courses/online-distance-bba/aviation">
                            Aviation
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bba/hrm">
                            HRM
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bba/finance">
                            Finance
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bba/marketing">
                            Marketing
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bba/banking-and-finance">
                            Banking & Finance
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bba/digital-marketing">
                            Digital Marketing
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bba/multimedia-management">
                            Data Science and Analytics
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bba/data-science-and-analytics">
                            Multimedia Management
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bba/advertising-and-branding">
                            Advertising and Branding
                          </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                          title="Online & Distance B.Com"
                          id={`offcanvasNavbarDropdown-expand-${expand}`}
                        >
                          <NavDropdown.Item href="https://www.distancepathshala.com/ug-courses/online-distance-bcom/accounts-and-finance">
                            Accouting and Finance
                          </NavDropdown.Item>
                          <NavDropdown.Item href="https://www.distancepathshala.com/ug-courses/online-distance-bcom/international-finance">
                            International Finance
                          </NavDropdown.Item>
                          <NavDropdown.Item href="https://www.distancepathshala.com/ug-courses/online-distance-bcom/professional-and-accounting-finance">
                            Professional Accounting and Finance
                          </NavDropdown.Item>
                          <NavDropdown.Item href="https://www.distancepathshala.com/ug-courses/online-distance-bcom/banking-finance">
                            Banking Fincance
                          </NavDropdown.Item>
                          <NavDropdown.Item href="https://www.distancepathshala.com/ug-courses/online-distance-bcom/banking-finance">
                            FinTech
                          </NavDropdown.Item>
                          <NavDropdown.Item href="https://www.distancepathshala.com/ug-courses/online-distance-bcom/hindi">
                            Hindi
                          </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="https://www.distancepathshala.com/ug-courses/online-distance-ba">
                          Online & Distance BA
                        </Nav.Link>
                        <Nav.Link href="https://www.distancepathshala.com/ug-courses/online-distance-bca">
                          Online & Distance BCA
                        </Nav.Link>
                      </NavDropdown>
                      <NavDropdown
                        title="PG Courses"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                      >
                        <NavDropdown
                          title="Online & Distance MBA"
                          id={`offcanvasNavbarDropdown-expand-${expand}`}
                        >
                          <NavDropdown.Item href="https://www.distancepathshala.com/ug-courses/online-distance-bba/aviation">
                            Aviation
                          </NavDropdown.Item>
                          <NavDropdown.Item href="https://www.distancepathshala.com/ug-courses/online-distance-bba/hrm">
                            HRM
                          </NavDropdown.Item>
                          <NavDropdown.Item href="https://www.distancepathshala.com/ug-courses/online-distance-bba/finance">
                            Finance
                          </NavDropdown.Item>
                          <NavDropdown.Item href="https://www.distancepathshala.com/ug-courses/online-distance-bba/marketing">
                            Marketing
                          </NavDropdown.Item>
                          <NavDropdown.Item href="https://www.distancepathshala.com/ug-courses/online-distance-bba/banking-and-finance">
                            Banking & Finance
                          </NavDropdown.Item>
                          <NavDropdown.Item href="https://www.distancepathshala.com/ug-courses/online-distance-bba/digital-marketing">
                            Digital Marketing
                          </NavDropdown.Item>
                          <NavDropdown.Item href="https://www.distancepathshala.com/ug-courses/online-distance-bba/multimedia-management">
                            Data Science and Analytics
                          </NavDropdown.Item>
                          <NavDropdown.Item href="https://www.distancepathshala.com/ug-courses/online-distance-bba/data-science-and-analytics">
                            Multimedia Management
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bba/advertising-and-branding">
                            Advertising and Branding
                          </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                          title="Online & Distance MCA"
                          id={`offcanvasNavbarDropdown-expand-${expand}`}
                        >
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/accounts-and-finance">
                            Accouting and Finance
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/international-finance">
                            International Finance
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/professional-and-accounting-finance">
                            Professional Accounting and Finance
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/banking-finance">
                            Banking Fincance
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/banking-finance">
                            FinTech
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/hindi">
                            Hindi
                          </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                          title="Online & Distance M.Com"
                          id={`offcanvasNavbarDropdown-expand-${expand}`}
                        >
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/accounts-and-finance">
                            Accouting and Finance
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/international-finance">
                            International Finance
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/professional-and-accounting-finance">
                            Professional Accounting and Finance
                          </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                          title="Online & Distance MA"
                          id={`offcanvasNavbarDropdown-expand-${expand}`}
                        >
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/accounts-and-finance">
                            Economic
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/international-finance">
                            Journalism and Mass Communication
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/professional-and-accounting-finance">
                            English
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/banking-finance">
                            Psychology
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/banking-finance">
                            Public Policy and Admistration
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/hindi">
                            Liberal Arts
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/hindi">
                            Sociology
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/hindi">
                            History
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/hindi">
                            Political Science
                          </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                          title="M tech for working Professionals"
                          id={`offcanvasNavbarDropdown-expand-${expand}`}
                        >
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/accounts-and-finance">
                            Accouting and Finance
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/international-finance">
                            International Finance
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/professional-and-accounting-finance">
                            Professional Accounting and Finance
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/banking-finance">
                            Banking Fincance
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/banking-finance">
                            FinTech
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/hindi">
                            Hindi
                          </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                          title="Online & Distance M.sc"
                          id={`offcanvasNavbarDropdown-expand-${expand}`}
                        >
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/accounts-and-finance">
                            Accouting and Finance
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/international-finance">
                            International Finance
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/professional-and-accounting-finance">
                            Professional Accounting and Finance
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/banking-finance">
                            Banking Fincance
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/banking-finance">
                            FinTech
                          </NavDropdown.Item>
                          <NavDropdown.Item href="ug-courses/online-distance-bcom/hindi">
                            Hindi
                          </NavDropdown.Item>
                        </NavDropdown>
                      </NavDropdown>

                      <Nav.Link href="/about-us">Diploma</Nav.Link>
                      <Nav.Link href="/apply-now">Certificate</Nav.Link>
                      <Nav.Link href="/apply-now">Top University</Nav.Link>
                      <Nav.Link href="/courses/list">
                        <div className="ideal_university_main ">
                          <span className="ideal_university text-light">
                            Find ideal Universities
                          </span>
                        </div>{" "}
                      </Nav.Link>
                      <Nav.Link href={URLMapping.applyNow.label}>
                        <span className="sign_in_home_banner_01"> Sign in</span>
                      </Nav.Link>
                      {/* <Nav.Link href="/book-appointment">Counselling</Nav.Link> */}
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </header>
      </>
    )
  );
}

function NavDropdownC({ children, title }) {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  return (
    <NavDropdown
      title={title}
      show={show}
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
    >
      {children}
    </NavDropdown>
  );
}

function MultilevelDropdownC({ data, title }) {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  return (
    <>
      <div
        className="mulitilevelDropdown nav-item dropdown"
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
        onClick={hideDropdown}
      >
        <Link className="nav-link  dropdown-toggle" type="button" to="#">
          {title}
        </Link>
        <ul
          className="dropdown-menu"
          style={{ display: show ? "block" : "none" }}
          aria-labelledby="dropdownMenuButton"
        >
          {data?.map((elem) => {
            return (
              <li key={elem.label}>
                <Link
                  className={
                    "dropdown-item " + (elem.subItems ? "has-dropdown" : "")
                  }
                  to={elem.URL ? elem.URL : "#"}
                >
                  {elem.label}
                </Link>
                {elem.subItems ? (
                  <ul className="dropdown-menu dropdown-submenu">
                    {elem.subItems.map((subElem) => {
                      return (
                        <li key={subElem.label + Math.random()}>
                          <Link className="dropdown-item" to={subElem.URL}>
                            {subElem.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <></>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
