---
to: ../src/containers/entities/<%= name %>/<%= name.charAt(0).toUpperCase() + name.substring(1) %>DetailsPage.jsx
# to: ./<%= name %>/<%= name.charAt(0).toUpperCase() + name.substring(1) %>DetailsPage.jsx
---
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';
import React, { useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import loadingImg from '../../../../public/images/loading.svg';
import theme from '../../../config/theme/theme';
import { actions as <%= name %>Actions } from '../../../store/actions/<%= name %>.actions';
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import {Formik} from 'formik';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";

const <%= name.charAt(0).toUpperCase() + name.substring(1) %>DetailsPage = ({t, actions, <%= name %>}) => {
  const { id<%= name %> } = useParams();
  const [edit, setEdit] = React.useState(false);
  const [error, setError] = React.useState(false);

  useEffect(() => {
    reload()
  }, [edit]);

  useEffect(() => {
    reload();
  }, []);

  const reload = () =>{
    actions.load(id<%= name %>);
    setError(false);
  };

  const handleSave = (values) =>{
    try{
      actions.save(values);
      setEdit(false);
    }catch (e){
      setError(true);
    }
  };

  return (
    <>
      <Grid style={{paddingTop: "0px", paddingLeft: "0px"}}>
        <BreadCrumb site={"<%= name.toUpperCase() %>"}/>
      </Grid>
      <div className={'container'}>
        {<%= name %> ?
          <>
            <Formik initialValues={<%= name %>} onSubmit={handleSave}>
              {({values, handleChange, handleSubmit, setValues}) => {
                useEffect(() => {
                  setValues(<%= name %>);
                }, [<%= name %>]);
                return (
                    <form onSubmit={handleSubmit}>
                      <Paper style={{padding: "2rem"}}>
                        <Grid container spacing={2}>
                          <Grid item xs={2}/>
                          <Grid item xs={8}>
                            <Typography style={{marginLeft: "2rem"}} color={"primary"} align={"center"} variant={"h5"}><b>{t("<%= name.toUpperCase() %>.DETAILS")}</b></Typography>
                          </Grid>
                          <Grid item xs={2}>
                            <Typography color={"primary"} align={"right"}>
                              {edit === false &&
                              <IconButton onClick={()=>setEdit(true)} style={{float: "right"}}><EditIcon color="secondary" /></IconButton>
                              }
                              {edit === true &&
                              <>
                                <IconButton type={"submit"} style={{float: "right"}}><SaveIcon color="secondary"/></IconButton>
                                <IconButton onClick={()=>setEdit(false)} style={{float: "right"}}><ArrowBackIcon color="secondary"/></IconButton>
                              </>
                              }
                            </Typography>
                          </Grid>
                          {error && <Typography style={theme.warning} align="center"><b>{t("SAVE.ERROR")}</b></Typography>}
                          <Box mt={2}/>
                          <Grid item xs={6}>
                            <TextField disabled={!edit} name="name" id="name" value={values.name} onChange={handleChange} label={t("<%= name.toUpperCase() %>.NAME")} fullWidth/>
                          </Grid>
                        </Grid>
                      </Paper>
                    </form>
                )
              }}
            </Formik>
            </>
            :
          <Grid item xs={12}>
            <img src={loadingImg} style={{width: "40%", display: "block", margin: "auto"}}/>
          </Grid>
        }
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    <%= name %>: state.<%= name %>.bean
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      load: bindActionCreators(<%= name %>Actions.load, dispatch),
      save: bindActionCreators(<%= name %>Actions.save, dispatch)
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(<%= name.charAt(0).toUpperCase() + name.substring(1) %>DetailsPage));
