'use client'

import { Toaster } from "react-hot-toast"

const ToasterProvider = () => {
    return (
        <Toaster toastOptions={{
            style: {
                background: '#00000026',
                color: '#000'
            }
        }}/>
    )
};

export default ToasterProvider;