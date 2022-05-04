
// Config/routes.js

const routes =[
    {
        path:'/',
        component: "Login"
    },
    {
        path:'/dashboard',
        component: "Dashboard"
    },
    {
        path:'/*',
        component: "PageNotFound"
    },
]

export default routes