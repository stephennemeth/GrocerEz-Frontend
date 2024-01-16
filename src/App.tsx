import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import LoginPage from "./components/LoginPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUpPage from "./components/SignUpPage";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path={"/"} element={<LoginPage />} />
                <Route path={"/signup"} element={<SignUpPage />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
