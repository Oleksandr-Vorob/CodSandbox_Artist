import "./styles.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Biography from "./components/Biography";
import Famous from "./components/Famous";
import Collection from "./components/Collection";
import Add from "./components/Add";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Biography />} />
          <Route path="famous_painting" element={<Famous />} />
          <Route path="collection" element={<Collection />} />
          <Route path="add_painting" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
