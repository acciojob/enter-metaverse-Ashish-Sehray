//your JS code here. If required.
let p=document.querySelector("#status");
let button=document.querySelector("#enterBtn");
let body=document.querySelector("body");
button.addEventListener("click",()=>{
	p.remove();
	let h1=document.createElement("h1");
	h1.innerText="Entered Metaverse";
	h1.setAttribute("id","status")
	body.prepend(h1);
	p.remove();
});