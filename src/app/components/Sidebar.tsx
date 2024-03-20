'use client'

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { GoHome, GoSearch } from "react-icons/go";
import SidebarBox from "./SidebarBox";
import SidebarItem from "./SidebarItem";
import Library from "./Library";
import { Library as LibraryType} from "../diary/components/DiaryContent";

interface SidebarProps {
    children: React.ReactNode;
    library: LibraryType[];
}

const Sidebar: React.FC<SidebarProps> = ({children, library}) => {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {   
            icon: GoHome,
            label: 'Home',
            active: pathname === '/diary',
            href: '/diary',
        },
        {
            icon: GoSearch,
            label: 'Search',
            active: pathname === '/search',
            href: '/search',
        },
    ], [pathname])

  return (
    <div className="flex h-screen bg-gradient-to-br from-[#FFC1F9] via-[#FFE8AC] via-70% to-[#C9FFEC]">
        <div className="hidden md:flex flex-col gap-y-2 bg-gradient-to-b from-[#FFC1F9] via-[#FFE8AC] via-70% to-[#C9FFEC] h-screen w-[200px] p-2">
            <SidebarBox>
                <div className="flex flex-col gap-y-4 px-5 py-4">
                    {routes.map((item) => (
                        <SidebarItem key={item.label}
                        {...item} />
                    ))}
                </div>
            </SidebarBox>
            <SidebarBox className="overflow-y-auto h-screen">
                <Library library={library}/>
            </SidebarBox>
        </div>
        <main className="h-screen flex-1 overflow-y-auto py-2 pl-2 pr-4">
            {children}
        </main>
    </div>
  )
}

export default Sidebar

// 배경 색 조정하기.