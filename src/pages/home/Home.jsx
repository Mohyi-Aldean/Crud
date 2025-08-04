import React from "react";
import Index from "../user/Index";

function Home() {
  return (
    <>
      <div className="container my-5">
        <div className="text-center">
          <h1 className="mb-4 text-primary">Welcome to Crud App</h1>
          <p className="lead">
            This is a simple web app built with React and Bootstrap. You can
            manage users, view their details, and perform other operations
            easily.
          </p>
          <p>
            Navigate through the app using the top menu. You can visit the About
            page to learn more, or start adding users from the Add User page.
          </p>
          <div className="mt-4">
            <a href="/add" className="btn btn-outline-success btn-lg me-3">
              Add User
            </a>
            <a href="/about" className="btn btn-outline-primary btn-lg">
              About
            </a>
          </div>
        </div>
      </div>

      <Index />
    </>
  );
}

export default Home;
