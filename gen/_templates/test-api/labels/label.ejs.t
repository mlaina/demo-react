---
to: ./out/es.json
---
{
  "NAV.<%= name.toUpperCase() %>S": "<%= name.charAt(0).toUpperCase() + name.substring(1) %>s",
  "NAV.<%= name.toUpperCase() %>": "<%= name.charAt(0).toUpperCase() + name.substring(1) %>",
  "<%= name.toUpperCase() %>.DETAILS": "Detalles de <%= name.charAt(0).toUpperCase() + name.substring(1) %>",
  "<%= name.toUpperCase() %>.NAME": "Nombre",
  "<%= name.toUpperCase() %>.LIST.TITLE": "Listado de <%= name %>s"
}