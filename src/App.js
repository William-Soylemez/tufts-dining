import Page from "./Page";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Menu from "./Menu/Menu";
import About from "./About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={
            <Navigate to="/menu" />
          } />
          <Route path="/home" element = {
            <Home />
          } />
          <Route exact path="/menu" element={
            <Navigate to={`/menu/carm/${(new Date()).toISOString().slice(0,10)}`} />
          } />
          <Route path="/menu/:location/:date" element={
            <Page name="Menu viewer"> <Menu /> </Page>
          } />
          <Route path="/about" element={
            <Page name="About"> <About /> </Page>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
