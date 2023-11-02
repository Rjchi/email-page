import Footer from "components/navegation/Footer";
import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";

const Error404 = () => {
  return (
    <Layout>
      <Navbar />
      <div class="mx-auto max-w-6xl flex flex-col items-center justify-center h-screen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-60 h-60 sm:w-80 sm:h-80 lg:w-100 lg:h-100"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-6xl">
            404
          </h2>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-6xl">
            Not Found
          </h2>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

// Exportamos este componente
export default Error404;
