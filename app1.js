var inputData = document.getElementById("input");

function targetInput(x) {
    inputData.value += x;
}

function calculate() {
    const data = inputData.value;
    try {
        let result = new Function('return ' + data)();
        if (result === undefined || isNaN(result)) {
            throw new Error();
        }
        
        inputData.value = result;
        inputData.style.color = 'black'; 
    } catch {
        inputData.value = "Enter the Proper Expression";
        inputData.style.color = 'red';
        setTimeout(() => {
            inputData.value = '';
            inputData.style.color = 'black'; 
        }, 1000);
    }
}

function allclear() {
    inputData.value = '';
    inputData.style.color = 'black';
}

function remove() {
    inputData.value = inputData.value.slice(0, -1);
}
