import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route,Link } from "react-router";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import Details from "./components/Details";
import Zero from "./components/Zero";
import Hi from "./components/Hi";
import Hello from "./components/Hello";
import Bye from "./components/Bye";
import Github from "./components/Github";
function App(){
    return (
        <>
        <BrowserRouter>
        <nav>
        <Link to="/contact">Contact</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/details">Details</Link>
        <Link to="/github">Github</Link>
      </nav>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/Dashboard" element={<Dashboard/>}></Route>

            {/* nested route =>zero will display with detail and hi and hello as /hi /hello*/}
            <Route path="/Details" element={<Details/>}>
            {/* <Route index element={<Zero/>}></Route> */}
            
            {/* now zero and bye will show along with detail page */}
            <Route index element={
                <>
                <Zero/>
                <Bye/>
                </>}>
                </Route>
             
            <Route path="Hello" element={<Hello/>}></Route>
            <Route path="Hi" element={<Hi/>}></Route> 
            </Route>
            <Route path="/Github/:name" element={<Github/>}></Route>
            {/* :name shows that name is dynamic ,cab be catched by useParam in Github */}
        </Routes>
        </BrowserRouter>
        </>
    )

}
const reactRoot=ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App/>);
