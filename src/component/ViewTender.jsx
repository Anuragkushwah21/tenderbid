import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewTender() {
  const { id } = useParams();
  const [tender, setTender] = useState([]);
  useEffect(() => {
   
    axios
      .get(` /api/getSingleTender/${id}`)
      .then((response) => {
        // console.log(response.data.data)
        setTender(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  // console.log(tender.name);
  return (
    <>
      <table className="table table-striped m-2">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Buffer Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{tender._id}</td>
            <td>{tender.name}</td>
            <td>{tender.description}</td>
            <td>{tender.startTime}</td>
            <td>{tender.endTime}</td>
            <td>{tender.bufferTime} mins</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ViewTender;
