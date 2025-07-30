import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top top-0 py-2">
  <div className="container">
    <Link className="navbar-brand lead fs-3" to={'/'}>Crud</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4 ms-4 fs-6 lead">

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/'}>HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/user'}>USERS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/add'}>CREATE</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/about'}>ABOUT</Link>
        </li>

      </ul>
    </div>
  </div>
  </nav>
</>
  )
}

export default Navbar
