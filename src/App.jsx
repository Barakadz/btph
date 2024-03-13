import 'bootstrap/dist/css/bootstrap.min.css';
 
import Home from './pages/home/home';
import { createBrowserRouter,RouterProvider,Route, Outlet, Navigate } from "react-router-dom";
 import Contact from './pages/contact/contact';
 import Emplois from './pages/offres_emploi/emploi';
import Candidature from './pages/candidature/candidature';
import 'wow.js/css/libs/animate.css';
import React, { useEffect } from 'react';
import WOW from 'wow.js';
import Apropos from './pages/apropos/apropos';
import Produit from './pages/produit/produit';
 import Actualites from './pages/actualite/actualite';
import Admin from './pages/admin/admin';
import Login from './pages/login/login';
import List from './pages/list/list';
import New from './pages/new/new';
import Single from './pages/single/single';
import { userInputs } from './formsource';

function App() {
    useEffect(() => {
        const wow = new WOW({
            boxClass: 'wow', // Class name for the elements to animate (default is wow)
            animateClass: 'animated', // Class name for animation (default is animated)
            offset: 0, // Distance to the element when triggering the animation (default is 0)
            mobile: true, // Whether to enable animation on mobile devices (default is true)
            live: true,
             // Whether to add event listeners to the elements when loading (default is true)
        });
        wow.init();
    }, []);

    const router=createBrowserRouter([
      {
          path:"/",
          element:<Home/>,
          
           children:[
            {
                path:"/",
                element:<Home/>,
              },
            {
                path:"/profile/:id",
                element:<Home/>,
                /*errorElement:,*/
            }
          ]
      } 
      ,
  
      {
          path:"/produit",
          element:<Produit/>,
      },
        {
            path:"/contact",
            element:<Contact/>,
        }, 
        {
            path:"/apropos",
            element:<Apropos/>,
        },
        {
            path:"/emplois",
            element:<Emplois/>,
        },
        {
            path:"/candidature",
            element:<Candidature/>,
        },
        {
            path:"/stage",
            element:<Emplois/>,
        },
        {
            path:"/actualite",
            element:<Actualites/>,
        },
        {
            path:'*',
            element:<Home/>,
        } ,{path: '/admin',
        element: <Admin/>,
        
      }
      ,{path: '/login',
      element: <Login/>,
      
    },
    {path: '/users',
      element: <List/>,  
    }, 
    {path: '/users/:usersId',
    element: <Single/>,  
  }, 
  {path: '/users/new',
  element: <New inputs={userInputs} title={"add new user"}/>,  
},
{path: '/products',
element: <List/>,  
}, 
{path: '/products/:productId',
element: <Single/>,  
}, 
{path: '/products/new',
element: <New inputs={userInputs} title={"add new user"}/>,  
},
    ])
    return(
    <div>
    <RouterProvider router={router}/>
    </div>
    );
  
}

export default App

 
