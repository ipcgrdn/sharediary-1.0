'use client';

import { useRouter } from "next/navigation";
import { GoHome, GoSearch } from "react-icons/go";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
import AuthContent from "../auth/AuthContent";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { FaUserAlt } from "react-icons/fa";
import toast from "react-hot-toast";

interface MainHeaderProps {
    children: React.ReactNode;
    className?: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({
    children, className
}) => {
    const router = useRouter();

    const supabaseClient = useSupabaseClient();
    const user = useUser();

    const handleLogout = async () => {
      const { error } = await supabaseClient.auth.signOut();
      router.push('/')

      if (error) {
        toast.error(error.message);
      } else {
        toast.success('로그아웃 되었습니다!')
      }
    }

  return (
    <div className={twMerge(`h-fit p-2`, className)}>
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-black/30 flex
          items-center justify-center hover:opacity-75 transition"
          onClick={() => {router.push('/diary')}}>
            <GoHome className="text-white" size={20} />
          </button>
          <button className="rounded-full p-2 bg-black/30 flex
          items-center justify-center hover:opacity-75 transition"
          onClick={() => {router.push('/search')}}>
            <GoSearch className="text-white" size={20} />
          </button>  
        </div>
        <div className="flex justify-between items-center gap-x-4">
          {user ? (
            <div className="flex gap-x-4 items-center">
              <Button className="bg-black/10 px-6 py-2" 
              onClick={handleLogout}>
                Logout
              </Button> 
              <Button className="bg-black/10" 
              onClick={() => {router.push('/account')}}>
                <FaUserAlt />
              </Button>
            </div>
          ) : (
            <>
              <AuthContent />
            </> 
          )}
        </div>
      </div>
      {children}
    </div>
  )
}

export default MainHeader
