"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import Image from "next/image";

//components
import AuthForm from "../AuthForm";
import { useRouter } from "next/navigation";
import css from "../auth.module.css";

const Login = () => {
  const [error, setError] = useState();
  const router = useRouter();

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    setError("");

    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    }
    if (!error) {
      router.push("/")
      router.refresh();
    }
  };

  return (
    <div className={css.auth_form}>
      <main>
        <div className={css.h1_logo}>
          <h1>Login to</h1>
          <Image
            src="blog.svg"
            width={50}
            height={50}
            alt=""
            className={css.img}
          />
        </div>
        <AuthForm handleSubmit={handleSubmit} />

        {error && <div>{error}</div>}
      </main>
    </div>
  );
};

export default Login;
