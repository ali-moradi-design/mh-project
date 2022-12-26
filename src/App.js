import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderPrimary from "./components/ui/Header";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <HeaderPrimary /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
