import Home from "./component/Home";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from "./component/Header";
import './App.css';
import Footer from "./component/Footer";
import NewsAdd from "./Admin/NewsAdd";
import AdminPanel from "./Admin/AdminPanel";
import NewsDetails from "./component/NewsDetails";

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
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
