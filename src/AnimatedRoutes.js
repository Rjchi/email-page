import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Error404 from "containers/errors/Error404";

import Home from "containers/pages/Home";
import Cases from "containers/pages/Cases";
import Category from "containers/pages/Category";
import Services from "containers/pages/Services";
import About from "containers/pages/About";
import Careers from "containers/pages/Careers";
import Blog from "containers/pages/Blog";
import Contact from "containers/pages/Contact";
import Search from "containers/pages/Search";
import PostDetail from "containers/pages/PostDetail";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      {/* pathname es el url ej: /casos */}
      <Routes location={location} key={location.pathname}>

        {/* Con * indicamos que si no existe mostramos a Error404 */}

        <Route path="*" element={<Error404 />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/casos" element={<Cases />}></Route>
        <Route path="/servicios" element={<Services />}></Route>
        <Route path="/nosotros" element={<About />}></Route>
        <Route path="/carreras" element={<Careers />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/category/:slug" element={<Category />}></Route>
        <Route path="/contacto" element={<Contact />}></Route>
        <Route path="/:term" element={<Search />}></Route>
        <Route path="/blog/:slug" element={<PostDetail />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
