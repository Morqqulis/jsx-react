import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home.jsx';
import './index.css';
import Wrapper from './components/Wrapper/Wrapper.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Wrapper>
		<Home />
	</Wrapper>,
);
