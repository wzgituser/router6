import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
  Outlet
} from "react-router-dom";

import Home from "./components/Home";
import Data from "./components/Data";
import Contact from "./components/Contact";
const Root = () => {
  return (
    <>
      <div>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/data">
          <p>Data</p>
        </Link>
        <Link to="/contact">
          <p>Contact</p>
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/data" element={<Data />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
