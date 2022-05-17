/*

let servicesSwiper;

const breakpointChecker = function () {
    // si se necesita una ventana gráfica más grande y un diseño de varias filas
    if (!servicesBreakpoint.matches) {
        if (servicesSwiper !== undefined) servicesSwiper.destroy(true, true);

        return null;
        // else si se necesita una ventana gráfica pequeña y un diseño de una sola columna
    } else {
        // activa la versión pequeña de la ventana gráfica del swiper
        console.log(servicesSwiper);
        return enableSwiper();
    }


};

function enableSwiper() {
    servicesSwiper = new Swiper('.services__list', {
        centeredSlides: true,

        pagination: '.swiper-pagination',
    })
}

servicesBreakpoint.addEventListener("change", breakpointChecker);

breakpointChecker();*/
let tabletBreakpoint = window.matchMedia('(max-width: 599px)');

let servicesSwiper;

const tabletBreakpointChecker = function () {
    if (tabletBreakpoint.matches) {
        return enableServicesSwiper();
    } else {
        if (servicesSwiper !== undefined) servicesSwiper.destroy(true, true);

        return null;
    }
}

function enableServicesSwiper() {
    servicesSwiper = new Swiper('.services__swiper', {
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

tabletBreakpoint.addEventListener("change", tabletBreakpointChecker);


tabletBreakpointChecker()