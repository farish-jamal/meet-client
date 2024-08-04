import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Heart, MessageCircle, Share } from 'lucide-react';
import { useState } from 'react';

const SinglePost = () => {
 const [comments, setComments] = useState([
  { userName: 'johndoe', text: 'Amazing post! Love the view!' },
  { userName: 'janedoe', text: 'Wow, this place looks beautiful.' },
  { userName: 'user123', text: 'Can you share the location of this place?' },
]);
const [newComment, setNewComment] = useState('');

const handleCommentChange = (e) => {
  setNewComment(e.target.value);
};

const handleCommentSubmit = () => {
  if (newComment.trim()) {
    setComments([...comments, { userName: 'currentuser', text: newComment }]);
    setNewComment('');
  }
};

const post = {
  user: {
    profile: "https://res.cloudinary.com/dacwig3xk/image/upload/v1722170520/onnangimuklpf0m1vknc.jpg",
    userName: "samaninggg",
  },
  image: "https://res.cloudinary.com/dacwig3xk/image/upload/v1722759038/qda6ovezc7gcmfs4dxbs.jpg",
  caption: "Enjoying the beautiful view! #Travel #Nature",
  likes: 120,
  comments: 35,
};
  return (
   <div className="flex-1 lg:mx-4 lg:my-4 bg-white py-4 px-4 mb-20 md:mb-20 lg:px-5 rounded-lg shadow-lg overflow-y-auto no-scrollbar">
   <div className="flex items-center p-4 border-b border-gray-300">
        <Avatar className="w-14 h-14 rounded-full overflow-hidden">
          <AvatarImage
            src={post.user.profile}
            alt={post.user.userName}
            className="object-cover w-full h-full"
          />
          <AvatarFallback className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-700">
            {post.user.userName[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <p className="text-xl font-semibold text-gray-800">{post.user.userName}</p>
        </div>
      </div>

      {/* Post Image */}
      <div className="relative">
        <img
          src={post.image}
          alt="Post"
          className="w-full h-auto object-cover rounded-t-xl border-b border-gray-200"
        />
      </div>

      {/* Post Actions */}
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

      {/* Post Details */}
      <div className="p-4 ">
        <p className="font-semibold text-lg text-gray-800">{post.likes} likes</p>
        <p className="text-gray-700 mt-2">{post.caption}</p>
        <p className="text-gray-500 mt-2">{post.comments} comments</p>
      </div>

      {/* Comment Section */}
      <div className="p-4">
        {/* Comment Input */}
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

        {/* Comment List */}
        <div className="space-y-4 pt-6">
          {comments.map((comment, index) => (
            <div key={index} className="flex items-start gap-3">
              <Avatar className="w-10 h-10 rounded-full overflow-hidden">
                <AvatarFallback className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-700">
                  {comment.userName[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-gray-800">{comment.userName}</p>
                <p className="text-gray-700">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
 </div>
  )
}

export default SinglePost