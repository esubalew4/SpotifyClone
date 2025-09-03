import { useParams } from "react-router-dom";
import { radios } from "../../assets/assets";
import MainLeft from "../MainLeft";
import RadioContents from "./RadioContents";

const Radio = () => {
  const { id } = useParams();
  const radio = radios.find((i) => i.id === id);

  if (!radio) {
    return (
      <div className="text-text flex gap-2 flex-1 min-h-[430px]">
        <MainLeft />
        <p>Radio not found</p>
      </div>
    );
  }

  return (
    <div className="text-text flex gap-2 flex-1 min-h-[430px]">
      <MainLeft />
      <RadioContents radio={radio} />
    </div>
  );
};

export default Radio;
