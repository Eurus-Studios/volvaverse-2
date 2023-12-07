import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import BlogsPage from "./pages/BlogsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/blogs" element={<BlogsPage />} />
    </Routes>
  );
}

export default App;
