import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const NavigationIcon = ({ containerRef }) => {
  const scrollAmount = 200;
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  };
  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const checkEdge = () => {
    const { scrollLeft, clientWidth, scrollWidth } = containerRef.current;
    setIsStart(scrollLeft === 0);
    setIsEnd(scrollLeft + clientWidth > scrollWidth - 1);
  };
  useEffect(() => {
    containerRef.current.addEventListener("scroll", checkEdge);
    checkEdge();
  }, []);
  return (
    <div className="hidden sm:block">
      {" "}
      {!isStart && (
        <div
          onClick={scrollLeft}
          className="absolute top-1/2 z-1 left-3 bg-tertiary p-2 rounded-full hover:bg-primary cursor-pointer shadow-md/80 duration-150 flex-center"
        >
          <IoIosArrowBack className="text-lg scroll-left-btn" />
        </div>
      )}
      {!isEnd && (
        <div
          onClick={scrollRight}
          className="absolute top-1/2 right-3 bg-tertiary p-2 rounded-full hover:bg-primary cursor-pointer shadow-md/80 duration-150 flex-center z-1"
        >
          <IoIosArrowForward className="text-lg scroll-right-btn" />
        </div>
      )}
    </div>
  );
};

export default NavigationIcon;
