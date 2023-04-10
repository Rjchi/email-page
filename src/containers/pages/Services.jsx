import { useEffect } from "react";

import { Helmet } from "react-helmet-async";

import code_img from "assets/img/services/coding.png";

import Footer from "components/navegation/Footer";
import Navbar from "components/navegation/Navbar";

import ServicesHeader from "components/services/ServicesHeader";
import ServicesList from "components/services/ServicesList";

import Layout from "hocs/layouts/Layout";

const posts_software = [
  {
    img: code_img,
    title: "Boost your conversion rate",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    img: null,
    title: "How to use search engine optimization to drive sales",
    href: "#",
    category: { name: "Video", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    img: null,
    title: "Improve your customer experience",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

const Services = () => {
  // Esto es para que en el momento de cambiar de pagina el scroll de la pagina vuelva al inicio
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Prototype | Servicios</title>
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
        <ServicesHeader />
        <div className="pt-20 bg-gray-50"></div>
        <ServicesList
          posts={posts_software}
          section_title={"Software and Product Development"}
        />
        <ServicesList posts={posts_software} section_title={"Design Services"} />
      </div>
      <Footer />
    </Layout>
  );
};

export default Services;
