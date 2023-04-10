import { useEffect } from "react";

import { Helmet } from "react-helmet-async";

import AboutHeader from "components/about/AboutHeader";
import AboutTestStats from "components/about/AboutTestStats";
import AboutImages from "components/about/AboutImages";
import AboutClients from "components/about/AboutClients";
import AboutFeatures from "components/about/AboutFeatures";
import AboutTeam from "components/about/AboutTeam";

import Footer from "components/navegation/Footer";
import Navbar from "components/navegation/Navbar";

import Layout from "hocs/layouts/Layout";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const img = {
    "url": null,
  }

  return (
    <Layout>
      <Helmet>
        <title>Prototype | Nosotros</title>
        <meta name="description" content="Prototipo pagina web react y django (con fines educativos)" />
        <meta name="keywords" content="react & django, react y django, full stack web developer" />
        <meta name="robots" content="all" />
        <link rel="canonical" href="" />
        <meta name="author" content="Richi"/>
        <meta name="publisher" content="Richi"/>

        {/* Social Media Tags */}
        <meta property="og:title" content='Prototype' />
        <meta property="og:description" content='Prototipo pagina web react y django (con fines educativos).' />
        <meta property="og:url" content="" />
        <meta property="og:image" content='' />

        <meta name="twitter:title" content='Prototype' />
        <meta
            name="twitter:description"
            content='Prototipo pagina web react y django (con fines educativos).'
        />
        <meta name="twitter:image" content=''/>
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />
      <div className="pt-28">
        <AboutHeader />
        <AboutTestStats />
        <AboutImages img={img.url}/>
        <AboutClients />
        <AboutFeatures />
        <AboutTeam />
      </div>
      <Footer />
    </Layout>
  );
};

export default About;