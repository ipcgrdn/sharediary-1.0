import ModalProvider from "@/app/components/ModalProvider";
import Sidebar from "@/app/components/Sidebar";
import ToasterProvider from "@/app/components/ToasterProvider";
import getLibraryByUserId from "../../../../actions/getLibraryByUserId";
import MainHeader from "@/app/components/MainHeader";
import MainNav from "@/app/components/MainNav";
import CreateForm from "./CreateForm";

export const revalidate = 0;

export default async function CreateFeed () {
    const userLibrary = await getLibraryByUserId();
  return (
    <>
      <ToasterProvider />
      <ModalProvider />
      <Sidebar library={userLibrary}>
        <div className="w-full h-screen">
          <MainHeader>
            <div className="mb-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3
              2xl:grid-cols-4 gap-3 mt-4">
                <MainNav profile="프로필" name="이름" href="링크"/>
              </div>
            </div>
          </MainHeader>
           <CreateForm />
        </div>
      </Sidebar>
    </>
    );
  }