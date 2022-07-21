import { 
  BrowserRouter, 
  Routes, 
  Route } from "react-router-dom";

import React from "react";

import Home from "./components/pages/Home";
import Users from "./components/pages/Users";
import CreatePost from "./components/pages/CreatePost";

import "./styles/normalize.css";
import "./styles/fontawesome.min.css";
import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<Home />} />
        <Route path="/users" element = {<Users />} /> 
        <Route path="/createpost" element = {<CreatePost />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
