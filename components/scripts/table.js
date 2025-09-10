
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

    let taskHtmlCode = array.map( (task, index) => generateHtml(task, index) )

    tableBody.innerHTML = taskHtmlCode.join('\n')
        
}

function generateHtml(t, i){
    let htmlCode = 
        ` <tr>
            <th scope="row">
                <input type="checkbox" id="task-done-input-${i}" class="task-done-input"> 
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