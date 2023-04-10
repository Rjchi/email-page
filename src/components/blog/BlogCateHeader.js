// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const BlogCateHeader = ({ categories }) => {
  // Esto nos da un objeto y este objeto contiene el path
  const location = useLocation();
  const navigate = useNavigate();

  // SEARCH
  const [term, setTerm] = useState("");
  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  // Para enviar
  const onSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => navigate("/s=" + term), 0.2);
    setTerm("");
  };

  return (
    <div className="mx-auto max-w-6xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="space-x-8 px-2">
            <div className="relative">
              <div className="relative -mb-6 w-full overflow-x-auto pb-6">
                <ul className="mx-4 inline-flex space-x-8 sm:mx-6">
                  <Link
                    to="/blog"
                    className={`${
                      location.pathname === "/blog"
                        ? "text-purple-800 bg-gray-50 border border-purple-800"
                        : "text-gray-900 border hover:text-purple-800 hover:border-purple-800"
                    } inline-flex flex-col text-center lg:w-auto py-2 px-4 text-gray-900 text-md font-medium rounded`}
                  >
                    All
                  </Link>
                  {categories &&
                    categories.map((category, index) => (
                      <Link
                        key={index}
                        to={`/category/${category.slug}`}
                        className={`${
                          location.pathname === `/category/${category.slug}`
                            ? "text-purple-800 bg-gray-50 border border-purple-800"
                            : "text-gray-900 border hover:text-purple-800 hover:border-purple-800"
                        } inline-flex flex-col text-center lg:w-auto py-2 px-4 text-gray-900 text-md font-medium rounded`}
                      >
                        {category.name}
                      </Link>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <form
          onSubmit={(e) => onSubmit(e)}
          className="relative col-span-3 ml-12"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {/* <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" aria-hidden="true" /> */}
            <i className="bx bxs-search-alt-2 text-2xl mb-2"></i>
          </div>
          <input
            id="search"
            name="search"
            value={term}
            onChange={(e) => handleChange(e)}
            type="search"
            className={`
              block w-full rounded-md
              border border-gray-100
              focus:border-none focus:outline-none
              py-2.5 pl-10 pr-3
              `}
          />
        </form>
      </div>
    </div>
  );
};

export default BlogCateHeader;
