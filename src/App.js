import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotels/Hotel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Hotels" element={<Home />} />
          <Route path="/Hotels/list" element={<List />} />
          <Route path="/Hotels/hotels/:id" element={<Hotel />} />
          <Route path="/Hotels/register" element={<Register />} />
          <Route path="/Hotels/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
