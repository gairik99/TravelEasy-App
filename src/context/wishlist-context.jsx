import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducer/wishlist-reducer";

const initialValue = JSON.parse(localStorage.getItem('wishlistState')) || {
    wishlist: [],
};

const WishlistContext = createContext(initialValue);

// eslint-disable-next-line react/prop-types
const WishlistProvider = ({ children }) => {
    const [state, wishlistDispatch] = useReducer(wishlistReducer, initialValue);
    const { wishlist } = state;

    return (
        <WishlistContext.Provider value={{ wishlist, wishlistDispatch }}>
            {children}
        </WishlistContext.Provider>
    );
};

const useWishlist = () => useContext(WishlistContext);

// eslint-disable-next-line react-refresh/only-export-components
export { useWishlist, WishlistProvider };
