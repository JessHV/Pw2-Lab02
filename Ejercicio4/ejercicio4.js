function ingresar(){
    let link = document.getElementById("link").value;

    if(link.indexOf("https://meet.google.com/")!=-1){
        document.getElementById("Codigo").innerHTML = "<h1>Funciona</h1>"
    }
}