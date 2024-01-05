"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import css from "./NavBar/NavBar.module.css";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();

    if (!error) {
      router.push("/login");
      router.refresh();
    }
    if (error) {
      console.log(error);
    }
  };

  return (
    <button className={css.auth} onClick={handleLogout}>
      Log out
    </button>
  );
};

export default LogoutButton;
