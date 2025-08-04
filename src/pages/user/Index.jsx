import Loader from "../../components/loader/Loader";
import useFetch from "../../components/custom/useFetch";
import { Link } from "react-router-dom";
import axios from "axios";

function Index() {
  const { isLoading, error, data, setData } = useFetch("users");
  if (isLoading) return <Loader />;
  if (error) return <p className="text-danger">{error.message}</p>;

  const removeUser = async (id) => {
    const respones = await axios.delete(
      `https://node-react-10.onrender.com/users/${id}`
    );
    console.log(respones);

    const newUsers = data.users.filter((user) => {
      return user._id != id;
    });

    const new1 = {
      message: "Users fetched successfully",
      users: newUsers,
    };
    setData(new1);
  };

  return (
    <>
      <div className="container m-5 ">
        <h2 className="mb-5 text-center text-primary d-flex justify-content-center align-items-center">
          Users List
        </h2>
        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered text-center align-middle shadow">
            <thead className="table-dark">
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              {data.users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <div className="d-flex justify-content-center gap-2">
                      <Link
                        className="btn btn-sm btn-info text-white"
                        to={`/details/${user._id}`}
                      >
                        Details
                      </Link>

                      <Link
                        className="btn btn-warning"
                        to={`/edit/${user._id}`}
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => removeUser(user._id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Index;
