import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/Home/HomePage.jsx";
import Following from "./page/Following/Following.jsx";
import DefaultLayout from "./layout/DefaultLayout.jsx";
import Upload from "./page/Upload/Upload.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <HomePage />
            </DefaultLayout>
          }
        />
        <Route
          path="/following"
          element={
            <DefaultLayout>
              <Following />
            </DefaultLayout>
          }
        />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Router>
  );
}

export default App;
