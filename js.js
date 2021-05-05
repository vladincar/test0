const buttons = document.querySelectorAll('.aCursor');
const cursor = document.getElementById('cursorImg');

if(!matchMedia('(hover: none)').matches){
buttons.forEach(x => {
    x.addEventListener('mousemove', (e) => {
        cursor.style.display = "block"
        cursor.style.top = `${e.clientY - 62}px`
        cursor.style.left = `${e.clientX - 62}px`
    })
    x.addEventListener('mouseleave', () => cursor.style.display = "none")
})
}
