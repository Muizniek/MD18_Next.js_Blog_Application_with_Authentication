import Link from "next/link";
import css from "./blogs.module.css";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

type Blog = {
  id: number;
  title: string;
  body: string;
  priority: string;
  user_email: string;
  image: string;
  created_at: Date;
};

const getBlogs = async (): Promise<Blog[]> => {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase.from("Blogs").select();
  if (error) {
    console.log(error.message);
  }

  return data!;
};

const BlogList = async () => {
  const blogs = await getBlogs();

  return (
    <>
      <div className={css.background_image}>
        <div className={css.cards_wrapper}>
          {blogs.map((blog, _) => (
            <div className={css.card}>
              <Link href={`/Blogs/${blog.id}`} key={blog.id}>
                <img src={blog.image} alt={`image for ${blog.title}`} />
                <h3>{blog.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: blog.body.slice(0, 200) }}></div>
                <div className={`priority_${blog.priority}`}>
                  {blog.priority} priority
                </div>
              </Link>
            </div>
          ))}
          {blogs.length === 0 && <h1>There are no blogs...</h1>}
        </div>
      </div>
    </>
  );
};

export default BlogList;
