export const authReducer = (state, { type, payload }) => {
    let newState;
    switch (type) {
        case "SHOW_AUTH_MODAL":
            newState = { ...state, isAuthModalOpen: !state.isAuthModalOpen };
            break;
        case "SET_TO_LOGIN":
            newState = { ...state, selectedTab: "login" };
            break;
        case "SET_TO_SIGNUP":
            newState = { ...state, selectedTab: "signup" };
            break;
        case "NUMBER":
            newState = { ...state, number: payload };
            break;
        case "NAME":
            newState = { ...state, username: payload };
            break;
        case "EMAIL":
            newState = { ...state, email: payload };
            break;
        case "PASSWORD":
            newState = { ...state, password: payload };
            break;
        case "CONFIRM_PASSWORD":
            newState = { ...state, confirmPassword: payload };
            break;
        case "CLEAR_USER_DATA":
            newState = {
                ...state,
                username: "",
                number: "",
                email: "",
                password: "",
                confirmPassword: "",
            };
            break;
        case "SET_ACCESS_TOKEN":
            newState = { ...state, accessToken: payload };
            break;
        case "SET_USER_NAME":
            newState = { ...state, name: payload };
            break;
        case "SHOW_DROP_DOWN_OPTIONS":
            newState = { ...state, isDropDownModalOpen: !state.isDropDownModalOpen };
            break;
        case "CLEAR_CREDENTIALS":
            newState = { ...state, accessToken: "", name: "" };
            break;
        default:
            newState = state;
    }

    // Save to localStorage
    localStorage.setItem('authState', JSON.stringify(newState));
    return newState;
};
