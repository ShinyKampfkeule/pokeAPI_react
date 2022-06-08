import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import MainPage from "./pages/main_page";
import PkmnOverview from "./pages/all_pokemon";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/overview" element={<PkmnOverview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
