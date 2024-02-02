import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Cart,
  Instamart,
  Body,
  Header,
  Footer,
  Card,
  Error,
} from "./components/index";
import store from "./utils/store";
import { Provider } from "react-redux";
import MainPage from "./components/MainPage";
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    ),
    errorElement: <Error />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/about", element: <About /> },
      { path: "/cart", element: <Cart /> },
      { path: "/instamart", element: <Instamart /> },
    ],
  },
]);
export default App;
