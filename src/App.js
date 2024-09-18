import './App.css';
import Navbar from './Components/Navbar';
import Main_container from './Components/Main_container';
import Footer from './Components/Footer';
import Error from './Components/Error';
import About from './Components/About';
import Cart from './Components/Cart';
import Contact from './Components/Contact'; 
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestrauntPage from './Components/RestrauntPage';
import { Provider } from 'react-redux';
import { AppStore } from './Utiles/AppStore';

function Layout() {
  return (
    <Provider store={AppStore}>
      <div className="App">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}

function App() {
  const AboutLoad = lazy(() => import('./Components/About'));

  // const Approuter = createBrowserRouter([
  //   {
  //     path: "/FoodClub", // Base path for all routes
  //     element: <Layout />,
  //     errorElement: <Error />,
  //     children: [
  //       {
  //         path: "/", // Root path under /FoodClub
  //         element: <Main_container />,
  //       },
  //       {
  //         path: "About", // Relative path under /FoodClub
  //         element: (
  //           <Suspense fallback={<h1>Loading!!</h1>}>
  //             <AboutLoad />
  //           </Suspense>
  //         ),
  //       },
  //       {
  //         path: "Contact", // Relative path under /FoodClub
  //         element: <Contact />,
  //       },
  //       {
  //         path: "restraunts/:resId", // Relative path under /FoodClub
  //         element: <RestrauntPage />,
  //       },
  //       {
  //         path: "Cart", // Relative path under /FoodClub
  //         element: <Cart />,
  //       },
  //     ],
  //   },
  // ]);
  const basePath = process.env.REACT_APP_BASE_PATH;
  const Approuter = createBrowserRouter([
    {
      path: basePath , // Base path for all routes
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "", // Use an empty string for the relative root path
          element: <Main_container />,
        },
        {
          path: "About", // Relative path under /FoodClub
          element: (
            <Suspense fallback={<h1>Loading!!</h1>}>
              <AboutLoad />
            </Suspense>
          ),
        },
        {
          path: "Contact", // Relative path under /FoodClub
          element: <Contact />,
        },
        {
          path: "restraunts/:resId", // Relative path under /FoodClub
          element: <RestrauntPage />,
        },
        {
          path: "Cart", // Relative path under /FoodClub
          element: <Cart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={Approuter} />;
}

export default App;
