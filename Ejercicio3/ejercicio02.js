function reverseText(){
    let newText = document.getElementById("ReverseText");
    let text = document.getElementById("text").value;
    let invText = "";
    invText += "<label>";
    for(let i=text.length; i > 0; i-- ){
        invText += text.substring(i-1,i);
    }
    invText += "</label>";
}