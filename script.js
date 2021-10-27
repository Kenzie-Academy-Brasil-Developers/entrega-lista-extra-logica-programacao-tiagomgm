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
    let duz = 0
    let cem = 0
    let cinq = 0
    let vint = 0
    let dez = 0
    let cinc = 0
    let dois = 0
    if (saque >= 200) {
        do {
            saque -= 200;
            duz += 1            
        } while (saque >= 200);

    } if (saque < 200 && saque > 99) {
        do {
            saque -= 100;
            cem += 1            
        } while (saque < 200 && saque > 99);
    
    } if (saque < 100 && saque > 49) {
        do {
            saque -= 50;
            cinq += 1            
        } while (saque < 100 && saque >= 49);

    } if (saque < 50 && saque > 19) {
        do {
            saque -= 20;
            vint += 1            
        } while (saque < 50 && saque > 19);

    } if (saque < 20 && saque > 9) {
        do {
            saque -= 10;
            dez += 1            
        } while (saque < 20 && saque > 9);

    } if (saque < 10 && saque > 4) {
        do {
            saque -= 5;
            cinc += 1            
        } while (saque < 10 && saque > 4);

    } if (saque < 5 && saque > 1) {
        do {
            saque -= 2;
            dois += 1
            
        } while (saque < 15 && saque > 1);
    }
    return (duz + " de R$200, " 
            + cem + " de R$ R$00, " 
            + cinq + " de R$50, " 
            + vint + " de R$20, " 
            + dez + " de R$10, " 
            + cinc + " de R$5, " 
            + dois + " de R$2 "
            + "e restou R$" + saque + " na conta.")
}
    


// ------------------------------------------------------------------------------------

function calculateStock(qAtual, qMax, qMin) {
            let qMedia = (qMax + qMin) / 2
            if (qAtual >= qMedia) {
                return "Não efetuar compra"
            } return "Efetuar compra" 
}

// ------------------------------------------------------------------------------------


function calculateAge(aNasc, aAtual) {
            let age = aAtual - aNasc
            return (
                "Sua idade em anós é: " + age +
                ". Sua idade em meses é: " + (age * 12) +
                ". Sua idade em dias é: " + (age * 365) +
                ". Sua idade em semanas é: " + (age * 52)
            )
}

// ------------------------------------------------------------------------------------

function getDiagonal(array) {
        let diagonal = ""
        for (i = 0; i < array.length; i++) {
            for (j = 0; j < array.length; j++) {
                if (j === i) {
                    if (j === array.length - 1) {
                        diagonal += (array[i][j])
                    } {
                        diagonal += (array[i][j] + ", ")
                        //   console.log(array[i][j])
                    }
                }
            }
        } return diagonal
}