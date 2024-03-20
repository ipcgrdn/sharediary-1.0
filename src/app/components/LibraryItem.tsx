'use client'

import { Library } from "../diary/components/DiaryContent"

interface LibraryItemProps {
    data: Library;
    onClick: (id: string) => void
};

const LibraryItem: React.FC<LibraryItemProps> = ({
    data, onClick
}) => {
  return (
    <div onClick={() => {onClick}}
    className="relative group flex flex-col items-center
    justify-center rounded-md overflow-hidden gap-x-4
    bg-black/20 cursor-pointer hover:bg-black/25
    transition p-3">
      <div className="relative aspect-square w-full
      h-full rounded-md overflow-hidden">
        image
      </div>
      <div className="flex flex-col items-start w-full p-4 gap-y-1">
        <p className="font-semibold truncate w-full"> 
            {data.title} 
        </p>
        <p className="text-black/25 text-sm pb-4 w-full truncate">
            with {data.author}  
        </p>
      </div>
      <div className="absolute bottom-24 right-5">
        <div className="rounded-full flex items-center
        bg-black/10 p-4 drop-shadow-md translate translate-y-1/4
        group-hover:opacity-75 group-hover:translate-y-0 hover:scale-110">
            {data.icon}
        </div>
      </div>
    </div>
  )
}

export default LibraryItem
