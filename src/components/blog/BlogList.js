import SmallSetPagination from "components/pagination/SmallSetPagination";
import BlogCardHorizontal from "./BlogCardHorizontal";


const BlogList = ({ posts, get_blog_list_page, count }) => {

  return (
    <div className="overflow-hidden bg-white">
      <ul className="divide-y space-y-8 gap-8 divide-gray-200">
        {/* Con && nos preguntamos si existe posts */}
        {posts&&posts.map((data, index) => (
          <BlogCardHorizontal key={index} data={data} />
        ))}
      </ul>
      <SmallSetPagination list_page={get_blog_list_page} list={posts} count={count&&count} />
    </div>
  );
};

export default BlogList;
