import Navbar from "./components/nav/Navbar.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Footer from "./components/footer/Footer.jsx";
import Create from "./pages/user/Create.jsx";
import { Routes, Route } from "react-router-dom";
import Details from "./pages/user/Details.jsx";
import Index from "./pages/user/Index.jsx";
import Edit from "./pages/edit/Edit.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<Index />} />
          <Route path="/add" element={<Create />} />
          <Route path="/about" element={<About />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/details/:u_Id" element={<Details />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
