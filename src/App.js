// import { Route, Router, Routes } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/hi" element={<Home />} />
      {/* <Route path="/game">
        <Route path=":mode" element={<Game />} />
      </Route> */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
  // return (
  //   <div>
  //     <Router>
  //       <Routes>
  //         <Route path="/home" element={<Home />} />
  //       </Routes>
  //     </Router>
  //   </div>
  // );
}

export default App;
