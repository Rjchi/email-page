import { Link } from "react-router-dom";
import moment from "moment";

const BlogCardSearch = ({ data }) => {
  return (
    <li>
      <Link
        to={`/blog/${data.slug}`}
        className="block hover:shadow-2xl transition duration-300 ease-in-out"
        onMouseEnter={() => {
          const title = document.getElementById(`title` + data.id);
          title.classList.add("text-purple-800");
        }}
        onMouseLeave={() => {
          const title = document.getElementById(`title` + data.id);
          title.classList.remove("text-purple-800");
        }}
      >
        <div className="flex items-center my-8 sm:px-6">
          <div className="lg:flex min-w-0 lg:flex-1 items-center">
            <div className="min-w-0 flex-1 px-8 p-4">
              <p
                id={`title` + data.id}
                className="leading-10 text-2xl pb-4 font-semibold text-gray-900 leading-5 transition duration-300 ease-in-out"
              >
                {data.title.length > 100 ? data.tile.slice(0, 99) : data.title}
              </p>
              <div className="">
                <spam className="hover:text-purple-800 mt-1 font-medium text-sm">
                  <Link to={`/category/${data.category.slug}`}>
                    {data.category.name}
                  </Link>
                </spam>{" "}
                &middot;
                <spam className="mt-1 font-medium text-sm mx-1">
                  {moment(data.published).format("LL")}
                </spam>{" "}
                &middot;
                <spam className="mt-1 font-medium text-sm mx-1">
                  {data.time_red} min read
                </spam>
                <p className="mt-4 text-lg font-regular text-gray-800 leading-7">
                  {data.description.length > 150
                    ? data.description.slice(0, 149)
                    : data.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default BlogCardSearch;
