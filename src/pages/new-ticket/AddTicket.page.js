import React, {useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm.comp'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import {shortText} from "../../utils/validation"
import { DefaultLayout } from '../../components/layout/DefaultLayout';

export const AddTicket = () => {
  const InitialFrmDt ={
        subject:'',
        issueDate:'',
        detail:''
    }

    const InitialFrmError ={
        subject:false,
        issueDate:false,
        detail:false
    }
  const [frmData, setFrmData] = useState(InitialFrmDt)
  const [frmDataError, setFrmDataError] = useState(InitialFrmError)

  useEffect(() => { }, [frmData])
  
  const handleOnChange = (e) => {
      const{name,value} = e.target;
      setFrmData(
          {
            ...frmData,
            [name]:value
          }
      )

     
      

 



  }

  
const handleOnSubmit = async (e) => {
    e.preventDefault()

    const isSubjectValid = await shortText(frmData.subject)

    setFrmDataError ({
        ...InitialFrmError,
        subject: !isSubjectValid,
    })

    console.log("Form Submit Request Completed",frmData)
}
  return (
      <DefaultLayout>
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page = "New Ticket"/>
            </Col>
        </Row>
        <Row>
            <Col>
                <AddTicketForm 
                 
                handleOnChange={handleOnChange}
                 handleOnSubmited={handleOnSubmit}
                frmData={frmData}
                frmDataError={frmDataError}/>
            </Col>
        </Row>
    </Container>
    </DefaultLayout>
  )
}
