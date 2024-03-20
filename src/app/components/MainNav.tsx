'use client'

import { useRouter } from "next/navigation";

interface MainNavProps {
    profile: string;
    name: string;
    href: string;
}


const MainNav: React.FC<MainNavProps> = ({
    profile, name, href
}) => {
    const router = useRouter();

    const onClick = () => {
        router.push(href);
    }

  return (
   <button onClick={onClick} className="relative group flex items-center
   rounded-md overflow-hidden gap-x-4 bg-black/15
   hover:bg-black/25 transition pr-4">
    <div className="relative min-h-[64px] min-x-[64px]">
      {profile}
    </div>
    <p className="font-medium truncate py-5"> 
        {name} 
    </p>
    <div>
        버튼
    </div>
   </button>
  )
}

export default MainNav
