import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { Helmet } from "react-helmet-async";
import CircleLoader from 'react-spinners/CircleLoader'
import Footer from "components/navegation/Footer";
import Navbar from "components/navegation/Navbar";

import Layout from "hocs/layouts/Layout";

import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import axios from "axios";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [enabled, setEnabled] = useState(false);

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
    budget: '',
  })

  const {
    name,
    email,
    subject,
    message,
    phone,
    budget,
  } = formData

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault();

    if (enabled) {
      setLoading(true)

      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      // Usualmente se utiliza formdata cuando procesamos img... (archivos en los que cambia
      // el formato) y cuando es simplemente texto plano utilizamos body (ver dashboard)
      const formData = new FormData()
      formData.append('name', name)
      formData.append('email', email)
      formData.append('subject', subject)
      formData.append('message', message)
      formData.append('phone', phone)
      formData.append('budget', budget)

      const fetchData = async() => {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacts/`,
        formData,
        config)

        if (res.status === 200) {
          setLoading(false)
          // Si todo salio bien volvemos todos los valores a vacio
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
            phone: '',
            budget: '',
          })
          alert("Message has been sent.")
        } else {
          setLoading(false)
          alert("Error sending message.")
        }
      }
      fetchData()

    } else {
      alert("You must accept the terms of service and conditions")
    }
  }

  return (
    <Layout>
      <Helmet>
        <title>Prototype | Contacto</title>
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
        <div className="relative bg-white">
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-white" />
          </div>
          <div className="relative mx-auto max-w-6xl lg:grid lg:grid-cols-5">
            <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
              <div className="mx-auto max-w-lg">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Get in touch
                </h2>
                <p className="mt-3 text-lg leading-6 text-gray-500">
                  Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                  volutpat massa dictumst amet. Sapien tortor lacus arcu.
                </p>
                <dl className="mt-8 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Postal address</dt>
                    <dd>
                      <p>742 Evergreen Terrace</p>
                      <p>Springfield, OR 12345</p>
                    </dd>
                  </div>
                  <div className="mt-6">
                    <dt className="sr-only">Phone number</dt>
                    <dd className="flex">
                      <PhoneIcon
                        className="h-6 w-6 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3">+1 (555) 123-4567</span>
                    </dd>
                  </div>
                  <div className="mt-3">
                    <dt className="sr-only">Email</dt>
                    <dd className="flex">
                      <EnvelopeIcon
                        className="h-6 w-6 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3">support@example.com</span>
                    </dd>
                  </div>
                </dl>
                <p className="mt-6 text-base text-gray-500">
                  Looking for careers?{" "}
                  <Link to="#" className="font-medium text-gray-700 underline">
                    View all job openings
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
              <div className="mx-auto max-w-lg lg:max-w-none">
                <form
                  className="grid grid-cols-1 gap-y-6"
                  onSubmit={e => onSubmit(e)}
                >
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Full name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      required
                      onChange={e => onChange(e)}
                      autoComplete="name"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      value={email}
                      required
                      onChange={e => onChange(e)}
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Email"
                    />
                  </div>

                  <div>
                    <label className="sr-only">
                      Phone
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm">+</span>
                      </div>
                      <input
                        type="number"
                        name="phone"
                        value={phone}
                        required
                        onChange={e => onChange(e)}
                        className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="51 999 123 456"
                        aria-describedby="price-currency"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="sr-only">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={subject}
                      required
                      onChange={e => onChange(e)}
                      className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Subject"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      required
                      onChange={e => onChange(e)}
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="sr-only">
                      Budget
                    </label>
                    <select
                      name="budget"
                      value={budget}
                      onChange={e => onChange(e)}
                      id="budget"
                      className="rounded-md mt-1 block w-full pl-3 pr-10 py-3 text-base text-gray-600 border border-gray-300"
                    >
                      <option value="" defaultChecked>Select a Budget (Optional)</option>
                      <option value="0-5k">$0 - $5,000</option>
                      <option value="5k-1k">$5,000 - $10,000</option>
                      <option value="1k+">$10,000+</option>
                    </select>
                  </div>

                  <div className="px-4 py-5 sm:px-6">
                    <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                      <div className="ml-4 mt-2">
                        <h3 className="text-xs font-normal leading-6 text-gray-900">
                          <Switch
                            checked={enabled}
                            onChange={setEnabled}
                            className={`${
                              enabled ? "bg-purple-700" : "bg-gray-400"
                            }
                            relative inline-flex h-[20px] w-[37px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 mr-2`}
                          >
                            <span className="sr-only">Use setting</span>
                            <span
                              aria-hidden="true"
                              className={`${
                                enabled ? "translate-x-4" : "translate-x-0"
                              }
                              pointer-events-none inline-block h-[16px] w-[18px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                            />
                          </Switch>
                          By selecting this you accept the{" "}
                          <span className="text-purple-700">
                            <Link to='/terms'>
                              Terms of services
                            </Link>
                          </span>{" "}
                          and{" "}
                          <span className="text-purple-700">
                            <Link to='/privacy'>
                              Privacy policy
                            </Link>
                          </span>
                          .
                        </h3>
                      </div>
                      <div className="ml-4 mt-2 flex-shrink-0">
                        {
                          loading ?
                          <div
                            className="relative inline-flex items-center rounded-md border border-transparent bg-purple-700 px-4 py-2 text-lg font-medium text-white shadow-sm hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                          >
                            <CircleLoader loading={loading} size={25} color="#fff" />
                          </div>
                          :
                          <button
                            type="submit"
                            className="relative inline-flex items-center rounded-md border border-transparent bg-purple-700 px-4 py-2 text-lg font-medium text-white shadow-sm hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                          >
                            Send Message
                          </button>

                        }
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Contact;
