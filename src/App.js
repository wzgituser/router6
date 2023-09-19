import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Root />} />)
);
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
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
function App() {
  return <div className="App">aaa</div>;
}

export default App;
