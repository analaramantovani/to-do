var listaTaredas = [  ]

function carregarInformacoes() {
      document.getElementById("numTarefas").innerHTML = listaTaredas.length
    if (listaTaredas.length<=0) {
        document.getElementById("listaTarefas").style. display = "none"
        document.getElementById("semTarefas").style. display = "block"
    }
    else{
        document.getElementById("listaTarefas").style. display = "block"
        document.getElementById("semTarefas").style. display = "none"
    }
}

//executa a função
carregarInformacoes()

//atv 2
var formCadastro = document.getElementById("formCadastroTarefa")

formCadastro.addEventListener('submit',function(evento) {
    evento.preventDefault(); // bloqueia os eventos padrões
    //pegar os dados do formulario
    var dadosForm = new FormData(this)

    var tarefa = dadosForm.get("tarefa")
    //adicionar na lista oque a pessoa digitou

    listaTaredas.push(tarefa)

    //executar a fução
    carregarInformacoes()
})
