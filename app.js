'use strict'                                                // Força rigor a erros
const switcher = document.querySelector('.btn');            // Conecta o HTML ao Java e prorura o elemento ".btn" e guarda a informação
switcher.addEventListener('click', function () {            // Avisa o que fazer caso aconteça o "click"
    document.body.classList.toggle('dark-theme');           // "toggle" funciona como interruptor

    var className = document.body.className;                // Cria a váriavel
    if(className == "light-theme") {                        // Se...
        this.textContent = "Dark";                          // Faça...
    }
    else {                                                  // Senão... 
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);        // Faça...
});
