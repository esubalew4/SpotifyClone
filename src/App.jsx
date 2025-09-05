import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainSection from "./sections/MainSection";
import Song from "./sections/songs/Song";
import Artists from "./sections/artist/Artists";
import Radio from "./sections/radio/Radio";
import Search from "./components/common/Search";
import { SearchProvider } from "./contexts/SearchContext";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import { PlaylistLogProvider } from "./contexts/PlaylistLogContext";
import DownloadApp from "./sections/DownloadApp";
import TrendingSection from "./sections/showAllSection/TrendingSection";
import ArtistsSection from "./sections/showAllSection/ArtistsSection";
import AlbumsAndSinglesSection from "./sections/showAllSection/AlbumsAndSinglesSection";
import RadioSection from "./sections/showAllSection/RadioSection";
import AlbumContents from "./sections/albums/AlbumContents";

function App() {
  const location = useLocation();
  const isLogin = location.pathname.startsWith("/login");
  const isSignup = location.pathname.startsWith("/signup");

  return (
    <SearchProvider>
      <PlaylistLogProvider>
        {!isLogin && !isSignup && <Header />}

        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/song/:id" element={<Song />} />
          <Route path="/album/:id" element={<AlbumContents />} />
          <Route path="/artist/:id" element={<Artists />} />
          <Route path="/playlist/:id" element={<Radio />} />

          {/* sections */}
          <Route path="/section/trendings" element={<TrendingSection />} />
          <Route path="/section/artists" element={<ArtistsSection />} />
          <Route
            path="/section/albums_and_singles"
            element={<AlbumsAndSinglesSection />}
          />
          <Route path="/section/radios" element={<RadioSection />} />

          <Route path="/download" element={<DownloadApp />} />
          <Route path="/search" element={<Search />} />
          {/* auth */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {!isLogin && !isSignup && <Footer />}
      </PlaylistLogProvider>
    </SearchProvider>
  );
}

export default App;
