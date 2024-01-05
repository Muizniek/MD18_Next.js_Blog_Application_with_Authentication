"use client";

import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending && <span>Submitting...</span>}
      {!pending && <span>Submit</span>}
    </button>
  );
};

export default SubmitButton;
