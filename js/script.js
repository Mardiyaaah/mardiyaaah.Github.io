:root {
  --primary: #b6895b;
  --bg: #010101;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  text-decoration: none;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: var(--bg);
  color: #ffffff;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 7%;
  background-color: rgba(1, 1, 1, 0.8);
  border-bottom: 1px solid #513c28;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}

.navbar .navbar-logo {
  font-size: 2rem;
  font-weight: 70;
  color: #ffffff;
  font-style: italic;
}

.navbar .navbar-logo span {
  color: var(--primary);
}

.navbar .navbar-nav a {
  color: #fff;
  display: inline-block;
  font-size: 1.3rem;
  margin: 0 1rem;
}

.navbar .navbar-nav a:hover {
  color: var(--primary);
}

.navbar .navbar-nav a::after {
  content: '';
  display: block;
  padding-bottom: 0.5rem;
  border-bottom: 0.1rem solid var(--primary);
  transform: scaleX(0);
  transition: 0.2s linear;
}

.navbar .navbar-nav a:hover::after {
  transform: scaleX(0.5);
}

.navbar .navbar-extra a {
  color: #fff;
  margin: 0 0.5rem;
}

.navbar .navbar-extra a:hover {
  color: var(--primary);
}

#hamburger-menu {
  display: none;
}

/* Navbar search form */
.navbar .search-form {
  position: absolute;
  top: 100%;
  right: 7%;
  background-color: #fff;
  width: 50rem;
  height: 5rem;
  display: flex;
  align-items: center;
  transform: scaleY(0);
  transform-origin: top;
  transition: 0.3s;
}

.navbar .search-form.active {
  transform: scaleY(1);
}

.navbar .search-form input {
  height: 100%;
  width: 100%;
  font-size: 1.6rem;
  color: var(--bg);
  padding: 1rem;
}

.navbar .search-form label {
  cursor: pointer;
  font-size: 2rem;
  margin-right: 1.5rem;
  color: var(--bg);
}

/* Shopping Cart */
#shopping-cart-button {
  position: relative;
}
#shopping-cart-button .quantity-badge {
  display: inline-block;
  padding: 1px 5px;
  background-color: #b6895b;
  border-radius: 6px;
  font-size: 0.9rem;
  position: absolute;
  top: 0;
  right: -8px;
}

.shopping-cart {
  position: absolute;
  top: 100%;
  right: -100%;
  height: 100vh;
  width: 35rem;
  padding: 0 1.5rem;
  background-color: #609efa;
  color: var(--bg);
  transition: 0.3s;
}

.shopping-cart.active {
  right: 0;
}

.shopping-cart .cart-item {
  margin: 2rem 0;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px dashed #000000;
  position: relative;
}

.shopping-cart img {
  height: 4rem;
  border-radius: 50%;
}

.shopping-cart h3 {
  font-size: 1.4rem;
}

.shopping-cart .item-price {
  font-size: 1.2rem;
}

.shopping-cart .cart-item #add,
.shopping-cart .cart-item #remove {
  display: inline-block;
  padding: 5px 10px;
  cursor: pointer;
  margin: 0 10px;
  background-color: rgb(0, 0, 0);
  color: #ffffff;
  font-weight: bold;
  font-size: 15px;
}

.shopping-cart h4 {
  font-size: 1.6rem;
  margin-top: 1rem;
  text-align: center;
}


/* Checkout form */
.form-container {
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 2px dashed #000000;
  margin-top: 1rem;
  padding: 1rem;
}

.form-container h5 {
  text-align: center;
  font-size: 1rem;
}


.form-container Form {
  width: 100%;
  text-align: center;
}

.form-container label {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem 10;
}

.form-container span {
  text-align: center;
}

.form-container input {
  background-color: #ffffff;
  padding: 3px;
  font-size: 1.0rem;
  width: 75%;
  margin-top: 0.3rem;
  border-radius: 5px;
  align-content: center;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  -webkit-border-radius: 40px;
}

.form-container .checkout-button {
  padding: 6px 14px;
  background-color: rgb(35, 119, 245);
  color: #000;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 20px;
  margin: 1rem auto;
  cursor: pointer;
}

