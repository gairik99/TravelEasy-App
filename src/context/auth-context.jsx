import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer/auth-reducer";

const initialValue = JSON.parse(localStorage.getItem('authState')) || {
    isAuthModalOpen: false,
    isDropDownModalOpen: false,
    username: "",
    number: "",
    email: "",
    password: "",
    confirmPassword: "",
    accessToken: "",
    name: "",
    selectedTab: "login",
};

const AuthContext = createContext(initialValue);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [state, authDispatch] = useReducer(authReducer, initialValue);
    const {
        isAuthModalOpen,
        isDropDownModalOpen,
        username,
        email,
        password,
        number,
        accessToken,
        name,
        selectedTab,
        confirmPassword,
    } = state;

    return (
        <AuthContext.Provider
            value={{
                isAuthModalOpen,
                isDropDownModalOpen,
                username,
                email,
                password,
                number,
                accessToken,
                name,
                selectedTab,
                confirmPassword,
                authDispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

// eslint-disable-next-line react-refresh/only-export-components
export { useAuth, AuthProvider };
