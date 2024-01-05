"use client";

const error = ({ error, reset }) => {
  return (
    <main>
      <h2>Oh No!</h2>
      <p>{error.messege}</p>
      <button onClick={reset}>Maybe try agin?</button>
    </main>
  );
};

export default error;
