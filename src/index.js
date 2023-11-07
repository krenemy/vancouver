import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Main from './components/Main'
import Home from './components/Home';
import About from './components/About'
// const router = createBrowserRouter([
//   {
//     path:'/' ,
//     element:<App/>,
//     children:[
//       {
//         path:"/home",
//         element:<Home/>
//       },
//       {
//         path:"/about",
//         element:<About/>
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App></App>}>
      <Route path='/Home' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

