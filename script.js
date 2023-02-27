var itens = []

document.querySelector("button[type=submit]")
.addEventListener("click", () => {
    
    let nomeProduto = document.querySelector("input[name=inp-produto]")
    let precoProduto = document.querySelector("input[name=inp-valor]")

    itens.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    })

    //console.log(itens)

    let exibicaoProduto = document.querySelector(".box-resultado")
    //console.log(exibicaoProduto)
    exibicaoProduto.innerHTML = ""
    let soma = 0

    itens.map((valor) => {
        soma+= parseFloat(valor.valor)
        exibicaoProduto.innerHTML+= `
        
            <div class="box-resultado" style=" display: flex; 
            width: 80%; 
            justify-content: space-between; 
            padding: 1em; 
            margin-left: 10%;">
                <h2>`+valor.nome+`</h2>
                <h2>R$`+valor.valor+`</h2>
            </div>
            <hr>
        
        `

        //console.log(soma)

        nomeProduto.value = ""
        precoProduto.value = ""

        // realizar a soma total dos produtos

        soma.toFixed(2)

        let boxTotalValores = document.querySelector(".box-somavalores")

        boxTotalValores.innerHTML = `
        
            <div>
                <p>TOTAL: R$ `+soma+`</p>
            </div>
        
        `
    })
    
    }) 