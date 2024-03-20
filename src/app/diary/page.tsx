import getLibrary from "../../../actions/getLibrary";
import getLibraryByUserId from "../../../actions/getLibraryByUserId";
import MainHeader from "../components/MainHeader";
import MainNav from "../components/MainNav";
import ModalProvider from "../components/ModalProvider";
import Sidebar from "../components/Sidebar";
import ToasterProvider from "../components/ToasterProvider";
import DiaryContent from "./components/DiaryContent";

export const revalidate = 0;

export default async function Diary() {
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
                다이어리
              </h1>
            </div>
            <div>
              <DiaryContent library={library}/>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
    );
  }