import SocketProvider from "./providers/Socket"
import {Routes,Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
function App() {

  return (
    <>
    <Routes>
    <SocketProvider>
    <Route path='/' element={<Homepage/>} />
    </SocketProvider>
    </Routes>
    </>
  )
}

export default App
