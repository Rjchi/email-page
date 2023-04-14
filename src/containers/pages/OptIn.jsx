import Footer from "components/navegation/Footer";
import Navbar from "../../components/navegation/Navbar";
import Layout from "../../hocs/layouts/Layout";

import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { StarIcon } from "@heroicons/react/20/solid";
import CircleLoader from "react-spinners/CircleLoader"


function OptIn() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const formData = new FormData()
    formData.append('email', email)
    formData.append('tag', 1)
    formData.append('list', 3)

    const fetchData = async () => {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/contacts/opt-in`,
        formData,
        config
      );
      if (response.status === 200) {
        // setTimeout(() => {
            navigate('/ebook/training')
        // }, 1000)
      } else {
        alert("Error sending message")
      }
    };
    fetchData();
  };

  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <div className="bg-white pb-8 sm:pb-12 lg:pb-12">
          <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-6xl lg:grid-cols-2 lg:gap-24 lg:px-8">
              <div>
                <div className="mt-10">
                  <div className="mt-6 sm:max-w-xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                      Earn first $5,000 online
                    </h1>
                    <p className="mt-6 text-xl text-gray-500">
                      Make your first $5,000 with email marketing in 60 days.
                    </p>
                  </div>
                  <form
                    onSubmit={(e) => onSubmit(e)}
                    className="mt-12 sm:flex sm:w-full sm:max-w-lg"
                  >
                    <div className="min-w-0 flex-1">
                      <label htmlFor="hero-email" className="sr-only">
                        Email address
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        onChange={(e) => onChange(e)}
                        value={email}
                        className="block w-full rounded-md border border-gray-300 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-3">
                        {
                            Loading ?
                            <div
                                className="block w-full rounded-md border border-transparent bg-purple-600 px-5 py-3 text-base font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:px-10"
                            >
                                <CircleLoader loading={Loading} size={25} color="#fff" />
                            </div>
                            :
                            <button
                                type="submit"
                                className="block w-full rounded-md border border-transparent bg-purple-600 px-5 py-3 text-base font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:px-10"
                            >
                                Download Ebook
                            </button>
                        }
                    </div>
                  </form>
                  <div className="mt-6">
                    <div className="inline-flex items-center divide-x divide-gray-300">
                      <div className="flex flex-shrink-0 pr-5">
                        <StarIcon
                          className="h-5 w-5 text-yellow-400"
                          aria-hidden="true"
                        />
                        <StarIcon
                          className="h-5 w-5 text-yellow-400"
                          aria-hidden="true"
                        />
                        <StarIcon
                          className="h-5 w-5 text-yellow-400"
                          aria-hidden="true"
                        />
                        <StarIcon
                          className="h-5 w-5 text-yellow-400"
                          aria-hidden="true"
                        />
                        <StarIcon
                          className="h-5 w-5 text-yellow-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="min-w-0 flex-1 py-1 pl-5 text-sm text-gray-500 sm:py-3">
                        <span className="font-medium text-gray-900">
                          Rated 5 stars
                        </span>{" "}
                        by over{" "}
                        <span className="font-medium text-purple-600">
                          500 beta users
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
              <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div className="hidden sm:block">
                  <div className="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-gray-50 lg:left-80 lg:right-0 lg:w-full" />
                  <svg
                    className="absolute top-8 right-1/2 -mr-3 lg:left-0 lg:m-0"
                    width={404}
                    height={392}
                    fill="none"
                    viewBox="0 0 404 392"
                  >
                    <defs>
                      <pattern
                        id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={392}
                      fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                    />
                  </svg>
                </div>
                <div className="relative -mr-30 pl-4 sm:mx-auto sm:max-w-2xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
                  <img
                    className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://media.tenor.com/9xx5jJaHPpIAAAAd/fat-guy.gif"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(OptIn);
