import React ,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Aboutus from './pages/Aboutus';
import Services from './pages/services';
import Contact  from './pages/contact'; 
import Myportfolio from './pages/Myportfolio';
import Pika from './pages/pika';
import Yalla from './pages/yalla';
import Tornado from './pages/tornados';
import Packs from './pages/packs'; 
import Nexit from './pages/Nexit'; 
import Graphix from './pages/Graphix'; 
import FoodT from './pages/foodT'; 
import './i18n'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <Aboutus />,
  },
  {
    path: "Portfolio",
    element: <Myportfolio/>,
  },
  {
    path: "Services",
    element: <Services/>,
  },
  { path: "Packs",
  element: <Packs/>,
},
  {
    path: "Contact",
    element: <Contact />,
  },
  {
    path: "pika",
    element: <Pika />,
  },
  {
    path: "yalla",
    element: <Yalla />,
  },
  {
    path: "Tornado",
    element: <Tornado />,
  },
  {
    path: "Nexit",
    element: <Nexit />,
  },
  {
    path: "Graphix",
    element: <Graphix />
  },
  {
    path: "FoodT",
    element: <FoodT />
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={(<div>Loading ....</div>)} >
  <React.StrictMode>
    < RouterProvider router={router}/>
  </React.StrictMode>
  </Suspense>
);


reportWebVitals();
