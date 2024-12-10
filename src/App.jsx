import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TreemapPage from "./pages/TreemapPage.jsx";


function App() {
  return (
    <div className="bg-[#151435] overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TreemapPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
