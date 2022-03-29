import React from 'react'
import { Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

export const UpdateTicket = ({msg,handleOnChange, handleOnSubmit}) => {
  return (
    <Form onSubmit={handleOnSubmit}>
        <Form.Label>Reply</Form.Label><br/>
        <Form.Text>Please reply your message here or update the ticket</Form.Text>
        <Form.Control
        value={msg}
        onChange={handleOnChange}
        as="textarea"
        row="5"
        name="details"/>
        <div className='mt-3 mb-3' onClick={handleOnSubmit} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="info"> Reply</Button>
        </div>

    </Form>
  )
}

UpdateTicket.propTypes = {
    msg: PropTypes.string.isRequired,
    handleOnChange:PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired
  }
