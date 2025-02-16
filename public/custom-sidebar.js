document.addEventListener("DOMContentLoaded", function() {
        // Seleziona il <nav> utilizzando l'attributo aria-labelledby
        var nav = document.querySelector('[aria-labelledby="starlight__on-this-page"]');
        if (nav) {
            var toc = nav.querySelector('ul'); // Trova il <ul> dentro il <nav>
            if (toc && toc.children.length <= 1) {
                nav.remove(); // Rimuovi completamente il <nav> se ha 1 o meno elementi
            } else {
                // Modifica il testo di <h2> se la lista contiene più di 1 elemento
                var h2 = nav.querySelector('h2');
                if (h2) {
                    h2.textContent = 'Contenuti'; // Cambia il testo da "On this page" a "Contenuti"
                }
            }
        }
});
