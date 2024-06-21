import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Academics from './pages/Academics/Academics';
import Contact from './pages/Contact/Contact';
import FAQs from './pages/Faqs/Frequently';
import Gallery from './pages/Gallery/Gallery';
import Home from './pages/Home/Home';
import Society from './pages/Society/Society';
import Library from './pages/Library/Library';
import Noticeboard from './pages/Noticeboard/Noticeboard';
import Admin from './pages/admin/Admin';
import './App.css';
import NotificationPage from './pages/Noticeboard/NotificationPage';
import NotificationBydate from './pages/Noticeboard/NotificationBydate';
import Downloads from './pages/Downloads/Downloads';
import AdminPanel from './pages/adminpanel/AdminPanel';
import Item1Content from './pages/adminpanel/Item1Content';

function App() {
 






  const [events, setEvents] = useState([]);

  const handleAddEvent = (eventData) => {
    console.log('Adding Event:', eventData);
    setEvents((prevEvents) => [...prevEvents, eventData]);
    console.log('Updated Events:', events);

  };


  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/noticeboard' >
          <Noticeboard />
        </Route>
        <Route path='/notificationbydate' >
        <NotificationBydate />
        </Route>
        
        <Route path='/Faqs' >
          <FAQs />
        </Route>
        <Route path='/academics' >
          <Academics />
        </Route>
        <Route path='/gallery' >
          <Gallery events={events} />
        </Route>
        <Route path="/item1content">
          <Item1Content onAddEvent={handleAddEvent} />
        </Route>
        <Route path='/admin' >
          <Admin />
        </Route>
        <Route path='/society' >
          <Society/>
        </Route>
        <Route path='/adminpanel' >
          <AdminPanel />
        </Route>
        <Route path='/contact' >
          <Contact />
        </Route>
        <Route path='/downloads' >
          <Downloads />
        </Route>
        <Route path='/notificatiopage' >
          <NotificationPage />
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}
export default App;
