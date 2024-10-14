import { createContext, useContext, useState } from "react";


const AlertContext = createContext();

// eslint-disable-next-line react/prop-types
const AlertProvider = ({ children }) => {

    const [alert, setAlert] = useState({
        open: false,
        message: "",
        type: "success"
    })

    return (
        <AlertContext.Provider value={{ alert, setAlert }}>{children}</AlertContext.Provider>
    );
}

const useAlert = () => useContext(AlertContext);

// eslint-disable-next-line react-refresh/only-export-components
export { useAlert, AlertProvider };