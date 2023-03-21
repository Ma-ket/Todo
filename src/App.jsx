import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TodoApp from './TodoApp';
import Error404 from './Error404';

export default function App(){
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route index path="/" element={ <TodoApp /> } />
					<Route path="*" element={ <Error404 /> } />
				</Routes>
			</div>
		</BrowserRouter>
	);
}


