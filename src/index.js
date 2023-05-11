import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Title } from "./components/Title/Title"
import { TodoInput } from "./components/TodoInput/Todoinput"


import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Title />
    <App />
    <TodoInput />
  </StrictMode>
);
