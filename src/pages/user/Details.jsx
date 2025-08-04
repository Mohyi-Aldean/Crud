import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../components/custom/useFetch";
import Loader from "../../components/loader/Loader";

function Details() {
  const { u_Id } = useParams();
  const { isLoading, error, data } = useFetch(`users/${u_Id}`);
  if (isLoading) return <Loader />;
  if (error) return <p className="text-danger">{error.message}</p>;

  return (
   <>
  <div className="container my-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card shadow-lg border-0 rounded-4">
          <div className="card-body">
            <h2 className="text-center mb-4 text-primary">User Details</h2>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Name:</strong> {data.user.userName}
              </li>
              <li className="list-group-item">
                <strong>Phone:</strong> {data.user.phone}
              </li>
              <li className="list-group-item">
                <strong>Email:</strong> {data.user.email}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  );
}

export default Details;
