"use client";

import { FC, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { handleCommentSubmit } from "../../actions";
import SubmitButton from "@/app/Components/SubmitButton";
import css from "../BlogDetalsPage.module.css";
import { toolbarOptions } from "@/app/Components/ReactQuill/toolBarOptions";

const CommentForm: FC<{ id: number }> = ({ id }) => {
  const [comment, setComment] = useState("");

  const handleBodyChange = (content: React.SetStateAction<string>) => {
    setComment(content);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.set("comment", comment);

    await handleCommentSubmit(formData, id);
  };

  return (
    <div>
      <form className={css.comments_form} onSubmit={handleSubmit}>
        <h4>Add a Comment:</h4>
        <ReactQuill
          value={comment}
          onChange={handleBodyChange}
          modules={toolbarOptions}
        />
        <SubmitButton />
      </form>
    </div>
  );
};

export default CommentForm;
