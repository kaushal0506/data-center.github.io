function dropdownMenu(){
    var x = document.getElementById("onclickdropdown");
    if (x.className === "topnav"){
        x.className += " responsive";
    }else{
         x.className = "topnav";
    }
}

function dropDowncontainer(){
    var x = document.getElementById("onclickdropdowndata");
    if (x.className === "dropdowndata"){
        x.className += " responsive";
    }else{
        x.className = "dropdowndata";
    }
}


// Calculation
function calculate()
{
    var no_end_devices = document.getElementById("end-devices").value;
     
    var no_end_devices = 4*no_end_devices;

    var k = Math.ceil(Math.cbrt(no_end_devices));

    document.getElementById("pods").innerHTML = "No. of Pods : " + k;

    document.getElementById("core-switch").innerHTML = k + " Core Switches are required ";

    document.getElementById("each-pod").innerHTML = "Each Pod requires"

    document.getElementById("agg-switch").innerHTML = Math.ceil((k/2)) + " Aggregation Switches";

    document.getElementById("edge-switch").innerHTML = Math.ceil((k/2))+" Edge Switches" ;
}
