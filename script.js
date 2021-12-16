function CriaCalculadora() {
  let display = document.querySelector(".display");

  let fazerConta = function () {
    let total = display.value;
    try {
      total = eval(total);
      display.value = total;
    } catch (e) {
      alert("Valor inválido!");
      return;
    }
  };

  let apagarUm = function () {
    display.value = display.value.slice(0, -1);
  };


  
  function pegarNumeros() {
    document.querySelector("body").addEventListener("click", (e) => {
      const el = e.target;
      if (el.classList.contains("btn-num")) {
        btnParaDisplay(el.innerText);
      }

      if (el.classList.contains("btn-eq")) {
        fazerConta();
      }

      if (el.classList.contains("btn-clear")) {
        display.value = "";
      }

      if (el.classList.contains("btn-del")) {
        apagarUm();
      }

      display.focus();
    });
  }

  function calcularComEnter() {
    document.querySelector("body").addEventListener("keypress", (e) => {
      if (e.which == 13) {
        fazerConta();
      }
    });
  }

  function apagarComBackSpace() {
    document.querySelector("body").addEventListener("keypress", (e) => {
      if (e.which == 8) {
        apagarUm();
      }
    });
  }

  function apagarComC() {
    document.querySelector("body").addEventListener("keyup", (e) => {
      if (e.which == 67) {
        display.value = "";
      }
    });
  }

  let btnParaDisplay = function (valor) {
    display.value += valor;
  };
  pegarNumeros();
  calcularComEnter();
  apagarComC();
  apagarComBackSpace();
}

let teste = new CriaCalculadora();
