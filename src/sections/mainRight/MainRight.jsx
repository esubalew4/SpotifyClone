import React from "react";
import TrendingSongs from "./TrendingSongs";
import PopularArtists from "./PopularArtists";
import PopularAlbums from "./PopularAlbums";
import PopularRadio from "./PopularRadio";
import FeaturedCharts from "./FeaturedCharts";
import MainRightFooter from "./MainRightFooter";

const MainRight = () => {
  return (
    <div className="bg-secondary flex-1 rounded-md min-w-72  overflow-y-auto [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-primary select-none flex flex-col gap-4">
      <TrendingSongs />
      <PopularArtists />
      <PopularAlbums />
      <PopularRadio />
      <FeaturedCharts />
      <MainRightFooter />
    </div>
  );
};

export default MainRight;
