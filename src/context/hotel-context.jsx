import { createContext, useContext, useState } from "react";

const initialState = {
    hotel: {}
}

const HotelContext = createContext(initialState);

// eslint-disable-next-line react/prop-types
const HotelProvider = ({ children }) => {

    const [hotel, setHotel] = useState({});

    return (
        <HotelContext.Provider value={{ hotel, setHotel }}>
            {children}
        </HotelContext.Provider>
    )
}

const useHotel = () => useContext(HotelContext);

// eslint-disable-next-line react-refresh/only-export-components
export { useHotel, HotelProvider };