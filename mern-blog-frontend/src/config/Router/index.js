import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Login, MainApp, Register } from "../../pages";

const AllRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default AllRouter;
