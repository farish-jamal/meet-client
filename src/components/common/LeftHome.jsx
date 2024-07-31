import { Heart, HomeIcon, ImagePlus, Navigation } from "lucide-react";
import { Dropdown } from "./Dropdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const LeftHome = () => {
  return (
    <div className="sticky top-4 left-0 hidden lg:flex flex-col items-start lg:w-1/6 bg-white m-3 p-4 rounded-lg shadow-lg h-[97vh]">
      <div className="flex items-center gap-3 mb-6 w-full cursor-pointer hover:bg-blue-500 py-2 px-3 hover:text-white rounded-lg transition-all duration-200">
        <HomeIcon />
        <p className="text-xl font-semibold">Home</p>
      </div>
      <div className="flex items-center gap-3 mb-6 w-full cursor-pointer hover:bg-blue-500 py-2 px-3 hover:text-white rounded-lg transition-all duration-200">
        <Navigation />
        <p className="text-xl font-semibold">Explore</p>
      </div>
      <div className="flex items-center gap-3 mb-6 w-full cursor-pointer hover:bg-blue-500 py-2 px-3 hover:text-white rounded-lg transition-all duration-200">
        <Heart />
        <p className="text-xl font-semibold">Notification</p>
      </div>
      <div className="flex items-center gap-3 mb-6 w-full cursor-pointer hover:bg-blue-500 py-2 px-3 hover:text-white rounded-lg transition-all duration-200">
        <ImagePlus />
        <p className="text-xl font-semibold">Create</p>
      </div>
      <div className="flex items-center gap-3 mb-6 w-full cursor-pointer hover:bg-blue-500 py-2 px-3 hover:text-white rounded-lg transition-all duration-200">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-xl font-semibold">Profile</p>
      </div>
      <div className="mt-auto">
        <div className="flex items-center w-full gap-3">
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default LeftHome;
