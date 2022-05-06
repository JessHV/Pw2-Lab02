function ingresar(){
    let link = document.getElementById("link").value;
    link = link.replace(/\s/g,"")

    if(link.indexOf("https://meet.google.com/")!=-1){
        let codigo = link.replace(/https:\/\/meet.google.com\//g,"");
        codigo = codigo.replace(/-/g,"");
        document.getElementById("Codigo").innerHTML = `
        <h4>
            Codigo sin guiones: ${codigo}
        </h1>`;
    }
}