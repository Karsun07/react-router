import { Outlet ,Link} from "react-router";
export default function Details(){
    return (
        <>
        <nav>
            <Link to="Hi">Hi</Link>
            <Link to="Hello">Hello</Link>
        </nav>
        {/* if we want only hi and hello page then we move this statement to zero */}
        {/* <h1>This is Details Page</h1> */}
        
        <Outlet></Outlet>
        </>
    )
}