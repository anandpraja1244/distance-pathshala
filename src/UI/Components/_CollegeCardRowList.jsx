import React, { useContext, useEffect, useState } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

import CourseListDesc_BCOM_AccountingFinance from "./coursedesc/_CourseListDesc_B.ComAccountingfinance";
import CourseListDesc_BCOM_BankingFincance from "./coursedesc/_CourseListDesc_B.ComBankingFinance";
import CourseListDesc_BCOM_FinTech from "./coursedesc/_CourseListDesc_B.ComFinTech";
import CourseListDesc_BCOM_Hindi from "./coursedesc/_CourseListDesc_B.ComHindi";
import CourseListDesc_BCom_General from "./coursedesc/_CourseListDesc_B.ComGeneral";
import CourseListDesc_BCOM_InternationalFincance from "./coursedesc/_CourseListDesc_B.ComInternationalFinance";
import CourseListDesc_BCOM_ProfessionalAccountFinance from "./coursedesc/_CourseListDesc_B.ComProfessionalAccountingFinance";
//new changes
import CourseListDesc_BCOM_StockMarket from "./coursedesc/_CourseListDesc_B.ComStockMarket";
import CourseListDesc_BCOM_Auditing from "./coursedesc/_CourseListDesc_B.ComAuditing";
import CourseListDesc_BCOM_Law from "./coursedesc/_CourseListDesc_B.ComLaw";
import CourseListDesc_BCOM_InternationalBusiness from "./coursedesc/_CourseListDesc_B.ComInternationalBusiness";
import CourseListDesc_BCOM_BehaviouralFinance from "./coursedesc/_CourseListDesc_B.ComBehaviouralFinance";
import CourseListDesc_BCOM_BankingInsurance from "./coursedesc/_CourseListDesc_B.ComBankingInsurance";

import CourseListDesc_BA_general from "./coursedesc/_CourseListDesc_BA _general";
import CourseListDesc_BA_Economics from "./coursedesc/_CourseListDesc_BA_Economics";
import CourseListDesc_BA_Hindi from "./coursedesc/_CourseListDesc_BA_Hindi";
import CourseListDesc_BA_JournalismandMassCommunication from "./coursedesc/_CourseListDesc_BA_JournalismandMassCommunication";
import CourseListDesc_BA_TourismAdministrator from "./coursedesc/_CourseListDesc_BA_TourismAdministrator";

import CourseListDesc_BBA_AdvertisementMarketing from "./coursedesc/_CourseListDesc_BBA_AdvertisementMarketing";
import CourseListDesc_BBA_BankingFinance from "./coursedesc/_CourseListDesc_BBA_BankingFinance";
import CourseListDesc_BBA_DataScienceAnalytics from "./coursedesc/_CourseListDesc_BBA_DataScienceAnalytics";
import CourseListDesc_BBA_DigitalMarketing from "./coursedesc/_CourseListDesc_BBA_DigitalMarketing";
import CourseListDesc_BBA_Finance from "./coursedesc/_CourseListDesc_BBA_Finance";
import CourseListDesc_BBA_HRM from "./coursedesc/_CourseListDesc_BBA_HRM";
import CourseListDesc_BBA_Marketing from "./coursedesc/_CourseListDesc_BBA_Marketing";

// new BBA

import CourseListDesc_BBA_General from "./coursedesc/_CourseListDesc_BBA_BBA_General";
import CourseListDesc_BBA_engineeringandProjectManagement from "./coursedesc/_CourseListDesc_BBA_engineeringandProjectManagement";
import CourseListDesc_BBA_strategyandLeadership from "./coursedesc/_CourseListDesc_BBA_strategyandLeadership";
import CourseListDesc_BBA_travelandTourismManagement from "./coursedesc/_CourseListDesc_BBA_travelandTourismManagement";
import CourseListDesc_BBA_multimediaManagement from "./coursedesc/_CourseListDesc_BBA_multimediaManagement";
import CourseListDesc_BBA_logistics from "./coursedesc/_CourseListDesc_BBA_logistics";
import CourseListDesc_BBA_buisnessanalytics from "./coursedesc/_CourseListDesc_BBA_buisnessanalytics";

import CourseListDesc_BBA_advertisingandBranding from "./coursedesc/_CourseListDesc_BBA_advertisingandBranding";
import CourseListDesc_BBA_retailandSalesManagement from "./coursedesc/_CourseListDesc_BBA_retailandSalesManagement";
import CourseListDesc_BBA_internationalBusinessManagement from "./coursedesc/_CourseListDesc_BBA_internationalBusinessManagement";
import CourseListDesc_BBA_internationalMarketing from "./coursedesc/_CourseListDesc_BBA_internationalMarketing";
import CourseListDesc_BBA_ITandSystemsManagement from "./coursedesc/_CourseListDesc_BBA_ITandSystemsManagement";
import CourseListDesc_BBA_FinanceandLeadership from "./coursedesc/_CourseListDesc_BBA_FinanceandLeadership";
import CourseListDesc_BBA_InternationalFinance from "./coursedesc/_CourseListDesc_BBA_InternationalFinance";

// close
import CourseListDesc_MCA_ArtificialIntelligence from "./coursedesc/_CourseListDesc_MCA_ArtificialIntelligence";
import CourseListDesc_MCA_AugmentedRealityandVirtualReality from "./coursedesc/_CourseListDesc_MCA_AugmentedRealityandVirtualReality";
import CourseListDesc_MCA_ArtificialIntelligenceandMachineLearning from "./coursedesc/_CourseListDesc_MCA_ArtificialIntelligenceandMachineLearning";
import CourseListDesc_MCA_Blockchain from "./coursedesc/_CourseListDesc_MCA_Blockchain";
import CourseListDesc_MCA_Cloud_Computing from "./coursedesc/_CourseListDesc_MCA_Cloud_Computing";
import CourseListDesc_MCA_ComputerScienceAndIT from "./coursedesc/_CourseListDesc_MCA_ComputerScienceAndIT";
import CourseListDesc_MCA_CyberSecurity from "./coursedesc/_CourseListDesc_MCA_CyberSecurity";
import CourseListDesc_MCA_DataAnalytics from "./coursedesc/_CourseListDesc_MCA_DataAnalytics";
import CourseListDesc_MCA_DataScience from "./coursedesc/_CourseListDesc_MCA_DataScience";
import CourseListDesc_MCA_DataScience_BigData_Analytics from "./coursedesc/_CourseListDesc_MCA_DataScience_BigData_Analytics";
import CourseListDesc_MCA_GameDevelopment from "./coursedesc/_CourseListDesc_MCA_GameDevelopment";
import CourseListDesc_MCA_MachineLearning from "./coursedesc/_CourseListDesc_MCA_MachineLearning";
import CourseListDesc_MCA_MLandAI from "./coursedesc/_CourseListDesc_MCA_MLandAI";
import CourseListDesc_MCA_Reality_and_virtual from "./coursedesc/_CourseListDesc_MCA_Reality_and_virtual";

