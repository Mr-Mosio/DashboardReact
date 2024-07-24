import {Home} from 'iconsax-react';
import App from './App.jsx';
import LoginPage from './views/LoginPage/LoginPage.jsx';
import Layout from './views/Layout.jsx';
import DashboardPage from './views/DashboardPage/DashboardPage.jsx';
import Error404 from './views/ErrorsPage/Error404.jsx';

const routes =  [
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/login",
        Component: LoginPage,
      },
      {
        path: "/",
        Component: Layout,
        breadcrumb: () => <Home className="w-5 h-5"/> ,
        children: [
          {
            index: true,
            Component: DashboardPage
          },
          {
            path: "/test",
            Component: DashboardPage
          }
        ]
      },
      {
        path: "*",
        Component: Error404,
      },
    ]
  }
]
export default routes