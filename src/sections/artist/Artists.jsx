import React from "react";
import { useParams } from "react-router-dom";
import { artists } from "../../assets/assets";
import ArtistContents from "./ArtistContents";
import MainLeft from "../MainLeft";

const Artists = () => {
  const { id } = useParams();
  const artist = artists.find((a) => a.id === id);
  return (
    <>
      <div className="text-text flex gap-2 flex-1 min-h-[430px]">
        <MainLeft />
        <ArtistContents artist={artist} />
      </div>
    </>
  );
};

export default Artists;
