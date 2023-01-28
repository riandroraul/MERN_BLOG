import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import Home from "../Home";

const MainApp = () => {
  return (
    <div>
      <p>header</p>
      <BrowserRouter>
        <Routes>
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/detail-blog" element={<DetailBlog />} />
        </Routes>
      </BrowserRouter>
      <p>footer</p>
    </div>
  );
};

export default MainApp;
