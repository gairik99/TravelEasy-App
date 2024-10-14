export const wishlistReducer = (state, { type, payload }) => {
    let newState;
    switch (type) {
        case "ADD_TO_WISHLIST":
            newState = { ...state, wishlist: [...state.wishlist, payload] };
            break;
        case "REMOVE_FROM_WISHLIST":
            newState = { ...state, wishlist: state.wishlist.filter((hotel) => hotel._id !== payload) };
            break;
        case "CLEAR_WISHLIST":
            newState = { ...state, wishlist: [] };
            break;
        default:
            newState = state;
    }

    // Save to localStorage
    localStorage.setItem('wishlistState', JSON.stringify(newState));
    return newState;
};
