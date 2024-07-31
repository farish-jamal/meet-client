import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton"
import { Link } from "react-router-dom";

const Feed = () => {
  const data = [];
  const posts = [
    {
      id: 1,
      user: {
        name: "John Doe",
        avatar: "https://via.placeholder.com/50",
      },
      image: "https://via.placeholder.com/500",
      caption: "This is a beautiful sunset!",
      likes: 120,
      comments: 45,
    },
    {
      id: 2,
      user: {
        name: "Jane Smith",
        avatar: "https://via.placeholder.com/50",
      },
      image: "https://via.placeholder.com/500",
      caption: "Enjoying my vacation at the beach!",
      likes: 89,
      comments: 30,
    },
    {
      id: 3,
      user: {
        name: "Alice Johnson",
        avatar: "https://via.placeholder.com/50",
      },
      image: "https://via.placeholder.com/500",
      caption: "Lovely day for a walk in the park.",
      likes: 150,
      comments: 55,
    },
  ];

  return (
    <>
      {data && data.length > 1 ? (
        <div className="flex-1 lg:mx-4 lg:my-4 bg-white py-4 px-4 mb-20 lg:px-28 rounded-lg shadow-lg overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Feed</h2>
          {posts.map((post) => (
            <div to={post.id} key={post.id} className="mb-2">
              <div className="flex items-center mb-2 mt-10">
                <img
                  src={post.user.avatar}
                  alt={post.user.name}
                  className="w-10 h-10 rounded-full mr-2"
                />
                <span className="font-bold">{post.user.name}</span>
              </div>
              <Link to={`post/${post.id}`}>
                <img
                  src={post.image}
                  alt="Post"
                  className="w-full h-96 rounded-lg mb-2"
                />
              </Link>
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center">
                  <Heart className="mr-2 text-red-500 cursor-pointer" />
                  <span>{post.likes}</span>
                  <Link to={`post/${post.id}`}>
                    <MessageCircle className="ml-4 mr-2 cursor-pointer" />
                  </Link>
                  <span>{post.comments}</span>
                  <Share2 className="ml-4 mr-2 cursor-pointer" />
                  <Bookmark className="ml-4 cursor-pointer" />
                </div>
              </div>
              <p>
                <span className="font-bold">{post.user.name} </span>
                {post.caption}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-1 lg:mx-4 lg:my-4 bg-white py-4 px-4 mb-20 lg:px-28 rounded-lg shadow-lg overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Feed</h2>
          <div className="h-full overflow-y-auto">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="mb-6">
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
