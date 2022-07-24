---
to: ../src/containers/entities/<%= name %>/<%= name.charAt(0).toUpperCase() + name.substring(1) %>ListPage.jsx
# to: ./<%= name %>/<%= name.charAt(0).toUpperCase() + name.substring(1) %>ListPage.jsx
---
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Grid from "@mui/material/Grid";
import {actions as <%= name %>Actions } from '../../../store/actions/<%= name %>.actions';
import { bindActionCreators } from "redux";
import loadingImg from '../../../../public/images/loading.svg';
import {withTranslation} from 'react-i18next';
import MUIDataTable from 'mui-datatables';
import TableContainer from '@mui/material/TableContainer';
import transformsFilters from "../../../components/search-component/Filter";
import searchOptions from "../../../components/search-component/SearchOptions";
import textFilter from '../../../components/search-component/TextFilter';
import TransformsSort from '../../../components/search-component/Sort';
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";

const <%= name.charAt(0).toUpperCase() + name.substring(1) %>ListPage = ({t, actions, <%= name %>s, count, history}) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  useEffect(() => {
    actions.loadList({})
  }, []);

  const handleLoad = (rowData) =>{
    history.push('/<%= name %>/'+rowData[0]);
  };

  const columsFilters = [
    {
      'position': 1,
      'querysearch': 'name:contains({0})',
      'column': 'name'
    }
  ]

  const options = searchOptions({search: actions.loadList, rowsPerPage, columsFilters, count, page, onRowClick: handleLoad});

  const columns = [
    { name: "id<%= name %>", options:{display: "excluded", filter: false, customHeadRender: ()=>null}},
    { name: "name", label: t('<%= name.toUpperCase() %>.NAME'), options:{filterType: "custom", filterOptions: {display: textFilter}}},
  ];

  return (
    <>
      <Grid style={{paddingTop: "0px", paddingLeft: "0px"}}>
        <BreadCrumb site={"<%= name.toUpperCase() %>S"}/>
      </Grid>
      <Grid container className={'container'} spacing={2}>
        <Grid item xs={12}>
          {<%= name %>s !== undefined ?
            <TableContainer>
              <MUIDataTable
                title={t('<%= name.toUpperCase() %>.LIST.TITLE')}
                data={<%= name %>s}
                columns={columns}
                options={options}
              />
            </TableContainer>
            :
            <Grid item xs={12}>
              <img src={loadingImg} style={{width: "40%", display: "block", margin: "auto"}}/>
            </Grid>
          }
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    <%= name %>s: state.<%= name %>.data.resultList,
    count: state.<%= name %>.data.totalResult,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      loadList: bindActionCreators(<%= name %>Actions.loadList, dispatch),
      load: bindActionCreators(<%= name %>Actions.load, dispatch),
      remove: bindActionCreators(<%= name %>Actions.remove, dispatch)
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(<%= name.charAt(0).toUpperCase() + name.substring(1) %>ListPage));
