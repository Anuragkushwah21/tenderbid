import React, { useEffect, useState } from "react";
import axios from "axios";

function TenderList() {
  const [tenders, setTenders] = useState([]);
 

  useEffect(() => {
    axios
      .get("http://localhost:3900/api/tenderDisplay")
      .then((response) => setTenders(response.data.data))
      .catch((error) => console.error("Error fetching tenders:", error));
  }, []);

  const deleteTender = (id) => {
    axios
      .delete(`http://localhost:3900/api/tenderDelete/${id}`)
      .then(() => setTenders(tenders.filter((tender) => tender.id !== id)))
      .catch((error) => console.error("Error deleting tender:", error));
      

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
                        {/* <Link
                          to={`/edit-tender/${tender.id}`}
                          className="btn btn-warning mr-2"
                        >
                          Edit
                        </Link> */}
                        <button
                          className="btn btn-danger ms-2"
                          onClick={() => deleteTender(tender.id)}
                        >
                          Delete
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
