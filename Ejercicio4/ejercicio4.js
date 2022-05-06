function ingresar(){
    let link = document.getElementById("link").value;

    if(link.indexOf("https://meet.google.com/")!=-1){
        link = link.replace(/https:\/\/meet.google.com\//g,"");
        link = link.replace(/-/g,"");
        document.getElementById("Codigo").innerHTML = "<h1>"+link+"</h1>";
    }
}