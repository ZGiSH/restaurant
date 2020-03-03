function showMenu () {
	const content = document.querySelector('#content')
	let div = document.createElement('div')
  div.id = 'menu'

	div.innerHTML = 

`<table>
    <tr>
      <td>THE ORIGINAL ORANGE CHICKEN</td>
      <td>8$</td>
    </tr>
    <tr>
      <td>Our signature dish. Crispy chicken wok-tossed in a sweet and spicy orange sauce.</td>
    </tr>
    <tr>
      <td>BLACK PEPPER CHICKEN</td>
      <td>8$</td>
    </tr>
    <tr>
      <td>Marinated chicken, celery and onions in a bold black pepper sauce.</td>
    </tr>
    <tr>
      <td>MARQIE'S MONGOLIAN BEEF</td>
      <td>7$</td>
    </tr>
    <tr>
      <td>Sweet flavor of the dark brown sugar mixed with the salty soy sauce and the strong ginger and garlic is incredibly addicting</td>
    </tr>            
  </table>
  <img src='https://dinnerthendessert.com/wp-content/uploads/2017/02/Mongolian-Beef-2.jpg' style='width:250px; height:250px;'>`

	content.appendChild(div)
}

export {showMenu}