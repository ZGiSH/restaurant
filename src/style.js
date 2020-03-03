function style (){
    const style = document.createElement('style');
    style.innerHTML = 

    `header {
      position: relative;
      display: flex;
      justify-content: space-between;
      width: 100vw;
      height: 9vh;
      background-color: white;
    }

    #title {
      padding: 1vh;
      margin-left: 1vw;
    }

    #title > h1 {
      font-size: 64px;
      font-weight: 700;
      font-family: bebas neue;
    }

    #title > p {
      font-size: 16px;
      font-weight: 600;
      margin-top: 5px;
    }

    #title:hover {
      cursor: pointer;
      color: red;
      transition: 0.3s;
    }

    #navbar > p {
      color: black;
      font-size: 36px;
      font-weight: 600;
    }

    #navbar > p:hover {
      color: red;
      cursor: pointer;
      transition: 0.3s;
    }

    #navbar {
      display: flex;
      position: absolute;
      bottom: 15px;
      right: 0;
      font-family: bebas neue;
    }

    #navbar > p {
      margin-right: 5vw;
    }

    #content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 91vh;
      background-image: url("background.jpg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      font-family: bebas neue;
    }

    #opener {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 45vh;
      width: 75vw;
      font: bebas neue;
      background: rgba(256,256,256,0.9);
    }

    #opener > p:first-child {
      font-size: 128px;
      font-weight: bold;
    }

    #opener > p {
      font-size: 68px;
    }

    #about {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 75vh;
      width: 75vw;
      font: bebas neue;
      background: rgba(256,256,256,0.9);
    }

    #about > p:first-child {
      font-size: 128px;
      font-weight: bold;
    }

    #about > p {
      font-size: 44px;
    }

    #menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 75vh;
      width: 75vw;
      font: bebas neue;
      background: rgba(256,256,256,0.9);
    }

    #menu > table {
      margin-top: 5vh;
      font-size: 44px;
      width: 90%;
      height: auto;
    }

    tr:nth-child(even) {
      font-size: 22px;
      height: 50px;
    }

    img {
      margin-top: 50px;
    }`;

    document.head.appendChild(style);
}

export {style}