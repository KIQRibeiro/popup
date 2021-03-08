function enviar(){              // Envia o valor para o input da página anterior e fecha a página
    const inputPaginaAnterior = window.opener.document.querySelector('#primeiro')       // Peguei o input da página anterior
    const texto = document.querySelector('#texto').value                                // Peguei o valor digitado no input desta página
    
    inputPaginaAnterior.value = texto       // Atribui o valor do input da página anterior igual o texto digitado
    window.close()                          // Fecho está página
}

function adicionar(){           // Adiciona o valor na a opção do select, seleciona ele e fecha a página
    const selectPaginaAnterior = window.opener.document.querySelector('#selecionar')        // Pegando o select da página anterior
    const texto = document.querySelector('#texto').value                                    // Pegando o texto digitado nesta página

    /*
        Está parte que é mais "chatinha" no select, porque não dá só para enviar o valor,
        precisa criar a opção e depois selecionar ela. Neste caso aqui é até mais simples,
        mas dependendo de como está o select do teu projeto, isto aqui pode ser mais maior
    */

    const option = document.createElement('option')         // Criei uma tag option
    option.value, option.innerText = texto                  // Atribui o valor e o texto da option igual o valor digitado no input desta página

    selectPaginaAnterior.appendChild(option)        // Inseri a option no select
    selectPaginaAnterior.value = texto              // Selecionei a opção que tem o mesmo valor do texto adicionado

    window.close()      // Fecha a janela do popup
}