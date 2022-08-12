import React, { useEffect } from "react";
import "./App.css";
import { MuiThemeProvider } from "@material-ui/core";
import Pace from "./components/flare/Pace";
import { JsonLd } from "react-schemaorg";
import theme from "./theme";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import SignIn from "./components/AuthForms/SignIn";
import { useDispatch, useSelector } from "react-redux";
import TeamRegister from "./components/AuthForms/TeamRegister";
import SignUpPage from "./components/AuthForms/SignUpPage/SignUpPage";
import TeamViewPage from "./components/TeamView/TeamViewPage";
import TeamViewGate from "./components/TeamView/TeamViewGate";
import SignOutPage from "./components/AuthForms/SignOut";
import PlayerRegister from "./components/AuthForms/playerRegister";
import Error from "./components/error";
import { getUser } from "./features/auth/authSlice";
import SearchResultsPage from "./components/SearchResultsPage/searchResultsPage";
import IndexPage from "./components/index/indexPage";
import Cookies from "js-cookie";
import LeagueViewPage from "./components/LeagueView/LeagueViewPage"
import LeagueViewGate from "./components/LeagueView/LeagueViewGate"
import PlayerViewPage from "./components/PlayerView/PlayerViewPage";
import Contact from "./components/contact";
import LeagueRegister from "./components/AuthForms/LeagueRegister";
import LeagueTeamRegister from "./components/AuthForms/LeagueTeamRegister";

// Google Analytics Tracking Information
const TRACKING_ID = "UA-"; // YOUR_OWN_TRACKING_ID
//ReactGA.initialize(TRACKING_ID);

function App() {
  const dispatch = useDispatch();
  const config = useSelector((state) => state.config);
  useEffect(() => {
    if (Cookies.get("jwt")) {
      dispatch(getUser(config));
    }
  }, [dispatch, config]);
  return (
    <MuiThemeProvider theme={theme}>
      {/* Loading bar at top of page */}
      <Pace color={theme.palette.primary.light} />
      {/* Organisational Schema */}
      <JsonLd
        Organization
        item={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Social Thirst",
        }}
      />
      {/* Application Navbar below */}
      <Header theme={theme} />
      {/* Main application routes and pages below */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <IndexPage />
            </div>
          }
        />
        <Route path="/signin" element={<SignIn theme={theme} />} />
        <Route path="/signout" element={<SignOutPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/results" element={<SearchResultsPage theme={theme} />} />
        <Route path="/team-register" element={<TeamRegister />} />
        <Route path="/league-register" element={<LeagueRegister />} />
        <Route path="/league-team-register" element={<LeagueTeamRegister />} />        
        <Route
          path="/Team/:TeamName"
          component={TeamViewPage}
          element={
            <TeamViewGate />
          }
          exact>
        </Route>
        <Route
          path="/League/:TeamName"
          component={LeagueViewPage}
          element={
            <LeagueViewGate />
          }
          exact>
        </Route>
        <Route path="/player-register" element={<PlayerRegister />} />
        <Route path="/player" element={<PlayerViewPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* Application Footer below */}
      <Footer theme={theme} />
    </MuiThemeProvider>
  );
}

export default App;
