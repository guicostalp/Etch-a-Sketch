

function resetPad() {
//reset the pad
//clean old pad
    const size = prompt ("What Size?");

    const clean = document.querySelector('#container');
    clean.innerHTML = "";


    validateSize(size);   
  

}

function populatePad(size) {
    const padSize = size * size;

    for (let i = 0; i < padSize; i++) {
        createDiv();
    }

    const container = document.querySelector('#container');
    container.classList.add ('containerOn'); 
    const containerId = document.getElementById("container")
    containerId.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    containerId.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    

}





function validateSize(size) {
//validate size with button on interface
    if (size >= 2 && size <= 100 && size % 2 == 0) {
        populatePad(size);

    } else {

        alert("Invalid.Choose an even number between 2 and 100.")
        resetPad();
    }

}




function createDiv(){
    const container = document.querySelector('#container');
    container.style.backgroundColor = 'blue';
    
    
    const content = document.createElement('div');
    content.addEventListener('mouseover', () => {
        content.style.backgroundColor = "black";
    });

    content.classList.add('content');

  
    container.appendChild(content);
}










