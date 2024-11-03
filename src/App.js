
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import RootLayout from "./RootLayout/RootLayout";
import Home from "./Pages/Home/Home";
import { Auth, AvoidSign } from "./FeAuth/auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<AvoidSign/>}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        </Route>
        
        <Route path="/*" element={<RootLayout />}>

        <Route element={<Auth/>}>
          <Route index element={<Home />} />
        </Route>
          {/* <Route path="countries" element={<Home />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
