import CreateForm from "./CreateForm";
import css from "./create.module.css";

const CreateBlog = () => {
  return (
    <div className={css.form_wrapper}>
      <h1>Add a new Blog</h1>
      <CreateForm />
    </div>
  );
};

export default CreateBlog;
