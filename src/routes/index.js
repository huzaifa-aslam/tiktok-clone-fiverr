import React from "react";

import { HOME_ROUTE } from "../constants";
import Home from "../screens/home";
import { Route, Routes } from "react-router-dom";
import VideoScroll from "../screens/player/player";

const AppRoutes = () => {
  const routes = [
    {
      path: HOME_ROUTE,
      component: <Home />,
      // component: <VideoScroll />,
    },
  ];
  return (
    <Routes>
      {routes?.map((item, index) => {
        return (
          <Route key={index} path={item?.path} element={item?.component} />
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
