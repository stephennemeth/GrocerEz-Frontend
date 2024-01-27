
import './App.css';
import NavBar from "./components/NavBar";
import LoginPage from "./components/LoginPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import ListPage from './components/ListPage';
import UserContext from './context/UserContext';
import { getUserId, setUserId } from './api/user';

function App() {

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
