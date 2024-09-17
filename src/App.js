
import './App.css';
import Navbar from './Components/Navbar';
import Main_container from './Components/Main_container';
import Footer from './Components/Footer';
import Error from './Components/Error';
import About from './Components/About';
import Cart from './Components/Cart';
import Contact from './Components/Contact'; 
import {lazy, Suspense} from 'react';
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import RestrauntPage from './Components/RestrauntPage';
import { Provider } from 'react-redux';
import { AppStore } from './Utiles/AppStore';

function Layout (){
  return (
 <Provider store={AppStore}>
  <div className="App">
  <Navbar/>
  <Outlet/>
  <Footer/>
  </div>
  </Provider> 

  );
}
function App () {
 const AboutLoad = lazy(()=>{import('./Components/About')});
  const Approuter = createBrowserRouter([
    {
      // path: "/",
      path: "/FoodClub",
      element:  <Layout/>,
      errorElement:<Error/>,
      children:[
        {
          path: "/FoodClub",
          element:<Main_container/>,
        },
        {
          path: "/FoodClub",
          element:<status/>,
        },
        {
          path: "/About",
          element: <Suspense fallback={<h1>Loading!!</h1>}><About/></Suspense>
          ,
        },
        {
          path: "/Contact",
          element: <Contact/>,
        },
        {
          path:'/restraunts/:resId',
          element:<RestrauntPage/>
        },
        {
          path:'/Cart',
          element:<Cart/>
        }
      ],
    }
   
  ]);
    return (<RouterProvider router={Approuter} />);
  
 
}

export default App;
