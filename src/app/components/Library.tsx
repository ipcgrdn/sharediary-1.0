'use client'

import { AiOutlinePlus } from "react-icons/ai"
import { MdEditNote } from "react-icons/md"
import useModal from "../hooks/useModal"
import { useUser } from "@supabase/auth-helpers-react"
import { useRouter } from "next/navigation"
import { Library } from "../diary/components/DiaryContent"
import SidebarLibrary from "./SidebarLibrary"

interface LibraryProps {
  library: Library[];
}

const Library: React.FC<LibraryProps> = ({library}) => {
    const modal = useModal();
    const user = useUser();
    const router = useRouter();

    const onClick = () => {
      if(!user) {
        return router.push('/signin')
      }
      return modal.onOpen();
    }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
            <MdEditNote className="text-black/75" size={26}/>
            <p className="font-medium text-base"> My Library</p>
        </div>
        <AiOutlinePlus onClick={onClick} size={20} 
        className="cursor-pointer text-black/75 hover:text-black transition"/>
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {library.map((item) => (
          <SidebarLibrary onClick={() => {}} key={item.id} data={item} />
        ))}
      </div>
    </div>
  )
}

export default Library
