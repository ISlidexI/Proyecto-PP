window.onload = function() {
    const footer = document.querySelector('footer');
    footer.classList.add('pie-pagina');

    footer.innerHTML = `
    <div class="grupo-1">
    <div class="box">
        <figure>
            <a href="#">
                <img src="img/smoot.jpg" alt="Logo de SMOOT">
            </a>
        </figure>
    </div>
    <div class="box">
        <h2>SOBRE NOSOTROS</h2>
        <p>Smoot nació como un proyecto de pareja, donde buscamos darle a nuestros clientes la mejor atención</p>
        <p>Encontrá un espacio de relajación, cuidado personal, liberación y mimos. Te llevamos a vivir una experiencia dónde vos sos el protagonista</p>
    </div>
    <div class="box">
        <h2>SIGUENOS</h2>
        <div class="red-social">
            <a href="#" class="fa fa-facebook"></a>
            <a href="https://instagram.com/smoot.estetica?igshid=OGQ5ZDc2ODk2ZA==" class="fa fa-instagram"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-youtube"></a>
        </div>
    </div>
</div>
<div class="grupo-2">
    <small>&copy; 2023 <b>Smoot</b> - Todos los Derechos Reservados.</small>
</div>
    `
}

