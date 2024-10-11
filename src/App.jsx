import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

function App() {
    return (
        <div>
            <h1>Hello, World!</h1>
            <p>Count is: 0</p>
        </div>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
