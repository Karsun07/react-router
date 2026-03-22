import { useEffect, useState } from "react";
import {useParams} from "react-router";
export default function Github(){
    const {name}=useParams();
   
    const [user,setUser]=useState("");
    async function profile(){
        const resp=await fetch(`https://api.github.com/users/${name}`);
        const data=await resp.json();
        setUser(data);
    }
    useEffect(()=>{
        profile();
    },[user])
    return (
        <>
        <h1>This is Github page</h1>
        <div>
            <img src={user?.avatar_url}></img>
            <h2>{user?.login}</h2>
        </div>
        </>
    )

}