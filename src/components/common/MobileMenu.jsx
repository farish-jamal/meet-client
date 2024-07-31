import { Compass, Heart, HomeIcon, PlusSquare } from "lucide-react";
import { Dropdown } from "./Dropdown";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white p-2 rounded-t-lg shadow-lg">
      <div className="flex items-center justify-between gap-4 px-5">
        <Link to="/" className="cursor-pointer hover:bg-blue-500 py-2 px-3 hover:text-white rounded-lg transition-all duration-200">
          <HomeIcon />
        </Link>
        <Link to="/explore" className="cursor-pointer hover:bg-blue-500 py-2 px-3 hover:text-white rounded-lg transition-all duration-200">
          <Compass />
        </Link>
        <Link to="/notification" className="cursor-pointer hover:bg-blue-500 py-2 px-3 hover:text-white rounded-lg transition-all duration-200">
          <Heart />
        </Link>
        <Link to="/upload"className="cursor-pointer hover:bg-blue-500 py-2 px-3 hover:text-white rounded-lg transition-all duration-200">
          <PlusSquare />
        </Link>
        <div className="cursor-pointer hover:bg-blue-500 py-2 px-3 hover:text-white rounded-lg transition-all duration-200">
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
