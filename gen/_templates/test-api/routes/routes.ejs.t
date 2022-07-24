---
to: ./out/<%= name %>.routes.jsx
---
const <%= name.charAt(0).toUpperCase() + name.substring(1) %>List = lazy(() => import("../../containers/entities/<%= name %>/<%= name.charAt(0).toUpperCase() + name.substring(1) %>ListPage"));
const <%= name.charAt(0).toUpperCase() + name.substring(1) %>Details = lazy(() => import("../../containers/entities/<%= name %>/<%= name.charAt(0).toUpperCase() + name.substring(1) %>DetailsPage"));

<Route exact path="/<%= name %>/:id<%= name %>" component={<%= name.charAt(0).toUpperCase() + name.substring(1) %>Details}/>
<Route exact path="/<%= name %>s" component={<%= name.charAt(0).toUpperCase() + name.substring(1) %>List}/>