// MCA

// Close MCA
import CourseListDesc_BCA_DataAnalytics from "./coursedesc/_CourseListDesc_BCA_DataAnalytics";
import CourseListDesc_BCA_AIandMachineLearning from "./coursedesc/BCA/_CourseListDesc_BCA_AIandMachineLearning";
import CourseListDesc_BCA_CloudandSecurity from "./coursedesc/BCA/_CourseListDesc_BCA_CloudandSecurity";
import CourseListDesc_BCA_CyberSecurity from "./coursedesc/BCA/_CourseListDesc_BCA_CyberSecurity";
import CourseListDesc_BCA_DatabaseManagementSystem from "./coursedesc/BCA/_CourseListDesc_BCA_DatabaseManagementSystem";
import CourseListDesc_BCA_DataScienceandBigDataAnalytics from "./coursedesc/BCA/_CourseListDesc_BCA_DataScienceandBigDataAnalytics";
import CourseListDesc_BCA_General from "./coursedesc/BCA/_CourseListDesc_BCA_General";
import CourseListDesc_BCA_MultimediaandAnimation from "./coursedesc/BCA/_CourseListDesc_BCA_MultimediaandAnimation";

// Btech
import CourseListDesc_Btech_General from "./coursedesc/_CourseListDesc_BTech_General";
import CourseListDesc_Btech_CivilEngineering from "./coursedesc/_CourseListDesc_BTech_CivilEngineering";
import CourseListDesc_Btech_ComputerScienceEngineering from "./coursedesc/_CourseListDesc_BTech_ComputerScience";
import CourseListDesc_Btech_ElectricalEngineering from "./coursedesc/_CourseListDesc_BTech_ElectricalEngineering";
import CourseListDesc_Btech_ElectronicsCommunicationEngineering from "./coursedesc/_CourseListDesc_BTech_ElectronicsCommunicationEngineering";
import CourseListDesc_Btech_MechanicalAutomobileEngineering from "./coursedesc/_CourseListDesc_BTech_MechanicalAutomobileEngineering";
import CourseListDesc_Btech_MechanicalEngineering from "./coursedesc/_CourseListDesc_BTechMechanicalEngineering";
// Close Btech
import CourseListDesc_MCom_AccountingFinance from "./coursedesc/_CourseListDesc_MCom_AccountingFinance";
import CourseListDesc_MCom_InternationalFinance from "./coursedesc/_CourseListDesc_MCom_InternationalFinance";
import CourseListDesc_MCom_ProfessionalAccountingFinance from "./coursedesc/_CourseListDesc_MCom_ProfessionalAccountingFinance";
import CourseListDesc_MCom_genaral from "./coursedesc/_CourseListDesc_MCom_genaral";
import CourseListDesc_MCom_finance_management from "./coursedesc/_CourseListDesc_MCom_finance_management";
import CourseListDesc_MCom_fintech from "./coursedesc/_CourseListDesc_MCom_fintech";

import CourseListDesc_MSc_Ai_machineLearning from "./coursedesc/_CourseListDesc_MSc_AI_MachineLearning";
import CourseListDesc_MSc_AppliedFinance from "./coursedesc/_CourseListDesc_MSc_appliedFinance";
import CourseListDesc_MSc_DataScience from "./coursedesc/_CourseListDesc_MSc_dataScience";
import CourseListDesc_MSc_Mathematics from "./coursedesc/_CourseListDesc_MSc_Mathematics";
import CourseListDesc_MSc_genaral from "./coursedesc/_CourseListDesc_MSc_genaral";
import CourseListDesc_MSc_business_analytics from "./coursedesc/_CourseListDesc_MSc_business_analytics";

