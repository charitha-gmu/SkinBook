import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { RoutePaths } from "../utils/routes";
import Navbar from "../components/navbar";
import { RoutePaths } from "../utils/routes";
// import Footer from "../components/Footer";

const HomeComponent = lazy(() => import("../components/home"));
const DecodeComponent = lazy(() => import("../components/decode"));
const RemedyComponent = lazy(() => import("../components/remedies"));
const NotFoundComponent = lazy(() => import("../components/PageNotFound"));
const ImpactDetails = lazy(() => import("../components/impact"));
// const PropertyForms = lazy(() => import("../components/PropertyForms"));
// const PropertyLists = lazy(() => import("../components/PropertyLists"));

const PublicRoutes = () => {
  // const location = useLocation();

  return (
    <>
      <Router basename="/SkinBook">
        <Suspense fallback={<div>Loading...</div>}>
          {/* Add a fallback here */}
          <Navbar />
          <Routes>
            <Route path={"/"} element={<HomeComponent />} />
            <Route path={RoutePaths.decode} element={<DecodeComponent />} />
          {/* <Route path={RoutePaths.contactUs} element={<ContactUsComponent />} /> */}
          <Route
            path={RoutePaths.remedies}
            element={<RemedyComponent />}
          />
          <Route
            path={RoutePaths.impact}
            element={<ImpactDetails />}
          />
          {/* <Route path={RoutePaths.propertyLists} element={<PropertyLists />} /> */}
          <Route path="*" element={<NotFoundComponent />} />

          </Routes>
        </Suspense>
      </Router>

      {/* <Footer /> */}
    </>
  );
};

export default PublicRoutes;
