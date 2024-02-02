
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './Components/Contect/Contect.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'
import { githubInfoLoader } from './Components/Github/Github.jsx'

// we have many method to route but some is good mostly i prefer two method one easy and second a little complex for 
// new coder all we have to is to used routes. we have to install react-router_dom and instead of App we can import
//<RouterProvider /> it take props of routers see here <RouterProvider router={name of veriable} /> now you need to 
//make router in going app.jsx you can import <Outlate /> from react-router-dom it handle your component to reder
//dynamically on the website one at a time.now you need to make router to create router you need CreateBrowserRouter()
// it is method take array and object in object you can defined path:"" elememt:<App /> children:[{path:"", element:}];
//here are example

// const veriableNameUsedinRouterProvider=createBrowserRouter([
//   {
//     path: '/',
//     element:<App />,
//     children:[
//       {
//         path:"/",
//         element:<Home />
//       },
//       {
//         path:"about",
//         element:<About />
//       },
//       {
//         //repeate more as you want
//       }
//     ]

//   }
// ]);




const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route
       path='github'
       element={<Github />}
       loader={githubInfoLoader}
       />
       {/* //here we can also used eror page 404  */}
       {/* <Route path='/*' element={<Page404/> }/> */}
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
