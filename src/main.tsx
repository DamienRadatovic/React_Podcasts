import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AudioPlayerProvider } from '@/contexts/audio-player.context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AudioPlayerProvider>
            <App />
        </AudioPlayerProvider>
    </React.StrictMode>,
);