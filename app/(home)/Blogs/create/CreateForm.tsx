import css from "./create.module.css";
import { addBlog } from "../actions";
import SubmitButton from "@/app/Components/SubmitButton";

const CreateForm = () => {
  return (
    <form action={addBlog} className={css.form}>
      <label>
        <span>Image:</span>
        <input name="image" required type="text" />
      </label>
      <label>
        <span>Title:</span>
        <input name="title" required type="text" />
      </label>
      <label>
        <span>Body:</span>
        <textarea name="body" required />
      </label>
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
