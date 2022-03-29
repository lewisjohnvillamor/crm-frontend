import {React, useState,useEffect} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import tickets from '../../assets/data/dummy-tickets.json'
import { MessageHistory } from '../../components/message-history/MessageHistory.comp'
import {UpdateTicket} from '../../components/update-ticket/UpdateTicket.comp'

export const Ticket = () => {

    const [message, setMessage] = useState('')

    useEffect(() => {}, [message])
    

    const handleOnChange = e => {
        setMessage(e.target.value);
    };

    const handleOnSubmit = (e) => {
        console.log("formsubmittted!")
    }
  
    const ticket = tickets[0];
    return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page="Ticket" />
            </Col>
        </Row>
        <Row>
            <Col className='text-weight-bolder text-secondary'>
            <div className='subject'>Subject: {ticket.subject}</div>
            <div className='date'>Status: {ticket.status}</div>
            <div className='status'>Date: {ticket.addedAt}</div>
            </Col>
            <Col className='="text-right'>
            <Button variant="outline-info">Close Ticket</Button>
            </Col>

        </Row>
        <Row  className="mt-4">
            <MessageHistory msg={ticket.history}/>
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
  )
}
