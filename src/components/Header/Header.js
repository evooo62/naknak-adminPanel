import "./Header.css";
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { Col, Figure, FormControl, InputGroup, Row } from "react-bootstrap";
import img from "../../images/image.png"

const Header = () => {

 const [activeTab, setActiveTab] = useState("Home");
 const location = useLocation();

 useEffect(()=>{
    if(location.pathname === "/"){
        setActiveTab("Home");
    } else if(location.pathname === "/add"){
        setActiveTab("AddContact");
    } else if(location.pathname === "/about"){
        setActiveTab("About");
    }
 },[location]);

  return (
     
    <div className="header">
        <Row>
         {/* Icon PLace */}
        <Col sm={2}>
       <Figure style={{margin:"0px"}}>
        <Figure.Image style={{padding:"2vh"}} width={100} height={100} alt="100x100" src={img}/>
        </Figure>
        </Col>
        {/* Search place */}
        <Col>
        <InputGroup style={{marginTop:"4vh"}}>
             <FormControl id="search" className='rounded-pill' placeholder=" Search"/>
         </InputGroup>
         </Col>
         {/* Pages link */}
         <Col>
        <div className="header-right" style={{marginTop:"4vh"}}>
            <Link to="/">
                <p className={`${activeTab==="Home" ? "active" : ""}`} onClick={()=>setActiveTab("Home")}>
                    Home
                </p>
            </Link>
            <Link to="/add">
                <p className={`${activeTab==="AddContact" ? "active" : ""}`} onClick={()=>setActiveTab("AddContact")}>
                    AddContact
                </p>
            </Link>
            <Link to="/about">
                <p className={`${activeTab==="About" ? "active" : ""}`} onClick={()=>setActiveTab("About")}>
                    About
                </p>
            </Link>
        </div>
        </Col>
        </Row>
    </div>
    
  )
}

export default Header