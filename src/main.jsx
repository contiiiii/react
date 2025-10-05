import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React, { useState } from 'react'
import App from './App.jsx'
import Form from './assets/components/Form.jsx'
import { UtentiContext } from './assets/stores/utentiContex'

function Root() {
  const [DatiUtenti, setDatiUtenti] = useState([]);

  const router = createBrowserRouter([
    { path: '/', element: <Form /> },
    { path: '/utenti', element: <App /> }
  ]);

  return (
    <UtentiContext.Provider value={{ DatiUtenti, setDatiUtenti }}>
      <RouterProvider router={router} />
    </UtentiContext.Provider>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
