document.addEventListener("DOMContentloaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
  const titanicButton = document.getElementByID('Titanic')
  const terminatorButton = document.getElementByID('Terminator 2')
  titanicButton.addEventListener('click', (event) => {
   //do something here
   updateHTMLContent()
  })
   terminatorButton.addEventListener('click', (event) => {
   //do something here
  })
});

function updateHTMLContent() {
  let title = document.getElementByID('title')
  let director = document.getElementByID('director')
  let genre = document.getElementByID('genre')
  let filmRating = document.getElementByID('filmRating')
  
  title.innerHTML = '<p>Hi</p><p>Hello</p>'
}