import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route,Link } from "react-router";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";

function App(){
    return (
        <>
        <BrowserRouter>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Dashboard">Dashboard</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/Dashboard" element={<Dashboard/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )

}
const reactRoot=ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App/>);
