import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function TenderList() {
  const [tenders, setTenders] = useState([]);

  useEffect(() => {
    axios
      .get("/api/tenderDisplay")
      .then((response) => setTenders(response.data.data))
      .catch((error) => console.error("Error fetching tenders:", error));
  }, []);

  const deleteTender = async (id) => {
    try {
      const response = await axios.post(
        `/api/tenderDelete/${id}`
      );
      setTenders((prevTenders) =>
        prevTenders.filter((tender) => tender._id !== id)
      );
      toast.success(response.data.msg, { position: "top-right" });
    } catch (error) {
      console.error("Error deleting tender:", error);
      toast.error("Failed to delete tender", { position: "top-right" });
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card mb-2 py-2 ">
            <section className="banner">
              <div className="banner-box">
                <div className="intro-text">
                  <div className="intro-text-box">
                    <h1>This is a Tender For</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sequi natus officia dolore reiciendis inventore laboriosam
                      voluptatibus quam provident facilis, aperiam incidunt,
                      nisi voluptatum iure nobis amet iusto molestias harum
                      voluptatem corporis facere aspernatur magni a. Esse
                      debitis consequatur saepe suscipit, nesciunt incidunt
                      molestias, accusamus perspiciatis iure beatae, ullam cum
                      et. Facilis dolorem accusamus officiis eius odit
                      exercitationem modi.
                    </p>
                  </div>
                </div>
                <img
                  src="/public/tender.jpg"
                  alt="banner"
                  width={1300}
                  height={400}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row">
            <div className="card">
              <h2 className="text-center">Tender List</h2>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Buffer Time</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tenders.map((tender) => (
                    <tr key={tender.id}>
                      <td>{tender.name}</td>
                      <td>{tender.description}</td>
                      <td>{new Date(tender.startTime).toLocaleString()}</td>
                      <td>{new Date(tender.endTime).toLocaleString()}</td>
                      <td>{tender.bufferTime} mins</td>
                      <td>
                        <Link
                          to={`/tenderupdate/` + tender._id}
                          className="btn btn-warning mr-2"
                        >
                          <i className="fa-solid fa-pen-to-square"></i>
                        </Link>
                        <Link
                          to={`/viewtender/` + tender._id}
                          className="btn btn-success ms-2"
                        >
                          <i className="fa-solid fa-eye"></i>
                        </Link>
                        <button
                          className="btn btn-danger ms-2"
                          onClick={() => deleteTender(tender._id)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TenderList;
