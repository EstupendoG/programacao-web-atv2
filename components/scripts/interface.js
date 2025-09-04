const html = document.documentElement


// =================================================== TEMA

const iTheme = document.querySelector("#changeTheme")
iTheme.addEventListener('click', changeTheme)

function changeTheme() {
    console.log('clicou ebaAAAAAA')
    iTheme.checked
    ? html.setAttribute("data-theme", 'dark')
    : html.setAttribute("data-theme", 'light')
}

// =================================================== 

