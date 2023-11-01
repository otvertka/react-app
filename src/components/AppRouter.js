import React, { Component, useContext } from "react";
import { Routes, Route, redirect } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { Context } from "..";
const AppRouter = () => {
  const { bikes } = useContext(Context);
  const isAuth = false;

  return (
    <Routes>
      {isAuth && authRoutes.map(({ path, Component }) => <Route key={path} path={path} component={Component} exact />)}

      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
    </Routes>
  );
};

export default AppRouter;
