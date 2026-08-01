import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode as toggleDarkModeAction } from '../store/slices/themeSlice';

// Applies the dark-mode attribute to <html> and keeps it in sync with Redux state
export function ThemeProvider({ children }) {
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [darkMode]);

  return children;
}

export const useTheme = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return {
    darkMode,
    toggleDarkMode: () => dispatch(toggleDarkModeAction()),
  };
};
