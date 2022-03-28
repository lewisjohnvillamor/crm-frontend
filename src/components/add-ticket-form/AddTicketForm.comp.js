import React from 'react'
import { Form, Button, Row,Col } from 'react-bootstrap'
import PropTypes from 'prop-types'


export const AddTicketForm = ({handleOnSubmited,handleOnChange,frmData,frmDataError}) => {
  return (
    
    <div className='mt-3 jumbotron bg-light'>
        <br/>
        <br/>
        <h1 className='text-info text-center'>Add New Ticket</h1>
        <hr/>
        <Form autoComplete='off' onSubmit={handleOnSubmited} >
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Subject</Form.Label>
                        <Col sm={9}>
                        <Form.Control
                        name="subject"
                        onChange={handleOnChange}
                        value={frmData.subject}
                        placeholder="Subject"
                        required
                        />   
                      </Col>
                    </Form.Group>
                    <Form.Text className='text-danger'>{frmDataError.subject && "Subject is required"}</Form.Text>
                         
        <br/>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Issue Found</Form.Label>
                        <Col sm={9}>
                      
                        <Form.Control
                        type="date"
                        name="issueDate"
                        value={frmData.issueDate}
                        onChange={handleOnChange}
                        required
                        />   
                         </Col>
                    </Form.Group>
        <br/>   
                    <Form.Group>
                        <Form.Label>Details</Form.Label>
                        <Form.Control
                        as="textarea"
                        name="detail"
                        value={frmData.detail}
                        rows="5"
                        onChange={handleOnChange}
                        required
                        />   
                    </Form.Group> 
                    <br></br>
                    <Button type="this.submit"  variant="info" >Add New Ticket</Button>     
                </Form>
    </div>
  )
}

// AddTicketForm.propTypes = {
//     handleOnChange: PropTypes.func.isRequired,
//     handleOnSubmit: PropTypes.func.isRequired,
//     frmData: PropTypes.object.isRequired
// }
