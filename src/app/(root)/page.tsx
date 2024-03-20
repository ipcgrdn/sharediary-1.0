'use client'

import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import Button from "../components/Button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    if (user) {
      router.push('/diary');
    }
  }, [user, router]);

  return (
    <div className={twMerge(`h-fit p-2`)}>
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <Image src={'/Sharediary_logo.png'} alt="Sharedairy" width={45} height={45} />
          <p className="text-2xl font-semibold"> Sharediary </p>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
                <Button className="bg-transparent font-medium"
                onClick={() => {router.push('/signin')}}>
                    로그인
                </Button>
            </div>
            <div>
                <Button className="bg-black text-white px-6 py-2"
                onClick={() => {router.push('/signin')}}>
                    무료로 시작하기
                </Button>
            </div>
          </>
        </div>
      </div>
      <div className="flex flex-col h-screen w-full justify-center items-center rounded-md
      bg-black/15">
        Add Content!
        <Link href={'/diary'} className="bg-black text-white font-semibold 
        rounded-full px-6 py-5">
           Diary
        </Link>
      </div>
    </div>
  );
}