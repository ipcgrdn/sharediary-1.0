"use client";

import { useRouter } from "next/navigation";

import { useUser } from "@supabase/auth-helpers-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const AuthContent = () => {
  const supabase = createClientComponentClient(); 
  const router = useRouter();
  const user = useUser(); 

  const handleAuth = async () => {
    if (user) {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error(error);
      }
      router.push('/')
    }
    if (!user) {
      router.push("/signin");
    }
  };
  return (
    <div className="font-semibold h-full flex flex-row items-end gap-x-4">
      {user && <div className="flex justify-center items-center">안녕하세요 {user?.user_metadata.full_name}님</div>}
      <button
        className="border border-black/50 bg-black/15 rounded-full px-4 py-1 hover:bg-black/25 transition"
        onClick={handleAuth}>
        {user ? "로그아웃" : "로그인"}
      </button>
    </div>
  );
};

export default AuthContent;