import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Toast } from "bootstrap/dist/js/bootstrap.bundle.min";
import { toast, Zoom } from "react-toastify";

function Create() {
  const { register, handleSubmit, control } = useForm();
  const navigate = useNavigate();
  const registerForm = async (data) => {
    const response = await axios.post(
      `https://node-react-10.onrender.com/users`,
      data
    );

    console.log(response);

    if (response.status === 201) {
      toast.success("user added succesfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });
      navigate("/");
    }
  };

  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-4">
                <h2 className="text-center mb-4 text-primary">Add New User</h2>

                <form onSubmit={handleSubmit(registerForm)}>
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
                      placeholder="name@example.com"
                    />
                    <label htmlFor="email">Email address</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      {...register("password")}
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                    />
                    <label htmlFor="password">Password</label>
                  </div>

                  <div className="form-floating mb-4">
                    <input
                      {...register("phone")}
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Phone"
                    />
                    <label htmlFor="phone">User Phone</label>
                  </div>
                  <button className="btn btn-primary w-100 py-2" type="submit">
                    Add User
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DevTool control={control} />
    </>
  );
}

export default Create;
