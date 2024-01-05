"use client";
import { useTransition } from "react";
import { TiDelete } from "react-icons/ti";
import { deleteBlog } from "../actions";

const DeleteButton = ({ id }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <button
        onClick={() => startTransition(() => deleteBlog(id))}
        disabled={isPending}
      >
        {isPending && (
          <>
            <TiDelete />
            Deleting...
          </>
        )}
        {!isPending && (
          <>
            <TiDelete />
            Delete Blog
          </>
        )}
      </button>
    </>
  );
};

export default DeleteButton;
