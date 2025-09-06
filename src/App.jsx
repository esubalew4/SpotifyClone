import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainSection from "./sections/MainSection";
import Song from "./sections/songs/Song";
import Artists from "./sections/artist/Artists";
import Radio from "./sections/radio/Radio";
import Search from "./components/common/Search";
import { searchCtx } from "./contexts/SearchContext";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import { PlaylistLogProvider } from "./contexts/PlaylistLogContext";
import DownloadApp from "./sections/DownloadApp";
import TrendingSection from "./sections/showAllSection/TrendingSection";
import ArtistsSection from "./sections/showAllSection/ArtistsSection";
import AlbumsAndSinglesSection from "./sections/showAllSection/AlbumsAndSinglesSection";
import RadioSection from "./sections/showAllSection/RadioSection";
import Album from "./sections/albums/Album";
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { VscLibrary } from "react-icons/vsc";
import { FaSpotify } from "react-icons/fa";
import About from "./components/About";
import { AboutModalProvider } from "./contexts/AboutModalContext";

function App() {
  const { srchRef } = searchCtx();
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname.startsWith("/login");
  const isSignup = location.pathname.startsWith("/signup");
  const handleSearchFocus = () => {
    if (srchRef.current) {
      srchRef.current.focus();
    }
  };
  return (
    <PlaylistLogProvider>
      <AboutModalProvider>
        {!isLogin && !isSignup && <Header />}
        <About />
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/song/:id" element={<Song />} />
          <Route path="/album/:id" element={<Album />} />
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
        {!isLogin && !isSignup && (
          <>
            <div className="z-40 h-16 text-text-p bg-neutral-950/90 fixed bottom-0 left-0 right-0 grid grid-cols-4 place-items-center sm:hidden">
              <div
                onClick={() => navigate("/")}
                className="flex-center text-2xl flex-col w-full"
              >
                <GoHomeFill />
                <p className="text-xs">Home</p>
              </div>
              <div
                onClick={() => {
                  navigate("/"), handleSearchFocus();
                }}
                className="flex-center text-2xl flex-col  w-full"
              >
                <IoSearch />
                <p className="text-xs">Search</p>
              </div>
              <div className="flex-center text-2xl flex-col w-full">
                <VscLibrary />
                <p className="text-xs">Your Library</p>
              </div>
              <div className="flex-center text-2xl flex-col w-full">
                <FaSpotify />
                <p className="text-xs">Premium</p>
              </div>
            </div>
            <div className="hidden sm:block">
              <Footer />
            </div>
          </>
        )}
      </AboutModalProvider>
    </PlaylistLogProvider>
  );
}

export default App;
