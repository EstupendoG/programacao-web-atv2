const html = document.documentElement


// =================================================== TEMA

const iTheme = document.querySelector("#changeTheme")
let currentTheme = 'dark'
iTheme.addEventListener('click', changeTheme)

function changeTheme() {
    iTheme.checked
    ? currentTheme = 'dark'
    : currentTheme = 'light'

    html.setAttribute("data-theme", currentTheme)
    changeIconsSet(currentTheme)
}

// =================================================== ÍCONES
// Preset
function recreateIconSet(name){
    let pathHtml = `assets/emojis/${name}/${name}`
    let set = {
        cellphone: `${pathHtml}-cellphone.png`,
        smile: `${pathHtml}-smile.png`,
        thinking: `${pathHtml}-thinking.png`,
        checked: `${pathHtml}-checked.png`,
    }

    return set
}
// Setando
let iconSet = {}
function changeIconsSet(t){
    let set = {}
    if(t === 'dark') {
        set = recreateIconSet('kuromi')
        set.symbol = '#'
    }
    else
    if(t === 'light') {
        set = recreateIconSet('melody')
        set.symbol = '@'
    }

    iconSet = set
    
    applyIcons()
}

// Aplicando
function applyIcons(){
    // Simbolo do Título # / @
    document.querySelectorAll('.titleSymbol').forEach(e => {
        e.innerHTML = iconSet.symbol
    });
    // Ícone de Telefone
    document.querySelector('#iconPhone').src = iconSet.cellphone
    // Ícone da Seleção de Tema
    document.querySelector('#iconSmile').src = iconSet.smile
    // Ícone do Modal de Formulário
    document.querySelector('#iconThinking').src = iconSet.thinking
    // Ícone de Radio Selecionado
    document.querySelectorAll('.checkedIcon').forEach(e => {
        e.src = iconSet.checked
    });

}
