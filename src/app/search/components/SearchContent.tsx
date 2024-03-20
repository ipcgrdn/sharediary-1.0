'use client'

import LibraryItem from "@/app/components/LibraryItem";
import { Library } from "@/app/diary/components/DiaryContent"

interface SearchContentProps {
    library: Library[];
}

const SearchContent: React.FC<SearchContentProps> = ({
    library
}) => {
    if(library.length === 0) {
        return (
            <div className="flex flex-col gap-y-2 w-full
            px-6 text-black/70">
                No Library found.
            </div>
        )
    }
  return (
    <div className="grid grid-cols-2 ml-4
    sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4
    xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
      {library.map((library) => (
        <div key={library.id} className="flex
        items-center gap-x-4 w-full">
            <div className="flex-1">
                <LibraryItem data={library} 
                onClick={() => {}}/>
            </div>
        </div>
      ))}
    </div>
  )
}

export default SearchContent
