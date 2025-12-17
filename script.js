//your JS code here. If required.
let p = document.querySelector("#status");
let button = document.querySelector("#enterBtn");

let body = document.querySelector("body");

button.addEventListener("click", () => {
   
	body.innerHTML="<h1 id='status'>Entered Metaverse</h1> <br> <button id='enterBtn'>Enter</button>"
});

