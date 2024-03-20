'use client'

import LibraryItem from "@/app/components/LibraryItem";

interface DiaryContentProps {
    library: Library[];
}

export interface Library {
    id: string;
    user_id: string;
    icon: string;
    author: string;
    title: string;
    description: string;
}

const DiaryContent: React.FC<DiaryContentProps> = ({
    library
}) => {
    if(library.length === 0) {
        return (
            <div className="mt-4 text-black/50">
                다이어리를 생성해보세요!
            </div>
        )
    }

    return (
        <div className="grid grid-cols-2
        sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4
        xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
            {library.map((item) => (
                <LibraryItem key={item.id} 
                onClick={() => {}} data={item} />
            ))}
        </div>
    )
}

export default DiaryContent
