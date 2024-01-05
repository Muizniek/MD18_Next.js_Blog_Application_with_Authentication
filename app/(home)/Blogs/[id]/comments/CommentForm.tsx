"use client";

import { FC, useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { handleCommentSubmit } from "../../actions";
import SubmitButton from "@/app/Components/SubmitButton";
import css from "../BlogDetalsPage.module.css";

const CommentForm: FC<{ id: number }> = ({ id }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = await new FormData(event.currentTarget);
    const rawContentState = await convertToRaw(editorState.getCurrentContent());

    const textContent = await rawContentState.blocks
      .map((block) => block.text)
      .join("\n");

    formData.append("comment", textContent);

    await handleCommentSubmit(formData, id);
  };

  return (
    <div>
      <form className={css.comments_form} onSubmit={handleSubmit}>
        <h4>Add a Comment:</h4>
        <Editor
          editorState={editorState}
          onEditorStateChange={(newEditorState) =>
            setEditorState(newEditorState)
          }
        />
        <SubmitButton />
      </form>
    </div>
  );
};

export default CommentForm;
