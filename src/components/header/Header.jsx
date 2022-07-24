import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logo from '../../../public/ico.png';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions as loginActions } from '../../actions/login.actions';
import { withTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles(() => ({
  imagen: {
    marginLeft: '2rem',
    width: '8rem',
    paddingTop: '0.4rem',
  },
  user: {
    color: 'white',
    float: 'right',
  },
}));

const Header = ({ t, user}) => {

  const classes = useStyles();
  return (
    <AppBar position="static" style={{ marginBottom: '0.8rem' }}>
      <Toolbar>
        <Grid container>
          <Grid item style={{ flexGrow: 1 }}>
            <Link to={'/'} style={{ height: '100%', textDecoration: 'none' }}>
              <img className={classes.imagen} src={logo} />
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.login,
    count: state.alert.urgent?.totalResult ?? 0,
    alerts: state.alert.urgent?.resultList ?? [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      logout: bindActionCreators(loginActions.logout, dispatch),
      local: bindActionCreators(loginActions.local, dispatch),
      loadAlerts: bindActionCreators(alertActions.loadUrgent, dispatch),
      checkAlert: bindActionCreators(alertActions.checkAlert, dispatch),
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Header));
