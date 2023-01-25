const express = require('express');
const path = require('path');
const expressHandlebars = require('express-handlebars');

const app = express();

const port = process.env.PORT || 3000;

const fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
  ];
  




// Esta linea de codigo sirve para setear contenido estaticamente es mejor que solo poner app.use(express.static(__dirname + '/public'))
app.use('/public', express.static(path.join(__dirname, 'public')));

// configure Handlebars view engine
console.log("\n"+"papa"+__dirname+"papita"+"views");
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', expressHandlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
  
// use handlebars view engine method
app.get('/', (req, res) => res.render('home'));

// app.get('/about', (req, res) => res.render('about'));
app.get('/about', (req, res) => {
    // Funcion de ejemplo para el arreglo que muestra por el view about un texto aleatorio de dicho arreglo
    const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)];
    res.render('about', { fortune: randomFortune });
});
  



// custom 404 page
app.use((req, res) => {
    res.status(404);
    res.render('404');
  });
  
  
  // custom 500 page
  app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500);
    res.render('500');
  });


/* 
ESTO ES PARA VIEWS
// configure Handlebars view engine
console.log("\n"+"papa"+__dirname+"papita"+"views");
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', expressHandlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
  
// use handlebars view engine method
app.get('/', (req, res) => res.render('home'));
app.get('/about', (req, res) => res.render('about'));



// custom 404 page
app.use((req, res) => {
    res.status(404);
    res.render('404');
  });
  
  
  // custom 500 page
  app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500);
    res.render('500');
  });
  
*/

/*
This is the normal without handlebars
app.get('/', (req, res) => {
    res.type('text/plain');
    res.send('Meadowlark Travel');
});
  
app.get('/about', (req, res) => {
    res.type('text/plain');
    res.send('About Meadowlark Travel');
});

// custom 404 page
app.use((req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
});
*/





app.listen(port, () => console.log(`Express started on http://localhost:${port}; ` +`press Ctrl-C to terminate.`));