import React, { lazy, Suspense, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as loginActions } from '../../actions/login.actions';
import Header from '../../components/header/Header';
import LoadingPage from '../../components/loading/LoadingPage';

const Logout = ({ actions }) => {
  useEffect(() => {
    actions.logout();
  }, []);
  return <></>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      logout: bindActionCreators(loginActions.logout, dispatch),
    },
  };
};

const Loged = () => {
  const roles = useSelector(({ login }) => login.roles);
  return (
    <>
      <Header />
      <Suspense fallback={<LoadingPage />}>

      </Suspense>
    </>
  );
};

export default Loged;
