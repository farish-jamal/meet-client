import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { EarthIcon, Heart, MessageCircle, Share, Users } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

const SinglePost = () => {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([
    { userName: "johndoe", text: "Amazing post! Love the view!" },
    { userName: "janedoe", text: "Wow, this place looks beautiful." },
    { userName: "user123", text: "Can you share the location of this place?" },
  ]);
  const [newComment, setNewComment] = useState("");

  const { id } = useParams();

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments([...comments, { userName: "currentuser", text: newComment }]);
      setNewComment("");
    }
  };

  const handleGetPost = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/user/post/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (!response.ok) {
        toast.error("Error while fetching data");
        return;
      }
      const postData = await response.json();
      setPost(postData.data);
      console.log(postData.data);
    } catch (error) {
      toast.error("Internal server error");
      console.log(error);
    }
  };

  const handleDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
  
    const units = [
      { name: "year", seconds: 31536000 },
      { name: "month", seconds: 2592000 },
      { name: "week", seconds: 604800 },
      { name: "day", seconds: 86400 },
      { name: "hour", seconds: 3600 },
      { name: "minute", seconds: 60 },
      { name: "second", seconds: 1 },
    ];
  
    for (const unit of units) {
      const interval = Math.floor(diffInSeconds / unit.seconds);
      if (interval >= 1) {
        return `${interval} ${unit.name}${interval !== 1 ? "s" : ""} ago`;
      }
    }
  
    return "just now";
    }

  useState(() => {
    handleGetPost();
  }, []);

  return (
    <>
      {post.caption ? (
        <div className="flex-1 lg:mx-4 lg:my-4 bg-white py-4 px-4 mb-20 md:mb-20 lg:px-5 rounded-lg shadow-lg overflow-y-auto no-scrollbar">
          <div className="flex items-center p-4 border-b border-gray-300">
            <Avatar className="w-14 h-14 rounded-full overflow-hidden">
              <AvatarImage
                src={post.user.profile}
                alt={post._id}
                className="object-cover w-full h-full"
              />
              {post.user && (
                <AvatarFallback className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-700">
                  {post.user.userName[0].toUpperCase()}
                </AvatarFallback>
              )}
            </Avatar>
            {post.user && (
              <div className="ml-4 mr-3">
                <p className="text-xl font-semibold text-gray-800">
                  {post.user.userName}
                </p>
              </div>
            )}
            {post.visibility === 'public' ? <EarthIcon width={18}/> : <Users width={18}/>}
          </div>
          <div className="relative">
            <img
              src={post.image}
              alt="Post"
              className="w-full h-[500px] object-cover rounded-t-xl border-b border-gray-200"
            />
          </div>
          <div className="flex items-center p-4 border-b border-gray-300">
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100 transition">
                <Heart className="w-7 h-7 text-red-500" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition">
                <MessageCircle className="w-7 h-7 text-gray-700" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition">
                <Share className="w-7 h-7 text-gray-700" />
              </button>
            </div>
          </div>
          <div className="p-4 ">
            <p className="font-semibold text-lg text-gray-800">12 likes</p>
            <p className="text-gray-700 mt-2"><span className="font-bold text-gray-950">{post.user.userName}</span>{" "}{post.caption}</p>
            <p className="text-gray-500 mt-2">Posted {" "}{handleDate(post.createdAt)}</p>
            <p className="text-gray-500 mt-2">10 comments</p>
          </div>
          <div className="p-4">
            <div className="flex items-center overflow-hidden border-b border-gray-300 pb-6">
              <Avatar className="w-10 h-10 rounded-full overflow-hidden">
                <AvatarFallback className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-700">
                  U
                </AvatarFallback>
              </Avatar>
              <input
                type="text"
                value={newComment}
                onChange={handleCommentChange}
                className="flex-1 ml-2 px-4 py-2 border-none rounded-lg outline-none placeholder-gray-500"
                placeholder="Add a comment..."
              />
              <button
                onClick={handleCommentSubmit}
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Post
              </button>
            </div>
            <div className="space-y-4 pt-6">
              {comments.map((comment, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Avatar className="w-10 h-10 rounded-full overflow-hidden">
                    <AvatarFallback className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-700">
                      {comment.userName[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-800">
                      {comment.userName}
                    </p>
                    <p className="text-gray-700">{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 lg:mx-4 lg:my-4 bg-white py-4 px-4 mb-20 md:mb-20 lg:px-5 rounded-lg shadow-lg overflow-y-auto no-scrollbar">
          <div className="flex items-center p-4 border-b border-gray-300">
            <Skeleton className="h-16 w-16 rounded-full" />
            <div className="ml-4">
              <Skeleton className="h-10 w-32 lg:w-[96]" />
            </div>
          </div>
          <div className="relative">
            <Skeleton className="h-[500px]" />
          </div>
          <div className="flex items-center p-4 border-b border-gray-300">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-8 w-8" />
            </div>
          </div>
          <div className="p-4 space-y-4">
            <Skeleton className="h-6 w-72" />
            <Skeleton className="h-6 w-72" />
            <Skeleton className="h-6 w-72" />
          </div>
          <div className="p-4">
            <div className="flex items-center overflow-hidden pb-6">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-[90%] rounded-lg ml-2" />
              <Skeleton className="ml-2 h-10 w-[10%]" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SinglePost;
