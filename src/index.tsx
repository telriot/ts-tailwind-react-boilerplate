import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.css';
import App from 'App';
import ThemeContext, { theme } from 'contexts/themeContext';

ReactDOM.render(
	<React.StrictMode>
		<ThemeContext.Provider value={theme}>
			<App />
		</ThemeContext.Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
