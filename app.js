



function loadDoc(){
    let mes = new XMLHttpRequest();
    mes.onload = function(){
        document.getElementById("demo").innerHTML=this.responseText;
    }

mes.open("get","load.txt");
mes.send();
}


