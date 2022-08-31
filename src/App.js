import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotels/Hotel";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Hotels" element={<Home />} />
          <Route path="/Hotels/list" element={<List />} />
          <Route path="/Hotels/hotels/:id" element={<Hotel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
