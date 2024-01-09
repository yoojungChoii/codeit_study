import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  // Routes로 Route 들을 묶는다.
  return (
    <div>
      <h1>React Router</h1>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
