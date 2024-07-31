import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const RightHome = () => {
  return (
    <div className="sticky top-4 right-0 hidden lg:flex flex-col items-start lg:w-1/6 bg-white m-3 p-4 rounded-lg shadow-lg h-[97vh]">
      <div className="flex items-start gap-4 mb-6 w-full cursor-pointer">
        <Avatar className="relative w-12 h-12 rounded-full overflow-hidden">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
            className="object-cover w-full h-full"
          />
          <AvatarFallback className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-700">
            CN
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm">shutupfarish</p>
          <p className="text-base font-semibold">Farish Jamal</p>
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <p className="text-base font-semibold">Suggested Friends</p>
        <p className="text-blue-500 cursor-pointer hover:underline">See all</p>
      </div>
      <div className="mt-6 w-full">
        <div className="flex items-center justify-between w-full mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="relative w-8 h-8 rounded-full overflow-hidden">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                className="object-cover w-full h-full"
              />
              <AvatarFallback className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-700">
                CN
              </AvatarFallback>
            </Avatar>
            <p className="text-sm font-semibold">farishjamal</p>
          </div>
          <p className="text-sm text-blue-500 cursor-pointer hover:underline">
            Connect
          </p>
        </div>
        <div className="flex items-center justify-between w-full mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="relative w-8 h-8 rounded-full overflow-hidden">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                className="object-cover w-full h-full"
              />
              <AvatarFallback className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-700">
                CN
              </AvatarFallback>
            </Avatar>
            <p className="text-sm font-semibold">farishjamal</p>
          </div>
          <p className="text-sm text-blue-500 cursor-pointer hover:underline">
            Connect
          </p>
        </div>
        <div className="flex items-center justify-between w-full mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="relative w-8 h-8 rounded-full overflow-hidden">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                className="object-cover w-full h-full"
              />
              <AvatarFallback className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-700">
                CN
              </AvatarFallback>
            </Avatar>
            <p className="text-sm font-semibold">farishjamal</p>
          </div>
          <p className="text-sm text-blue-500 cursor-pointer hover:underline">
            Connect
          </p>
        </div>
        <div className="flex items-center justify-between w-full mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="relative w-8 h-8 rounded-full overflow-hidden">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                className="object-cover w-full h-full"
              />
              <AvatarFallback className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-700">
                CN
              </AvatarFallback>
            </Avatar>
            <p className="text-sm font-semibold">farishjamal</p>
          </div>
          <p className="text-sm text-blue-500 cursor-pointer hover:underline">
            Connect
          </p>
        </div>
        <div className="flex items-center justify-between w-full mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="relative w-8 h-8 rounded-full overflow-hidden">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                className="object-cover w-full h-full"
              />
              <AvatarFallback className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-700">
                CN
              </AvatarFallback>
            </Avatar>
            <p className="text-sm font-semibold">farishjamal</p>
          </div>
          <p className="text-sm text-blue-500 cursor-pointer hover:underline">
            Connect
          </p>
        </div>
        <div className="flex items-center justify-between w-full mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="relative w-8 h-8 rounded-full overflow-hidden">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                className="object-cover w-full h-full"
              />
              <AvatarFallback className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-700">
                CN
              </AvatarFallback>
            </Avatar>
            <p className="text-sm font-semibold">farishjamal</p>
          </div>
          <p className="text-sm text-blue-500 cursor-pointer hover:underline">
            Connect
          </p>
        </div>
        <p className="text-blue-500">See All</p>
      </div>
    </div>
  );
};

export default RightHome;
