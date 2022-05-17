import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';
import AddEdit from './pages/AddEdit/AddEdit';
import Home from './pages/Home/Home';
import View from './pages/View/View';
import About from './pages/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonInfo from './components/PersonInfo/PersonInfo';
import { Col, Row } from 'react-bootstrap';


function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <ToastContainer position='top-center'/>
       <Row>
        <Col md={12}>
       <Header/>
       </Col>
       <Col md={2}>
       <PersonInfo/>
       </Col>
       <Col md={10}>
       <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route path="/add" element={<AddEdit/>}/>
         <Route path="/update/:id" element={<AddEdit/>}/>
         <Route path="/view/:id" element={<View/>}/>
         <Route path="/about" element={<About/>}/>
       </Routes>
       </Col>
       </Row>
    </div>
    </BrowserRouter>
  );
}

export default App;
