import { Route, Router, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainSection from "./sections/MainSection";
import Song from "./sections/songs/Song";
import Album from "./sections/albums/album";
import Artists from "./sections/artist/Artists";
import Radio from "./sections/radio/Radio";
import Search from "./components/common/Search";
import { SearchProvider } from "./contexts/SearchContext";
import Signup from "./auth/Signup";
import Login from "./auth/Login";

function App() {
  const location = useLocation();
  const isLogin = location.pathname.startsWith("/login");
  const isSignup = location.pathname.startsWith("/signup");

  return (
    <SearchProvider>
      {!isLogin && !isSignup && <Header />}

      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/song/:id" element={<Song />} />
        <Route path="/album/:id" element={<Album />} />
        <Route path="/artist/:id" element={<Artists />} />
        <Route path="/playlist/:id" element={<Radio />} />
        <Route path="/search" element={<Search />} />
        {/* auth */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {!isLogin && !isSignup && <Footer />}
    </SearchProvider>
  );
}

export default App;
