import { notFound } from "next/navigation";
import { FC } from "react";
import css from "./BlogDetalsPage.module.css";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import DeleteButton from "./DeleteButton";
import CommentForm from "./comments/CommentForm";

export const dynamicParams = true;

type BlogDetailsProps = {
  params: {
    id: number;
  };
};

type Blog = {
  id: number;
  title: string;
  body: string;
  priority: string;
  user_email: string;
  image: string;
};

const getBlog = async (id: number): Promise<Blog> => {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.from("Blogs").select().eq("id", id).single();

  if (!data) {
    notFound();
  }

  return data as Blog;
};

type Comment = {
  id: number;
  user_email: string;
  comment_body: string;
};

const getComments = async (blogId: number): Promise<Comment[]> => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase
    .from("Comments")
    .select()
    .eq("blog_id", blogId);

  return data as Comment[];
};

const BlogDetails: FC<BlogDetailsProps> = async ({ params }) => {
  const blog = await getBlog(params.id);
  const comments = await getComments(blog.id);

  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  return (
    <main>
      <nav>
        <h1>Blog details</h1>
        <div className={css.blog_delete}>
          {(data.session?.user.email === "muiznieka@gmail.com" ||
            data.session?.user.email === blog.user_email) && (
            <DeleteButton id={blog.id} />
          )}
        </div>
      </nav>
      <div className={css.card_wrapper}>
        <div className={css.card}>
          <div className={`priority_${blog.priority}`}>
            {blog.priority} priority
          </div>
          <img src={blog.image} alt="" />
          <h3>{blog.title}</h3>
          <small>Created by {blog.user_email}</small>
          <p>{blog.body}</p>
        </div>
      </div>

      <div className={css.comments_comentsform}>
        <div>
          <h4>Comments:</h4>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <strong>{comment.user_email}</strong> {comment.comment_body}
              </li>
            ))}
          </ul>
        </div>

        <CommentForm id={blog.id} />
      </div>
    </main>
  );
};

export default BlogDetails;
