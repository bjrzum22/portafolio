class Components {
    header(active) {
        return `
        <header class="header">
            <div class="content-icon">
                <img src="./img/icon.png" alt="logo">
                <p class="text">
                BJRSoftware
                </p>
            </div>
            <nav class="nav">
                <div class="icon-menu">
                    <i class="bi bi-list"></i>
                </div>
                <div class="container-nav">
                    <a href="/" class="item-nav ${active === 'home' ? 'active' : ''}">Inicio</a>
                    <a href="/about" class="item-nav ${active === 'about' ? 'active' : ''}">Sobre mi</a>
                    <a href="/projects" class="item-nav ${active === 'projects' ? 'active' : ''}">Proyectos</a>
                    <a href="/contact" class="item-nav ${active === 'contact' ? 'active' : ''}">Contacto</a>
                </div>
            </nav>
        </header>
        `
    }
    footer() {
        let array = ["html", "css", "sass", "js", "nodejs", "electronjs", "php", "laravel", "SQLite", "MySQL", "mongodb"];
        let images = "";
        array.forEach(element => {
            images += `<img src="./img/${element}.png" alt="${element}">`
        });
        return `
        <footer class="footer">
            <div class="content-footer">
                <div class="content-skin">
                    ${images}
                </div>
                <div class="container-footer">
                    <div class="item-footer">
                        <h3 class="title-footer">Contacto</h3>
                        <p class="text-footer">
                            <span class="text-bold">Email:</span>
                            <a href="mailto:bjrsoftware@gmail.com" class="link-footer">
                                bjrsoftware@gmail.com
                            </a>
                            <span class="text-bold">-</span>
                            <a href="mailto:damar23nnm@gmail.com" class="link-footer">
                                damar23nnm@gmail.com
                            </a>
                        </p>
                        
                        <p class="text-footer">
                            <span class="text-bold">Teléfono:</span>
                            <a href="tel:573233236300" class="link-footer">
                                +57 323 323 6300
                            </a>
                        </p>
                    </div>
                    <div class="item-footer">
                        <h3 class="title-footer">Redes sociales</h3>
                        <a href="https://www.facebook.com/bjrsoftware" class="link-footer">
                            <i class="bi bi-facebook"></i>
                            Facebook
                        </a>
                        <a href="https://www.instagram.com/bjrsoftware" class="link-footer">
                            <i class="bi bi-instagram"></i>
                            Instagram
                        </a>
                        <a href="https://www.twitter.com/bjrsoftware" class="link-footer">
                            <i class="bi bi-twitter"></i>
                            Twitter
                        </a>
                        <a href="https://www.linkedin.com/in/bjrsoftware" class="link-footer">
                            <i class="bi bi-linkedin"></i>
                            Linkedin
                        </a>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}

module.exports = Components;