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
      <Route path='/profile' element={<Profile />} />
      <Route path='/posts' element={<Posts />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/todo' element={<Todo />} />
    </Routes>
  );
};
export default RoutesPage;
