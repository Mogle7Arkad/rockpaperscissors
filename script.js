const selectionButtons  = document.querySelectorAll('[data-selection]');

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selectionButton
        makeSelection(selectionName)
    })
})

function makeSelection(selection){
    console.log(selection)
}