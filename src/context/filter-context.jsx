import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/filter-reducer";

const initalValue = {
    isFilterModalOpen: false,
    priceRange: [200, 20000],
    noOfBathrooms: "Any",
    noOfBedrooms: "Any",
    noOfBeds: "Any",
    propertyType: "Any",
    traveloRating: 1,
    isCancelable: true,
};

const FilterContext = createContext(initalValue);

// eslint-disable-next-line react/prop-types
const FilterProvider = ({ children }) => {
    const [
        {
            isFilterModalOpen,
            priceRange,
            noOfBathrooms,
            noOfBedrooms,
            noOfBeds,
            propertyType,
            traveloRating,
            isCancelable,
        },
        filterDispatch,
    ] = useReducer(filterReducer, initalValue);

    return (
        <FilterContext.Provider
            value={{
                isFilterModalOpen,
                priceRange,
                noOfBathrooms,
                noOfBedrooms,
                noOfBeds,
                propertyType,
                traveloRating,
                isCancelable,
                filterDispatch,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};

const useFilter = () => useContext(FilterContext);

// eslint-disable-next-line react-refresh/only-export-components
export { useFilter, FilterProvider };