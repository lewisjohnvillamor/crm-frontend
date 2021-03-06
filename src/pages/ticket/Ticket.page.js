import {React, useState,useEffect} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import tickets from '../../assets/data/dummy-tickets.json'
import { MessageHistory } from '../../components/message-history/MessageHistory.comp'
import {UpdateTicket} from '../../components/update-ticket/UpdateTicket.comp'
import { DefaultLayout } from '../../components/layout/DefaultLayout';
import { useParams }from 'react-router-dom';


export const Ticket = () => {

    const {tId} = useParams();

    const [message, setMessage] = useState('')
    const [ticket, setTicket] = useState('')

    useEffect(() => {
        for (let i = 0; i < tickets.length; i++) {
            if(tickets[i].id == tId)
            {
              setTicket(tickets[i])
              continue  
            }
        }
    }, [message,tId]);
    

    const handleOnChange = e => {
        setMessage(e.target.value);
    };

    const handleOnSubmit = (e) => {
        console.log("formsubmittted!")
    }
  
    // const ticket = tickets[0];
    return (
        <DefaultLayout>
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page="Ticket" />
            </Col>
        </Row>
        <Row>
            <Col className='text-weight-bolder text-secondary'>
            {tId} 
            <div className='subject'>Subject: {ticket.subject}</div>
            <div className='date'>Status: {ticket.status}</div>
            <div className='status'>Date: {ticket.addedAt}</div>
            </Col>
            <Col className='="text-right'>
            <Button variant="outline-info">Close Ticket</Button>
            </Col>

        </Row>
        <Row  className="mt-4">
            {ticket.history && <MessageHistory msg={ticket.history}/>}
            
        </Row>
        <hr/>
        <Row  className="mt-4">
            <Col>
            <UpdateTicket 
            msg={message}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            />
            </Col>
        </Row>

    </Container>
    </DefaultLayout>
  )
}
