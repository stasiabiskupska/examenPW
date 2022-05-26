let app = document.getElementById('app');

function addListElement(index) {
    let li = document.createElement('li');
        li.innerHTML = Element Nr ${index};
        li.style = index % 2 != 0 ? 'background-color: green' : 'background-color: violet';
    app.appendChild(li);
}

window.onload = function() {
    for (let i = 0; i < 10; i++) {
        console.log(i)
        setTimeout(addListElement(i), 1000);
   }
}