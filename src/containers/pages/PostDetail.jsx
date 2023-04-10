import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

import DOMPurify from "dompurify";
import moment from "moment";

import Layout from "hocs/layouts/Layout";
import Navbar from "components/navegation/Navbar";
import Footer from "components/navegation/Footer";

import { get_blog } from "redux/actions/blog/blog";

const PostDetail = ({ get_blog, post }) => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    get_blog(slug);
  }, []);

  return (
    <Layout>
      <Navbar />
      {
        post && post.slug === slug ?
        <div className="pt-28">
          <div className="relative bg-gray-200 mt-10">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src={post.thumbnail}
                // src="https://placekitten.com/1000/500"
                alt=""
              />
              <div
                className="absolute inset-0 bg-gray-200 mix-blend-multiply"
                aria-hidden="true"
              />
            </div>
            <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
              <h1 className="text-5xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
                {post.title}
              </h1>
              <div className="min-w-0 flex-1 p-4 pt-8">
                <div className="">
                  <spam className="text-black hover:text-purple-800 mt-1 font-bold text-base">
                    <Link to={`/category/${post.category.slug}`}>
                      {post.category.name}
                    </Link>
                  </spam>{" "}
                  &middot;
                  <spam className="mt-1 font-bold text-base mx-1 text-black">
                    {moment(post.published).format("LL")}
                  </spam>{" "}
                  &middot;
                  <spam className="mt-1 font-bold text-base mx-1 text-black">
                    {post.time_red} min read
                  </spam>
                  <p className="mt-8 font-semibold text-lg leading-8 text-black">
                    {post.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="prose prose-lg max-w-6xl prose-indigo mx-auto mt-6 text-gray-500">
            {/* Con esto exactamente como lo escribimos nosotros lo tenemos disponible en el front */}
            <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content)}} />
          </div>
        </div>
        :
        <>Loading...</>
      }
      <Footer />
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  post: state.blog.post,
});
export default connect(mapStateToProps, {
  get_blog,
})(PostDetail);
