import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BidForm({tenderEndTime}) {
  const [users, setusers] = useState([]);

  const useList = async () => {
    const res = await axios.get("http://localhost:3900/api/bidDisplay");
    // console.log(res.data.getAllBid);
    setusers(res.data.getAllBid);
  };

  useEffect(() => {
    useList();
  }, []);
//   console.log(users);

  const [formData, setFormData] = useState({
    companyName: "",
    bidTime: "",
    bidCost: "",
    tenderEnd: "",
    tenderEndTime:"",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const bidTime = new Date().toISOString();
    const tenderEnd = new Date(tenderEndTime);
    const flag = (tenderEnd.getTime() - new Date(bidTime).getTime()) <= 5 * 60 * 1000;

    const dataToSend = {
      ...formData,
      bidTime,
      tenderEndTime,
    };

    try {
      const response = await axios.post(
        "http://localhost:3900/api/userbid",
        dataToSend
      );
      setSuccess("Bid submitted successfully");
      setFormData({
        companyName: "",
        bidTime: "",
        bidCost: "",
        tenderEnd: "",
        tenderEndTime:"",
      });
      console.log(response.data)
      setFormData(response.data);
    } catch (error) {
      setError(
        "Failed to submit bid: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <section className="banner">
            <div className="banner-box">
              <div className="intro-text">
                <div className="intro-text-box">
                  <h1>This is a Tender For Submit Bid</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi natus officia dolore reiciendis inventore laboriosam
                    voluptatibus quam provident facilis, aperiam incidunt, nisi
                    voluptatum iure nobis amet iusto molestias harum voluptatem
                    corporis facere aspernatur magni a. Esse debitis consequatur
                    saepe suscipit, nesciunt incidunt molestias, accusamus
                    perspiciatis iure beatae, ullam cum et. Facilis dolorem
                    accusamus officiis eius odit exercitationem modi.
                  </p>
                </div>
              </div>
              <img
                src="/public/tender.jpg"
                alt="banner"
                width={1320}
                height={400}
              />
            </div>
          </section>
        </div>
      </div>
      <section className="m-2">
        <div className="container">
          <div className="row">
            <div className="card">
              <h1 className="text-center">Tender's </h1>
              <table className="table table-dark mb-3">
                <thead>
                  <tr>
                    <td>Bid Id</td> 
                    <td>Company Name/Tender Name</td>
                    <td>Tender Cost</td>
                    <td>Bid Time</td>
                    <td>Bid Flag</td>
                  </tr>
                </thead>
                <tbody>
                  {users.map((item) => (
                    <tr>
                      <td>{item._id}</td>
                      <td>{item.companyName}</td>
                      <td>{item.bidCost}</td>
                      <td>{item.bidTime}</td>
                      <td>{item.flag}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <div className="container mt-5">
        <h2 className="text-center">Submit Your Bid</h2>
        {error && <p className="text-danger text-center">{error}</p>}
        {success && <p className="text-success text-center">{success}</p>}
        <form onSubmit={handleSubmit} className="w-100">
          <div className="form-group">
            <label>Company Name/Tender Name</label>
            <input
              type="text"
              className="form-control"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              placeholder="Enter Tender Company/Tender Name"
            />
          </div>
          <div className="form-group">
            <label>Bid Cost</label>
            <input
              type="number"
              className="form-control"
              name="bidCost"
              value={formData.bidCost}
              onChange={handleChange}
              required
              placeholder="₹ Enter Your Price"
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3 w-100">
            Submit Bid
          </button>
        </form>
      </div>
    </>
  );
}

export default BidForm;
