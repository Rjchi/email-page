import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "components/navegation/Footer";
import Navbar from "components/navegation/Navbar";
import BlogList from "components/blog/search/BlogList";
import Layout from "hocs/layouts/Layout";
import { search_blog, search_blog_page } from "redux/actions/blog/blog";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Search({
  posts,
  count,
  next,
  previous,
  search_blog,
  search_blog_page,
}) {
  const {term} = useParams();
  console.log(term);

  useEffect(() => {
    window.scrollTo(0, 0);
    search_blog(term);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Prototype | Blog</title>
        <meta
          name="description"
          content="Prototipo pagina web react y django (con fines educativos)"
        />
        <meta
          name="keywords"
          content="react & django, react y django, full stack web developer"
        />
        <meta name="robots" content="all" />
        <link rel="canonical" href="" />
        <meta name="author" content="Richi" />
        <meta name="publisher" content="Richi" />

        {/* Social Media Tags */}
        <meta property="og:title" content="Prototype" />
        <meta
          property="og:description"
          content="Prototipo pagina web react y django (con fines educativos)."
        />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />

        <meta name="twitter:title" content="Prototype" />
        <meta
          name="twitter:description"
          content="Prototipo pagina web react y django (con fines educativos)."
        />
        <meta name="twitter:image" content="" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />
      <div className="pt-28">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl my-10">
            <BlogList
              posts={posts && posts}
              get_blog_list_page={search_blog_page}
              term={term}
              count={count}
            />
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  posts: state.blog.filtered_posts,
  count: state.blog.count,
  next: state.blog.next,
  previous: state.blog.previous,
});

export default connect(mapStateToProps, {
  search_blog,
  search_blog_page
})(Search);
