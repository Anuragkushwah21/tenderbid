import React from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <>
      <div className="container">
        <div className="row">
          <section className="banner">
            <div className="banner-box">
              <div className="intro-text">
                <div className="intro-text-box">
                  <h2 className="text-primary">Admin Dashboard</h2>
                  <h3>This is a Tender For</h3>
                  <h5>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi natus officia dolore reiciendis inventore laboriosam
                    voluptatibus quam provident facilis, aperiam incidunt, nisi
                    voluptatum iure nobis amet iusto molestias harum voluptatem
                    corporis facere aspernatur magni a. Esse debitis consequatur
                    saepe suscipit, nesciunt incidunt molestias, accusamus
                    perspiciatis iure beatae, ullam cum et. Facilis dolorem
                    accusamus officiis eius odit exercitationem modi.
                  </h5>
                </div>
              </div>
              <img
                src="/public/tenders-written-on-gray-file-260nw-1865688430.webp"
                alt="banner"
                width={1300}
                height={500}
              />
            </div>
          </section>
        </div>
      </div>
      <div className="container mt-5">
        <h1 className="text-center">Tender Management System</h1>
        <div className="d-flex justify-content-between mb-4">
          <Link to="/tenderlist" className="btn btn-primary">
            View Tenders
          </Link>
          <Link to="/tenderform" className="btn btn-success">
            Add Tender
          </Link>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
