function toggleMenu() {
    let menu = document.getElementById("menu");

    if (menu.style.left === "0px") {
        menu.style.left = "-250px";
    } else {
        menu.style.left = "0px";
    }
}

function canviarPagina(pagina) {

    let content = document.getElementById("content");

    if (pagina === "inici") {
        content.innerHTML = `
        <h2>IES Sineu</h2>
        <p>Informació del centre educatiu.</p>
        `;
    }

    if (pagina === "dpt") {
    content.innerHTML = `
    <h2>🖥️ Departament d’Informàtica – IES Sineu</h2>

    <div class="card">
        <p>
        El Departament d’Informàtica de l’IES Sineu té com a objectiu formar l’alumnat en les competències digitals essencials per al seu futur acadèmic i professional. A través d’una metodologia pràctica i actualitzada, es treballen coneixements tecnològics que permeten adaptar-se a un món cada vegada més digitalitzat.
        </p>
    </div>

    <div class="card">
        <h3>🎯 Objectius</h3>
        <ul>
            <li>Desenvolupar el pensament computacional i la resolució de problemes</li>
            <li>Fomentar l’ús responsable i segur de les tecnologies</li>
            <li>Preparar l’alumnat per a estudis superiors o el món laboral</li>
            <li>Impulsar la creativitat mitjançant projectes tecnològics</li>
        </ul>
    </div>

    <div class="card">
        <h3>📚 Assignatures</h3>
        <p><strong>ESO</strong></p>
        <ul>
            <li>Tecnologies de la Informació i la Comunicació (TIC)</li>
            <li>Introducció a la programació</li>
            <li>Ús bàsic d’eines digitals</li>
        </ul>

        <p><strong>Batxillerat</strong></p>
        <ul>
            <li>TIC I i TIC II</li>
            <li>Programació i desenvolupament de projectes</li>
            <li>Xarxes i sistemes informàtics</li>
        </ul>

        <p><strong>Formació Professional</strong></p>
        <ul>
            <li>Desenvolupament d’aplicacions web</li>
            <li>Sistemes microinformàtics i xarxes</li>
            <li>Bases de dades</li>
        </ul>
    </div>

    <div class="card">
        <h3>💻 Instal·lacions</h3>
        <ul>
            <li>Aules d’informàtica equipades amb ordinadors actualitzats</li>
            <li>Programari educatiu i professional</li>
            <li>Recursos per a programació</li>
        </ul>
    </div>

    <div class="card">
        <h3>🚀 Projectes i activitats</h3>
        <ul>
            <li>Participació en concursos tecnològics</li>
            <li>Desenvolupament de pàgines web i aplicacions</li>
            <li>Activitats relacionades amb la robòtica</li>
        </ul>
    </div>

    <div class="card">
        <h3>👩‍🏫 Professorat</h3>
        <p>
        El departament està format per un equip de professors especialitzats en informàtica i noves tecnologies, compromesos amb la innovació educativa i l’aprenentatge pràctic.
        </p>
    </div>

    <div class="card">
        <h3>📩 Contacte</h3>
        <p>📍 IES Sineu</p>
        <p>🌐 Web del centre</p>
        <p>📧 Correu electrònic del departament</p>
    </div>
    `;
}

    if (pagina === "cert") {
        content.innerHTML = `
        <h2>Certificat Professional</h2>
        <p>Informació del certificat.</p>
        `;
    }

    if (pagina === "gm") {
        content.innerHTML = `
        <h2>Grau Mitjà</h2>

        <div class="card">
            <h3>Projecte 1</h3>
            <img src="img1.jpg">
            <p>Descripció.</p>
            <a href="#">Descarregar</a>
        </div>
        `;
    }

    if (pagina === "gs") {
        content.innerHTML = `
        <h2>Grau Superior</h2>

        <div class="card">
            <h3>Projecte 1</h3>
            <img src="img2.jpg">
            <p>Descripció.</p>
            <a href="#">Descarregar</a>
        </div>
        `;
    }

    // tancar menú
    document.getElementById("menu").style.left = "-250px";
}

canviarPagina("inici");