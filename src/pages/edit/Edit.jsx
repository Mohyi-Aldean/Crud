import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Edit() {
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `https://node-react-10.onrender.com/users/${id}`
        );
        const userData = res.data.user;

        reset({
          userName: userData.userName,
          email: userData.email,
          phone: userData.phone,
        });
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [id, reset]);

  const onSubmit = async (data) => {
    try {
      await axios.put(`https://node-react-10.onrender.com/users/${id}`, {
        userName: data.userName,
      });
      alert("User updated!");
      navigate("/");
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4">
              <h2 className="text-center mb-4 text-primary">Edit User</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-floating mb-3">
                  <input
                    {...register("userName")}
                    type="text"
                    className="form-control"
                    id="userName"
                    placeholder="User Name"
                  />
                  <label htmlFor="userName">User Name</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    {...register("email")}
                    type="email"
                    className="form-control"
                    id="email"
                    readOnly
                  />
                  <label htmlFor="email">Email</label>
                </div>

                <div className="form-floating mb-4">
                  <input
                    {...register("phone")}
                    type="text"
                    className="form-control"
                    id="phone"
                    readOnly
                  />
                  <label htmlFor="phone">Phone</label>
                </div>

                <button
                  className="btn btn-outline-success w-100 py-2"
                  type="submit"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
