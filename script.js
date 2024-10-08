const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!\"$%&/()=?@~`\\.\';:+=^*_-0123456789';
let output = document.getElementById("output");

function randomValue(value) {
    return Math.floor(Math.random() * value);
}

function genPassword() {
    let length = document.getElementById('length').value;
    document.getElementById("length-val").textContent = length;
    let str = '';

    for (let i = 0; i < length; i++) {
        let random = randomValue(characters.length);
        str += characters.charAt(random);
    }
    output.value = str;
}

function copyClipboard() {
    navigator.clipboard.writeText(output.value).then(() => {
        alert("Password copied!");
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

genPassword();