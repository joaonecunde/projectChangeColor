const colors = ['Red', 'Black', 'Blue', 'Yellow', 'Purple', 'Green'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// No click iremos executar isso:
btn.addEventListener('click', function () {
    const randomColor = getRandomColor();
    document.body.style.background = colors[randomColor]; // Aplicando a cor ao background
    color.textContent = colors[randomColor];
});

// Gerar números randomicos
function getRandomColor () {
    return Math.floor(Math.random() * colors.length);
};