import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import NavBar from "../Components/NavBar/NavBar";

const HomeLayout = async ({ children }) => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  const user = data?.session?.user;

  return (
    <>
      <NavBar user={user} />
      {user ? <>{children}</> : <>{children}</>}
    </>
  );
};

export default HomeLayout;
