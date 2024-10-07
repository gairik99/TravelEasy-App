import { createContext, useContext, useState } from "react";

// let initialValue = "National Parks";

const CategoryContext = createContext("");

// eslint-disable-next-line react/prop-types
const CategoryProvider = ({ children }) => {
    const [hotelCategory, setHotelCategory] = useState("");

    return (
        <CategoryContext.Provider value={{ hotelCategory, setHotelCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};

const useCategory = () => useContext(CategoryContext);

// eslint-disable-next-line react-refresh/only-export-components
export { useCategory, CategoryProvider }