.form-container .checkout-button.disabled {
  background-color: #666;
  cursor: not-allowed;
}



/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-image: url('../img/backroudMF.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  -webkit-mask-image: linear-gradient(rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0));
  mask-image: linear-gradient(rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0));
}

/* .hero::after  {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 30%;
  bottom: 0;
  background: linear-gradient(0deg, rgba(1, 1, 3, 1) 8%, rgba(255, 255, 255, 0) 50%);
} */

.hero .mask-container {
  position: absolute;
  /* background: salmon; */
  inset: 0;
  -webkit-mask-image: url('../img/header-bg.svg');
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: cover;
  -webkit-mask-position: center;
}

.hero .content {
  padding: 1.4rem 7%;
  /* max-width: 60rem; */
  width: 100%;
  text-align: center;
  position: fixed;
  top: 130px;
}

.hero .content h1 {
  font-size: 5em;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(1, 1, 3, 0.5);
  line-height: 1.2;
}

.hero .content h1 span {
  color: var(--primary);
}

.hero .content p {
  font-size: 1.6rem;
  margin-top: 1rem;
  line-height: 1.4;
  font-weight: 100;
  text-shadow: 1px 1px 3px rgba(1, 1, 3, 0.5);
  mix-blend-mode: difference;
}

.hero .content .cta {
  margin-top: 1rem;
  display: inline-block;
  padding: 1rem 3rem;
  font-size: 1.4rem;
  color: #fff;
  background-color: var(--primary);
  border-radius: 0.5rem;
  box-shadow: 1px 1px 3px rgba(1, 1, 3, 0.5);
}

/* About Section */
.about,
.menu,
.products,
.contact {
  padding: 8rem 7% 1.4rem;
}

.about h2,
.menu h2,
.products h2,
.contact h2 {
  text-align: center;
  font-size: 2.6rem;
  margin-bottom: 3rem;
}

.about h2 span,
.menu h2 span,
.products h2 span,
.contact h2 span {
  color: var(--primary);
}

.about .row {
  display: flex;
}

.about .row .about-img {
  flex: 1 1 38rem;
}

.about .row .about-img img {
  width: 85%;
  -webkit-mask-image: url('../img/menu/splash.svg');
  -webkit-mask-size: 95%;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
}

.about .row .content {
  flex: 1 1 35rem;
  padding: 0 1rem;
}

.about .row .content h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.about .row .content p {
  margin-bottom: 0.8rem;
  font-size: 1.3rem;
  font-weight: 100;
  line-height: 1.6;
}

/* Menu Section */
.menu h2,
.products h2,
.contact h2 {
  margin-bottom: 1rem;
}
.menu p,
.products p,
.contact p {
  text-align: center;
  max-width: 30rem;
  margin: auto;
  font-weight: 100;
  line-height: 1.6;
}

.menu .row {
  display: flex;
  flex-wrap: wrap;
  margin-top: 5rem;
  justify-content: center;
}

.menu .row .menu-card {
  text-align: center;
  padding-bottom: 4rem;
}

.menu .row .menu-card img {
  border-radius: 50%;
  width: 80%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
}

.menu .row .menu-card .menu-card-title {
  margin: 1rem auto 0.5rem;
}

/* Products Section */
.products .row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 1.5rem;
  margin-top: 4rem;
}

.products .product-card {
  text-align: center;
  border: 1px solid #666;
  padding: 2rem;
}

