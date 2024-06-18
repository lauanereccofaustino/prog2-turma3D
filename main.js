}

function atualizaCronometro() {

    for (let i = 0; i < contadores.length; i++) {
        contadores[i].textContent = calculaTempo(tempos[i]);
    }
    @@ -52, 4 + 53, 4 @@function comecaCronometro() {
        setInterval(atualizaCronometro, 1000);
    }

    comecaCronometro();
//comecaCronometro();
