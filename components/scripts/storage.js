window.addEventListener("beforeunload", () => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
})

window.addEventListener("load", () => {
    let savedTasks = JSON.parse(localStorage.getItem("tasks")) || []
    tasks = Array.isArray(savedTasks) ? savedTasks : []
    console.log(tasks)

    renderTable(tasks)
})