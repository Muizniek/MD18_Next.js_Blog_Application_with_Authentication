import Link from "next/link";
import css from "./NavBar.module.css";
import LogoutButton from "../LogoutButton";
import Image from "next/image";

const NavBar = ({ user }) => {
  const isAdmin = user && user.email === "muiznieka@gmail.com";
  const isStranger = !user;

  return (
    <>
      <div className={css.nav_wrapper}>
        <nav className={css.nav}>
          <Image
            src="blog.svg"
            width={50}
            height={50}
            alt=""
            className={css.img}
          />
          <Link className={css.link} href="/">
            Home
          </Link>
          <Link className={css.link} href="/Blogs">
            Blogs
          </Link>
          <div className={css.user}>
            {isStranger ? (
              <span>Hello, Stranger</span>
            ) : (
              <span>Hello, {isAdmin ? "Admin" : user.email}</span>
            )}
            {isStranger && (
              <>
                <Link href="/login">
                  <button className={css.auth}>Log in</button>
                </Link>
                <Link href="/signup">
                  <button className={css.auth}>Sign up</button>
                </Link>
              </>
            )}
            {!isStranger && <LogoutButton />}
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
