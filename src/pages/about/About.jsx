import React from "react";

function About() {
  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h1 className="mb-4 text-primary">About Us</h1>
            <p className="lead">
              Welcome to <strong>Crud App</strong>! We are dedicated to
              building simple, clean, and functional web applications using
              modern technologies like React and Bootstrap.
            </p>
            <p>
              This project is part of a learning journey in web development. It
              was created to help demonstrate how to structure components,
              routes, and UI design in a clean and responsive way.
            </p>
            <p>
              Feel free to explore the app, view user details, and try adding or
              removing users. If you have any feedback or questions, don’t
              hesitate to reach out.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
