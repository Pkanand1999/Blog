// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import SocketProvider from './providers/Socket.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <SocketProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </SocketProvider>
    </>
)
