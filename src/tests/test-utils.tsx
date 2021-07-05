import React, { createContext, FC, ReactElement } from 'react';
import {
	Queries,
	render,
	RenderOptions,
	RenderResult
} from '@testing-library/react';
const theme = require('../styles/theme');
export const ThemeContext = createContext(theme);

const AllTheProviders: FC<{ children?: React.ReactNode }> = ({ children }) => {
	return (
		<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
	);
};

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'queries'>
): RenderResult<Queries, HTMLElement> =>
	render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
