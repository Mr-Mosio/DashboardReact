import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import './i18n.js';
import {ThemeContextProvider} from './context/theme.context.jsx';
import {HelmetProvider} from 'react-helmet-async';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import routes from './routes.jsx';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContextProvider from './context/user.context.jsx';

const router = createBrowserRouter(routes)
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeContextProvider>
        <UserContextProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
          <ToastContainer ToastContainer
                          position="bottom-left"
                          autoClose={5000}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                          theme="colored"/>
        </UserContextProvider>
      </ThemeContextProvider>

    </HelmetProvider>
  </React.StrictMode>,
)
