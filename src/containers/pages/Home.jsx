// My components

import { useEffect } from "react";
import { animateScroll } from 'react-scroll';

// home
import BlogList from "components/home/BlogList";
import CTA from "components/home/CTA";
import Features from "components/home/Features";
import Header from "components/home/Header";
import Incentives from "components/home/Incentives";
import LogoCloud from "components/home/LogoCloud";
import UseCases from "components/home/UseCases";

import Footer from "components/navegation/Footer";
import Navbar from "components/navegation/Navbar";

import Layout from "hocs/layouts/Layout";

const Home = () => {
  useEffect(() => {
    // window.scrollTo(0, 0);
    animateScroll.scrollToTop({
      duration: 500,
      delay: 100,
      smooth: true,
      offset: 50
    });
  }, []);

  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <Header />
        <Incentives />
        <UseCases />
        <Features />
        <CTA />
        <LogoCloud />
        <BlogList />
      </div>
      <Footer />
    </Layout>
  );
};

export default Home;
