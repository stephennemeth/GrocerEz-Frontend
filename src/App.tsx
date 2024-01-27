
import './App.css';
import NavBar from "./components/NavBar";
import LoginPage from "./components/LoginPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import ListPage from './components/ListPage';
import { useState } from 'react';
import UserContext from './context/UserContext';

function App() {

  const [userId, setUserId] = useState<number | null>(null)
  
  const getUserId = () : number | null => {
    return userId
  }

  return (
    <div className="App">
      <UserContext.Provider value={{setUserId, getUserId}}>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path={"/"} element={<LoginPage />} />
                <Route path={"/signup"} element={<SignUpPage />} />
                <Route path={"/mylists"} element={<ListPage />} />
            </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
