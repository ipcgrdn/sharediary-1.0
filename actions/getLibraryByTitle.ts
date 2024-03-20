import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import getLibrary from "./getLibrary";

const getLibraryByTitle = async (title: string) => {
    const supabase = createServerComponentClient({
       cookies: cookies,
    });

    if(!title) {
        const allLibrary = await getLibrary();
        return allLibrary;
    }

    const { data, error } = await supabase
    .from('Library')
    .select('*')
    .ilike('title', `%${title}%`)
    .order('created_at', { ascending: false });

    if (error) {
        console.log(error);
    }

    return (data as any) || [];
};

export default getLibraryByTitle;