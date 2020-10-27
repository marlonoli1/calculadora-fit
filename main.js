function calcular() {
    var altura = document.getElementById("txtaltura");
    var peso = document.getElementById("txtpeso");
    var cint = document.getElementById("txtcintura");
    var resultado = document.getElementById("resultado")
    var resultado1 = document.getElementById("resultado1");
    var resultado2 = document.getElementById("resultado2");
    var idad = document.getElementById("txtidade");
    var alt = altura.value;
    var pes = peso.value;
    var cintura = cint.value;
    var idade = idad.value;
    var texto = "Massa Magra: ";
    var texto1 = "% de gordura corporal: "
    var texto2 = "Isso é considerado: "

    if (alt && pes != 0) {
        if (document.getElementById("male").checked == true) {
            calcula = (0.32810 * pes) + (0.33929 * alt) - 29.5336;
            percentual = 63 - (20 * (alt / cintura));
            texto = texto + Math.round(calcula) + " kg";
            texto1 = texto1 + Math.round(percentual) + "%";
            resultado.textContent = texto;
            resultado.style.color = "blue";
            resultado1.textContent = texto1;
            resultado1.style.color = "blue";

            if (idade <= 29) {
                if (percentual <= 5.2) {
                    texto2 = texto2 + "Muito Magro!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual >= 5.3 && percentual < 9.3) {
                    texto2 = texto2 + "Magro!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual >= 9.4 && percentual < 14.01) {
                    texto2 = texto2 + "Muito Bom!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual >= 14.1 && percentual < 17.5) {
                    texto2 = texto2 + "Saudável!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual >= 17.6 && percentual < 22.4) {
                    texto2 = texto2 + "Sobre Peso!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual >= 22.5 && percentual < 29.2) {
                    texto2 = texto2 + "Gordo!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual > 29.3) {
                    texto2 = texto2 + "Muito Gordo!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                }
            } else if (idade >= 30 && idade <= 39) {
                if (percentual <= 9.2) {
                    texto2 = texto2 + "Muito Magro!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual >= 9.3 && percentual < 14) {
                    texto2 = texto2 + "Magro!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual >= 14.1 && percentual < 17.5) {
                    texto2 = texto2 + "Muito Bom!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual >= 17.6 && percentual < 20.6) {
                    texto2 = texto2 + "Saudável!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual >= 20.7 && percentual < 24.2) {
                    texto2 = texto2 + "Sobre Peso!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual >= 24.3 && percentual < 30) {
                    texto2 = texto2 + "Gordo!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual > 30.1) {
                    texto2 = texto2 + "Muito Gordo!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                }
            } else if (idade >= 40 && idade <= 49) {
                if (percentual <= 11.5) {
                    texto2 = texto2 + "Muito Magro!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual >= 11.6 && percentual < 16.3) {
                    texto2 = texto2 + "Magro!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual >= 16.4 && percentual < 19.6) {
                    texto2 = texto2 + "Muito Bom!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual >= 19.7 && percentual < 22.5) {
                    texto2 = texto2 + "Saudável!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual >= 22.6 && percentual < 26.2) {
                    texto2 = texto2 + "Sobre Peso!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual >= 26.3 && percentual < 31.4) {
                    texto2 = texto2 + "Gordo!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual > 31.5) {
                    texto2 = texto2 + "Muito Gordo!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                }
            } else if (idade >= 50 && idade <= 59) {
                if (percentual <= 12.9) {
                    texto2 = texto2 + "Muito Magro!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual >= 13 && percentual < 18.1) {
                    texto2 = texto2 + "Magro!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual >= 18.2 && percentual < 21.2) {
                    texto2 = texto2 + "Muito Bom!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual >= 21.3 && percentual < 24.2) {
                    texto2 = texto2 + "Saudável!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual >= 24.3 && percentual < 27.6) {
                    texto2 = texto2 + "Sobre Peso!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual >= 27.7 && percentual < 32.4) {
                    texto2 = texto2 + "Gordo!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual > 32.5) {
                    texto2 = texto2 + "Muito Gordo!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                }
            } else if (idade >= 60) {
                if (percentual <= 13) {
                    texto2 = texto2 + "Muito Magro!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual >= 13.1 && percentual < 18.5) {
                    texto2 = texto2 + "Magro!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual >= 18.6 && percentual < 22) {
                    texto2 = texto2 + "Muito Bom!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual >= 22.1 && percentual < 25) {
                    texto2 = texto2 + "Saudável!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual >= 25.1 && percentual < 28.4) {
                    texto2 = texto2 + "Sobre Peso!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual >= 28.5 && percentual < 33.5) {
                    texto2 = texto2 + "Gordo!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                } else if (percentual > 33.6) {
                    texto2 = texto2 + "Muito Gordo!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "blue";
                }
            }
        } else {
            calcula = (0.29569 * pes) + (0.41813 * alt) - 43.2933;
            percentual = 76 - (20 * (alt / cintura));
            texto = texto + Math.round(calcula) + " kg";
            texto1 = texto1 + Math.round(percentual) + "%";
            resultado.textContent = texto;
            resultado.style.color = "magenta";
            resultado1.textContent = texto1;
            resultado1.style.color = "magenta";

            if (idade <= 29) {
                if (percentual <= 10.7) {
                    texto2 = texto2 + "Muito Magro!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual >= 10.8 && percentual < 17) {
                    texto2 = texto2 + "Magro!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual >= 17.1 && percentual < 20.5) {
                    texto2 = texto2 + "Muito Bom!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual >= 20.6 && percentual < 23.8) {
                    texto2 = texto2 + "Saudável!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual >= 23.9 && percentual < 27.6) {
                    texto2 = texto2 + "Sobre Peso!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual >= 27.7 && percentual < 35.5) {
                    texto2 = texto2 + "Gordo!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual > 35.6) {
                    texto2 = texto2 + "Muito Gordo!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                }
            } else if (idade >= 30 && idade <= 39) {
                if (percentual <= 13.3) {
                    texto2 = texto2 + "Muito Magro!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual >= 13.4 && percentual < 18) {
                    texto2 = texto2 + "Magro!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual >= 18.1 && percentual < 21.8) {
                    texto2 = texto2 + "Muito Bom!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual >= 21.9 && percentual < 24.8) {
                    texto2 = texto2 + "Saudável!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual >= 24.9 && percentual < 30) {
                    texto2 = texto2 + "Sobre Peso!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual >= 30.1 && percentual < 35.8) {
                    texto2 = texto2 + "Gordo!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual > 35.9) {
                    texto2 = texto2 + "Muito Gordo!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                }
            } else if (idade >= 40 && idade <= 49) {
                if (percentual <= 16.1) {
                    texto2 = texto2 + "Muito Magro!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual >= 16.2 && percentual < 21.4) {
                    texto2 = texto2 + "Magro!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual >= 21.5 && percentual < 25.1) {
                    texto2 = texto2 + "Muito Bom!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual >= 25.2 && percentual < 28.3) {
                    texto2 = texto2 + "Saudável!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual >= 28.4 && percentual < 32.1) {
                    texto2 = texto2 + "Sobre Peso!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual >= 32.2 && percentual < 37.7) {
                    texto2 = texto2 + "Gordo!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual > 37.8) {
                    texto2 = texto2 + "Muito Gordo!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                }
            } else if (idade >= 50 && idade <= 59) {
                if (percentual <= 18.8) {
                    texto2 = texto2 + "Muito Magro!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual >= 18.9 && percentual < 25.1) {
                    texto2 = texto2 + "Magro!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual >= 25.2 && percentual < 28.6) {
                    texto2 = texto2 + "Muito Bom!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual >= 28.7 && percentual < 32.5) {
                    texto2 = texto2 + "Saudável!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual >= 32.6 && percentual < 35.6) {
                    texto2 = texto2 + "Sobre Peso!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual >= 35.7 && percentual < 39.6) {
                    texto2 = texto2 + "Gordo!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual > 39.7) {
                    texto2 = texto2 + "Muito Gordo!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                }
            } else if (idade >= 60) {
                if (percentual <= 19.1) {
                    texto2 = texto2 + "Muito Magro!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual >= 19.2 && percentual < 25) {
                    texto2 = texto2 + "Magro!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual >= 25.1 && percentual < 29.5) {
                    texto2 = texto2 + "Muito Bom!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual >= 29.6 && percentual < 32.8) {
                    texto2 = texto2 + "Saudável!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual >= 32.9 && percentual < 36.7) {
                    texto2 = texto2 + "Sobre Peso!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual >= 36.8 && percentual < 40.4) {
                    texto2 = texto2 + "Gordo!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                } else if (percentual > 40.5) {
                    texto2 = texto2 + "Muito Gordo!!";
                    resultado2.textContent = texto2;
                    resultado2.style.color = "magenta";
                }
            }
        }
    } else {
        texto = "Digite os valores dos campos acima!";
        resultado.textContent = texto;
        resultado.style.color = "purple";
    }
}

var btResultado = document.getElementById("btResultado");
btResultado.addEventListener("click", calcular);