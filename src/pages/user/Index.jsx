import Loader from "../../components/loader/Loader";
import useFetch from "../../components/custom/useFetch";

function Index() {
  const { isLoading, error, data } = useFetch("users");
  if (isLoading) return <Loader />;
  if (error) return <p className="text-danger">{error.message}</p>;

  return (
    <>
      {data.users.map((user) => (
        <div className="user" key={user._id}>
          <h2>{user.userName}</h2>
        </div>
      ))}
    </>
  );
}

export default Index;
