'use client'

import { useRouter } from "next/navigation";
import { Library } from "../diary/components/DiaryContent"

interface SidebarLibraryProps {
    data: Library;
    onClick?: (id: string) => void;
}

const SidebarLibrary: React.FC<SidebarLibraryProps> = ({
    data, onClick
}) => {
    const router = useRouter();

    const handleClick = () => {
        if(onClick) {
            router.push(`/diary/${data.id}`)
        }
    }
  return (
    <div onClick={handleClick}
    className="flex items-center gap-x-3 cursor-pointer
    hover:bg-black/25 w-full rounded-md">
      <div className="relative rounded-md overflow-hidden
      min-h-[20px] min-w-[20px] text-2xl">
        {data.icon}
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="truncate">
            {data.title}
        </p>
        <p className="text-black/70 text-sm truncate">
            {data.author}
        </p>
      </div>
    </div>
  )
}

export default SidebarLibrary
