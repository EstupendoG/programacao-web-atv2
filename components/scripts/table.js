
const tableBody = document.querySelector('#taskBody')
const iFilterCategory = document.querySelector('#filterCategory')
const iFilterSort = document.querySelector('#filterSort')

iFilterCategory.addEventListener('change', setFilter)
iFilterSort.addEventListener('change', setFilter)

let fCategory
let fSort
setFilter()

function setFilter() {
    fCategory = iFilterCategory.value
    fSort = iFilterSort.value

    renderTable(tasks)
}

function renderTable(tasks){
    let array
    if(fCategory.toLowerCase() === 'todos') {
        array = tasks
    }
    else {
        let filteredArray = tasks.filter( task => task.categoria === fCategory )
        array = filteredArray
    }

    if (fSort === 'prioridade') {
        array = array.sort((a, b) => a.prioridade - b.prioridade)
    }
    else
    if (fSort === 'data') {
        array = array.sort((a, b) => a.data - b.data)
    }

    let tasksTodo = array.filter((t) => t.finalizado === false)
    let tasksDone = array.filter((t) => t.finalizado === true)

    let tasksTodoHtml = tasksTodo.map( (task) => generateHtml(task, tasks.indexOf(task)) )
    let tasksDoneHtml = tasksDone.map( (task) => generateHtml(task, tasks.indexOf(task)) )

    tableBody.innerHTML =  tasksTodoHtml.join('\n')
    tableBody.innerHTML += tasksDoneHtml.join('\n')
        
}

function generateHtml(t, i){
    let htmlCode = 
        ` <tr class="${t.finalizado === true ? 'task-done' : '' }">
            <th scope="row">
                <input type="checkbox" id="task-done-input-${i}" class="task-done-input" onchange="changeTaskState(${i})" ${t.finalizado === true && ('checked')}>
                <label for="task-done-input-${i}"></label>
            </th>
            <th class="task-name">
                ${t.nome}
            </th>
            <th class="task-category">
                ${t.categoria}
            </th>
            <th class="task-priority">
                <span class="${t.prioridadeDisplay}">
                    ${t.prioridadeDisplay}
                </span>
            </th>
            <th class="task-date">
                ${t.dataDisplay}
            </th>
            <th>
                <img src="assets/emojis/bubble-frustrated.png" alt="" class="delete-task-btn" onclick="deleteTask(${i})">
            </th>
        </tr> `
    
    return htmlCode
}