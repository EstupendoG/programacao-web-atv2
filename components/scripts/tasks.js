let tasks = []

// ================================================================================= CADASTRANDO TAREFAS
const iTaskName = document.querySelector('input#taskNome')
const iTaskCategory = document.querySelectorAll("input[name='task_categoria']")
const iTaskPriority = document.querySelectorAll("input[name='task_prioridade']")
const iTaskDate = document.querySelector('input#taskDate')
const form = document.querySelector('#taskForm')

form.addEventListener('submit', submitForm)

function submitForm(e){
    // Previne a página de recarregar
    e.preventDefault()

    // Definindo valor das variáveis
    let name = iTaskName.value
    let category = document.querySelector("input[name='task_categoria']:checked").value
    let priority = Number(document.querySelector("input[name='task_prioridade']:checked").value)
    let date = iTaskDate.value

    // Verificando se a data de conclusão da tarefa é anterior à data atual
    let dateParts = date.split('-')
    let taskDate = new Date(dateParts[0], dateParts[1] -1, dateParts[2])
    let currentDate = new Date(new Date().toDateString())
    if(taskDate < currentDate) {
        alert('Essa tarefa não vai ser concluída antes do dia internacionalmente conhecido como hoje!')
        return 
    }
    else
    if(taskDate.getFullYear() - currentDate.getFullYear() >= 120){
        alert(`A tarefa deve ser realizável dentro do seu período de vida! (max.: ${currentDate.getFullYear() + 120})`)
        return
    }


    let dateDisplay = `${dateParts[2]} / ${dateParts[1] -1} / ${dateParts[0]}`
    let priorityDisplay = 
        priority === 1 ? 'alta'  : 
        priority === 2 ? 'média' :
        'baixa'

    // Criando Nova Tarefa
    let newTask = {
        nome: name,
        categoria: category,
        prioridadeDisplay: priorityDisplay,
        prioridade: priority,
        dataDisplay: dateDisplay,
        data: taskDate,
    }
    tasks.push(newTask)

    // Limpando Formulário
    iTaskName.value = ''
    iTaskCategory[0].checked = true 
    iTaskPriority[0].checked = true 
    iTaskDate.value = ''

    // Renderizando Tabela
    renderTable(tasks)
}

// ================================================================================= DELETANDO TAREFAS
function deleteTask(index){

    if (confirm(`Você realmente quer excluir a tarefa ${tasks[index].nome}?`)){
        tasks.splice(index, 1)
        
        // Renderizando Tabela
        renderTable(tasks)
    }


}