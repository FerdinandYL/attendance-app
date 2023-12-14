import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Dashboard from './components/Dashboard';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: Dashboard,
    },
  ]);

  return(
      
  );
}

export default App;
