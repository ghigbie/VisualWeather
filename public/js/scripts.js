dropdownMenu = () =>{

    let dropdownClick = document.getElementById("dropdownClick");
    if(dropdownClick.className === "topnav"){
        dropdownClick.className += " responsive";
    }else{
        dropdownClick.className = "topnav";
    }
}
