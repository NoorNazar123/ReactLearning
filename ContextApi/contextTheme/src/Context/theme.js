// Context/theme.js
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  userName: '',
  id: 1,
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