import CourseListDesc_MBA_hr_management from "./coursedesc/_CourseListDesc_MBA_hr_management";
import CourseListDesc_MBA_mba_finance from "./coursedesc/_CourseListDesc_MBA_mba_finance";
import CourseListDesc_MBA_mba_marketing from "./coursedesc/_CourseListDesc_MBA_mba_marketing";
import CourseListDesc_MBA_mba_general from "./coursedesc/_CourseListDesc_MBA_mba_general";
import CourseListDesc_MBA_mba_marketingFinance from "./coursedesc/_CourseListDesc_MBA_mba_marketingFinance";
import CourseListDesc_MBA_mba_systemOperationManagement from "./coursedesc/_CourseListDesc_MBA_mba_systemOperationManagement";
import CourseListDesc_MBA_mba_marketingHR from "./coursedesc/_CourseListDesc_MBA_mba_marketingHR";
import CourseListDesc_MBA_mba_aviation from "./coursedesc/_CourseListDesc_MBA_mba_aviation.jsx";
import CourseListDesc_MBA_mba_it from "./coursedesc/_CourseListDesc_MBA_mba_it.jsx";
import CourseListDesc_MBA_mba_logisticSupplyChain from "./coursedesc/_CourseListDesc_MBA_mba_logisticSupplyChain.jsx";
import CourseListDesc_MBA_mba_bankingFinance from "./coursedesc/_CourseListDesc_MBA_mba_bankingFinance.jsx";
import CourseListDesc_MBA_mba_internationalFinance from "./coursedesc/_CourseListDesc_MBA_mba_internationalFinance.jsx";
import CourseListDesc_MBA_mba_dataScienceAnalytics from "./coursedesc/_CourseListDesc_MBA_mba_dataScienceAnalytics.jsx";
import CourseListDesc_MBA_mba_financeLeadership from "./coursedesc/_CourseListDesc_MBA_mba_financeLeadership.jsx";
import CourseListDesc_MBA_mba_digitalMarketing from "./coursedesc/_CourseListDesc_MBA_mba_digitalMarketing.jsx";
import CourseListDesc_MBA_mba_bankingMarketing from "./coursedesc/_CourseListDesc_MBA_mba_bankingMarketing.jsx";
import CourseListDesc_MBA_mba_multimediaManagement from "./coursedesc/_CourseListDesc_MBA_mba_multimediaManagement.jsx";
// import CourseListDesc_MBA_mba_advertisementBranding from "./coursedesc/_CourseListDesc_MBA_mba_advertisementBranding.jsx";
import CourseListDesc_MBA_mba_informationTechnology from "./coursedesc/_CourseListDesc_MBA_mba_informationTechnology.jsx";
import CourseListDesc_MBA_mba_leadershipandstragey from "./coursedesc/_CourseListDesc_MBA_mba_leadershipandstragey.jsx";
import CourseListDesc_MBA_buisnessmanagement from "./coursedesc/_CourseListDesc_MBA_buisnessmanagement.jsx";
import CourseListDesc_MBA_mba_powermanagemnet from "./coursedesc/_CourseListDesc_MBA_mba_powermanagemnet.jsx";
import CourseListDesc_MBA_mba_generals from "./coursedesc/_CourseListDesc_MBA_mba_generals.jsx";
import CourseListDesc_MBA_buisnessanalytics from "./coursedesc/_CourseListDesc_MBA_businessanalytics.jsx";
import CourseListDesc_MBA_operationsmanagement from "./coursedesc/_CourseListDesc_MBA_operationsmanagement.jsx";
import CourseListDesc_MBA_hrm_financeManagement from "./coursedesc/_CourseListDesc_MBA_hrm_financeManagement.jsx";
import CourseListDesc_MBA_healthcareManagement from "./coursedesc/_CourseListDesc_MBA_healthcareManagement.jsx";
import CourseListDesc_MBA_digitalMarketingManagement from "./coursedesc/_CourseListDesc_MBA_digitalMarketingManagement.jsx";
import CourseListDesc_MBA_hospitalitymanagement from "./coursedesc/_CourseListDesc_MBA_hospitalitymanagement.jsx";
import CourseListDesc_MBA_internationalBussinessManagement from "./coursedesc/_CourseListDesc_MBA_internationalBussinessManagement.jsx";
import CourseListDesc_MBA_mba_project_Management from "./coursedesc/_CourseListDesc_MBA_mba_project_Management.jsx";
import CourseListDesc_MBA_mba_financial_markets_Management from "./coursedesc/_CourseListDesc_MBA_mba_financial_markets_Management.jsx";
import CourseListDesc_MBA_EntrepreneurshipLeadership from "./coursedesc/_CourseListDesc_MBA_EntrepreneurshipLeadership.jsx";
import CourseListDesc_MBA_business_Intelligence_Analytics from "./coursedesc/_CourseListDesc_MBA_business_Intelligence_Analytics.jsx";
import CourseListDesc_MBA_mba_advertising_branding from "./coursedesc/_CourseListDesc_MBA_mba_advertising_branding.jsx";
import CourseListDesc_MBA_mba_hospital_administration from "./coursedesc/_CourseListDesc_MBA_mba_hospital_administration.jsx";
import CourseListDesc_MBA_mba_business_intelligence from "./coursedesc/_CourseListDesc_MBA_mba_business_intelligence.jsx";
import CourseListDesc_MBA_mba_oil_and_gas_management from "./coursedesc/_CourseListDesc_MBA_mba_oil_and_gas_management.jsx";
import CourseListDesc_MBA_mba_international_trade_management from "./coursedesc/_CourseListDesc_MBA_mba_international_trade_management.jsx";
import CourseListDesc_MBA_mba_fintech_Management from "./coursedesc/_CourseListDesc_MBA_mba_fintech_Management.jsx";
import CourseListDesc_MBA_mba_retail_Management from "./coursedesc/_CourseListDesc_MBA_mba_retail_Management.jsx";
import CourseListDesc_MBA_mba_tourismManagement from "./coursedesc/_CourseListDesc_MBA_mba_tourismManagement.jsx";
import CourseListDesc_MBA_mba_sportsManagement from "./coursedesc/_CourseListDesc_MBA_mba_sportsManagement.jsx";
import CourseListDesc_MBA_mba_hr_Analytics from "./coursedesc/_CourseListDesc_MBA_mba_hr_Analytics.jsx";
import CourseListDesc_MBA_mba_digital_Entrepreneurship from "./coursedesc/_CourseListDesc_MBA_mba_digital_Entrepreneurship.jsx";
import CourseListDesc_MBA_mba_startegic_hr_management from "./coursedesc/_CourseListDesc_MBA_mba_startegic_hr_management.jsx";
import CourseListDesc_MBA_mba_banking_insurance from "./coursedesc/_CourseListDesc_MBA_mba_banking_insurance.jsx";
import CourseListDesc_MBA_mba_strategic_Marketing from "./coursedesc/_CourseListDesc_MBA_mba_strategic_Marketing.jsx";
import CourseListDesc_MBA_mba_strategic_finance_Management from "./coursedesc/_CourseListDesc_MBA_mba_strategic_finance_Management.jsx";
import CourseListDesc_MBA_mba_international_m_Management from "./coursedesc/_CourseListDesc_MBA_mba_international_m_Management.jsx";
import CourseListDesc_MBA_mba_Ai_machine_learning from "./coursedesc/_CourseListDesc_MBA_mba_Ai_machine_learning.jsx";
import CourseListDesc_MBA_mba_blockChain_Management from "./coursedesc/_CourseListDesc_MBA_mba_blockChain_Management.jsx";
import CourseListDesc_MBA_mba_waste_Management from "./coursedesc/_CourseListDesc_MBA_mba_waste_Management.jsx";
import CourseListDesc_MBA_mba_it_and_finTech from "./coursedesc/_CourseListDesc_MBA_mba_it_and_finTech.jsx";
import CourseListDesc_MBA_mba_banking_financial_service_Insurence from "./coursedesc/_CourseListDesc_MBA_mba_banking_financial_service_Insurence.jsx";
import CourseListDesc_MBA_mba_investment_banking_equity_research_management from "./coursedesc/_CourseListDesc_MBA_mba_investment_banking_equity_research_management";

