import React, {useEffect,useState} from 'react'
import fireDb from "../../firebase"
import { Link } from 'react-router-dom'
import "./Home.css"
import { Button, Col, Row, Table } from 'react-bootstrap'

const Home = () => {

  const [data,setData] = useState({});

  useEffect(()=>{
    fireDb.child("drivers").on("value",(snapshot)=>{
      if(snapshot.val()!==null){
        setData({...snapshot.val()});
      }else{
        setData({});
      }
    });
    return ()=>{
      setData({});
    };
  },[]);

  // const onDelete = (id) =>{
  //   if(
  //     window.confirm("Are you sure that you wanted to delete that contact ?")
  //   ) {
  //     fireDb.child(`contact/${id}`).remove((err)=>{
  //       if(err){
  //         toast.error(err);
  //       } else {
  //         toast.success("Contact Deleted Successfully");
  //       }
  //     });
  //   }
  // };


  return (
    <div className='home'>
    <>
    <Row>
    <Col style={{marginTop:"2vh"}}>
    <div>
      <Table className='table' striped bordered hover>
        <thead>
          <tr>
            <th style={{textAlign:"center"}}><strong>No</strong> </th>
            <th style={{textAlign:"center"}}><strong>Name Surname</strong></th>
            <th style={{textAlign:"center"}}><strong>Phone</strong></th>
            <th style={{textAlign:"center"}}><strong>Email</strong></th>
            <th style={{textAlign:"center"}}><strong>Durum</strong></th>
            <th style={{textAlign:"center"}}><strong>Action</strong></th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id,index)=>{
            return(
              <tr key={id}>
                <th scope='row'>{index + 1}</th>
                <td>Name Surname</td>
                <td>{data[id].phone}</td>
                <td>{data[id].email}</td>
                <td>{data[id].approval_status}</td>
                {/* <td>{data[id].contact}</td> */}
                <td>
                  {/* <Link to={`/update/${id}`}>
                    <button className='btn btn-edit'>Edit</button>
                  </Link> */}
                  {/* <button className='btn btn-delete' onClick={()=>onDelete(id)}>Delete</button> */}
                 
                  <Link to={`/view/${id}`} className="link">
                  <div className="d-grid gap-2">
                  <Button id="viewButton" className='rounded-pill' variant="outline-secondary"  size="lg">Detay </Button>
                  </div>
                  </Link>
                 
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
    </Col>
    </Row>
    </>
    </div>
  )
}

export default Home