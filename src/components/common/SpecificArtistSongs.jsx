import React from "react";
import { songs } from "../../assets/assets";

const SpecificArtistSongs = ({ item }) => {
  const stopwords = new Set(["the", "feat", "ft", "featuring", "with", "and"]);
  const normalizeArtist = (art) => {
    return art
      .toLowerCase()
      .split(" ")
      .map((a) => a.trim())
      .filter((a) => a && !stopwords.has(a));
  };
  const itemArtist = normalizeArtist(item.artist);

  const allSongs = songs.filter((song) => {
    const songArtist = normalizeArtist(song.artist);
    const hasCommonChar = songArtist.some((a) => itemArtist.includes(a));

    return hasCommonChar && song.title != item.title;
  });

  return (
    <div>
      {allSongs.map((song) => (
        <div
          key={song.id}
          className="hover:bg-primary duration-100 rounded-md p-3 mx-4 flex items-center gap-4"
        >
          {/* image */}
          <div className="size-16 rounded-full overflow-hidden">
            <img src={song.cover} className="size-full object-cover" />
          </div>
          <div className="text-text-p">
            <p className="text-sm">Artist</p>
            <p className="text-[16px] hover:underline cursor-pointer">
              {song.artist}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecificArtistSongs;
