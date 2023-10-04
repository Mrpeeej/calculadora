function mult()
{
    let num = document.getElementById("caixaNum").value;

    let resul="";

    let i;

    for(i=1; i<=10; i++){
    resul+=+num+" x "+i+" = "+num*i+"<br>";
    }

    document.getElementById("resultado").innerHTML=resul;
    // .innetHTML da pra atribuir uma variavel a ele, escrevendo seu valor
    
}       