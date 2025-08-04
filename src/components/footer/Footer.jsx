import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-dark text-light p-4 w-100 my-3">
        <div className="container text-center">
          <p className="mb-1">
            &copy; {new Date().getFullYear()} Crud App. All rights reserved.
          </p>
          <p className="mb-0 small">Designed with ❤️ by Hasson</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