.products .product-icons {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.products .product-icons a {
  width: 4rem;
  height: 4rem;
  color: #fff;
  margin: 0.3rem;
  border: 1px solid #666;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.products .product-icons a:hover {
  background-color: var(--primary);
  border: 1px solid var(--primary);
}

.products .product-image {
  padding: 1rem 0;
}

.products .product-image img {
  height: 25rem;
}

.products .product-content h3 {
  font-size: 2rem;
}

.products .product-stars {
  font-size: 1.7rem;
  padding: 0.8rem;
  color: var(--primary);
}

.products .product-stars .star-full {
  fill: var(--primary);
}

.products .product-price {
  font-size: 1.3rem;
  font-weight: bold;
}




/* Alamat Section */
.info {
  background-color: var(--bg);
  color: white;
  padding-top: 2rem;
  padding-bottom: 1rem;
  padding: 1rem;
  border-top: 2px dashed #b38404d2;
  margin-top: 1rem;
  text-align: center;
}

.info .alamat {
  font-size: 1.1rem;
  text-align: center;
}

.info .description {
  font-size: 1rem;
  font-weight: 100;
}

.info .card {
  background-color: rgba(255, 255, 255, 0.2) !important;
  color: white !important;
  border: 1px solid #999;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  box-sizing: border-box;
}

.info .card-header {
  border-bottom: 2px solid #999;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
}

.info .card-body {
  font-size: 1rem;
}

.info .card-footer {
  border-top: 2px solid #999;
  font-size: 0.9rem;
  font-weight: 300;
}


/* Footer */
footer {
  background-color: rgb(29, 110, 110);
  text-align: center;
  padding: 1rem 0 3rem;
  margin-top: 3rem;
}

footer .socials {
  padding: 1rem 0;
}

footer .socials a {
  color: #fff;
  margin: 1rem;
}

footer .socials a:hover,
footer .links a:hover {
  color: var(--bg);
}

footer .links {
  margin-bottom: 1.4rem;
}

footer .links a {
  color: #fff;
  padding: 0.7rem 1rem;
}

footer .credit {
  font-size: 0.8rem;
}

footer .credit a {
  color: var(--bg);
  font-weight: 700;
}

/* Modal Box */
/* Item Detail */
.modal {
  display: none;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-container {
  position: relative;
  background-color: #fefefe;
  color: var(--bg);
  margin: 15% auto;
  padding: 1.2rem;
  border: 1px solid #666;
  width: 80%;
  animation: animateModal 0.5s;
}

/* Modal Animation */
@keyframes animateModal {
  form {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

.modal-container .close-icon {
  position: absolute;
  right: 1rem;
}

.modal-content {
  display: flex;
  flex-wrap: nowrap;
}

.modal-content img {
  height: 20rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
}

.modal-content p {
  font-size: 1.2rem;
  line-height: 1.8rem;
  margin-top: 1.2rem;
}

.modal-content a {
  display: flex;
  gap: 1rem;
  width: 12rem;
  background-color: var(--primary);
  color: #fff;
  margin-top: 1rem;
  padding: 1rem 1.6rem;
}

/* Media Queries */
/* Laptop */
@media (max-width: 1366px) {
  html {
    font-size: 75%;
  }
}

/* Tablet */
@media (max-width: 758px) {
  html {
    font-size: 62.5%;
  }

  #hamburger-menu {
    display: inline-block;
  }

  .navbar .navbar-nav {
    position: absolute;
    top: 100%;
    right: -100%;
    background-color: #ffffffb2;
    width: 23rem;
    height: 100vh;
    transition: 0.5s;
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -ms-transition: 0.5s;
    -o-transition: 0.5s;
}

  .navbar .navbar-nav.active {
    right: 0;
  }

  .navbar .navbar-nav a {
    color: var(--bg);
    display: block;
    margin: 1.5rem;
    padding: 0.5rem;
    font-size: 2rem;
  }

  .navbar .navbar-nav a::after {
    transform-origin: 0 0;
  }

  .navbar .navbar-nav a:hover::after {
    transform: scaleX(0.2);
  }

  .navbar .search-form {
    width: 90%;
    right: 2rem;
  }

  .about .row {
    flex-wrap: wrap;
  }

  .about .row .about-img img {
    height: 24rem;
    object-fit: cover;
    object-position: center;
  }

  .about .row .content {
    padding: 0;
  }

  .about .row .content h3 {
    margin-top: 1rem;
    font-size: 2rem;
  }

  .about .row .content p {
    font-size: 1.6rem;
  }

  .menu p {
    font-size: 1.2rem;
  }

  .contact .row {
    flex-wrap: wrap;
  }

  .contact .row .map {
    height: 30rem;
  }

  .contact .row form {
    padding-top: 0;
  }

  .modal-content {
    flex-wrap: wrap;
  }
}

/* Mobile Phone */
@media (max-width: 500px) {
  html {
    font-size: 55%;
  }
}
