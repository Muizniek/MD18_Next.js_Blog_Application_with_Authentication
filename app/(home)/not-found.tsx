import Link from "next/link";

const NotFound = () => {
  return (
    <div className="Not_found">
      <main className="Not_found_text">
        <h1>There was a problem.</h1>
        <p>We could not find the page you were looking for</p>
        <p>
          Go back to <Link href="/">Home</Link>
        </p>
      </main>
    </div>
  );
};

export default NotFound;
