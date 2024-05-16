import { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

type ThemeProviderState = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
	undefined,
);

type ThemeProviderProps = {
	children: React.ReactNode;
	defaultTheme?: Theme;
};

const ThemeProvider = ({
	children,
	defaultTheme = 'system',
}: ThemeProviderProps) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);
	return (
		<ThemeProviderContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeProviderContext.Provider>
	);
};
export const useTheme = () => {
	const context = useContext(ThemeProviderContext);

	if (context === undefined)
		throw new Error('useTheme must be used within the ThemeProvider');
	return context;
};
export { ThemeProvider };
