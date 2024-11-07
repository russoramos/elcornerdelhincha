document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos todos los elementos con clase 'submenu'
    const submenus = document.querySelectorAll('.submenu');

    submenus.forEach(function(submenu) {
        // Cuando pasamos el cursor sobre cualquier 'submenu'
        submenu.addEventListener('mouseenter', function() {
            submenu.classList.add('active');
        });

        // Cuando quitamos el cursor de cualquier 'submenu'
        submenu.addEventListener('mouseleave', function() {
            submenu.classList.remove('active');
        });
    });
});



