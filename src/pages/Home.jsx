import Feed from "../components/common/Feed";
import LeftHome from "../components/common/LeftHome";
import MobileMenu from "../components/common/MobileMenu";
import RightHome from "../components/common/RightHome";
import { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState({});
  const getUserInfo = () => {
    const userData = localStorage.getItem("user");
    setUser(JSON.parse(userData));
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <div className="relative flex flex-col lg:flex-row bg-gray-50">
      <LeftHome user={user}/>
      <Feed />
      <RightHome user={user}/>
      <MobileMenu />
    </div>
  );
};

export default Home;
