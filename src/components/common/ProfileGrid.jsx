import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

const ProfileGrid = () => {
  const [user, setUser] = useState([]);
  const [userDetail, setUserDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const handleGetUserDeatail = () => {
    const userObj = localStorage.getItem("user");
    const localUser = JSON.parse(userObj);
    setUserDetail(localUser);
  };

  const handleGetUser = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/user/profile/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        toast.error("Error while fetching data");
        return;
      }
      const userData = await response.json();
      setUser(userData.data);
      setLoading(true);
    } catch (error) {
      toast.error("Internal server error");
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetUser();
    handleGetUserDeatail();
  }, [id]);
  return (
    <div className="flex-1 h-screen lg:mx-4 lg:my-4 bg-white py-4 px-4 mb-20 md:mb-20 lg:px-5 rounded-lg shadow-lg overflow-y-auto">
      {!loading ? (
        <>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Skeleton className="w-24 h-24 rounded-full" />
              <div>
                <Skeleton className="w-48 h-6 mb-2" />
                <Skeleton className="w-36 h-4" />
              </div>
            </div>
            <Skeleton className="w-24 h-10 rounded" />
          </div>
          <div className="flex justify-between text-center mb-6 border-t border-b py-4">
            <div>
              <Skeleton className="w-20 h-6 mb-1" />
              <Skeleton className="w-16 h-4" />
            </div>
            <div>
              <Skeleton className="w-20 h-6 mb-1" />
              <Skeleton className="w-16 h-4" />
            </div>
            <div>
              <Skeleton className="w-20 h-6 mb-1" />
              <Skeleton className="w-16 h-4" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="relative group">
                <Skeleton className="w-full h-48 rounded" />
              </div>
            ))}
          </div>
        </>
      ) : (
        user.user && (
          <>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <img
                  className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
                  src={user.user.profile}
                  alt={user.user.userName}
                />
                <div>
                  <h1 className="text-3xl font-semibold">{user.user.name}</h1>
                  <p className="text-gray-600">{user.user.userName}</p>
                </div>
              </div>
              {user.user._id !== userDetail._id && (
                <Button>
                  {userDetail.friendList &&
                  userDetail.friendList.some(
                    (friendId) => friendId === user.user._id
                  )
                    ? "Following"
                    : "Connect"}
                </Button>
              )}
            </div>
            <div className="flex justify-between text-center mb-6 border-t border-b py-4">
              <div>
                <span className="font-semibold text-lg">
                  {user.posts.length}
                </span>
                <p className="text-gray-600">Posts</p>
              </div>
              <div>
                <span className="font-semibold text-lg">
                  {user.user.friendList.length}
                </span>
                <p className="text-gray-600">Connection</p>
              </div>
              <div>
                <span className="font-semibold text-lg">100</span>
                <p className="text-gray-600">Likes</p>
              </div>
            </div>
            {user.posts.length > 0 ? (
              <div className="grid grid-cols-3 gap-4">
                {user.posts.map((item) => (
                  <div key={item._id} className="relative group">
                    <Link to={`/post/${item._id}`}>
                      <img
                        className="w-full h-48 object-cover rounded transform group-hover:scale-105 transition duration-300"
                        src={item.image}
                        alt={item._id}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex-1 lg:mx-4 lg:my-4 bg-white py-4 px-4 mb-20 lg:px-60 rounded-lg shadow-lg overflow-y-auto no-scrollbar">
                <p className="text-center">No posts to show</p>
              </div>
            )}
          </>
        )
      )}
    </div>
  );
};

export default ProfileGrid;