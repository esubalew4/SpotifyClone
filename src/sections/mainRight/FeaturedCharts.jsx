import { useRef } from "react";
import NavigationIcon from "../../components/common/NavigationIcon";
import Top10Populars from "../featuredCharts/Top10Populars";

const FeaturedCharts = () => {
  const containerRef = useRef();
  return (
    <div className=" pt-7 relative bg-secondary">
      <NavigationIcon containerRef={containerRef} />
      {/* title */}
      <div className="relative flex justify-between px-8 mb-4">
        <p className="text-2xl font-medium text-text-p hover:underline cursor-pointer">
          Featured Charts
        </p>
        <button className="text-sm hover:underline cursor-pointer">
          Show all
        </button>
      </div>
      <div
        ref={containerRef}
        className="flex overflow-y-hidden px-8 [&::-webkit-scrollbar]:hidden z-1 "
      >
        <Top10Populars />
      </div>
    </div>
  );
};

export default FeaturedCharts;
