"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";

import AuthForm from "../AuthForm";
import { useState } from "react";
import { useRouter } from "next/navigation";
import css from "../auth.module.css";

const Signup = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
    }
    if (!error) {
      router.push("/verify");
      router.refresh()
    }
  };

  return (
    <div className={css.auth_form}>
      <main>
        <div className={css.h1_logo}>
          <h1>Sign up to</h1>
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

export default Signup;
