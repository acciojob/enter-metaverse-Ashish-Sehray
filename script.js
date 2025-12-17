//your JS code here. If required.
let p = document.querySelector("#status");
let button = document.querySelector("#enterBtn");
let div=document.querySelector("#container")
let body = document.querySelector("body");

button.addEventListener("click", () => {
   
	div.innerHTML="<h1 id='status'>Entered Metaverse</h1> "
});
cy.get('#status').should('contain', 'Entered Metaverse');
cy.get('body').should('have.descendants', 'h1');
