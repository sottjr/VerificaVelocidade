function calcPar() {
    let velPermi = document.getElementById("selVelPermi")
    let velCondut = document.getElementById("inVelCondut")
    let outResult = document.getElementById("outResult");
    let teste = document.getElementById("teste");

    let maxVel = Number(velPermi.value);
    let condutVel = Number(velCondut.value);

    if (condutVel == 0 || isNaN(condutVel)) {
        alert("Insira a velocidade corretamente");
        velCondut.value = "";
        outResult.textContent = "";
        velCondut.focus();
        return
    }



    let percentualVel = condutVel / maxVel;

    if (percentualVel <= 1) {
        outResult.textContent = "Situação: Sem Multa";
    }
    if (percentualVel > 1 && percentualVel <= 1.2) {
        outResult.textContent = "Situação: Multa leve";
    }
    if (percentualVel >= 1.2) {
        outResult.textContent = "Situação: Multa Grave"
    }
}

let btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcPar);

