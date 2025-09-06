import React from "react";
import TrendingSongs from "./TrendingSongs";
import PopularArtists from "./PopularArtists";
import PopularAlbums from "./PopularAlbums";
import PopularRadio from "./PopularRadio";
import FeaturedCharts from "./FeaturedCharts";
import MainRightFooter from "./MainRightFooter";
import { searchCtx } from "../../contexts/SearchContext";
import Search from "../../components/common/Search";

const MainRight = () => {
  const { query, setQuery } = searchCtx();
  const isSearching = query.length > 0;

  return (
    <div className="bg-secondary flex-1 rounded-md min-w-72  overflow-y-auto sm:[&::-webkit-scrollbar]:w-3 sm:[&::-webkit-scrollbar-track]:bg-transparent sm:[&::-webkit-scrollbar-thumb]:bg-primary select-none flex flex-col sm:gap-4 sm:mr-2 ">
      {isSearching ? (
        <Search />
      ) : (
        <>
          <TrendingSongs />
          <PopularArtists />
          <PopularAlbums />
          <PopularRadio />
          <FeaturedCharts />
          <MainRightFooter />
        </>
      )}
    </div>
  );
};

export default MainRight;
