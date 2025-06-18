import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import TaskList from './List.tsx';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <StrictMode>
        <TaskList />
    </StrictMode>,
);
