import React, { useState,useEffect } from 'react'
import "./AddEdit.css"
import fireDb from "../../../src/firebase"
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const initialState={
  approval_status:"",
  email:"",
  phone:""
}


const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  const {approval_status,email,phone}=state;

  const navigate = useNavigate();
  const {id} =useParams();

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
  },[id]);

  useEffect(()=> {
    if(id) {
      setState({...data[id]});
    } else {
      setState({...initialState});
    }
    return() =>{
      setState({...initialState});
    };
  }, [id, data]);

  const handleInputChange = (e) => {
    const {name,value} =e.target;
    setState({...state,[name]:value});
  };
  const handleSubmit =(e) =>{
    e.preventDefault();
    if( !approval_status || !email || !phone){
      toast.error("Please provide value in each input field")
    } else {
      if(!id){
        fireDb.child("drivers").push(state,(err) =>{
          if(err){
            toast.error(err);
          }else{
            toast.success("Contact Added Successfully");
          }
        });
      } else {
        fireDb.child(`drivers/${id}`).set(state,(err) =>{
          if(err){
            toast.error(err);
          }else{
            toast.success("Contact Update Successfully");
          }
        });
      }
     
      setTimeout(()=>navigate("/"), 1000);
    }
  };


  return (
    <div style={{marginTop:"100px"}}>
      <form
      style={{
        margin:"auto",
        padding:"15px",
        maxWidth:"400px",
        alignContent:"center",
      }}
      onSubmit={handleSubmit}
      >
        <label htmlFor='approval_status'>True</label>
        <input
        type="radio"
        id="approval_status"
        name="approval_status"
        value={"true"}
        onChange={handleInputChange}
        /><br/>

      <label htmlFor='approval_status'>False</label>
        <input
        type="radio"
        id="approval_status2"
        name="approval_status"
        value={"false"}
        onChange={handleInputChange}
        /><br/>
        
        <label htmlFor='email'>Email</label>
        <input
        type="email"
        id="email"
        name="email"
        placeholder='Your Email...'
        value={email || ""}
        onChange={handleInputChange}
        />

        <label htmlFor='phone'>Phone</label>
        <input
        type="text"
        id="phone"
        name="phone"
        placeholder='Your Phone No. ...'
        value={phone || ""}
        onChange={handleInputChange}
        />
    
        <input type="submit" value={id ? "Update" : "Save"}/>
      </form>
    </div>
  )
}

export default AddEdit