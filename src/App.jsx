import { Route, Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainSection from "./sections/MainSection";
import Song from "./sections/songs/Song";
import Album from "./sections/albums/album";
import Artists from "./sections/artist/Artists";
import Radio from "./sections/radio/Radio";
import Search from "./components/common/Search";
import { SearchProvider } from "./contexts/SearchContext";

function App() {
  return (
    <SearchProvider>
      <Header />

      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/song/:id" element={<Song />} />
        <Route path="/album/:id" element={<Album />} />
        <Route path="/artist/:id" element={<Artists />} />
        <Route path="/playlist/:id" element={<Radio />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </SearchProvider>
  );
}

export default App;
