function funcionar() {
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var em = document.getElementById("em").value;
    var faculdade = document.getElementById("faculdade").value;

    if (idade >= 18) {
        console.log('Parabéns ' + nome + '. Você tem ' + idade + ' anos.');
    } else {
        console.log('Você ainda vai se encontrar')
    }
}

function segundobtn() {
 if(em === 'sim'){
    console.log('Maravilha! Você pode fazer a faculdade de: ' + faculdade);
}else{
    console.log('Infelizmente você não pode fazer a sua faculdade desejada: ' + faculdade);
}
}

