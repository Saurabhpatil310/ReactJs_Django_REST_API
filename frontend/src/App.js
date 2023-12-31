import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SubmitComplaint from './components/SubmitComplaint';
import ViewAllComplaints from './components/ViewAllComplaints';
import ModifyCompalint from './components/ModifyComplaint';
import Register from './components/Register';
import Login from './components/Login';



function App(){
 return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route index element={<Login/>} />
      <Route path="/ViewAllComplaints" element={<ViewAllComplaints/>} />
      <Route path="/SubmitComplaint" element={<SubmitComplaint/>} />
      <Route path="/ModifyComplaint" element={<ModifyCompalint/>} />
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Login" element={<Login/>}/>
      
  


   
    </Routes>
    </BrowserRouter>
  </div>
    
 );
 }

export default App;