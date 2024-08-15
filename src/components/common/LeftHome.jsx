import { Compass, Heart, HomeIcon, PlusSquare } from "lucide-react";
import { Dropdown } from "./Dropdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userSelectorState } from "../../store/selector/userSelctor";

const LeftHome = () => {
  const user = useRecoilValue(userSelectorState);
  return (
    <div className="sticky top-4 left-0 hidden lg:flex flex-col items-start lg:w-1/6 bg-white m-3 p-4 rounded-lg shadow-lg h-[97vh]">
        <Link to="/" className="flex items-center gap-3 mb-6 w-full cursor-pointer hover:bg-blue-500 py-2 px-3 hover:text-white rounded-lg transition-all duration-200">
          <HomeIcon />
          <p className="text-xl font-semibold">Home</p>
        </Link>
        <Link to="/explore" className="flex items-center gap-3 mb-6 w-full cursor-pointer hover:bg-blue-500 py-2 px-3 hover:text-white rounded-lg transition-all duration-200">
          <Compass />
          <p className="text-xl font-semibold">Explore</p>
        </Link>
        <Link to="/notification" className="flex items-center gap-3 mb-6 w-full cursor-pointer hover:bg-blue-500 py-2 px-3 hover:text-white rounded-lg transition-all duration-200">
          <Heart />
          <p className="text-xl font-semibold">Notification</p>
        </Link>
        <Link to="/upload" className="flex items-center gap-3 mb-6 w-full cursor-pointer hover:bg-blue-500 py-2 px-3 hover:text-white rounded-lg transition-all duration-200">
          <PlusSquare />
          <p className="text-xl font-semibold">Create</p>
        </Link>
        <Link to={`/profile/${user._id}`} className="flex items-center gap-3 mb-6 w-full cursor-pointer hover:bg-blue-500 py-2 px-3 hover:text-white rounded-lg transition-all duration-200">
          <Avatar>
            <AvatarImage src={user.profile} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-xl font-semibold">Profile</p>
        </Link>
      <div className="mt-auto">
        <div className="flex items-center w-full gap-3">
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default LeftHome;
