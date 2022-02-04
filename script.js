const result = document.getElementById('resultado')
result.style.display = "none";
const cada = document.getElementById('cada')
cada.style.display = "none";

function btnCalcular(){
    let totalConta = document.getElementById('totalConta').value;
    let cover = document.getElementById('cover').value;
    let taxaServico = document.getElementById('taxa').value;
    let pessoas = document.getElementById('dividirConta').value;

    if(totalConta === "" || cover === "" || taxaServico == 'x' || isNaN(totalConta) || isNaN(cover) || isNaN(pessoas)){
        alert('Por favor coloque um valor valido em todos os campos!')
        return
    }

    if(taxaServico == 0){
        taxaServico = 1
    }

    if(pessoas === "" || pessoas <= 1){
        pessoas = 1;
        const cada = document.getElementById('cada')
        cada.style.display = "none";
    } else{
        const cada = document.getElementById('cada')
        cada.style.display = "block";
    }

    let totalTaxaServico = parseInt(totalConta) * taxaServico;

    let calculoJantar = (parseInt(totalConta) + parseInt(totalTaxaServico)) + parseInt(cover);

    let jantarPorPessoa = parseInt(calculoJantar) / parseInt(pessoas)

    jantarPorPessoa = jantarPorPessoa.toFixed(2);

    const result = document.getElementById('resultado')
    result.style.display = "block";
    document.getElementById('valorPessoa').innerHTML = jantarPorPessoa
}

document.getElementById('calcular').onclick = function(){
    btnCalcular();
}