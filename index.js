/*-Hacer un servidor con 2 (mínimo) colecciones de información, es decir, como movies y shows. Intentad que tengan imagenes y hacedlo de la info que os guste.

-La aplicación frontal tiene que tener un minimo de sentido.

PASO A PASO:

npm init -y

Hay que instalar las dependencias de: express, nodemon, cors

Crear el index.js y escuchar el servidor en el puerto 5000

Una vez tengamos el servidor escuchando (lo suyo es que trabajeis con nodemon y npm run dev) crearemos en el router 2 o más endpoints con un array de objetos cada uno.

Una vez hecho esto le indicaremos al server que use una ruta con lo definido en el router

Colocar la importacion arriba de cors y el server.use(cors) en el punto del ejemplo practico. La linea de arriba del todo y el bloque de codigo de abajo en ese punto.

Hacemos un fetch al localhost:5000/loquesea para pintar los datos.

Hacer 2 fetch o mas, segun las rutas que tengamos para pintar unos datos en una parte de la pagina y otros datos en otra.

*/

//Importamos express para poder crear un servidor express
const express = require('express');
//Importamos las cors 
const cors = require('cors'); //CORS

//Definimos el puerto de escucha.
const PORT = 5000;

//Creamos el servidor express
const server = express();
//creamos el router que tendrá ls rutas de nuestro servidor.
const router = express.Router();

//Cuando hagamos get a /teams me devolverá como respuesta un array de objetos con equipos
router.get('/teams', (req, res) => {
  //Creamos un array
  const teams = [
    {
      name: 'Real Madrid',
      year: 1999,
      headquarters: 'Santiago Bernabeu',
      logo: 'https://cdn.worldvectorlogo.com/logos/real-madrid-c-f.svg'
    },
    {
      name: 'Futbol Club Barcelona',
      year: 1958,
      headquarters: 'Camp Nou',
      logo: 'https://cdn.worldvectorlogo.com/logos/fc-barcelona.svg'
    },
    {
      name: 'Atletico de madrid',
      year: 1958,
      headquarters: 'Wanda Metropolitano',
      logo: 'https://cdn.worldvectorlogo.com/logos/athletic-club-madrid.svg'
    },
  ];
  res.send(teams);
});

//Cuando hagamos get a /players me devolverá como respuesta un array de objetos con jugadores
router.get('/players', (req, res) => {
  const players = [
    { name: 'Luca Modric', team: 'Real Madrid', age: '34' },
    { name: 'Koke', team: 'Atletico de Madrid', age: '31' },
    { name: 'Dembele', team: 'Futbol Club Barcelona', age: '9' },
  ];
  res.send(players);
});


//----------------------------------------------------------------
//ESTAS SON LAS CORS, HAY QUE PEGARLO EN ESTE PUNTO PARA QUE SE PUEDA HACER LA PETICION DESDE EL FRONT
server.use(
  cors({
    origin: '*',
    credentials: true,
  })
);
//----------------------------------------------------------------
//Al servidor le indico la ruta padre y las hijas vienen dadas por el router.
server.use('/', router);

//Escuchamos el servidor para que arranque y lo lance en el puerto que le he indicado.
server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
