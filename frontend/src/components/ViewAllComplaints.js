import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './ViewAllComplaints.css'

const ViewAllComplaints = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/complain/');
        setComplaints(response.data);
      } catch (error) {
        console.log("Error Occurred");
      }
    };
    fetchData();
  }, []);

  

  const redirectToSubmitComplaint = () => {
    // Redirect to '/ViewAllComplaint' page
    window.location.href = '/SubmitComplaint';
  };

  const redirectToModify = () => {
    window.location.href = '/ModifyComplaint';
  };

  const redirectToLogin = () => {
    window.location.href = '/';
  };


  return (
    <div className="container mt-5">
      <h2 className="mb-4">All Complains</h2>
      <div className="mb-3">
        <button className="btn btn-primary" onClick={redirectToSubmitComplaint}>New Complain</button>
        <button className="btn btn-primary ms-2" onClick={redirectToModify}>Update Complain</button>
        <button className="btn btn-danger ms-2" onClick={redirectToLogin}>Logout</button>

      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-sm custom-table-width">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint) => (
              <tr key={complaint.id}>
                <td>{complaint.id}</td>
                <td>{complaint.title}</td>
                <td>{complaint.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllComplaints;
