//express
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path'); // Agregamos esta línea para importar el módulo path
const nodemailer = require('nodemailer');
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

app.post('/msm', (req, res) => {
    var message = `
    <h1>Información de contacto</h1>
    <ul>
        <li>Nombre: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Teléfono: ${req.body.phone}</li>
    </ul>
    <h1>Mensaje</h1>
    <p>${req.body.message}</p>
    `;
    let transporter = nodemailer.createTransport({
        host: 'mail.bjrsoftware.com',
        port: 587,
        secure: false,
        auth: {
            user: 'cliente@bjrsoftware.com',
            pass: 'Damar12345.'
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    let mailOptions = {
        from: '"Contacto" <cliente@bjrsoftware.com>',
        to: 'bjrsoftware@gmail.com',
        subject: 'Contacto',
        text: '<Contacto>',
        html: message
    };
    transporter.sendMail(mailOptions, (error, info) => {
        console.log('enviado');
        if (error) {
            console.log(error);
            res.send('0');
        } else {
            //console.log('Message %s sent: %s', info.messageId, info.response);
            res.send('1');
        }
    });
});

//iniciar servidor
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});
