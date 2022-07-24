import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoadingPage from '../../components/loading/LoadingPage';

const Home = lazy(() => import('../../containers/Home'));

const NotLoged = () => (
  <Suspense fallback={<LoadingPage />}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Redirect from="/*" to="/" />
    </Switch>
  </Suspense>
);

const Routes = () => {
  const user = useSelector(({ login }) => login.iduser);

  return <NotLoged />;
};

export default Routes;
