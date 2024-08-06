const addSubTask = document.getElementById('addSubTask')
const subTaskList = document.getElementById('subTaskList')
const form = document.getElementById('taskForm')
let inputRows = 0
let tasks = []



addSubTask.addEventListener('click', function(ev) {
    //Comando para criar a label e seus atributos
    const newLabel = document.createElement('label')
    newLabel.innerText = 'Subtarefa:'
    newLabel.htmlFor = 'subTaskItem'

    //Comando para criar o input e seus atributos
    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.id = 'subTaskItem'
    newInput.name = 'subTask'
    

    const newRow = document.createElement('li')
    //Aqui cada li vai receber um número de Id
    newRow.id = inputRows
    inputRows++
    newRow.className = 'inputRow'


    //Aqui vamos criar um botão para remover a linha
    const removeTaskBtn = document.createElement('button')
    removeTaskBtn.type = 'button'
    removeTaskBtn.innerText = 'Remover Subtarefa'
    removeTaskBtn.addEventListener('click', function() {
        //Vamos remover a subtarefa adicionada que é filha da tag ul (subTaskList)
        subTaskList.removeChild(newRow)
    })

    newRow.append(
        newLabel, newInput, removeTaskBtn
    )
    subTaskList.appendChild(newRow)
})

// O formulário também deve ter um botão de cadastrar que salva as informações da tarefa em um array e limpa o formulário.
// REVISAR ESTA PARTE DO CÓDIGO
form.addEventListener('submit', function(ev) {
    ev.preventDefault()
    const taskName = document.getElementById('task')


    //Aqui vamos pegar todos os elementos que são filhos do elemento com a classe .inputRow e que tenham input[name="subTask"]
    //Depois de pegos, para cada elemento deste vamos pegar seu respectivo valor e colocar no Array subTaskNames. Assim fazendo um array só com os nomes de subtarefas
    subTaskNames = []
    const subTaskName = document.querySelectorAll('.inputRow input[name="subTask"]')
    subTaskName.forEach(function(subTask) {
        subTaskNames.push(subTask.value)
    })
    const newTask = {taskName: taskName.value, subTasks: subTaskNames}
    tasks.push(newTask)
    alert('Dev Cadastrado com Sucesso!')

    //Vamos limpar o formulário agora
    taskName.value = ''
    const inputRows = document.querySelectorAll('.inputRow')
    inputRows.forEach(function(row) {
        row.remove()
    })
    console.log(tasks)

})