const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        // Удаляю класс 'active' у тех панелей в которых он установлен
        removeActiveClasses()
        // Добавляю класс 'active' к панели на которой произошло событие 'click'
        panel.classList.add('active')
    })
})

// Удаляет класс 'active'
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}