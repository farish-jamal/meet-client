import { Heart, HomeIcon, ImagePlus, Navigation } from "lucide-react";
import { Dropdown } from "./Dropdown";

const MobileMenu = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-gray-200 p-4 rounded-t-lg shadow-lg">
      <div className="flex items-center justify-between gap-4 px-5">
        <div className="cursor-pointer hover:bg-blue-500 py-2 px-3 hover:text-white rounded-lg transition-all duration-200">
          <HomeIcon />
        </div>
        <div className="cursor-pointer hover:bg-blue-500 py-2 px-3 hover:text-white rounded-lg transition-all duration-200">
          <Navigation />
        </div>
        <div className="cursor-pointer hover:bg-blue-500 py-2 px-3 hover:text-white rounded-lg transition-all duration-200">
          <Heart />
        </div>
        <div className="cursor-pointer hover:bg-blue-500 py-2 px-3 hover:text-white rounded-lg transition-all duration-200">
          <ImagePlus />
        </div>
        <div className="cursor-pointer hover:bg-blue-500 py-2 px-3 hover:text-white rounded-lg transition-all duration-200">
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
