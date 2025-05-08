import {Suspense } from "react";
import {Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import { Styles } from "../styles/styles";
import Home from "../pages/Home";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Routes>
          <Route path="*" element={<Home />} />


        </Routes>
    </Suspense>

    
  );
};

export default Router;
