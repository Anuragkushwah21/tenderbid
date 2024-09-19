import axios from "axios";
import React, { useState,useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";

function TenderUpdate() {
  
  const navigate = useNavigate();
  const {id}=useParams()
  const tender = {
    name: "",
    description: "",
    startTime: "",
    endTime: "",
    bufferTime: "",
  };
  const [data, setData] = useState(tender);
  useEffect(() => {
   
    axios
      .get(` /api/getSingleTender/${id}`)
      .then((response) => {
        console.log(response.data.data)
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);


  const inputHandler = (e) => {
    // console.log(e.target.value)
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };


  const submitForm = async (e) => {
    e.preventDefault();
    // console.log(data)
    try {
      const res = await axios.post(
        `/api/tenderUpdate/${id}`,
        data
      );
      if (res.status === 200) {
        toast.success(res.data.message, { position: "top-center" });
        setData(tender);
        navigate("/tenderlist");
      } else {
        console.error("failed to update data");
      }
    } catch (error) {
      console.log("error updating data", error);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5 offset-4">
            <h1>Tender Update</h1>
            <Link to="/tenderlist">Back</Link>

            <form onSubmit={submitForm}>
              <div className="form-group">
                <label className="mt-1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  autoComplete="off"
                  placeholder="Enter Name"
                  value={data.name}
                  onChange={inputHandler}
                  name="name"
                />
              </div>

              <div className="form-group">
                <label className="mt-1">Descripition</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Descripition"
                  value={data.description}
                  onChange={inputHandler}
                  name="description"
                />
              </div>

              <div className="form-group">
                <label className="mt-1">Start time</label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Name"
                  onChange={inputHandler}
                  name="start_time"
                />
              </div>

              <div className="form-group">
                <label className="mt-1">End Time</label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Time"
                  onChange={inputHandler}
                  name="end_time"
                />
              </div>

              <div className="form-group">
                <label className="mt-1">Buffer Time</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Buffer Time"
                  onChange={inputHandler}
                  name="buffer_time"
                />
              </div>
              <center>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block mt-4"
                >
                  Submit
                </button>
              </center>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default TenderUpdate;
