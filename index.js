// Esperar a que el DOM esté completamente cargado
$(document).ready(function() {

    // Manejar clic en enlaces de navegación
    $('a.nav-link').on('click', function(event) {
        var href = $(this).attr('href');
        if (href === '#inicio') {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 800);
        } else {
            if (href !== "") {
                event.preventDefault();
                var hash = href;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function() {
                    window.location.hash = hash;
                });
            }
        }
    });

    // Manejar scroll de la ventana
    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();
        $('section[id]').each(function() {
            var currentSection = $(this);
            var sectionId = currentSection.attr('id');
            var sectionTop = currentSection.offset().top - 100;
            var sectionBottom = sectionTop + currentSection.outerHeight();
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                $('.navbar-nav a.nav-link').removeClass('active');
                $('.navbar-nav a.nav-link[href="#' + sectionId + '"]').addClass('active');
            }
        });
    });

});


$(document).ready(function() {
    // Manejar clic en detalles-toggle
    $('.details-toggle').on('click', function() {
        // Encontrar el elemento .details-content más cercano
        var detailsContent = $(this).next('.details-content');

        // Alternar la visibilidad del contenido
        detailsContent.slideToggle();

        // Rotar el icono de flecha
        $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up');
    });
});

