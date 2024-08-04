
import LeftHome from "../components/common/LeftHome";
import MobileMenu from "../components/common/MobileMenu";
import RightHome from "../components/common/RightHome";
import SinglePostD from "../components/common/SinglePost";
import { useEffect, useState } from "react";
const SinglePost = () => {
  const [user, setUser] = useState({});
  const getUserInfo = () => {
    const userData = localStorage.getItem("user");
    setUser(JSON.parse(userData));
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <div className="relative flex flex-col lg:flex-row bg-gray-50 h-screen">
      <LeftHome user={user}/>
      <SinglePostD />
      <RightHome user={user}/>
      <MobileMenu />
    </div>
  );
};

export default SinglePost;
