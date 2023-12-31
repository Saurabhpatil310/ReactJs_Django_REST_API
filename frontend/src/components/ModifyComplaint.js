import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const ModifyComplaint = () => {
  const [complaint, setComplaint] = useState({});
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchComplaint = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/complain/patch/${id}`);
        setComplaint(response.data);
        setTitle(response.data.title);
        setDescription(response.data.description);
      } catch (error) {
        // Handle error, show error message
      }
    };

    fetchComplaint();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8000/api/complain/patch/${id}/`, { title, description, complaint });
      // Handle success, maybe show a success message
      alert("Updated Successfully!!!");
    } catch (error) {
      // Handle error, show error message
      console.error("Error:", error);
    }
  };

  const redirectToViewAll = () => {
    // Redirect to '/ViewAllComplaint' page
    window.location.href = '/ViewAllComplaints';
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Modify Complain</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <textarea
                className="form-control"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Update Complain</button>
            <button className="btn btn-primary ms-2" onClick={redirectToViewAll}>View All Complains</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModifyComplaint;
