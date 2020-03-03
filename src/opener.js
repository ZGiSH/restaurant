function showOpener () {
  const content = document.querySelector('#content')
  let div = document.createElement('div')
  div.id = 'opener'

	div.innerHTML = 

`<p>TRADITIONAL CHINESE</p>
<p>CONTEMPORARY COOKING</p>`

	content.appendChild(div)
}

export {showOpener}