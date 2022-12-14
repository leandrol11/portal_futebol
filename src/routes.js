import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeList from "./pages/home"
import AboutMe from "./pages/aboutMe"
import PageNotFound from "./pages/pageNotFound"
import Navbar from "./components/Navbar"
import Footer from "components/Footer"
import BasePage from "components/BasePage"
import Post from "pages/postPage"
import ScrollToTop from "components/ScrollToTop"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<HomeList />} />
          <Route path="sobremim" element={<AboutMe />} />
        </Route>
        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}