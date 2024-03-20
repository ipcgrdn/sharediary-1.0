import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getLibrary = async () => {
    const supabase = createServerComponentClient({
       cookies: cookies,
    });

    const { data, error } = await supabase
    .from('Library')
    .select('*')
    .order('created_at', { ascending: false });

    if (error) {
        console.log(error);
    }

    return (data as any) || [];
};

export default getLibrary;