import React from "react";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  return (
    <div>
      Profile
      <div onClick={() => navigate("/posts")}>posts</div>
    </div>
  );
};

export default Profile;
