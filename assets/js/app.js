var listaTarefas = []

function carregarInformacoes() {
        // Alterar numTarefas para o número de tarefas na lista

    document.getElementById("numTarefas").innerHTML = listaTarefas.length

    if (listaTarefas.length === 0) {
        document.getElementById("semTarefas").style.display = 'block'
        document.getElementById("listaTarefas").style.display = 'none'
    } else {
        document.getElementById("listaTarefas").style.display = 'block'
        document.getElementById("semTarefas").style.display = 'none'
    }
}
// Executa a função 
carregarInformacoes()

// Adicionar uma esculta no elemento do formulario para quando enviar executar a função de cadastrar
var formCadastro = document.getElementById("formCadastroTarefa")

formCadastro.addEventListener("submit", function(evento){
    evento.preventDefault() // Previne o comportamento padrão do formulário de recarregar a página
    
    // Pegar o valor digitado no input
    var dadosForm = new FormData(this)

    var tarefa = dadosForm.get("tarefa")
    
    // Adicionar a tarefa na lista de tarefas
    listaTarefas.push(tarefa)

    // Executar a função para carregar as informações
    carregarInformacoes()
})