import React from 'react';
import GlobalStyles from './Global.style';
import MainPage from './Components/MainPage/MainPage';
import TwitchStream from './Components/Pages/TwitchStream';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
      children: [
        {
          path: 'stream',
          element: <TwitchStream />,
        },
      ],
    },
  ]);
  return (
    <div className="app">
      <GlobalStyles />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
