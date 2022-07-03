// TOAST "COPIED" POPUP

function copy(that) {
    var inp = document.createElement("input");
    document.body.appendChild(inp);
    inp.value = that.textContent;
    inp.select();
    document.execCommand("copy", false);
    inp.remove();

    toast();
}

function toast() {
    var x = document.getElementById("toast");

    x.className = "show";

    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 500);
}
