import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Loading from "../pages/home/Loading";

const RoutesProject = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={
              <Loading>
                <Home />
              </Loading>
              } />
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesProject;
