import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import BlogsPage from "./pages/BlogsPage";
import SingleBlog from "./pages/SingleBlog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/blogs/:id" element={<SingleBlog />} />
    </Routes>
  );
}

export default App;
