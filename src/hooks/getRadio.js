import React from "react";
import { songs } from "../assets/assets";

export const getRadio = (id, ir) => {
  if (id === "top10") {
    // top 10 lists
    const populars = songs
      .filter((song) => song.popularity > 90)
      .sort((a, b) => b.popularity - a.popularity);

    const top10Collections = populars.slice(0, 10);

    return {
      id: "top10",
      title: "Top Songs - Global",
      artists: [
        "Your weekly update of the most played tracks right now - Global.",
      ],
      cover:
        "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg",
      genres: ["Soul Ballad", "Pop"],
      saves: "1,966",
      songs: top10Collections,
    };
  }
  return ir;
};
