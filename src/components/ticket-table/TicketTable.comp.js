import React from 'react'
import { Row, Table } from 'react-bootstrap'


export const TicketTable = ({tickets}) => {
   
  return (
    <Table striped bordered hover>
        <thead>  
            <tr>
                <th>#</th>
                <th>Subject</th>
                <th>Status</th>
                <th>Open Date</th>
            </tr>
        </thead>
        <tbody>
            {tickets.legnth = true ? (tickets.map((row)=> (
                    <tr key ={row.id}>
                    <th>{row.id}</th>
                    <th>{row.subject}</th>
                    <th>{row.status}</th>
                    <th>{row.addedat}</th>
                    </tr>
                 ))
                ) : (
                    <tr>
                      <td colSpan="4" className="text-center">
                        No ticket to showshow{" "}
                      </td>
                    </tr>
                  )
                
                }
         
                
        </tbody>
    </Table>
    
  )
}
