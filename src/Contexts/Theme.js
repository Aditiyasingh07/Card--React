import { createContext, useContext } from "react";

export const Theme = createContext({
    themeMode: "Light",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
});

export const ThemeProvider = Theme.Provider


export default function useTheme(){
    return useContext(Theme)
}