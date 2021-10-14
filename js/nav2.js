const createNav2 = () => {
    let nav2 = document.querySelector('.nav2');

    nav2.innerHTML = `<div class="nav2">
    <nav class="navbar" id="txt-font-11">
    <div class="container md-3" id="navbar2">
        <p id="txt-welcome"><i><B>Have you seen these amazing deals?</B><br>Treat yourself to one of these luxurious discount<br> with unbeatable value.</i></p>
        <img class="perfume" src="/img/perfumePack.png">
        <form class="d-flex" id="search-btn-box">
            <!-- Needs to be aligned at right -->
            <input class="form-control me-2 shadow-sm" id="txt-search" type="search" placeholder="Brand, toilet...">
            <button class="btn shadow-sm" id="btn-search" type="submit">
                <i class="bi bi-search"></i>
            </button>
        </form>
    </div>
</nav>
</div>`;
}

createNav2();