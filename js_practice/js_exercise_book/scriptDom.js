createDom();
addToDom();
removeFromDom();

function insertPar(text) {
	var par = document.createElement("P");
    par.setAttribute("id","paragraphID");
    var text = document.createTextNode(text);
    par.appendChild(text);
    var element=document.getElementById("newParagraphs");
    element.appendChild(par);
}

function addText() {
	var text = document.getElementById("paragraph").value;
	insertPar(text);
}
    
function editText() {
    var newT=document.getElementById("newPar").value;
    document.getElementById("paragraphID").innerHTML=newT;
}

function removePar() {
	document.getElementById("newParagraphs").innerHTML="";

}

