import {Suspense } from "react";
import {Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import { Styles } from "../styles/styles";
import PageNotFound from "../pages/pageNotFound";
import PageUnderDevelopment from "../pages/pageUnderDevelopment";
import Recommendation from "../pages/Recommendation";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Routes>
          <Route index element={<Home />}/>
          <Route path="/UHON99" element={<Home />} />

          <Route path="/contract-work" element={<PageUnderDevelopment />} />
          <Route path="/tasks" element={<PageUnderDevelopment />} />
          <Route path="/recommendation" element={<Recommendation />} />

          <Route path="*" element={<PageNotFound />} />

        </Routes>
    </Suspense>

    
  );
};

export default Router;
