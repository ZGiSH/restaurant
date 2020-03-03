import {insertHeader} from './header'
import {showOpener} from './opener'
import {showAbout} from './about'
import {showMenu} from './menu'
import {showContact} from './contact'

function clear() {
    let contentDiv = document.querySelector("#content")    
    contentDiv.innerHTML= ""
}

document.addEventListener('DOMContentLoaded', () => {
	insertHeader()
	showOpener()

	const title = document.querySelector('#title')
	title.addEventListener('click', () => {
		clear();
		showOpener();
	})

	const about = document.querySelector('.about')
	about.addEventListener('click', () => {
		clear();
		showAbout();
	})

	const menu = document.querySelector('.menu')
	menu.addEventListener('click', () => {
		clear();
		showMenu();
	})

	const contact = document.querySelector('.contact')
	contact.addEventListener('click', () => {
		clear();
		showContact();
	})
})


console.log('it works!')