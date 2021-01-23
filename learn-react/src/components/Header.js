import React from "react";

function Header(){
let title= "";
const client = "Programmer";

/*

if(client === "Designer"){
    title = "Design is my life.";
}else{
    title = "Progamming is my life.";
}
*/
    return(
        <div className="navbar bg-dark rounded">
        <h2 className="text-white">{title}</h2>  
        </div>
    );
}

export default Header;

