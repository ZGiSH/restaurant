function showAbout () {
  const content = document.querySelector('#content')
  let div = document.createElement('div')
  div.id = 'about'

	div.innerHTML = 

`<p>The Odin Project</p>
<p>This is for the Project: Restaurant Page section of the Javascript path in TOP.</p>
<p>An example of dynamic construction and ES6 module importing and exporting</p>`

	content.appendChild(div)
}

export {showAbout}