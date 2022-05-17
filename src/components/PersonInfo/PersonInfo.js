import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Person } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import "./PersonInfo.css";

const PersonInfo = () => {
  return (
    <div className='person'>
    <Row>
         <Col>
             <Link to={`/`} className="link" style={{textDecoration:"none",color:"black"}}>
                 <div className='kisiBilgileri'>
                    <Person size={80}></Person>
                    <p>Kisi Bilgileri</p>
                 </div>
                </Link>
         </Col>
    </Row>
    </div>
  )
}

export default PersonInfo