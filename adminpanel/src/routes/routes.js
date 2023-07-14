import { Routes, Route } from "react-router-dom";
import Profile from "../screen/Profile";
import Posts from "../screen/Posts";
import Landing from "../screen/Landing";
import Gallery from "../screen/Gallery";
import Todo from "../screen/Todo";
const RoutesPage = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/Profile' element={<Profile />} />
      <Route path='/Posts' element={<Posts />} />
      <Route path='/Gallery' element={<Gallery />} />
      <Route path='/Todo' element={<Todo />} />
    </Routes>
  );
};
export default RoutesPage;
