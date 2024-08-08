import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [users, setusers] = useState([]);

  const useList = async () => {
    const res = await axios.get("http://localhost:3900/api/tenderDisplay");
    console.log(res.data.data);
    setusers(res.data.data);
  };

  useEffect(() => {
    useList();
  }, []);
  console.log(users);
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
                width={1300}
                height={400}
              />
            </div>
          </section>
          </div>
        </div>
      </div>
      <section className="m-2">
      <div className="container">
        <div className="row">
          <div className="card">
          <h1 className="text-center">Latest Tender's </h1>
          <table className="table table-dark mb-3">
            <thead>
              <tr>
                <td>Tender Name</td>
                <td>Description</td>
                <td>Start Sime</td>
                <td>End Time</td>
                <td>Buffer Time</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {users.map((item) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.startTime}</td>
                  <td>{item.endTime}</td>
                  <td>{item.bufferTime} min</td>
                  <td>
                    <Link to="bidform" className="btn btn-info">
                      Bid
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
      </section>
    </>
  );
}

export default Dashboard;
