"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addBlog(formData) {
  const blog = Object.fromEntries(formData);

  const supabase = createServerActionClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { error } = await supabase.from("Blogs").insert({
    ...blog,
    user_email: session.user.email,
  });

  revalidatePath("/Blogs");
  redirect("/Blogs");
}

export const deleteBlog = async (id) => {
  const supabase = createServerActionClient({ cookies });

  const { error: commentError } = await supabase
    .from("Comments")
    .delete()
    .eq("blog_id", id);

  if (commentError) {
    console.error("Error deleting comments:", commentError.message);
    throw new Error("Could not delete blog and associated comments");
  }

  const { error: blogError } = await supabase
    .from("Blogs")
    .delete()
    .eq("id", id);

  if (blogError) {
    console.error("Error deleting blog:", blogError.message);
    throw new Error("Could not delete blog");
  }

  revalidatePath("/Blogs");
  redirect("/Blogs");
};

export const handleCommentSubmit = async (formData, id) => {
  const comment = Object.fromEntries(formData);

  const supabase = createServerActionClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { error } = await supabase.from("Comments").insert([
    {
      blog_id: id,
      user_email: session.user.email,
      comment_body: comment.comment,
    },
  ]);

  if (error) {
    console.error("Error inserting comment:", error.message);
    return null;
  }
  revalidatePath("/Blogs");
  console.log("Comment inserted successfully");
};
