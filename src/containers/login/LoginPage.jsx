import React, { useState } from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { actions as loginactions } from '../../actions/login.actions';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
import desktop from '../../../public/images/backgrounds/back.jpg';
import mobile from '../../../public/images/backgrounds/login.jpg';
import { bindActionCreators } from 'redux';
import useMediaQuery from '@mui/material/useMediaQuery';

const styles = (theme) =>
  createStyles({
    back: {
      backgroundPosition: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
    },
    container: {
      maxWidth: '400px',
      paddingTop: theme.spacing(8),
    },
  });

const LoginPage = ({ classes, actions }) => {
  const [errors, setErrors] = useState(null);
  const matches = useMediaQuery('(max-width:700px)');

  const handleSigIn = async (values) => {
    if (process.env.RECAPTCHA_KEY) {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(process.env.RECAPTCHA_KEY, { action: 'login' })
          .then((token) => {
            actions
              .login(values.user, values.password, token)
              .catch((e) => setErrors(e));
          });
      });
    } else {
      actions.login(values.user, values.password).catch((e) => setErrors(e));
    }
  };

  return (
    <div
      className={classes.back}
      style={{ backgroundImage: `url(${matches ? mobile : desktop})` }}
    >
      <Container component="main" maxWidth="xs" className={classes.container}>
        <Box mt={7} />
        <LoginForm onSigin={handleSigIn} errors={errors} />
      </Container>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      login: bindActionCreators(loginactions.login, dispatch),
    },
  };
};

export default connect(
  (state) => state,
  mapDispatchToProps
)(withStyles(styles)(LoginPage));
