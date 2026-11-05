import { BrowserRouter, Route, Routes } from "react-router";
import Search from "./page/Search.jsx";
import Home from "./page/Home.jsx";
import Detail from "./page/Detail.jsx";
import SearchBar from "./components/SearchBar.jsx";

function App() {
    // BrowserRouter는 주소 감지 능력
    // Routes는 그 안에 있는 것들 중 조건에 맞는 걸로 사용자를 떨궈주는 것
    // Route는 그냥 조건 (if)
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/search"} element={<Search />} />
        <Route path={`/detail/:id`} element={<Detail />} />
      </Routes>
        <SearchBar keyword={""} />
    </BrowserRouter>
  );
}

export default App;
