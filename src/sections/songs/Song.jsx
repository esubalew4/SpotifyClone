import { useParams } from "react-router-dom";
import { albums, songs } from "../../assets/assets";
import MainLeft from "../MainLeft";
import SingleSongContents from "../../components/common/SingleSongContents";
import AlbumContents from "../albums/AlbumContents";

const Song = () => {
  const { id } = useParams();
  const song = songs.find((i) => i.id === id);
  const isSingle =
    song.album.toLowerCase() === "single" && song.albumId === null;
  const album = albums.find((a) => a.id === song.albumId);

  return (
    <div className="text-text flex gap-2 flex-1 min-h-[430px]">
      <MainLeft />
      {isSingle ? (
        <SingleSongContents item={song} />
      ) : (
        <AlbumContents item={album} />
      )}
    </div>
  );
};

export default Song;
