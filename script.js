var op, n1, n2;

function alterarTexto(num){
    var div = document.getElementById("resultado").offsetWidth;
    var tam = document.getElementById("texto").offsetWidth;
    var txt = document.getElementById("texto").innerHTML;

    if(div-20 >= tam){
        document.getElementById("texto").innerHTML = txt + num;
    }
}

function escolherOp(operacao){
    op = operacao;
    n1 = parseInt(document.getElementById("texto").innerHTML);

    document.getElementById("texto").innerText = "";
}

function resFinal(){
    var opr = op;
    var num1 = n1;
    var num2 = parseInt(document.getElementById("texto").innerHTML);
    var res = operacoes(opr, num1, num2);

    document.getElementById("texto").innerHTML= "";
    document.getElementById("texto").innerHTML = res;
}

function operacoes(op, n1, n2){
    var res;

    switch(op){
        case 'adicao':
            res = n1+n2;
            break;

        case 'subs':
            res = n1-n2;
            break;

        case 'multi':
            res = n1*n2;
            break;

        case 'divisao':
            res = n1/n2;
            break;
    }

    return res;
}

function limparTudo(){
    n1 = 0;
    n2 = 0;
    op = "";
    document.getElementById("texto").innerHTML = "";
}






