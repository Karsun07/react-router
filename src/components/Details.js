import { Outlet } from "react-router";
export default function Details(){
    return (
        <>
        <h1>This is Details Page</h1>
        <Outlet></Outlet>
        </>
    )
}