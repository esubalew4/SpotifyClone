import React from "react";
import MainLeft from "./MainLeft";
import MainRight from "./mainRight/MainRight";

const MainSection = () => {
  return (
    <>
      <div className="flex gap-2 flex-1 min-h-[430px]  text-text overflow-hidden">
        <MainLeft />
        <MainRight />
      </div>
    </>
  );
};

export default MainSection;