//MA Course -- new start
import CourseListDesc_MA_economics from "./coursedesc/_CourseListDesc_MA_economics";
import CourseListDesc_MA_journalism_mass_communication from "./coursedesc/_CourseListDesc_MA_journalism_mass_communication";
import CourseListDesc_MA_english from "./coursedesc/_CourseListDesc_MA_english";
import CourseListDesc_MA_psychology from "./coursedesc/_CourseListDesc_MA_psychology";
import CourseListDesc_MA_public_policy_administration from "./coursedesc/_CourseListDesc_MA_public_policy_administration";
import CourseListDesc_MA_liberal_arts from "./coursedesc/_CourseListDesc_MA_liberal_arts";
import CourseListDesc_MA_sociology from "./coursedesc/_CourseListDesc_MA_sociology";
import CourseListDesc_MA_history from "./coursedesc/_CourseListDesc_MA_history";
import CourseListDesc_MA_political_science from "./coursedesc/_CourseListDesc_MA_political_science";
//MA Close

//M.Tech Start

import CourseListDesc_MTech_mechanical_production from "./coursedesc/_CourseListDesc_MTech_mechanical_production";

import CourseListDesc_MTech_computerScienceEngineering from "./coursedesc/_CourseListDesc_MTech_computerScienceEngineering";
import CourseListDesc_MTech_civilEngineering from "./coursedesc/_CourseListDesc_MTech_civilEngineering";
import CourseListDesc_MTech_mechanical_engineering from "./coursedesc/_CourseListDesc_MTech_mechanical_engineering";
import CourseListDesc_MTech_electricalpowersystem from "./coursedesc/_CourseListDesc_MTech_electricalpowersystem";

import CourseListDesc_MTech_mechanical_design from "./coursedesc/_CourseListDesc_MTech_mechanical_design";
import CourseListDesc_MTech_civil_structural from "./coursedesc/_CourseListDesc_MTech_civil_structural";

//Diploma start
import CourseListDesc_DEP_hr_management from "./coursedesc/_CourseListDesc_DEP_hr_management";

//Certificate
import CourseListDesc_CERT_project_management from "./coursedesc/_CourseListDesc_CERT_project_management";
// import CourseListDesc_CERT_corporate_communications from "./coursedesc/_CourseListDesc_CERT_corporate_communications";

import URLMapping from "../../Context/URLs";
// Context
import { DATA_LAYER } from "../../App";

// api
import Course from "../../assets/scripts/API/Course";
import { getURLdata } from "../../Context/URLs";

// ui components
import CollegeCardRow from "./_CollegeCardRow";

