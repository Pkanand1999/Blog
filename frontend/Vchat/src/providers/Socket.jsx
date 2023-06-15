import  { useMemo,createContext,useContext } from 'react';
import { io } from 'socket.io-client';

const SocketContext = createContext();
export const useSocket=()=>{
    return useContext(SocketContext)
}
 function SocketProvider({children}) {
    const socket = useMemo(() => io({
        host: 'localhost',
        port: 8081
    }), [])
    return <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    
}
 export default SocketProvider;
