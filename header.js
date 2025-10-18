document.write(`
    <div class="header__top">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-lg-6 col-md-6">
                    <div class="social__links">
                        <a class="link__item gap-10" href="callto:+917846935345"><i class="flaticon-phone-flip"></i>
                            +91 7846935345</a>
                        <a class="link__item gap-10" href="mailto:#"><i class="flaticon-envelope"></i>twicehappyecoresorts@gmail.com</a>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="location">
                        <a class="link__item gap-10" href="#"><i class="flaticon-marker"></i>761017, Chandragiri, Gajapati, Odisha
                            </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <header class="main__header header__function">
        <div class="container">
            <div class="row">
                <div class="main__header__wrapper">
                    <div class="main__nav">
                        <div class="navigation d-none d-lg-block">
                            <nav class="navigation__menu" id="main__menu">
                                <ul class="list-unstyled">
                                    <li class="navigation__menu--item has-child ">
                                        <a href="index.html" class="navigation__menu--item__link">Home</a>
                                    </li>

                                    <li class="navigation__menu--item has-child has-arrow">
                                        <a href="#" class="navigation__menu--item__link">Rooms</a>
                                        <ul class="submenu sub__style" role="menu">
                                            <li role="menuitem" class="has-child">
                                                <a href="KING_SUIT_ROOM.html">KING SUIT ROOM</a>
                                            </li>
                                            <li role="menuitem" class="has-child">
                                                <a href="PREMIUM_SUIT_ROOM.html">PREMIUM SUIT ROOM</a>
                                            </li>
                                            <li role="menuitem" class="has-child">
                                                <a href="PREMIUM_ROOM.html">PREMIUM ROOM</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="navigation__menu--item has-child">
                                        <a href="about.html" class="navigation__menu--item__link">About</a>
                                    </li>
                                     <li class="navigation__menu--item has-child">
                                        <a href="gallery.html" class="navigation__menu--item__link">Gallery</a>
                                        </li>
                                    <li class="navigation__menu--item">
                                        <a href="contact.html" class="navigation__menu--item__link">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                    <div class="main__logo">
                        <a href="index.html"><img class="logo__class" src="assets/images/logo/logo.svg"
                                alt="Twice Happy Eco Resorts"></a>
                    </div>
                    <div class="main__right">
                        <a href="room-details-1.html" class="theme-btn btn-style sm-btn fill"><span>Book Now</span></a>
                        <button class="theme-btn btn-style sm-btn fill menu__btn d-lg-none" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <span><img src="assets/images/icon/menu-icon.svg" alt=""></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header> `);
