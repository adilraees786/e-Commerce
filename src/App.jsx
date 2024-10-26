import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Navbar  from "./components/Navbar";
import { Footer } from "./components/Footer";
import  Home  from "./pages/Home";
import InfoSection from "./components/infoSection";
import CategorySection from "./components/CategorySection";



export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<InfoSection />}></Route>
        <Route path="/" element={<CategorySection />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )

}