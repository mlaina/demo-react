import React from 'react';
import Grid from '@mui/material/Grid';
import { withTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';

const Home = ({ t }) => {
  return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography align={'center'} variant={'h4'}>Hola</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align={'center'}>demo</Typography>
        </Grid>
      </Grid>
  );
};
export default withTranslation()(Home);
