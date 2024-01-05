import Link from "next/link";
import css from "./Home.module.css";

export default function Home() {
  return (
    <>
      <main className={css.main}>
        <h1>Home</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
          repellendus tempore, exercitationem odit, quasi doloremque possimus
          recusandae alias sequi totam soluta natus iure eius, obcaecati sint
          dolores blanditiis aspernatur quo officia iusto ut. Et, aliquid sed
          voluptates iste cum totam, facere explicabo, fugit suscipit ratione
          aspernatur consequuntur ex mollitia quaerat?
        </p>
        <div className={css.buttons_wrapper}>
          <Link href="/Blogs">
            <button>View Blogs</button>
          </Link>
          <Link href="Blogs/create">
            <button>Create Blog</button>
          </Link>
        </div>

        <h2>Company Updates</h2>
        <div className={css.cards_wrapper}>
          <div className={css.card}>
            <h3>New member of the web dev team...</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              at quam. Dolores omnis possimus quam soluta rerum illo laborum
              ullam pariatur molestiae, modi beatae corrupti.
            </p>
          </div>
          <div className={css.card}>
            <h3>New website live!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              at quam. Dolores omnis possimus quam soluta rerum illo laborum
              ullam pariatur molestiae, modi beatae corrupti, assumenda
              distinctio adipisci, cupiditate minima eum vitae? Similique dicta
              est facilis debitis, autem temporibus quo repellat illum unde id
              iste veritatis eveniet, aspernatur enim quas.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
