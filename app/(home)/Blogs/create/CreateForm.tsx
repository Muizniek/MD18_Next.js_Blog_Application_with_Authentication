"use client";

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import css from "./create.module.css";
import { addBlog } from "../actions";
import SubmitButton from "@/app/Components/SubmitButton";
import { toolbarOptions } from "../../../Components/ReactQuill/toolBarOptions";

const CreateForm = () => {
  const [body, setBody] = useState("");

  const handleBodyChange = (content: React.SetStateAction<string>) => {
    setBody(content);
  };

  const handleSubmit = async (event: {
    preventDefault: () => void;
    currentTarget: HTMLFormElement | undefined;
  }) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.set("body", body);

    await addBlog(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        <span>Image:</span>
        <input name="image" required type="text" />
      </label>
      <label>
        <span>Title:</span>
        <input name="title" required type="text" />
      </label>
      <span>Body:</span>
      <ReactQuill
        value={body}
        onChange={handleBodyChange}
        modules={toolbarOptions}
      />
      <br />
      <label>
        <span>Priority:</span>
        <select name="priority">
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      <SubmitButton />
    </form>
  );
};

export default CreateForm;
