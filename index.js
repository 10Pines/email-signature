const generator = document.querySelector('.generator');
const fullName = generator.querySelector('input[name=fullName]');
const title = generator.querySelector('input[name=title]');
const generateButton = generator.querySelector('button');

const container = document.querySelector('.container');
const signature = document.querySelector('.signature');
const fullNameField = container.querySelector('section h1');
const titleField = container.querySelector('section h2');

const copied = document.querySelector('.copied');

generateButton.addEventListener('click', () => {
    generator.classList.add('hidden');    
    container.classList.remove('hidden');
    fullNameField.textContent = fullName.value;
    titleField.textContent = title.value;

    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(signature);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("Copy");
    copied.classList.remove('hidden');
})