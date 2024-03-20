'use client'

import { useEffect, useState } from "react"
import SidebarModal from "./SidebarModal";

const ModalProvider = () => {
    const [mount, setMount] = useState(false);

    useEffect(() => {
        setMount(true)
    }, []);

    if (!mount) {
        return null;
    }

  return (
    <> 
      <SidebarModal />
    </>
  )
}

export default ModalProvider
