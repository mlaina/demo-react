import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Copyright from '../../components/much-text/Copyright';
import React from 'react';
import { Formik } from 'formik';
import { withTranslation } from 'react-i18next';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import * as Yup from 'yup';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import Typography from '@mui/material/Typography';
import LinkMUI from '@mui/material/Link';
import Dialog from '@mui/material/Dialog';
import theme from '../../config/theme/theme';

import PhoneIcon from '@mui/icons-material/Phone';

const styles = (theme) =>
  createStyles({
    card: {
      backgroundColor: '#ffffff',
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(2),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    imagen: {
      width: '10rem',
      margin: '0.75rem 3rem',
    },
    pop: {
      paddingTop: '2rem',
      backgroundColor: theme.palette.primary.main + ' !important',
      color: 'white !important',
    },
    footer: {
      padding: '1rem',
      backgroundColor: '#192f38',
    },
  });

const LoginForm = ({ classes, t, ...props }) => {
  const [phonePop, setPhonePop] = React.useState(false);
  const tel = '+34919032923';

  const handleVerify = async (event) => {
    console.log(event);
  };

  return (
    <Paper className={classes.card} elevation={5}>
      <img className={classes.imagen} src={logo} />
      <Formik
        initialValues={{ user: '', password: '' }}
        onSubmit={props.onSigin}
        validationSchema={Yup.object().shape({
          user: Yup.string()
            .email(t('LOGIN.MAILFORMAT'))
            .required(t('LOGIN.REQUIRED.MAIL')),
          password: Yup.string().required(t('LOGIN.REQUIRED.PASSWORD')),
        })}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          isSubmitting,
          errors,
          touched,
        }) => (
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="user"
                  label={t('LOGIN.USER')}
                  name="user"
                  autoComplete="user"
                  autoFocus
                  value={values.user}
                  helperText={touched.user && errors.user}
                  error={Boolean(touched.user && errors.user)}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  label={t('LOGIN.PASSWORD')}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={values.password}
                  helperText={touched.password && errors.password}
                  error={Boolean(touched.password && errors.password)}
                  onChange={handleChange}
                />
                <LinkMUI onClick={() => setPhonePop(true)} underline="hover">
                  <Typography
                    style={{
                      fontSize: '0.8rem',
                      color: theme.ok.color,
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    }}
                    align={'right'}
                  >
                    {t('LOGIN.FORGOT.PASSWORD')}
                  </Typography>
                </LinkMUI>
              </Grid>
              <Grid item xs={12}>
                <GoogleReCaptcha onVerify={handleVerify} />
                <Dialog onClose={() => setPhonePop(false)} open={phonePop}>
                  <Paper className={classes.pop}>
                    <Grid container>
                      <Grid item xs={12} style={{ padding: '1rem 2rem' }}>
                        <Typography align="justify">
                          {t('LOGIN.CALLIFFORGOT')} <b>{tel}</b>
                        </Typography>
                      </Grid>
                      <Grid className={classes.footer} item xs={12}>
                        <LinkMUI
                          className={'link'}
                          href={'tel:' + tel}
                          underline="hover"
                        >
                          <Typography className={'centerAlign'}>
                            <PhoneIcon
                              style={{
                                marginRight: '4px',
                              }}
                              fontSize="medium"
                            />
                            {t('HEADER.CALL')}
                          </Typography>
                        </LinkMUI>
                      </Grid>
                    </Grid>
                  </Paper>
                </Dialog>
              </Grid>
            </Grid>
            <Button
              disabled={isSubmitting && !props.errors}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              type="submit"
            >
              {t('LOGIN.BUTTON.SIGIN')}
            </Button>
            {props.errors && (
              <Alert severity="error">
                <AlertTitle>Oh oh...</AlertTitle>
                {t('LOGIN.ERROR')}
              </Alert>
            )}
          </form>
        )}
      </Formik>
      <Box mt={3}>
        <Copyright />
      </Box>
    </Paper>
  );
};

export default withTranslation()(withStyles(styles)(LoginForm));
