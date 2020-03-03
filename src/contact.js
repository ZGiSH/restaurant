function showContact () {
	const content = document.querySelector('#content')
	let div = document.createElement('div')
  div.id = 'about'

	div.innerHTML = 

`<p>Contact Info</p>
<p>marqietjen@gmail.com</p>
<p>github.com/ZGiSH</p>`

	content.appendChild(div)
}

export {showContact}