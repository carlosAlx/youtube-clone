import { useState } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Spinner } from "./components/Spinner";
import { MenuContextProvider } from "./context/MenuContext";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { Watch } from "./pages/Watch";

function App() {
  const [count, setCount] = useState(0);

  return (
    <MenuContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/watch/:id" element={<Watch />}/>
        </Routes>
      </BrowserRouter>
    </MenuContextProvider>
  );
}

export default App;
