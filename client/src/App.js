import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/register/Register";
import Users from "./components/users/Users";
import './App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
