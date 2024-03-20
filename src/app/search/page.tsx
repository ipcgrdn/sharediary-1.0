import getLibrary from "../../../actions/getLibrary";
import getLibraryByTitle from "../../../actions/getLibraryByTitle";
import getLibraryByUserId from "../../../actions/getLibraryByUserId";
import MainHeader from "../components/MainHeader";
import ModalProvider from "../components/ModalProvider";
import SearchInput from "../components/SearchInput";
import Sidebar from "../components/Sidebar";
import ToasterProvider from "../components/ToasterProvider";
import SearchContent from "./components/SearchContent";

interface SearchProps {
    searchParams: {
        title: string;
    }
}

const Search = async ({ searchParams }: SearchProps) => {
    const librarySearch = await getLibraryByTitle(searchParams.title);
    const library = await getLibrary();
    const userLibrary = await getLibraryByUserId();

    return(
        <>
            <ToasterProvider />
            <ModalProvider />
            <Sidebar library={userLibrary}>
                <div className="h-full w-full overflow-hidden overflow-y-auto">
                    <MainHeader className="">
                        <div className="mb-2 flex flex-col gap-y-6">
                            <h1 className="text-3xl font-semibold">
                                Search
                            </h1>
                            <div className="w-1/2">
                            <SearchInput />
                            </div>
                        </div>
                    </MainHeader>
                    <SearchContent library={librarySearch}/>
                </div>
            </Sidebar>
        </>
    )
}

export default Search;