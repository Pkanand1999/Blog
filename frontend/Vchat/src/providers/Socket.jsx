import react, { useMemo } from 'react';
import { io } from 'socket.io-client';

const SocketContext = react.createContext();

export default function SocketProvider(props) {
    const socket = useMemo(() => io({
        host: 'localhost',
        port: 8081
    }), [])
    return (
        <SocketContext.Provider value={{ socket }}>
            {props.children}
        </SocketContext.Provider>
    )
}
