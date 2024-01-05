import BlogList from "./BlogList";
import css from "./blogs.module.css";

const Blogs = () => {
  return (
    <main className={css.main}>
      <h1>Blogs</h1>
      <BlogList />
    </main>
  );
};

export default Blogs;
