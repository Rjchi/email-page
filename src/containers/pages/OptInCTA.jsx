import Footer from "components/navegation/Footer";
import Navbar from "../../components/navegation/Navbar";
import Layout from "../../hocs/layouts/Layout";

import { connect } from "react-redux";
import { useEffect } from "react";

function OptInCTA() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="bg-white px-4 py-5 sm:px-6">
              <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                <div className="ml-4 mt-2">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Job Postings
                  </h3>
                </div>
                <div className="ml-4 mt-2 flex-shrink-0">
                  <button
                    type="button"
                    className="relative inline-flex items-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    Start Today
                  </button>
                </div>
              </div>
            </div>
            <img
                src="https://placekitten.com/900/700"
                alt="Aqui debe ir el video"
                className="py-20"
            />
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(OptInCTA);
