const azul = document.querySelector('.azul')
const button = document.querySelector('.btn')
const quadrado = document.querySelector(".quadrado")

button.addEventListener("click", function () {

    if (quadrado.classList.contains("azul")) {
        quadrado.classList.remove("azul")
        quadrado.classList.add("amarelo")
    }else if(quadrado.classList.contains("amarelo")){
        quadrado.classList.remove("amarelo")
        quadrado.classList.add("verde")
    }else{
        quadrado.classList.remove('verde')
        quadrado.classList.add("azul")
    }
})

// const button = document.querySelector('.btn');
// const quadrado = document.querySelector('.quadrado');

// button.addEventListener('click', function () {
//     switch (true) {
//         case quadrado.classList.contains('azul'):
//             quadrado.classList.replace('azul', 'amarelo');
//             break;
//         case quadrado.classList.contains('amarelo'):
//             quadrado.classList.replace('amarelo', 'verde');
//             break;
//         default:
//             quadrado.classList.replace('verde', 'azul');
//             break;
//     }
// });
