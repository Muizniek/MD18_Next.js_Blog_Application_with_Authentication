import Link from "next/link";

const NotFound = () => {
  return (
    <div className="Not_found">
      <main className="Not_found_text">
        <h1>We Hit a Brick Wall.</h1>
        <p>We could not find the blog you were looking for.</p>
        <p>
          Go back to all <Link href="/Blogs">Blogs</Link>.
        </p>
      </main>
    </div>
  );
};

export default NotFound;
