import ModalProvider from "@/app/components/ModalProvider";
import Sidebar from "@/app/components/Sidebar";
import ToasterProvider from "@/app/components/ToasterProvider";
import getLibraryByUserId from "../../../../actions/getLibraryByUserId";
import MainHeader from "@/app/components/MainHeader";
import MainNav from "@/app/components/MainNav";
import getLibrary from "../../../../actions/getLibrary";
import FeedContent from "../components/FeedContent";

export const revalidate = 0;

export default async function DiaryID (props: any) {
    const library = await getLibrary();
    const userLibrary = await getLibraryByUserId();
    
    return (
        <>
            <ToasterProvider />
            <ModalProvider />
            <Sidebar library={userLibrary}>
                <div>
                    <MainHeader>
                        <div className="mb-2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3
                            2xl:grid-cols-4 gap-3 mt-4">
                                <MainNav profile="프로필" name="이름" href="링크"/>
                            </div>
                        </div>
                    </MainHeader>
                    <div className="mt-2 mb-7 px-6">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-semibold">
                                다이어리 {props.params.id}
                            </h1>
                        </div>
                        <div>
                            <FeedContent library={library}/>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}