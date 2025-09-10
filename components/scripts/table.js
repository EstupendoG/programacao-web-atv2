
const tableBody = document.querySelector('#taskBody')
const iFilterCategory = document.querySelector('filterCategory')

function renderTable(tasks, filter){
    let taskHtmlCode = tasks.map((task, index) => (
        ` <tr>
            <th scope="row">
                <input type="checkbox" id="task-done-input-${index}" class="task-done-input"> 
                <label for="task-done-input-${index}"></label>
            </th>
            <th class="task-name">
                ${task.nome}
            </th>
            <th class="task-category">
                ${task.categoria}
            </th>
            <th class="task-priority">
                <span class="${task.prioridade}">
                    ${task.prioridade}
                </span>
            </th>
            <th class="task-date">
                ${task.dataConclusao}
            </th>
            <th>
                <img src="assets/emojis/bubble-frustrated.png" alt="" class="delete-task-btn" onclick="deleteTask(${index})">
            </th>
        </tr> `
    ))

    tableBody.innerHTML = taskHtmlCode.join('\n')
        
}