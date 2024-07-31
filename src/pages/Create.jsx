import { useEffect, useState } from "react";
import LeftHome from "../components/common/LeftHome";
import RightHome from "../components/common/RightHome";
import MobileMenu from "../components/common/MobileMenu";
import UploadGrid from "../components/common/UploadGrid";

const Create = () => {
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
      <UploadGrid />
      <RightHome user={user}/>
      <MobileMenu />
    </div>
  );
}

export default Create