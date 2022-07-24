---
# to: ./out/<%= name %>.api.js
to: ../src/api/<%= name %>.api.js
---
import axios from 'axios';

const {API_URL} = process.env;

export const loadList = (token, params) => {
  return axios.get(`${API_URL}/<%= prefix %><%= name %>`,
    { headers: { Authorization: `Bearer ${token}` }, params });
};

export const load = (token, id<%= name %>) => {
  return axios.get(`${API_URL}/<%= prefix %><%= name %>`, 
    { headers: { Authorization: `Bearer ${token}` }, params: {querysearch: `id<%= name %>:eq(${id<%= name %>})`} });
};

export const save = (token, <%= name %>) => {
  return axios.post(`${API_URL}/<%= prefix %><%= name %>', <%= name %>`, 
    { headers: { Authorization: `Bearer ${token}` } });
};

export const remove = (token, id<%= name %>) => {
  return axios.delete(`${API_URL}/<%= prefix %><%= name %>`, 
    { headers: { Authorization: `Bearer ${token}` }, params:{id<%= name %>}});
};