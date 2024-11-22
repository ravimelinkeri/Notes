import logo from './logo.svg';
import './App.css';
import { Header } from './Data/components/header';
import { Hero } from './Data/components/hero';
import { Html } from './Data/components/html';
import { Css } from './Data/components/css';
import { Javascript } from './Data/components/javascript';
import { Reactjs } from './Data/components/react';
import { FrontEnd } from './Data/components/frontend';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Code } from './Data/components/code';

function App() {
  const router = createBrowserRouter([
    {
      path: "/css",
      element: <Css/>
    },

    {
      path: "/code",
      element: <Code/>
    },

    {
      path: "",
      element: <Hero/>
    },

    {
      path: "/home",
      element: <Hero/>
    },

    {
      path: "/html",
      element: <Html/>
    },
    {
      path: "/javascript",
      element: <Javascript/>
    },
    {
      path: "/react",
      element: <Reactjs/>
    },
    {
      path: "/frontend",
      element: <FrontEnd/>
    },

  ])
  return (
    <>
    <Header/>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
