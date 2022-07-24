---
to: ./out/<%= name %>.tree.jsx
---
const tree = {
    id: "DASHBOARD",
    label: "NAV.DASHBOARD",
    link: "/",
    icon:  <HomeIcon/>,
    children: [
        {
            id: "<%= name.toUpperCase() %>S",
            label: "NAV.<%= name.toUpperCase() %>S",
            link: "/<%= name %>s",
            icon:  <ListIcon/>,
            children: [
                {
                    id: "<%= name.toUpperCase() %>",
                    label: "NAV.<%= name.toUpperCase() %>",
                    link: "/<%= name %>/:id",
                    icon: <DescriptionIcon fontSize="small"/>
                }
            ]
        }
    ]
};