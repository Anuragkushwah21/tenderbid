import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function TenderForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [bufferTime, setBufferTime] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3900/api//getSingleTender/${id}`)
        .then((response) => {
          const tender = response.data;
          setName(tender.name);
          setDescription(tender.description);
          setStartTime(Date(tender.startTime));
          setEndTime(Date(tender.endTime));
          setBufferTime(tender.bufferTime);
        })
        .catch((error) => console.error("Error fetching tender:", error));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const tenderData = {
      name,
      description,
      startTime,
      endTime,
      bufferTime,
    };

    try {
      const res = await axios.post(
        "http://localhost:3900/api/tenderinsert",
        tenderData
      );
    //   console.log(res.data.data)
      setSuccess("Tender created successfully");
    } catch (error) {
      setError(
        "Failed to save tender: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center">{id ? "Edit Tender" : "Add Tender"}</h2>
        {error && <p className="text-danger text-center">{error}</p>}
        {success && <p className="text-success text-center">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Tender Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Tender Description</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Tender Start Time</label>
            <input
              type="datetime-local"
              className="form-control"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Tender End Time</label>
            <input
              type="datetime-local"
              className="form-control"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Buffer Time (in minutes)</label>
            <input
              type="number"
              className="form-control"
              value={bufferTime}
              onChange={(e) => setBufferTime(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3 w-0">
            {id ? "Update Tender" : "Create Tender"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default TenderForm;
