import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import css from "../Components/NavBar/NavBar.module.css";

const AuthLayout = async ({ children }) => {
  const supabase = createServerComponentClient({ cookies });

  return (
    <>
      <nav>
        <div className={css.login_signup}>
          <Link className={css.link} href="/login">
            Log In
          </Link>
          <Link className={css.link} href="/signup">
            Sign Up
          </Link>
          <Link className={css.link} href="/Blogs">
            Blogs
          </Link>
        </div>
      </nav>
      {children}
    </>
  );
};

export default AuthLayout;
