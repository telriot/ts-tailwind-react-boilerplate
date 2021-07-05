import {createContext} from 'react';
export const theme = require('../styles/theme.js')
const ThemeContext = createContext(theme)
export default ThemeContext
