import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const Feed = () => {
  const [posts, setPosts] = useState({});
  const [user, setUser] = useState({});

  const handleGetPost = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/user/feed`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        toast.error('Error while fetching data');
        return;
      }
      const postData = await response.json();
      setPosts(postData.data);
    } catch (error) {
      toast.error('Internal server error');
    }
  };
  useEffect(() => {
    handleGetPost();
    console.log(posts);
  }, [])

  return (
    <>
     <Toaster position="top-right" duration="4000" />
      {posts && posts.length > 0 ? (
        <div className="flex-1 lg:mx-4 lg:my-4 bg-white py-4 px-4 mb-20 md:mb-20 lg:px-60 rounded-lg shadow-lg overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Feed</h2>
          {posts.map((post) => (
            <div to={post.id} key={post.id} className="mb-5 bg-gray-100 p-5 rounded-lg">
              <div className="flex items-center mb-2 mt-10">
                <img
                  src={post.user[0].profile}
                  alt={post.user[0].userName}
                  className="w-10 h-10 rounded-full mr-2 object-cover"
                />
                <Link to={`/profile/${post.user[0]._id}`}>
                  <span className="font-bold">{post.user[0].userName}</span>
                </Link>
              </div>
              <Link to={`post/${post._id}`}>
                <img
                  src={post.image}
                  alt="Post"
                  className="w-full h-96 rounded-lg mb-2"
                />
              </Link>
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center">
                  <Heart className="mr-2 text-red-500 cursor-pointer" />
                  <span>12</span>
                  <Link to={`post/${post._id}`}>
                    <MessageCircle className="ml-4 mr-2 cursor-pointer" />
                  </Link>
                  <span>55</span>
                  <Share2 className="ml-4 mr-2 cursor-pointer" />
                  <Bookmark className="ml-4 cursor-pointer" />
                </div>
              </div>
              <p>
                <span className="font-bold">{post.user[0].userName} </span>
                {post.caption}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-1 lg:mx-4 lg:my-4 bg-white py-4 px-4 mb-20 lg:px-60 rounded-lg shadow-lg overflow-y-auto h-full">
          <h2 className="text-xl font-bold mb-4">Feed</h2>
          <div className="h-full overflow-y-auto">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="mb-10">
                <div className="flex items-center mb-2 space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
                <Skeleton className="w-full h-64 rounded-lg mb-2" />
                <div className="flex items-center mb-2 space-x-4">
                  <Skeleton className="h-6 w-6" />
                  <Skeleton className="h-6 w-6" />
                  <Skeleton className="h-6 w-6" />
                  <Skeleton className="h-6 w-6" />
                </div>
                <Skeleton className="h-4 w-3/4" />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Feed;
