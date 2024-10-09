import { createContext, useContext, useReducer } from "react";
import { dateReducer } from '../reducer/date-reducer'

const initialState = {
    destination: "",
    guests: 0,
    checkInDate: null,
    checkOutDate: null,
    isSearchModalOpen: false,
    isSearchResultOpen: true,
};

const DateContext = createContext(initialState);

// eslint-disable-next-line react/prop-types
const DateProvider = ({ children }) => {
    const [
        {
            destination,
            guests,
            checkInDate,
            checkOutDate,
            isSearchModalOpen,
            isSearchResultOpen,
        },
        dateDispatch,
    ] = useReducer(dateReducer, initialState);

    return (
        <DateContext.Provider
            value={{
                destination,
                guests,
                checkInDate,
                checkOutDate,
                isSearchModalOpen,
                isSearchResultOpen,
                dateDispatch,
            }}
        >
            {children}
        </DateContext.Provider>
    );
};

const useDate = () => useContext(DateContext);

// eslint-disable-next-line react-refresh/only-export-components
export { useDate, DateProvider };