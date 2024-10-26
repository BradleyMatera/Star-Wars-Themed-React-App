import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Notifications from './pages/Notifications';
import EventsPage from './pages/EventsPage';
import Dashboard from './pages/Dashboard';
import Newsfeed from './pages/Newsfeed';
import ProfilePage from './pages/ProfilePage';
import GroupsAndCommunities from './pages/GroupsAndCommunities';
import Settings from './pages/Settings';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/tailwind.css';
import styled from 'styled-components';
import './styles/DashboardStyledComponents';
import './styles/PostCardStyledComponents';
import './styles/AdCardStyledComponents';
import './styles/LeftNavigationStyledComponents';
import './styles/ProfilePageStyledComponents';
import './styles/GroupsAndCommunitiesStyledComponents';
import './styles/SettingsStyledComponents';
import './styles/HeaderStyledComponents';
import './styles/FooterStyledComponents';

const App = () => (
  <AppContainer>
    <Router>
      <Header />
      <MainContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/events" component={EventsPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/newsfeed" component={Newsfeed} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/groupscommunities" component={GroupsAndCommunities} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </MainContent>
      <Footer />
    </Router>
  </AppContainer>
);

const AppContainer = styled.div`
  background: linear-gradient(to right, #FF0000, #0000FF);
  min-height: 100vh;
`;

const MainContent = styled.main`
  padding: 20px;
`;

export default App;
