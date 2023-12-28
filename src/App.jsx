import "./App.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import AppC0 from "./component/AppC0";
import AppC1 from "./component/AppC1";
import AppC2 from "./component/AppC2";
import AppC3 from "./component/AppC3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppC0 />,
  },
  {
    path: "c1",
    element: <AppC1 />,
  },
  {
    path: "c2",
    element: <AppC2 />,
  },
  {
    path: "c3",
    element: <AppC3 />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
