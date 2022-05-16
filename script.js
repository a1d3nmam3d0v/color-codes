function copy(that) {
    var inp = document.createElement("input");
    document.body.appendChild(inp);
    inp.value = that.textContent;
    inp.select();
    document.execCommand("copy", false);
    inp.remove();
    // alert("copied");
}

function toast() {
    var x = document.getElementById("snackbar");

    x.className = "show";

    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 1000);
}

// function rgbToast() {
//     var x = document.getElementById('snackbarr')

//     x.className = 'show'

//     setTimeout(function () {
//         x.className = x.className.replace('show', '')
//     }, 1000)
// }

// var sb = document.getElementById("snackbar");

// function showMessage(msg) {

//     var sb = document.getElementById('snackbar')

//     sb.innerHTML = msg;

//     sb.classList.add('show');

//     setTimeout(function () { sb.classList.remove('show') }, 3000);

// }

// const hexCopied = document.querySelector('HEX-code');
// const gbaCopied = document.querySelector('RGB-code');

// let toastContainer;

// function initToast() {
//     document.body.insertAdjacentHTML('afterbegin',
//         '<div class="toast-container"></div>');
// }
// initToast();