export default function CollegeCardRowList() {
  // Location
  const location = useLocation();

  // Context
  const {
    colleges,
    addAllCollege,
    activeFilter,
    setActiveFilter,
    seolist,
    isSearchTriggered,
    triggerSearch,
  } = useContext(DATA_LAYER);

  // Component State
  const [pageCount, setPageCount] = useState(0);

  const [currentCollegeArr, setCurrentCollegeArr] = useState([]);
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [metadata, setMetadata] = useState({
    pageTitle: "",
    metaTitle: "",
    metaKeywords: "",
    metaDescription: "",
  });
  let collegeCount = 0;
  // meta data change
  const adjustMetadata = () => {
    const filteredMetadataArr = seolist.filter(
      (obj) => obj.uri.toLowerCase() == location.pathname.toLowerCase()
    );
    if (filteredMetadataArr.length === 0) return;
    const metadataObj = filteredMetadataArr[0];
    setMetadata({
      pageTitle: metadataObj.pagetitle,
      metaTitle: metadataObj.metatitle,
      metaKeywords: metadataObj.metakeywords,
      metaDescription: metadataObj.metadescription,
    });
  };
  const [lastThreeCollege, setLastThree] = useState([]);
  useEffect(async () => {
    if (activeFilter.clid === null) return;

    const collegeRes = await Course.getAll({
      page: pageCount,
      ...activeFilter,
    });
    const firstThreeCollege = [];

    const lastThree = [];
    if (pageCount == 0) {
      firstThreeCollege.push(collegeRes[0]);
      firstThreeCollege.push(collegeRes[1]);
      firstThreeCollege.push(collegeRes[2]);

      lastThree.push(collegeRes[3]);
      lastThree.push(collegeRes[4]);
      lastThree.push(collegeRes[5]);
      setLastThree((i) => lastThree);
      setCurrentCollegeArr(firstThreeCollege);
    } else if (pageCount == 1) {
      setCurrentCollegeArr([...lastThreeCollege, ...collegeRes]);
    } else {
      setCurrentCollegeArr(collegeRes);
    }
  }, [pageCount, isSearchTriggered]);

  // pagination, adding more college
  useEffect(() => {
    if (currentPath != location.pathname) {
      addAllCollege(currentCollegeArr);
      setCurrentPath(location.pathname);
    } else {
      addAllCollege([...colleges, ...currentCollegeArr]);
    }
  }, [currentCollegeArr]);

  useEffect(() => {
    const urlData = getURLdata(location.pathname);
    if (urlData) {
      const elid = urlData.elid;
      const clid = urlData.clid;
      const mlid = urlData.mlid;
      const desc = urlData.desc;
      setActiveFilter({
        clid: clid,
        elid: elid,
        mlid: mlid,
        desc: desc,
      });
    } else {
      if (activeFilter.clid == null)
        setActiveFilter({
          clid: 0,
          elid: 0,
          mlid: 0,
          desc: null,
        });
    }
    triggerSearch();
    adjustMetadata();
  }, [location]);

  return (
    <>
      {activeFilter.clid != null && (
        <>
          <div>
            <Switch>
              <Route
                path={URLMapping.UG.BBA.bba_advertisementBranding}
                exact
                component={CourseListDesc_BBA_AdvertisementMarketing}
              />
              <Route
                path={URLMapping.UG.BBA.bba_bankingFinance}
                exact
                component={CourseListDesc_BBA_BankingFinance}
              />
              <Route
                path={URLMapping.UG.BBA.bba_dataScienceAnalytics}
                exact
                component={CourseListDesc_BBA_DataScienceAnalytics}
              />
              <Route
                path={URLMapping.UG.BBA.bba_digitalMarketing}
                exact
                component={CourseListDesc_BBA_DigitalMarketing}
              />
              <Route
                path={URLMapping.UG.BBA.bba_finance}
                exact
                component={CourseListDesc_BBA_Finance}
              />
              <Route
                path={URLMapping.UG.BBA.bba_hrm}
                exact
                component={CourseListDesc_BBA_HRM}
              />
              <Route
                path={URLMapping.UG.BBA.bba_marketing}
                exact
                component={CourseListDesc_BBA_Marketing}
              />

              {/* new BBA */}

              <Route
                path={URLMapping.UG.BBA.bba_general}
                exact
                component={CourseListDesc_BBA_General}
              />
              <Route
                path={URLMapping.UG.BBA.bba_engineeringandProjectManagement}
                exact
                component={CourseListDesc_BBA_engineeringandProjectManagement}
              />
              <Route
                path={URLMapping.UG.BBA.bba_strategyandLeadership}
                exact
                component={CourseListDesc_BBA_strategyandLeadership}
              />
              <Route
                path={URLMapping.UG.BBA.bba_travelandTourismManagement}
                exact
                component={CourseListDesc_BBA_travelandTourismManagement}
              />
              <Route
                path={URLMapping.UG.BBA.bba_multimediaManagement}
                exact
                component={CourseListDesc_BBA_multimediaManagement}
              />
              <Route
                path={URLMapping.UG.BBA.bba_logistics}
                exact
                component={CourseListDesc_BBA_logistics}
              />
              <Route
                path={URLMapping.UG.BBA.bba_buisnessanalytics}
                exact
                component={CourseListDesc_BBA_buisnessanalytics}
              />

              <Route
                path={URLMapping.UG.BBA.bba_advertisingandBranding}
                exact
                component={CourseListDesc_BBA_advertisingandBranding}
              />
              <Route
                path={URLMapping.UG.BBA.bba_retailandSalesManagement}
                exact
                component={CourseListDesc_BBA_retailandSalesManagement}
              />
              <Route
                path={URLMapping.UG.BBA.bba_internationalBusinessManagement}
                exact
                component={CourseListDesc_BBA_internationalBusinessManagement}
              />
              <Route
                path={URLMapping.UG.BBA.bba_internationalMarketing}
                exact
                component={CourseListDesc_BBA_internationalMarketing}
              />
              <Route
                path={URLMapping.UG.BBA.bba_ITandSystemsManagement}
                exact
                component={CourseListDesc_BBA_ITandSystemsManagement}
              />
              <Route
                path={URLMapping.UG.BBA.bba_FinanceandLeadership}
                exact
                component={CourseListDesc_BBA_FinanceandLeadership}
              />
              <Route
                path={URLMapping.UG.BBA.bba_InternationalFinance}
                exact
                component={CourseListDesc_BBA_InternationalFinance}
              />

              {/* close */}

              {/* MCA */}
              <Route
                path={URLMapping.PG.MCA.mca_DataScience}
                exact
                component={CourseListDesc_MCA_DataScience}
              />
              <Route
                path={URLMapping.PG.MCA.mca_CloudComputing}
                exact
                component={CourseListDesc_MCA_Cloud_Computing}
              />
              <Route
                path={
                  URLMapping.PG.MCA.mca_ArtificialIntelligenceandMachineLearning
                }
                exact
                component={
                  CourseListDesc_MCA_ArtificialIntelligenceandMachineLearning
                }
              />
              <Route
                path={URLMapping.PG.MCA.mca_GameDevelopment}
                exact
                component={CourseListDesc_MCA_GameDevelopment}
              />
              <Route
                path={URLMapping.PG.MCA.mca_ArtificialIntelligence}
                exact
                component={CourseListDesc_MCA_ArtificialIntelligence}
              />

              <Route
                path={URLMapping.PG.MCA.mca_CyberSecurity}
                exact
                component={CourseListDesc_MCA_CyberSecurity}
              />
              <Route
                path={URLMapping.PG.MCA.mca_MLandAI}
                exact
                component={CourseListDesc_MCA_MLandAI}
              />
              <Route
                path={URLMapping.PG.MCA.mca_Reality_and_virtual}
                exact
                component={CourseListDesc_MCA_Reality_and_virtual}
              />
              <Route
                path={URLMapping.PG.MCA.mba_DataScienceandBigDataAnalytics}
                exact
                component={CourseListDesc_MCA_DataScience_BigData_Analytics}
              />
              <Route
                path={URLMapping.PG.MCA.mca_Blockchain}
                exact
                component={CourseListDesc_MCA_Blockchain}
              />
              <Route
                path={URLMapping.PG.MCA.mba_MachineLearning}
                exact
                component={CourseListDesc_MCA_MachineLearning}
              />
              {/* <Route path={URLMapping.PG.MCA.mca_AugmentedRealityandVirtualReality} exact component={CourseListDesc_MCA_AugmentedRealityandVirtualReality}/> */}

              <Route
                path={URLMapping.PG.MCA.mca_ComputerScienceAndIT}
                exact
                component={CourseListDesc_MCA_ComputerScienceAndIT}
              />
              <Route
                path={URLMapping.PG.MCA.mca_DataAnalytics}
                exact
                component={CourseListDesc_MCA_DataAnalytics}
              />

              {/* Close MCA */}
              <Route
                path={URLMapping.UG.BCom.bcom_AccountFinance}
                exact
                component={CourseListDesc_BCOM_AccountingFinance}
              />
              <Route
                path={URLMapping.UG.BCom.bcom_bankingFinance}
                exact
                component={CourseListDesc_BCOM_BankingFincance}
              />
              <Route
                path={URLMapping.UG.BCom.bcom_finTech}
                exact
                component={CourseListDesc_BCOM_FinTech}
              />
              <Route
                path={URLMapping.UG.BCom.bcom_hindi}
                exact
                component={CourseListDesc_BCOM_Hindi}
              />
              <Route
                path={URLMapping.UG.BCom.bcom_general}
                exact
                component={CourseListDesc_BCom_General}
              />
              <Route
                path={URLMapping.UG.BCom.bcom_internationalFinance}
                exact
                component={CourseListDesc_BCOM_InternationalFincance}
              />
              <Route
                path={URLMapping.UG.BCom.bcom_professionalAccountingFinance}
                exact
                component={CourseListDesc_BCOM_ProfessionalAccountFinance}
              />
              {/* //new change */}
              <Route
                path={URLMapping.UG.BCom.bcom_stockMarket}
                exact
                component={CourseListDesc_BCOM_StockMarket}
              />
              <Route
                path={URLMapping.UG.BCom.bcom_auditing}
                exact
                component={CourseListDesc_BCOM_Auditing}
              />
              <Route
                path={URLMapping.UG.BCom.bcom_law}
                exact
                component={CourseListDesc_BCOM_Law}
              />
              <Route
                path={URLMapping.UG.BCom.bcom_internationalBusiness}
                exact
                component={CourseListDesc_BCOM_InternationalBusiness}
              />
              <Route
                path={URLMapping.UG.BCom.bcom_behaviouralFinance}
                exact
                component={CourseListDesc_BCOM_BehaviouralFinance}
              />
              <Route
                path={URLMapping.UG.BCom.bcom_banking}
                exact
                component={CourseListDesc_BCOM_BankingInsurance}
              />

              <Route
                path={URLMapping.UG.BA.ba_general}
                exact
                component={CourseListDesc_BA_general}
              />
              <Route
                path={URLMapping.UG.BA.ba_economics}
                exact
                component={CourseListDesc_BA_Economics}
              />
              <Route
                path={URLMapping.UG.BA.ba_hindi}
                exact
                component={CourseListDesc_BA_Hindi}
              />
              <Route
                path={URLMapping.UG.BA.ba_JournalismandMassCommunication}
                exact
                component={CourseListDesc_BA_JournalismandMassCommunication}
              />
              <Route
                path={URLMapping.UG.BA.ba_TourismAdministrator}
                exact
                component={CourseListDesc_BA_TourismAdministrator}
              />

              {/* BCA */}
              <Route
                path={URLMapping.UG.BCA.bca_General}
                exact
                component={CourseListDesc_BCA_General}
              />
              <Route
                path={URLMapping.UG.BCA.bca_AIandMachineLearning}
                exact
                component={CourseListDesc_BCA_AIandMachineLearning}
              />
              <Route
                path={URLMapping.UG.BCA.bca_CloudandSecurity}
                exact
                component={CourseListDesc_BCA_CloudandSecurity}
              />
              <Route
                path={URLMapping.UG.BCA.bca_CyberSecurity}
                exact
                component={CourseListDesc_BCA_CyberSecurity}
              />
              <Route
                path={URLMapping.UG.BCA.bca_DataAnalytics}
                exact
                component={CourseListDesc_BCA_DataAnalytics}
              />
              <Route
                path={URLMapping.UG.BCA.bca_DatabaseManagementSystem}
                exact
                component={CourseListDesc_BCA_DatabaseManagementSystem}
              />
              <Route
                path={URLMapping.UG.BCA.bca_DataScienceandBigDataAnalytics}
                exact
                component={CourseListDesc_BCA_DataScienceandBigDataAnalytics}
              />
              <Route
                path={URLMapping.UG.BCA.bca_MultimediaandAnimation}
                exact
                component={CourseListDesc_BCA_MultimediaandAnimation}
              />

              {/* close BCA */}
              <Route
                path={URLMapping.UG.BTECH.btech_General}
                exact
                component={CourseListDesc_Btech_General}
              />
              <Route
                path={URLMapping.UG.BTECH.btech_mechincalEngineering}
                exact
                component={CourseListDesc_Btech_MechanicalEngineering}
              />
              <Route
                path={URLMapping.UG.BTECH.btech_computerScienceEngineering}
                exact
                component={CourseListDesc_Btech_ComputerScienceEngineering}
              />
              <Route
                path={URLMapping.UG.BTECH.btech_civilEngineering}
                exact
                component={CourseListDesc_Btech_CivilEngineering}
              />
              <Route
                path={URLMapping.UG.BTECH.btech_electricalEngineering}
                exact
                component={CourseListDesc_Btech_ElectricalEngineering}
              />
              <Route
                path={
                  URLMapping.UG.BTECH.btech_electronicsCommunicationEngineering
                }
                exact
                component={
                  CourseListDesc_Btech_ElectronicsCommunicationEngineering
                }
              />
              <Route
                path={URLMapping.UG.BTECH.btech_machanicalAutomobileEngineering}
                exact
                component={CourseListDesc_Btech_MechanicalAutomobileEngineering}
              />

              <Route
                path={URLMapping.PG.MCom.mcom_AccountFinance}
                exact
                component={CourseListDesc_MCom_AccountingFinance}
              />
              <Route
                path={URLMapping.PG.MCom.mcom_internationalFinance}
                exact
                component={CourseListDesc_MCom_InternationalFinance}
              />
              <Route
                path={URLMapping.PG.MCom.mcom_professionalAccountingFinance}
                exact
                component={CourseListDesc_MCom_ProfessionalAccountingFinance}
              />
              <Route
                path={URLMapping.PG.MCom.mcom_genaral}
                exact
                component={CourseListDesc_MCom_genaral}
              />
              <Route
                path={URLMapping.PG.MCom.mcom_finance_management}
                exact
                component={CourseListDesc_MCom_finance_management}
              />
              <Route
                path={URLMapping.PG.MCom.mcom_fintech}
                exact
                component={CourseListDesc_MCom_fintech}
              />

              <Route
                path={URLMapping.PG.MSc.msc_aimachinelearning}
                exact
                component={CourseListDesc_MSc_Ai_machineLearning}
              />
              <Route
                path={URLMapping.PG.MSc.msc_appliedfinance}
                exact
                component={CourseListDesc_MSc_AppliedFinance}
              />
              <Route
                path={URLMapping.PG.MSc.msc_datascience}
                exact
                component={CourseListDesc_MSc_DataScience}
              />
              <Route
                path={URLMapping.PG.MSc.msc_mathematics}
                exact
                component={CourseListDesc_MSc_Mathematics}
              />
              <Route
                path={URLMapping.PG.MSc.msc_genaral}
                exact
                component={CourseListDesc_MSc_genaral}
              />
              <Route
                path={URLMapping.PG.MSc.msc_business_analytics}
                exact
                component={CourseListDesc_MSc_business_analytics}
              />
              <Route
                path={URLMapping.PG.MBA.hr_management}
                exact
                component={CourseListDesc_MBA_hr_management}
              />
              <Route
                path={URLMapping.PG.MBA.mba_finance}
                exact
                component={CourseListDesc_MBA_mba_finance}
              />
              <Route
                path={URLMapping.PG.MBA.mba_marketing}
                exact
                component={CourseListDesc_MBA_mba_marketing}
              />
              <Route
                path={URLMapping.PG.MBA.mba_general}
                exact
                component={CourseListDesc_MBA_mba_general}
              />
              <Route
                path={URLMapping.PG.MBA.mba_marketingFinance}
                exact
                component={CourseListDesc_MBA_mba_marketingFinance}
              />
              <Route
                path={URLMapping.PG.MBA.mba_systemOperationManagement}
                exact
                component={CourseListDesc_MBA_mba_systemOperationManagement}
              />
              <Route
                path={URLMapping.PG.MBA.mba_marketingFinance}
                exact
                component={CourseListDesc_MBA_mba_marketingFinance}
              />
              <Route
                path={URLMapping.PG.MBA.mba_marketingHR}
                exact
                component={CourseListDesc_MBA_mba_marketingHR}
              />
              <Route
                path={URLMapping.PG.MBA.mba_aviation}
                exact
                component={CourseListDesc_MBA_mba_aviation.jsx}
              />
              <Route
                path={URLMapping.PG.MBA.mba_it}
                exact
                component={CourseListDesc_MBA_mba_it}
              />
              <Route
                path={URLMapping.PG.MBA.mba_logisticSupplyChain}
                exact
                component={CourseListDesc_MBA_mba_logisticSupplyChain}
              />
              <Route
                path={URLMapping.PG.MBA.mba_bankingFinance}
                exact
                component={CourseListDesc_MBA_mba_bankingFinance}
              />
              <Route
                path={URLMapping.PG.MBA.mba_dataScienceAnalytics}
                exact
                component={CourseListDesc_MBA_mba_dataScienceAnalytics}
              />
              <Route
                path={URLMapping.PG.MBA.mba_internationalFinance}
                exact
                component={CourseListDesc_MBA_mba_internationalFinance}
              />

              <Route
                path={URLMapping.PG.MBA.mba_financeLeadership}
                exact
                component={CourseListDesc_MBA_mba_financeLeadership}
              />
              <Route
                path={URLMapping.PG.MBA.mba_digitalMarketing}
                exact
                component={CourseListDesc_MBA_mba_digitalMarketing}
              />
              <Route
                path={URLMapping.PG.MBA.mba_bankingMarketing}
                exact
                component={CourseListDesc_MBA_mba_bankingMarketing}
              />
              <Route
                path={URLMapping.PG.MBA.mba_multimediaManagement}
                exact
                component={CourseListDesc_MBA_mba_multimediaManagement}
              />
              {/* <Route path={URLMapping.PG.MBA.mba_advertisementBranding} exact component={CourseListDesc_MBA_mba_advertisementBranding}/> */}
              <Route
                path={URLMapping.PG.MBA.mba_informationTechnology}
                exact
                component={CourseListDesc_MBA_mba_informationTechnology}
              />
              <Route
                path={URLMapping.PG.MBA.mba_leadershipandstragey}
                exact
                component={CourseListDesc_MBA_mba_leadershipandstragey}
              />
              <Route
                path={URLMapping.PG.MBA.mba_buisnessmanagement}
                exact
                component={CourseListDesc_MBA_buisnessmanagement}
              />
              <Route
                path={URLMapping.PG.MBA.mba_powermanagemnet}
                exact
                component={CourseListDesc_MBA_mba_powermanagemnet}
              />
              {/* //new works// */}
              <Route
                path={URLMapping.PG.MBA.mba_generals}
                exact
                component={CourseListDesc_MBA_mba_generals}
              />
              <Route
                path={URLMapping.PG.MBA.buisnessanalytics}
                exact
                component={CourseListDesc_MBA_buisnessanalytics}
              />
              <Route
                path={URLMapping.PG.MBA.operationsmanagement}
                exact
                component={CourseListDesc_MBA_operationsmanagement}
              />
              <Route
                path={URLMapping.PG.MBA.hrm_financeManagement}
                exact
                component={CourseListDesc_MBA_hrm_financeManagement}
              />
              <Route
                path={URLMapping.PG.MBA.healthcareManagement}
                exact
                component={CourseListDesc_MBA_healthcareManagement}
              />
              <Route
                path={URLMapping.PG.MBA.digitalMarketingManagement}
                exact
                component={CourseListDesc_MBA_digitalMarketingManagement}
              />
              <Route
                path={URLMapping.PG.MBA.hospitalitymanagement}
                exact
                component={CourseListDesc_MBA_hospitalitymanagement}
              />
              <Route
                path={URLMapping.PG.MBA.internationalBussinessManagement}
                exact
                component={CourseListDesc_MBA_internationalBussinessManagement}
              />
              <Route
                path={URLMapping.PG.MBA.mba_project_Management}
                exact
                component={CourseListDesc_MBA_mba_project_Management}
              />
              <Route
                path={URLMapping.PG.MBA.mba_financial_markets_Management}
                exact
                component={CourseListDesc_MBA_mba_financial_markets_Management}
              />
              <Route
                path={URLMapping.PG.MBA.EntrepreneurshipLeadership}
                exact
                component={CourseListDesc_MBA_EntrepreneurshipLeadership}
              />
              <Route
                path={URLMapping.PG.MBA.business_Intelligence_Analytics}
                exact
                component={CourseListDesc_MBA_business_Intelligence_Analytics}
              />
              <Route
                path={URLMapping.PG.MBA.mba_advertising_branding}
                exact
                component={CourseListDesc_MBA_mba_advertising_branding}
              />
              <Route
                path={URLMapping.PG.MBA.mba_hospital_administration}
                exact
                component={CourseListDesc_MBA_mba_hospital_administration}
              />
              <Route
                path={URLMapping.PG.MBA.mba_business_intelligence}
                exact
                component={CourseListDesc_MBA_mba_business_intelligence}
              />
              <Route
                path={URLMapping.PG.MBA.mba_oil_and_gas_management}
                exact
                component={CourseListDesc_MBA_mba_oil_and_gas_management}
              />
              <Route
                path={URLMapping.PG.MBA.mba_international_trade_management}
                exact
                component={
                  CourseListDesc_MBA_mba_international_trade_management
                }
              />
              <Route
                path={URLMapping.PG.MBA.mba_fintech_Management}
                exact
                component={CourseListDesc_MBA_mba_fintech_Management}
              />
              <Route
                path={URLMapping.PG.MBA.mba_retail_Management}
                exact
                component={CourseListDesc_MBA_mba_retail_Management}
              />
              <Route
                path={URLMapping.PG.MBA.mba_tourismManagement}
                exact
                component={CourseListDesc_MBA_mba_tourismManagement}
              />
              <Route
                path={URLMapping.PG.MBA.mba_sportsManagement}
                exact
                component={CourseListDesc_MBA_mba_sportsManagement}
              />
              <Route
                path={URLMapping.PG.MBA.mba_hr_analytics}
                exact
                component={CourseListDesc_MBA_mba_hr_Analytics}
              />
              <Route
                path={URLMapping.PG.MBA.mba_digital_Entrepreneurship}
                exact
                component={CourseListDesc_MBA_mba_digital_Entrepreneurship}
              />
              <Route
                path={URLMapping.PG.MBA.mba_startegic_hr_management}
                exact
                component={CourseListDesc_MBA_mba_startegic_hr_management}
              />
              <Route
                path={URLMapping.PG.MBA.mba_banking_insurance}
                exact
                component={CourseListDesc_MBA_mba_banking_insurance}
              />
              <Route
                path={URLMapping.PG.MBA.mba_strategic_Marketing}
                exact
                component={CourseListDesc_MBA_mba_strategic_Marketing}
              />
              <Route
                path={URLMapping.PG.MBA.mba_strategic_finance_Management}
                exact
                component={CourseListDesc_MBA_mba_strategic_finance_Management}
              />
              <Route
                path={URLMapping.PG.MBA.mba_international_m_Management}
                exact
                component={CourseListDesc_MBA_mba_international_m_Management}
              />
              <Route
                path={URLMapping.PG.MBA.mba_Ai_machine_learning}
                exact
                component={CourseListDesc_MBA_mba_Ai_machine_learning}
              />
              <Route
                path={URLMapping.PG.MBA.mba_blockChain_Management}
                exact
                component={CourseListDesc_MBA_mba_blockChain_Management}
              />
              <Route
                path={URLMapping.PG.MBA.mba_waste_Management}
                exact
                component={CourseListDesc_MBA_mba_waste_Management}
              />
              <Route
                path={URLMapping.PG.MBA.mba_it_and_finTech}
                exact
                component={CourseListDesc_MBA_mba_it_and_finTech}
              />
              <Route
                path={URLMapping.PG.MBA.mba_banking_financial_service_Insurence}
                exact
                component={
                  CourseListDesc_MBA_mba_banking_financial_service_Insurence
                }
              />
              <Route
                path={
                  URLMapping.PG.MBA
                    .mba_investment_banking_equity_research_management
                }
                exact
                component={
                  CourseListDesc_MBA_mba_investment_banking_equity_research_management
                }
              />
              {/* emd new mba work */}

              {/* MA start new task */}

              <Route
                path={URLMapping.PG.MA.ma_economics}
                exact
                component={CourseListDesc_MA_economics}
              />
              <Route
                path={URLMapping.PG.MA.ma_journalismMassCommunication}
                exact
                component={CourseListDesc_MA_journalism_mass_communication}
              />
              <Route
                path={URLMapping.PG.MA.ma_english}
                exact
                component={CourseListDesc_MA_english}
              />
              <Route
                path={URLMapping.PG.MA.ma_psychology}
                exact
                component={CourseListDesc_MA_psychology}
              />
              <Route
                path={URLMapping.PG.MA.ma_publicPolicyAdministration}
                exact
                component={CourseListDesc_MA_public_policy_administration}
              />
              <Route
                path={URLMapping.PG.MA.ma_liberalArts}
                exact
                component={CourseListDesc_MA_liberal_arts}
              />
              <Route
                path={URLMapping.PG.MA.ma_sociology}
                exact
                component={CourseListDesc_MA_sociology}
              />
              <Route
                path={URLMapping.PG.MA.ma_history}
                exact
                component={CourseListDesc_MA_history}
              />
              <Route
                path={URLMapping.PG.MA.ma_politicalScience}
                exact
                component={CourseListDesc_MA_political_science}
              />

              {/* M.Tech start */}
              <Route
                path={URLMapping.PG.MTECH.mtech_mechincalproduction}
                exact
                component={CourseListDesc_MTech_mechanical_production}
              />
              <Route
                path={URLMapping.PG.MTECH.mtech_computerScienceEngineering}
                exact
                component={CourseListDesc_MTech_computerScienceEngineering}
              />
              <Route
                path={URLMapping.PG.MTECH.mtech_civilEngineering}
                exact
                component={CourseListDesc_MTech_civilEngineering}
              />
              <Route
                path={URLMapping.PG.MTECH.mtech_mechincalEngineering}
                exact
                component={CourseListDesc_MTech_mechanical_engineering}
              />
              <Route
                path={URLMapping.PG.MTECH.mtech_electricalpowersystem}
                exact
                component={CourseListDesc_MTech_electricalpowersystem}
              />
              <Route
                path={URLMapping.PG.MTECH.mtech_mechanical_design}
                exact
                component={CourseListDesc_MTech_mechanical_design}
              />
              <Route
                path={URLMapping.PG.MTECH.mtech_civil_structural}
                exact
                component={CourseListDesc_MTech_civil_structural}
              />
              {/* Diploma start  */}

              {/* <Route
                path={URLMapping.DEP.Dep.dep_civil_structural}
                exact
                component={CourseListDesc_DEP_hr_management}
              /> */}

              {/* Certificate */}
              {/* <Route
                path={URLMapping.Certificate.project_management}
                exact
                component={CourseListDesc_CERT_project_management}
              /> */}
              {/* <Route
                path={URLMapping.Certificate.corporatecommunication}
                exact
                component={CourseListDesc_CERT_corporate_communications}
              /> */}
            </Switch>
          </div>
          <div className="collegeList">
            <div className="container-fluid">
              <div className="container">
                {colleges.map((arrItem) => {
                  return (
                    <CollegeCardRow
                      key={Math.random()}
                      {...arrItem}
                      isHeadShow={++collegeCount === 1 ? true : false}
                    />
                  );
                })}
              </div>
              <div className="collegeList-moreBtn-wrap">
                <button
                  className="collegeList-moreBtn"
                  type="button"
                  onClick={(e) => setPageCount(pageCount + 1)}
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
