//express
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path'); // Agregamos esta línea para importar el módulo path
const Components = require('./classes/components');
const components = new Components();
//usar header




app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', './views');
app.use(express.static('./static'));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules'), { 'Content-Type': 'text/css' }));

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('document.ejs', {
        pageTitle: 'Home',
        pageStyle: 'home',
        pageScript: 'home',
        pageView: '../components/home.ejs',
        header: components.header('home'),
        footer: components.footer()

    });
});

app.get('/about', (req, res) => {
    res.render('document.ejs', {
        pageTitle: 'About',
        pageStyle: 'about',
        pageScript: 'about',
        pageView: '../components/about.ejs',
        header: components.header('about'),
        footer: components.footer()

    });
});

app.get('/projects', (req, res) => {
    res.render('document.ejs', {
        pageTitle: 'Projects',
        pageStyle: 'projects',
        pageScript: 'projects',
        pageView: '../components/projects.ejs',
        header: components.header('projects'),
        footer: components.footer()

    });
});

app.get('/contact', (req, res) => {
    res.render('document.ejs', {
        pageTitle: 'Contact',
        pageStyle: 'contact',
        pageScript: 'contact',
        pageView: '../components/contact.ejs',
        header: components.header('contact'),
        footer: components.footer()

    });
});

//iniciar servidor
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});
