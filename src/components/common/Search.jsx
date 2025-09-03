import React from "react";
import { searchCtx } from "../../contexts/SearchContext";
import { albums, artists, songs } from "../../assets/assets";
import TrendingSongs from "../../sections/mainRight/TrendingSongs";
import { LuTextSearch } from "react-icons/lu";
import PopularArtists from "../../sections/mainRight/PopularArtists";
import PopularAlbums from "../../sections/mainRight/PopularAlbums";

const Search = () => {
  const { query, setQuery } = searchCtx();
  const normalize = (val) => val.toLowerCase().trim();

  const searchedTitle = songs.filter((song) =>
    normalize(song.title).includes(normalize(query))
  );

  const searchedArtists = artists.filter((song) =>
    normalize(song.name).includes(normalize(query))
  );

  const searchedAlbum = albums.filter((album) =>
    normalize(album.title).includes(normalize(query))
  );

  if (
    !searchedTitle.length > 0 &&
    !searchedArtists.length > 0 &&
    !searchedAlbum.length > 0
  )
    return (
      <div className="flex-center size-full flex-col gap-1 text-[16px] text-text/60">
        <LuTextSearch className="text-5xl" />
        <p>Song or Album not found.</p>
      </div>
    );
  return (
    <div className="pb-8">
      {searchedTitle.length > 0 && (
        <>
          <TrendingSongs title_text="Songs" searchedSong={searchedTitle} />
        </>
      )}
      {searchedArtists.length > 0 && (
        <PopularArtists title_text="Artists" searchedSong={searchedArtists} />
      )}
      {searchedAlbum.length > 0 && (
        <PopularAlbums title_text="Albums" searchedSong={searchedAlbum} />
      )}
    </div>
  );
};

export default Search;
