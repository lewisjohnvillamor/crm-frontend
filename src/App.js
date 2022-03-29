import './App.css';
import { DefaultLayout } from './components/layout/DefaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard.page';
import { Entry } from './pages/Entry/Entry.page';
import { AddTicket } from './pages/new-ticket/AddTicket.page';
import { TicketList } from './pages/ticket-list/TicketList.page';
import { Ticket } from './pages/ticket/Ticket.page';


function App() {
  return (
    <div className="App">
     {/* <Entry/> */}
     <DefaultLayout>
       {/* <Dashboard/> */}
       {/* <AddTicket/> */}
       {/* <TicketList/> */}
       {<Ticket/>}
     </DefaultLayout>
    </div>
  );
}

export default App;
