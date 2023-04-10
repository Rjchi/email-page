import SmallSetPaginationSearch from "components/pagination/SmallSetPaginationSearch";
import BlogCardSearch from "../BlogCardSearch";

const BlogList = ({ posts, get_blog_list_page, term, count }) => {
  return (
    <div className="overflow-hidden bg-white">
      <ul className="divide-y space-y-8 gap-8 divide-gray-200">
        {/* Con && nos preguntamos si existe posts */}
        {posts &&
          posts.map((post, index) => (
            <BlogCardSearch key={index} data={post} />
          ))}
      </ul>
      <SmallSetPaginationSearch
        list_page={get_blog_list_page}
        list={posts}
        term={term}
        count={count && count}
      />
    </div>
  );
};

export default BlogList;
