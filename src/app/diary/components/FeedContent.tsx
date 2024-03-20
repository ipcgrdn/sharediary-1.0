'use client'

import LibraryItem from "@/app/components/LibraryItem";
import { useRouter } from "next/navigation";
import { FiPlus } from "react-icons/fi";

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

export interface Feed {
    id: string;
    user_id: string;
    diary_date: Date;
    diary_icon: string;
    diary_title: string;
    diary_content: string;
    diary_image_path: string;
    diary_video_path: string;
    diary_scope: boolean;
}

const FeedContent: React.FC<DiaryContentProps> = ({
    library
}) => {
    if(library.length === 0) {
        return (
            <div className="mt-4 text-black/50">
                다이어리를 생성해보세요!
            </div>
        )
    }

    const router = useRouter();
    
    return (
        <div className="grid grid-cols-2
        sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4
        xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
            
            <div onClick={() => {router.push('/diary/create')}}
            className="relative group flex flex-col items-center
            justify-center rounded-md overflow-hidden
            bg-black/15 cursor-pointer hover:bg-black/25
            transition p-3">
                <div className="flex items-center justify-center">
                    <div className="rounded-full flex items-center
                    bg-black/10 p-6 drop-shadow-md translate translate-y-1/4
                    group-hover:opacity-75 group-hover:translate-y-0 hover:scale-110">
                        <FiPlus />
                    </div>
                </div>
            </div>
            
            {library.map((item) => (
                <LibraryItem key={item.id} 
                onClick={() => {}} data={item} />
            ))}
        </div>
    )
}

export default FeedContent
