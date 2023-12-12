 //fetch('https://apisimpsons.fly.dev/api/personajes')
 //    .then(res => res.json())
 //    .then(data => getPersonajes(data))

 //function getPersonajes(data){
 //   console.log(data)
 //}

const cardsContainer = document.querySelector('#card-container')

async function getPersonajes(limite,page){
    const res =await fetch(`https://apisimpsons.fly.dev/api/personajes?limit=${650}`)
    const data = await res.json();
    data.docs.map(personaje =>{
        console.log(personaje)  
        cardsContainer.innerHTML += `
        <div class="card">
                <div class="card-info">
                    <img style="width:100px"src="${personaje.Imagen}" alt="">
                  <h3 class="title">${personaje.Nombre}</h3>
                  <small>${personaje.Historia}</small>
                </div>
              </div>
        `
    } )
}

getPersonajes(6,1)

function mySounds() {
  var x = Math.floor((Math.random() * 6) + 1);
    var sound = new Audio();
  switch (x) {
    case 1:
         sound.src = "audio/BartSimpson.mp3";
         break;
    case 2:
         sound.src = "audio/HomeroSimpson.mp3";
         break;
    case 3:
         sound.src = "audio/Lisa.mp3";
         break;
    case 4:
         sound.src = "audio/MargeSimpson.mp3";
         break;
    case 5:
         sound.src = "audio/Milhouse.mp3";
         break;
    case 6:
         sound.src = "audio/NedFlanders.mp3";
         break;

  }
    sound.play();
}

document.getElementById('soundbutton').addEventListener('click', mySounds);