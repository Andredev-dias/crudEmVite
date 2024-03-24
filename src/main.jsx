import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

import App from './App.jsx'
import { Gallery } from './Gallery.jsx';
import { Contact } from './Contact.jsx';
import { List } from './List.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:   <App />,
  },
  {
    path: "/gallery",
    element:   <Gallery />,
  },
  {
    path: "/contact",
    element:   <Contact />,
  },
  {
    path: "/list",
    element:   <List />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
