import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Documentation from "./pages/Documentation";
import Blog from "./pages/blog";
import CookiesPolicy from "./pages/cookies-policy";
import ArticleDetail from "./pages/articulos/ArticleDetail";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
        <Route path="/terminos-de-servicio" element={<TermsOfService />} />
        <Route path="/documentacion" element={<Documentation />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<ArticleDetail />} />
        <Route path="/cookies" element={<CookiesPolicy />} />
      </Routes>
    </>
  );
}

export default App;