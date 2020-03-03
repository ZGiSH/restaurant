function insertHeader () {
	const body = document.querySelector('body')
	const content = document.querySelector('#content')
	let header = document.createElement('header')

	header.innerHTML = 

`<div id='title'>
    <h1>TJEN -</h1>
  </div>
  <div id='navbar'>
    <p class='about'>ABOUT</p>
    <p class='menu'>MENU</p>
    <p class='contact'>CONTACT</p>
  </div>`

	body.insertBefore(header, content)
}

export {insertHeader}