import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Login from "./pages/auth/login"
import UpdateProfile from "./pages/profileupdate/updateprofile"
import Chats from "./pages/chat/chats"
const App = () => {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}    />
      <Route path='/UpdateProfile' element ={<UpdateProfile/>}    />
      <Route path='/chats' element ={<Chats/>}   />
    </Routes>
  </BrowserRouter>
     </>;
}

export default App;