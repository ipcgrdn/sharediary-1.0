"use client";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Image from "next/image";

const SignIn = () => {
  const supabaseClient = useSupabaseClient();

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#FFC1F9] via-[#FFE8AC] to-[#ABFBDE]">
        <div className="bg-black/15 p-16 shadow-lg rounded-lg border border-black">
          <div className="flex flex-row justify-center items-center gap-2 my-4">
            <Image src={'/Sharediary_logo.png'} alt="Sharedairy" width={45} height={45} />
            <p className="text-3xl font-bold"> Sharediary </p>
        </div>
        <Auth
          supabaseClient={supabaseClient}
          magicLink
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#0F0F0F',
                  brandAccent: 'black',
                },
              },
            },
            style: { container: { width: "300px" } },
          }}
          providers={["google", "kakao"]} 
          localization={{
              variables: {
                  sign_in: {
                    email_label: '이메일',
                    password_label: '비밀번호',
                    email_input_placeholder: '이메일을 입력하세요.',
                    password_input_placeholder: '비밀번호를 입력하세요.',
                    button_label: '로그인',
                    loading_button_label: '로그인',
                    link_text: '계정이 이미 있으신가요? 로그인하기',
                  },
                },        
          }} 
          queryParams={{
              access_type: 'offline',
              prompt: 'consent',
          }}
        />
        </div>
      </div>
  );
};

export default SignIn;

// 꾸며야 함