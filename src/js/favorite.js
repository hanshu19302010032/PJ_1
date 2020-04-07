var time = 0;

function delete_() {
    var x = "block" + time;
    $(x).style.display = "none";
    alert("delete successfully!");
    if (time === 3) {
        $("page").style.display = "none";
    }
    time++;
}

function $(id) {
    return document.getElementById(id);
}

