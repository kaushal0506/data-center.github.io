function dropdownMenu(){
    var x = document.getElementById("onclickdropdown");
    if (x.className === "topnav"){
        x.className += " responsive";
    }else{
         x.className = "topnav";
    }
}
