import './App.css';
import { DefaultLayout } from './components/layout/DefaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard.page';
import { Entry } from './pages/Entry/Entry.page';
import { AddTicket } from './pages/new-ticket/AddTicket.page';
import { TicketList } from './pages/ticket-list/TicketList.page';
import { Ticket } from './pages/ticket/Ticket.page';
import {PrivateRoute} from './components/private-route/PrivateRoute.comp'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React from "react";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path="/" element={<Entry/>}>
            </Route>
          {/* <DefaultLayout> */}
            {/* <Route path="/dashboard" element={<Dashboard/>}>  </Route>
            <Route path="/addticket" element={<AddTicket/>}>  </Route>
            <Route path="/tickets" element={<TicketList/>}>   </Route>
            <Route path="/ticket/:tid" element={<Ticket/>}>    </Route> */}

            <Route exact path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
            <Route exact path='/add-ticket' element={<PrivateRoute><AddTicket/></PrivateRoute>}/>
            <Route exact path='/tickets' element={<PrivateRoute><TicketList/></PrivateRoute>}/>
            <Route exact path='/ticket/:tId' element={<PrivateRoute><Ticket/></PrivateRoute>}/>
     

          {/* </DefaultLayout> */}

          
        </Routes>
     </Router>
    </div>
  );
}

export default App;
