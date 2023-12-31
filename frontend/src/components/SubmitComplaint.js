import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const SubmitComplaint = () => {
  const [complaintId, setComplaintId] = useState(""); // State for id field
  const [complaintTitle, setComplaintTitle] = useState("");
  const [complaintDescription, setComplaintDescription] = useState("");

  const submitComplaint = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/complain/post/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: complaintId, // Include id field in the request body
          title: complaintTitle,
          description: complaintDescription,
        }),
      });

      if (!response.ok) {
        throw new Error("Error: " + response.statusText);
      }

    const result = await response.json();
    alert("Submitted successfully!!!");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const redirectToViewAll = () => {
    // Redirect to '/ViewAllComplaint' page
    window.location.href = 'ViewAllComplaints';
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>Submit Complain</h1>

          <div className="form-group">
            <label>ID:</label>
            <input
              type="number"
              className="form-control"
              value={complaintId}
              onChange={(e) => setComplaintId(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              className="form-control"
              value={complaintTitle}
              onChange={(e) => setComplaintTitle(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label>Description:</label>
            <textarea
              className="form-control"
              value={complaintDescription}
              onChange={(e) => setComplaintDescription(e.target.value)}
            />
          </div>

          <div >
            <button className="btn btn-primary" onClick={submitComplaint}>Submit Complain</button>
            <button className="btn btn-primary ms-2" onClick={redirectToViewAll}>View All Complains</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitComplaint;
