import React from 'react';
import {
  RouteProps as DomRouteProps,
  Route as DomRoute,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../store/rootReducer';

interface RouteProps extends DomRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const {
    user: { id },
  } = useSelector((state: RootState) => state.user);

  return (
    <DomRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!id ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/signin' : '/',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
