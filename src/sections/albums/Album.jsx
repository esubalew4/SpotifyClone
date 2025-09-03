import { useParams } from "react-router-dom";
import { albums, songs } from "../../assets/assets";
import MainLeft from "../MainLeft";
import SingleSongContents from "../../components/common/SingleSongContents";
import AlbumContents from "./AlbumContents";

const Album = () => {
  const { id } = useParams();
  const song = songs.find((i) => i.id === id);
  const album = albums.find((a) => a.id === id);

  if (!song && !album) {
    return (
      <div className="text-text flex gap-2 flex-1 min-h-[430px]">
        <MainLeft />
        <p>Album or Song not found</p>
      </div>
    );
  }

  const isSingle =
    song?.album?.toLowerCase() === "single" && song?.albumId === null;

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

export default Album;
