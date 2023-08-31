const inputBoxes = document.querySelectorAll('.input-box');
const listContainers = document.querySelectorAll('.list-container');
const addBtns = document.querySelectorAll('.addBtn');

function addTask(listContainer, inputBox) {
    if (inputBox.value === '') {
        alert("Du skal skrive noget");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

addBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        addTask(listContainers[index], inputBoxes[index]);
    });
});

listContainers.forEach((listContainer, index) => {
    listContainer.addEventListener('click', (e) => {
        if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    });
});

function saveData() {
    listContainers.forEach((listContainer, index) => {
        localStorage.setItem(`data-${index}`, listContainer.innerHTML);
    });
}

function showData() {
    listContainers.forEach((listContainer, index) => {
        listContainer.innerHTML = localStorage.getItem(`data-${index}`);
    });
}

showData();
