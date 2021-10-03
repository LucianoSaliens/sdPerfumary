const createNav1 = () => {
    let nav1 = document.querySelector('.nav1');

    nav1.innerHTML = `<div class="nav1">
    <nav class="navbar navbar-expand-lg navbar-light border-bottom shadow mb-3" id="navbar">
    <!-- Container for the items inside Navbar -->
    <div class="container">
        <!-- Brand-logo -->
        <a id="brand-logo" href="../../index.html">
            <img class="logo" src="/img/logo.png">
        </a>
        <!-- Hamburger for the items when smaller screen -->
        <button class="navbar-toggler shadow-sm" id="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
    <span class="navbar-toggler-icon"></span>
  </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <!-- <li class="nav-item">
                    <a class="nav-link" id="nav-link" href="index.html">Home</a>
                </li> -->
                <li class="nav-item">
                    <a class="nav-link" id="nav-link" href="/html/aboutUs.html">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="nav-link" href="/html/contactUs/contact.html">Contact Us</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
          Category
        </a>
                    <!-- Implement ajax link to find the items for each category -->
                    <ul class="dropdown-menu shadow-sm " id="dropdown-menu">
                        <li><a class="dropdown-item" id="dropdown-item" href="/html/category/women.html">Women</a></li>
                        <li><a class="dropdown-item" id="dropdown-item" href="/html/category/men.html">Men</a></li>
                        <li><a class="dropdown-item" id="dropdown-item" href="/html/category/allBrands.html">All Brands</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" id="dropdown-item" href="/html/category/bestSellers.html">Best Sellers</a></li>
                    </ul>
                </li>
            </ul>
            <a class="nav-link me-3" id="nav-link" href="/html/register/signIn.html">Sign In</a>
            <div class="align-self-end">
                <a class="login" href="/html/register/login.html">
                    <i class="bi bi-person me-4" id="login"></i>
                </a>
                <a class="cart" href="/html/cart.html">
                    <i class="bi bi-cart" id="cart"></i>
                </a>
            </div>
        </div>
    </div>
</nav>
</div>`;
}

createNav1();