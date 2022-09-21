import Home from "./component/Home";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from "./component/Header";
import './App.css';
import Footer from "./component/Footer";
import NewsAdd from "./Admin/NewsAdd";
import AdminPanel from "./Admin/AdminPanel";
import NewsDetails from "./component/NewsDetails";
import LatestNews from "./component/LatestNews";
import SportsNews from "./component/Cards/SportsNews";
import TechNews from "./component/Cards/TechNews";
import WorldNews from "./component/Cards/WorldNews";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<NewsAdd />} />
        <Route path="/adminAll" element={<AdminPanel />} />
        <Route path="/news" element={<NewsDetails />} />
        <Route path="/latest" element={<LatestNews />} />
        <Route path="/sport" element={<SportsNews />} />
        <Route path="/tech" element={<TechNews />} />
        <Route path="/world" element={<WorldNews />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
