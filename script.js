function comissao(vendas) {
    let total = 0
    while (vendas <= 1200) {
        return vendas * 0.03
    } if (vendas > 1200) {
        total = vendas - 1200
    } return 36 + (total * 0.05)
}

function calculateSalary(salario, vendas) {
    return salario + comissao(vendas)
}

// ------------------------------------------------------------------------------------

function cashMachine(saque) { 

    let duzentos = 0
    let cem = 0
    let cinquenta = 0
    let vinte = 0
    let dez = 0
    let cinco = 0
    let dois = 0

    let total = ""

    if (saque >= 200) {
        let duzentos = 0
        do {
            saque -= 200;
            duzentos += 1            
        } while (saque >= 200);

        duzentos = duzentos + " de R$200 "
        total += duzentos

    } if (saque < 200 && saque > 99) {
        do {
            saque -= 100;
            cem += 1            
        } while (saque < 200 && saque > 99);
        cem = cem + " de R$100, "
        total += cem
    
    } if (saque < 100 && saque > 49) {
        do {
            saque -= 50;
            cinquenta += 1            
        } while (saque < 100 && saque >= 49);
        cinquenta = cinquenta + " de R$50, "
        total += cinquenta

    } if (saque < 50 && saque > 19) {
        do {
            saque -= 20;
            vinte += 1            
        } while (saque < 50 && saque > 19);
        vinte = vinte + " de R$20, "
        total += vinte

    } if (saque < 20 && saque > 9) {
        do {
            saque -= 10;
            dez += 1            
        } while (saque < 20 && saque > 9);
        dez = dez + " de R$10, "
        total += dez

    } if (saque < 10 && saque > 4) {
        do {
            saque -= 5;
            cinco += 1            
        } while (saque < 10 && saque > 4);
        cinco = cinco + " de R$5, "
        total += cinco

    } if (saque < 5 && saque > 1) {
        do {
            saque -= 2;
            dois += 1            
        } while (saque < 15 && saque > 1);
        dois = dois + " de R$2 "
        total += dois
    }
    return total + "e restou R$" + saque
    
// ------------------------------------------------------------------------------------

function calculateStock(qAtual, qMax, qMin) {
            let qMedia = (qMax + qMin) / 2
            if (qAtual >= qMedia) {
                return "Não efetuar compra"
            } return "Efetuar compra" 
}

// ------------------------------------------------------------------------------------


function calculateAge(aNasc, aAtual) {
    let age = (aAtual - aNasc)
    let meses = (age * 12)
    let dias = (age * 365) 
    let semanas = (age * 52) 
    return "Sua idade é: " + age + " anos, "+  meses  + " meses, " + dias + " dias e " + semanas + " semanas."               
}

// ------------------------------------------------------------------------------------

function getDiagonal(array) {
    let diagonal = []
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (j === i) {
                diagonal.push(array[i][j] )
              }
            }
        } return diagonal.join(', ')
}