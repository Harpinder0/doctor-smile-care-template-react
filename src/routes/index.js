import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../pages/home';

const RenderRoutes = () => {

  const getRoutes = [
    {
      key: 1,
      path: "/dashboard",
      exact: true,
      private: true,
      component: true,
    },
  ]

  return (
    <Switch>
      {getRoutes.map((prop, key) => {
        return (
          <Route
            {...rest}
            render={props => (
              <Component {...props} />
            )}
          />
        )

      })}
    </Switch>
  )
}

export default RenderRoutes;

export const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <Component {...props} />
      )}
    />
  );
};